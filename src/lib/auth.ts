import { cookies } from "next/headers";
import { getPool } from "./db";
import { env } from "./env";
import { SESSION_COOKIE } from "./constants";
import {
  generateSessionToken,
  hashSessionToken,
  verifyPassword,
} from "./password";

export { SESSION_COOKIE };

export interface Admin {
  id: string;
  email: string;
}

export async function setSessionCookie(token: string) {
  const maxAge = 60 * 60 * 24 * 7; // 7 days
  const secure = env.isProduction;
  const cookieStore = await cookies();
  return cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
    maxAge,
  });
}

export async function createSession(email: string): Promise<string> {
  const token = generateSessionToken();
  const hash = hashSessionToken(token);
  const pool = getPool();
  await pool.query(`UPDATE admins SET session_token = $1 WHERE email = $2`, [
    hash,
    email,
  ]);
  return token;
}

export async function destroySessionToken(tokenHash: string) {
  const pool = getPool();
  await pool.query(`UPDATE admins SET session_token = NULL WHERE session_token = $1`, [
    tokenHash,
  ]);
}

export async function getSessionAdmin(): Promise<Admin | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const hash = hashSessionToken(token);
  const pool = getPool();
  const result = await pool.query(
    `SELECT id, email FROM admins WHERE session_token = $1`,
    [hash]
  );
  const row = result.rows[0];
  if (!row) return null;
  return { id: String(row.id), email: String(row.email) };
}

export async function loginAdmin(email: string, password: string) {
  const pool = getPool();
  const result = await pool.query(
    `SELECT id, email, password_hash FROM admins WHERE email = $1`,
    [email.toLowerCase().trim()]
  );
  const row = result.rows[0];
  if (!row) return null;
  if (!verifyPassword(password, String(row.password_hash))) return null;
  return { id: String(row.id), email: String(row.email) };
}