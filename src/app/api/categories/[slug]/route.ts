import { NextResponse } from "next/server";
import { getPool, initDb } from "@/lib/db";
import { getSessionAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function DELETE(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    await initDb();
    const admin = await getSessionAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const { slug } = await params;
    const pool = getPool();

    const count = await pool.query(`SELECT COUNT(*) AS n FROM ssv_products WHERE category = $1`, [slug]);
    if (Number(count.rows[0].n) > 0) {
      return NextResponse.json(
        { error: "Could not delete a category that still has products." },
        { status: 409 }
      );
    }

    await pool.query(`DELETE FROM ssv_categories WHERE slug = $1`, [slug]);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("delete category error", err);
    return NextResponse.json({ error: "Failed to delete category." }, { status: 500 });
  }
}