import { NextResponse } from "next/server";
import { getPool, initDb } from "@/lib/db";
import { getSpecies } from "@/lib/store";
import { getSessionAdmin } from "@/lib/auth";
import { slugify } from "@/lib/slugify";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const category = url.searchParams.get("category");
  const species = await getSpecies(category || undefined);
  return NextResponse.json({ species });
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
    const category = typeof body.category === "string" ? body.category.trim() : "";
    if (!name || !category) {
      return NextResponse.json(
        { error: "Species name and category are required." },
        { status: 400 }
      );
    }

    const slug = slugify(body.slug && typeof body.slug === "string" ? body.slug : name);
    if (!slug) {
      return NextResponse.json({ error: "Invalid species name." }, { status: 400 });
    }

    const pool = getPool();
    const existing = await pool.query(
      `SELECT id FROM ssv_species WHERE slug = $1 AND category = $2`,
      [slug, category]
    );
    if (existing.rows.length > 0) {
      return NextResponse.json(
        { error: "That species already exists in this category." },
        { status: 409 }
      );
    }

    await pool.query(
      `INSERT INTO ssv_species (slug, category, name) VALUES ($1, $2, $3)`,
      [slug, category, name]
    );

    return NextResponse.json({ slug }, { status: 201 });
  } catch (err) {
    console.error("create species error", err);
    return NextResponse.json({ error: "Failed to create species." }, { status: 500 });
  }
}