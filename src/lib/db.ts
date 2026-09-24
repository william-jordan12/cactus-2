import { Pool, type PoolClient } from "pg";
import { env } from "./env";
import {
  products as seedProducts,
  categories as seedCategories,
  speciesGroups as seedSpeciesGroups,
} from "./products";
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
    images TEXT[] DEFAULT '{}',
    description TEXT DEFAULT '',
    details JSONB DEFAULT '[]',
    featured BOOLEAN DEFAULT false,
    stock INTEGER DEFAULT 0,
    rating NUMERIC(2,1) DEFAULT 0,
    reviews INTEGER DEFAULT 0,
    is_synced BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
  )`,
  `ALTER TABLE ssv_products ADD COLUMN IF NOT EXISTS images TEXT[] DEFAULT '{}'`,
  `ALTER TABLE ssv_products ADD COLUMN IF NOT EXISTS is_synced BOOLEAN DEFAULT true`,
  `ALTER TABLE ssv_products ADD COLUMN IF NOT EXISTS species TEXT DEFAULT ''`,
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
  `CREATE TABLE IF NOT EXISTS ssv_species (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT NOT NULL,
    category TEXT NOT NULL REFERENCES ssv_categories(slug) ON DELETE CASCADE,
    name TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE (slug, category)
  )`,
  `CREATE TABLE IF NOT EXISTS ssv_deleted_products (
    slug TEXT PRIMARY KEY,
    deleted_at TIMESTAMPTZ DEFAULT now()
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
        await seedSpecies(client);
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
  const seedCategorySlugs = seedCategories.map((c) => c.slug);
  const deletedResult = await client.query(`SELECT slug FROM ssv_deleted_products`);
  const deletedSlugs = new Set(deletedResult.rows.map((r) => r.slug));
  const activeSeedProducts = seedProducts.filter((p) => !deletedSlugs.has(p.slug));
  const seedProductSlugs = activeSeedProducts.map((p) => p.slug);

  for (const c of seedCategories) {
    await client.query(
      `INSERT INTO ssv_categories (slug, name, description)
       VALUES ($1, $2, $3)
       ON CONFLICT (slug) DO UPDATE SET
         name = EXCLUDED.name,
         description = EXCLUDED.description`,
      [c.slug, c.name, c.description]
    );
  }
  for (const p of activeSeedProducts) {
    await client.query(
      `INSERT INTO ssv_products (slug, name, category, price, image, description, details, featured, stock, rating, reviews, is_synced)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, true)
       ON CONFLICT (slug) DO UPDATE SET
         image = CASE WHEN ssv_products.image LIKE '/images/%' THEN EXCLUDED.image ELSE ssv_products.image END,
         is_synced = true`,
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
  await client.query(
    `DELETE FROM ssv_products
     WHERE is_synced = true AND NOT (slug = ANY($1::text[]))
       AND NOT (slug = ANY($2::text[]))`,
    [seedProductSlugs, [...deletedSlugs]]
  );
  await client.query(
    `DELETE FROM ssv_categories
     WHERE NOT (slug = ANY($1::text[]))
       AND slug NOT IN (SELECT DISTINCT category FROM ssv_products)`,
    [seedCategorySlugs]
  );
}

async function seedSpecies(client: PoolClient) {
  const countResult = await client.query(`SELECT COUNT(*) AS n FROM ssv_species`);
  const count = Number(countResult.rows[0].n);
  if (count > 0) return;

  const rows: { slug: string; category: string; name: string }[] = [];
  (Object.entries(seedSpeciesGroups) as [string, { label: string; slugs: string[] }[]][]).forEach(
    ([category, groups]) => {
      groups.forEach((group) => {
        group.slugs.forEach((slug) => {
          rows.push({
            slug,
            category,
            name: slug
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" "),
          });
        });
      });
    }
  );
  for (const s of rows) {
    await client.query(
      `INSERT INTO ssv_species (slug, category, name)
       VALUES ($1, $2, $3)
       ON CONFLICT (slug, category) DO NOTHING`,
      [s.slug, s.category, s.name]
    );
  }
}