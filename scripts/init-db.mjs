import { readFileSync } from "fs";
import { scryptSync, randomBytes } from "crypto";
import pg from "pg";

const envFile = readFileSync(".env.local", "utf8");
const parse = (key) => {
  const line = envFile.split("\n").find((l) => l.trim().startsWith(key + "="));
  return line ? line.slice(key.length + 1).trim() : undefined;
};

const dbUrl = process.env.DATABASE_URL || parse("DATABASE_URL");
const adminEmail =
  process.env.ADMIN_EMAIL || parse("ADMIN_EMAIL") || "hello@saguaroseedvault.com";
const password =
  process.env.ADMIN_INITIAL_PASSWORD ||
  parse("ADMIN_INITIAL_PASSWORD") ||
  "ChangeMe123!";

if (!dbUrl) {
  console.error("DATABASE_URL not found in .env.local");
  process.exit(1);
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

const salt = randomBytes(16).toString("hex");
const hash = scryptSync(password, salt, 64).toString("hex");
const stored = `${salt}:${hash}`;

const pool = new pg.Pool({ connectionString: dbUrl });

try {
  const client = await pool.connect();
  try {
    for (const sql of SCHEMA_SQL) {
      await client.query(sql);
    }

    await client.query(
      `INSERT INTO ssv_admins (email, username, password_hash)
       VALUES ($1, 'admin', $2)
       ON CONFLICT (username) DO NOTHING`,
      [adminEmail, stored]
    );
    await client.query(
      `UPDATE ssv_admins SET username = 'admin' WHERE username IS NULL AND email = $1`,
      [adminEmail]
    );
    const res = await client.query(
      `UPDATE ssv_admins SET password_hash = $1, session_token = NULL WHERE username = 'admin'`,
      [stored]
    );
    console.log(
      `Database initialized. Admin "admin" password set to the ADMIN_INITIAL_PASSWORD value.`
    );
  } finally {
    client.release();
  }
} catch (err) {
  console.error("Init failed:", err.message);
  process.exit(1);
} finally {
  await pool.end();
}