import { Pool, type PoolClient } from "pg";
import { env } from "./env";
import { products as seedProducts, categories as seedCategories } from "./products";
import { hashPassword } from "./password";

declare global {
  // eslint-disable-next-line no-var
  var __ssvPool: Pool | undefined;
}

const MAX_CONNECTIONS = 5;

function sslConfig() {
  if (env.databaseCa) {
    return { ca: env.databaseCa, rejectUnauthorized: false };
  }
  return undefined;
}

function createPool(): Pool {
  return new Pool({
    connectionString: env.databaseUrl,
    ssl: sslConfig(),
    max: MAX_CONNECTIONS,
    connectionTimeoutMillis: 10_000,
    idleTimeoutMillis: 30_000,
  });
}

export function getPool(): Pool {
  if (!globalThis.__ssvPool) {
    globalThis.__ssvPool = createPool();
  }
  return globalThis.__ssvPool;
}

const SCHEMA_SQL = [
  `CREATE TABLE IF NOT EXISTS ssv_categories (
    slug TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT DEFAULT '',
    created_at TIMESTAMPTZ DEFAULT now()
  )`,
  `CREATE TABLE IF NOT EXISTS ssv_products (
    slug TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL REFERENCES ssv_categories(slug) ON DELETE CASCADE,
    price NUMERIC(10,2) NOT NULL,
    image TEXT DEFAULT '',
    description TEXT DEFAULT '',
    details JSONB DEFAULT '[]',
    featured BOOLEAN DEFAULT false,
    stock INTEGER DEFAULT 0,
    rating NUMERIC(2,1) DEFAULT 0,
    reviews INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
  )`,
  `CREATE TABLE IF NOT EXISTS ssv_admins (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    session_token TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
  )`,
  `ALTER TABLE ssv_admins ADD COLUMN IF NOT EXISTS username TEXT`,
  `CREATE UNIQUE INDEX IF NOT EXISTS ssv_admins_username_key ON ssv_admins(username)`,
  `CREATE TABLE IF NOT EXISTS ssv_orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reference TEXT UNIQUE NOT NULL,
    customer_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT DEFAULT '',
    address TEXT DEFAULT '',
    city TEXT DEFAULT '',
    country TEXT DEFAULT '',
    notes TEXT DEFAULT '',
    delivery_method TEXT NOT NULL,
    status TEXT DEFAULT 'pending',
    subtotal NUMERIC(10,2) DEFAULT 0,
    total NUMERIC(10,2) DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now()
  )`,
  `CREATE TABLE IF NOT EXISTS ssv_order_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID NOT NULL REFERENCES ssv_orders(id) ON DELETE CASCADE,
    product_slug TEXT NOT NULL,
    product_name TEXT NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    qty INTEGER NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS ssv_settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT now()
  )`,
  `CREATE TABLE IF NOT EXISTS ssv_reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_slug TEXT NOT NULL REFERENCES ssv_products(slug) ON DELETE CASCADE,
    customer_name TEXT NOT NULL,
    location TEXT DEFAULT '',
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    verified BOOLEAN DEFAULT false,
    helpful INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now()
  )`,
];

let initPromise: Promise<void> | null = null;

export async function initDb(): Promise<void> {
  if (!env.databaseUrl) return;
  if (!initPromise) {
    initPromise = (async () => {
      const client = await getPool().connect();
      try {
        for (const sql of SCHEMA_SQL) {
          await client.query(sql);
        }
        await seedAdmin(client);
        await seedCategoriesAndProducts(client);
        await seedSettings(client);
      } finally {
        client.release();
      }
    })();
  }
  return initPromise;
}

async function seedAdmin(client: PoolClient) {
  await client.query(
    `INSERT INTO ssv_admins (email, username, password_hash)
     VALUES ($1, 'admin', $2)
     ON CONFLICT (username) DO NOTHING`,
    [env.adminEmail, hashPassword(env.adminInitialPassword)]
  );
  await client.query(
    `UPDATE ssv_admins SET username = 'admin' WHERE username IS NULL AND email = $1`,
    [env.adminEmail]
  );
}

async function seedSettings(client: PoolClient) {
  const defaults = [
    ["whatsapp", env.adminWhatsApp],
    ["contact_email", env.contactEmail],
  ] as const;
  for (const [key, value] of defaults) {
    if (!value) continue;
    await client.query(
      `INSERT INTO ssv_settings (key, value) VALUES ($1, $2)
       ON CONFLICT (key) DO NOTHING`,
      [key, value]
    );
  }
}

async function seedCategoriesAndProducts(client: PoolClient) {
  for (const c of seedCategories) {
    await client.query(
      `INSERT INTO ssv_categories (slug, name, description)
       VALUES ($1, $2, $3)
       ON CONFLICT (slug) DO NOTHING`,
      [c.slug, c.name, c.description]
    );
  }
  for (const p of seedProducts) {
    await client.query(
      `INSERT INTO ssv_products (slug, name, category, price, image, description, details, featured, stock, rating, reviews)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
       ON CONFLICT (slug) DO UPDATE SET
         image = CASE WHEN ssv_products.image LIKE '/images/%' THEN EXCLUDED.image ELSE ssv_products.image END`,
      [
        p.slug,
        p.name,
        p.category,
        p.price,
        p.image,
        p.description,
        JSON.stringify(p.details),
        p.featured ?? false,
        p.stock,
        p.rating,
        p.reviews,
      ]
    );
  }
}