import { NextResponse } from "next/server";
import { getSessionAdmin } from "@/lib/auth";
import { initDb } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await initDb();
    const admin = await getSessionAdmin();
    if (!admin) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }
    return NextResponse.json({ authenticated: true, email: admin.email });
  } catch (err) {
    console.error("session error", err);
    return NextResponse.json({ authenticated: false }, { status: 500 });
  }
}