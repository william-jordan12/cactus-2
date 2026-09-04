import { NextResponse } from "next/server";
import { getPool, initDb } from "@/lib/db";
import { getProducts } from "@/lib/store";
import { getSessionAdmin } from "@/lib/auth";
import { slugify } from "@/lib/slugify";

export const dynamic = "force-dynamic";

export async function GET() {
  const products = await getProducts();
  return NextResponse.json({ products });
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
    const category = typeof body.category === "string" ? body.category : "";
    const price = Number(body.price);
    const stock = Number(body.stock || 0);

    if (!name || !category || !isFinite(price) || price <= 0) {
      return NextResponse.json(
        { error: "Name, category, and a valid price are required." },
        { status: 400 }
      );
    }

    const slug = slugify(typeof body.slug === "string" && body.slug ? body.slug : name);

    const pool = getPool();
    const exists = await pool.query(`SELECT slug FROM ssv_products WHERE slug = $1`, [slug]);
    if (exists.rows.length > 0) {
      return NextResponse.json(
        { error: "A product with that slug already exists." },
        { status: 409 }
      );
    }

    const details = Array.isArray(body.details)
      ? body.details.filter((d: unknown) => typeof d === "string")
      : [];

    const images = Array.isArray(body.images)
      ? body.images.filter((d: unknown) => typeof d === "string")
      : [];

    const result = await pool.query(
      `INSERT INTO ssv_products (slug, name, category, price, image, images, description, details, featured, stock, rating, reviews)
       VALUES ($1, $2, $3, $4, $5, $6::text[], $7, $8, $9, $10, $11, $12)
       RETURNING slug`,
      [
        slug,
        name,
        category,
        price,
        typeof body.image === "string" ? body.image : "",
        images,
        typeof body.description === "string" ? body.description : "",
        JSON.stringify(details),
        Boolean(body.featured),
        Number(stock),
        Number(body.rating || 0),
        Number(body.reviews || 0),
      ]
    );

    return NextResponse.json({ slug: result.rows[0].slug }, { status: 201 });
  } catch (err) {
    console.error("create product error", err);
    return NextResponse.json({ error: "Failed to create product." }, { status: 500 });
  }
}