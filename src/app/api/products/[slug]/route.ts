import { NextResponse } from "next/server";
import { getPool, initDb } from "@/lib/db";
import { getSessionAdmin } from "@/lib/auth";
import { slugify } from "@/lib/slugify";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ slug: string }> };

export async function PUT(req: Request, { params }: Params) {
  try {
    await initDb();
    const admin = await getSessionAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const { slug } = await params;
    const body = await req.json();

    const name = typeof body.name === "string" && body.name.trim() ? body.name.trim() : null;
    const price = body.price !== undefined ? Number(body.price) : null;
    if (!name || price === null || !isFinite(price) || price <= 0) {
      return NextResponse.json(
        { error: "Name and a valid price are required." },
        { status: 400 }
      );
    }

    const details = Array.isArray(body.details)
      ? body.details.filter((d: unknown) => typeof d === "string")
      : [];

    const pool = getPool();
    await pool.query(
      `UPDATE ssv_products SET
         name = $1,
         category = $2,
         price = $3,
         image = $4,
         description = $5,
         details = $6,
         featured = $7,
         stock = $8,
         rating = $9,
         reviews = $10,
         updated_at = now()
       WHERE slug = $11`,
      [
        name,
        typeof body.category === "string" ? body.category : "cacti",
        price,
        typeof body.image === "string" ? body.image : "",
        typeof body.description === "string" ? body.description : "",
        JSON.stringify(details),
        Boolean(body.featured),
        Number(body.stock || 0),
        Number(body.rating || 0),
        Number(body.reviews || 0),
        slug,
      ]
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("update product error", err);
    return NextResponse.json({ error: "Failed to update product." }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: Params) {
  try {
    await initDb();
    const admin = await getSessionAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const { slug } = await params;
    const pool = getPool();
    await pool.query(`DELETE FROM ssv_products WHERE slug = $1`, [slug]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("delete product error", err);
    return NextResponse.json({ error: "Failed to delete product." }, { status: 500 });
  }
}