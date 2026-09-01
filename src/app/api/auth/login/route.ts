import { NextResponse } from "next/server";
import { initDb } from "@/lib/db";
import { createSession, getSessionAdmin, loginAdmin, setSessionCookie } from "@/lib/auth";
import { getPool } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    await initDb();
    const body = await req.json();
    const email = typeof body.email === "string" ? body.email : "";
    const password = typeof body.password === "string" ? body.password : "";

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    const admin = await loginAdmin(email, password);
    if (!admin) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    const token = await createSession(admin.email);
    await setSessionCookie(token);

    return NextResponse.json({ ok: true, email: admin.email });
  } catch (err) {
    console.error("login error", err);
    return NextResponse.json({ error: "Failed to log in." }, { status: 500 });
  }
}