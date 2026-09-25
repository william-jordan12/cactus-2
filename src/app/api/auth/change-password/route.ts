import { NextResponse } from "next/server";
import { getPool, initDb } from "@/lib/db";
import {
  getSessionAdmin,
  createSession,
  setSessionCookie,
  loginAdmin,
} from "@/lib/auth";
import { hashPassword, verifyPassword } from "@/lib/password";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    await initDb();
    const body = await req.json();
    const current = typeof body.currentPassword === "string" ? body.currentPassword : "";
    const next = typeof body.newPassword === "string" ? body.newPassword : "";

    if (!current || next.length < 8) {
      return NextResponse.json(
        { error: "New password must be at least 8 characters." },
        { status: 400 }
      );
    }

    // Accept a valid session, or fall back to verifying the current
    // admin password directly if the session is missing/stale. This keeps
    // password changes working even when the stored session was rotated.
    let admin = await getSessionAdmin();
    if (!admin) {
      admin = await loginAdmin("admin", current);
      if (!admin) {
        return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
      }
    }

    const pool = getPool();
    const result = await pool.query(
      `SELECT password_hash FROM ssv_admins WHERE id = $1`,
      [admin.id]
    );
    const row = result.rows[0];
    if (!row || !verifyPassword(current, String(row.password_hash))) {
      return NextResponse.json({ error: "Current password is incorrect." }, { status: 400 });
    }

    const newHash = hashPassword(next);
    await pool.query(
      `UPDATE ssv_admins SET password_hash = $1 WHERE id = $2`,
      [newHash, admin.id]
    );

    // Rotate the session (invalidates other sessions) and stay logged in.
    const newToken = await createSession(admin.id);
    await setSessionCookie(newToken);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("change password error", err);
    return NextResponse.json({ error: "Failed to change password." }, { status: 500 });
  }
}