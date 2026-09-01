import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { destroySessionToken, SESSION_COOKIE } from "@/lib/auth";
import { hashSessionToken } from "@/lib/password";

export const dynamic = "force-dynamic";

export async function POST() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (token) {
    await destroySessionToken(hashSessionToken(token));
    cookieStore.delete(SESSION_COOKIE);
  }
  return NextResponse.json({ ok: true });
}