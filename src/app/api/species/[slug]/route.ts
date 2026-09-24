import { NextResponse } from "next/server";
import { getPool, initDb } from "@/lib/db";
import { getSessionAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ slug: string }> };

export async function DELETE(req: Request, { params }: Params) {
  try {
    await initDb();
    const admin = await getSessionAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const { slug } = await params;
    const url = new URL(req.url);
    const category = url.searchParams.get("category");

    const pool = getPool();
    const result = category
      ? await pool.query(
          `DELETE FROM ssv_species WHERE slug = $1 AND category = $2`,
          [slug, category]
        )
      : await pool.query(`DELETE FROM ssv_species WHERE slug = $1`, [slug]);

    if (result.rowCount === 0) {
      return NextResponse.json({ error: "Species not found." }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("delete species error", err);
    return NextResponse.json({ error: "Failed to delete species." }, { status: 500 });
  }
}