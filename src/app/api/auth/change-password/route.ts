import { NextResponse } from "next/server";
import { getPool, initDb } from "@/lib/db";
import {
  getSessionAdmin,
  createSession,
  setSessionCookie,
  SESSION_COOKIE,
} from "@/lib/auth";
import { hashPassword, verifyPassword } from "@/lib/password";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    await initDb();
    const admin = await getSessionAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const body = await req.json();
    const current = typeof body.currentPassword === "string" ? body.currentPassword : "";
    const next = typeof body.newPassword === "string" ? body.newPassword : "";

    if (!current || next.length < 8) {
      return NextResponse.json(
        { error: "New password must be at least 8 characters." },
        { status: 400 }
      );
    }

    const pool = getPool();
    const result = await pool.query(
      `SELECT password_hash FROM admins WHERE id = $1`,
      [admin.id]
    );
    const row = result.rows[0];
    if (!row || !verifyPassword(current, String(row.password_hash))) {
      return NextResponse.json({ error: "Current password is incorrect." }, { status: 400 });
    }

    const newHash = hashPassword(next);
    await pool.query(
      `UPDATE admins SET password_hash = $1, session_token = NULL WHERE id = $2`,
      [newHash, admin.id]
    );

    // Rotate session so all other sessions are invalidated.
    const cookieStore = await cookies();
    const oldToken = cookieStore.get(SESSION_COOKIE)?.value;
    if (oldToken) {
      cookieStore.delete(SESSION_COOKIE);
    }
    const newToken = await createSession(admin.email);
    await setSessionCookie(newToken);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("change password error", err);
    return NextResponse.json({ error: "Failed to change password." }, { status: 500 });
  }
}