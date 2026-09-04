import { readFileSync } from "fs";
import { scryptSync, randomBytes } from "crypto";
import pg from "pg";

const envFile = readFileSync(".env.local", "utf8");
const parse = (key) => {
  const line = envFile.split("\n").find((l) => l.trim().startsWith(key + "="));
  return line ? line.slice(key.length + 1).trim() : undefined;
};

const dbUrl = process.env.DATABASE_URL || parse("DATABASE_URL");
const username = process.env.ADMIN_USERNAME || "admin";
const password =
  process.env.ADMIN_INITIAL_PASSWORD ||
  parse("ADMIN_INITIAL_PASSWORD") ||
  "ChangeMe123!";

if (!dbUrl) {
  console.error("DATABASE_URL not found in .env.local");
  process.exit(1);
}

const salt = randomBytes(16).toString("hex");
const hash = scryptSync(password, salt, 64).toString("hex");
const stored = `${salt}:${hash}`;

const pool = new pg.Pool({ connectionString: dbUrl });

try {
  const res = await pool.query(
    `UPDATE ssv_admins SET password_hash = $1, session_token = NULL WHERE username = $2`,
    [stored, username]
  );
  if (res.rowCount === 0) {
    console.error(`Admin "${username}" not found.`);
    process.exit(1);
  }
  console.log(`Admin password for "${username}" reset successfully.`);
} catch (err) {
  console.error("Reset failed:", err.message);
  process.exit(1);
} finally {
  await pool.end();
}