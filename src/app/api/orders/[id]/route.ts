import { NextResponse } from "next/server";
import { getPool, initDb } from "@/lib/db";
import { getSessionAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

const VALID_STATUS = ["pending", "confirmed", "shipped", "delivered", "cancelled"];

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await initDb();
    const admin = await getSessionAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const { id } = await params;
    const pool = getPool();

    const orderResult = await pool.query(`SELECT * FROM orders WHERE id = $1`, [id]);
    if (orderResult.rows.length === 0) {
      return NextResponse.json({ error: "Order not found." }, { status: 404 });
    }

    const itemsResult = await pool.query(
      `SELECT product_slug, product_name, price, qty FROM order_items WHERE order_id = $1`,
      [id]
    );

    return NextResponse.json({
      order: { ...orderResult.rows[0], items: itemsResult.rows },
    });
  } catch (err) {
    console.error("get order error", err);
    return NextResponse.json({ error: "Failed to load order." }, { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await initDb();
    const admin = await getSessionAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const { id } = await params;
    const body = await req.json();
    const status = typeof body.status === "string" ? body.status : "";

    if (!VALID_STATUS.includes(status)) {
      return NextResponse.json({ error: "Invalid status." }, { status: 400 });
    }

    const pool = getPool();
    await pool.query(`UPDATE orders SET status = $1 WHERE id = $2`, [status, id]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("update order status error", err);
    return NextResponse.json({ error: "Failed to update order." }, { status: 500 });
  }
}