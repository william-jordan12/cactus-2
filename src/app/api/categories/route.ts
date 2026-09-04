import { NextResponse } from "next/server";
import { getPool, initDb } from "@/lib/db";
import { getSessionAdmin } from "@/lib/auth";
import { getCategories } from "@/lib/store";
import { slugify } from "@/lib/slugify";

export const dynamic = "force-dynamic";

export async function GET() {
  const categories = await getCategories();
  return NextResponse.json({ categories });
}

export async function POST(req: Request) {
  try {
    await initDb();
    const admin = await getSessionAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    if (!name) {
      return NextResponse.json({ error: "Category name is required." }, { status: 400 });
    }

    const slug = slugify(name);
    const pool = getPool();
    await pool.query(
      `INSERT INTO ssv_categories (slug, name, description)
       VALUES ($1, $2, $3)
       ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, description = EXCLUDED.description`,
      [slug, name, typeof body.description === "string" ? body.description : ""]
    );

    return NextResponse.json({ slug }, { status: 201 });
  } catch (err) {
    console.error("create category error", err);
    return NextResponse.json({ error: "Failed to create category." }, { status: 500 });
  }
}