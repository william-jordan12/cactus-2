import { NextResponse } from "next/server";
import { initDb } from "@/lib/db";
import { createSession, getSessionAdmin, loginAdmin, setSessionCookie } from "@/lib/auth";
import { getPool } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    await initDb();
    const body = await req.json();
    const username = typeof body.username === "string" ? body.username : "";
    const password = typeof body.password === "string" ? body.password : "";

    if (!username || !password) {
      return NextResponse.json({ error: "Username and password are required." }, { status: 400 });
    }

    const admin = await loginAdmin(username, password);
    if (!admin) {
      return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
    }

    const token = await createSession(admin.id);
    await setSessionCookie(token);

    return NextResponse.json({ ok: true, username: admin.username });
  } catch (err) {
    console.error("login error", err);
    return NextResponse.json({ error: "Failed to log in." }, { status: 500 });
  }
}