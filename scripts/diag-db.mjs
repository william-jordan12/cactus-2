import { readFileSync } from "fs";
import pg from "pg";

const envFile = readFileSync(".env.local", "utf8");
const parse = (key) => {
  const line = envFile.split("\n").find((l) => l.trim().startsWith(key + "="));
  return line ? line.slice(key.length + 1).trim() : undefined;
};
const dbUrl = process.env.DATABASE_URL || parse("DATABASE_URL");

const pool = new pg.Pool({ connectionString: dbUrl });

try {
  const tables = await pool.query(
    `SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name`
  );
  console.log("TABLES:", tables.rows.map((r) => r.table_name).join(", "));

  for (const { table_name } of tables.rows) {
    const cols = await pool.query(
      `SELECT column_name, data_type, is_nullable FROM information_schema.columns WHERE table_name = $1 ORDER BY ordinal_position`,
      [table_name]
    );
    const count = await pool.query(`SELECT count(*)::int AS c FROM "${table_name}"`);
    console.log(`\n${table_name} (rows=${count.rows[0].c})`);
    console.log(
      cols.rows
        .map((c) => `  ${c.column_name} ${c.data_type} ${c.is_nullable === "NO" ? "NOT NULL" : ""}`)
        .join("\n")
    );
  }
} catch (err) {
  console.error("Diagnostic failed:", err.message);
} finally {
  await pool.end();
}