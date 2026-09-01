import { NextResponse } from "next/server";
import { getPool, initDb } from "@/lib/db";
import { getSessionAdmin } from "@/lib/auth";
import { getSettings } from "@/lib/settings";

export const dynamic = "force-dynamic";

interface OrderItemInput {
  slug: string;
  qty: number;
}

export async function GET() {
  try {
    await initDb();
    const admin = await getSessionAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const pool = getPool();
    const result = await pool.query(
      `SELECT o.id, o.reference, o.customer_name, o.email, o.phone, o.address, o.city, o.country,
              o.notes, o.delivery_method, o.status, o.subtotal, o.total, o.created_at,
              COALESCE(SUM(oi.qty), 0)::int AS item_count
       FROM orders o
       LEFT JOIN order_items oi ON oi.order_id = o.id
       GROUP BY o.id
       ORDER BY o.created_at DESC`
    );

    return NextResponse.json({ orders: result.rows });
  } catch (err) {
    console.error("list orders error", err);
    return NextResponse.json({ error: "Failed to load orders." }, { status: 500 });
  }
}

export async function POST(req: Request) {
  let client;
  try {
    await initDb();
    const body = await req.json();

    const name = typeof body.customerName === "string" ? body.customerName.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const items: OrderItemInput[] = Array.isArray(body.items) ? body.items : [];
    const method = body.deliveryMethod === "whatsapp" ? "whatsapp" : "email";

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }
    if (items.length === 0) {
      return NextResponse.json({ error: "Your cart is empty." }, { status: 400 });
    }

    const pool = getPool();

    const settings = await getSettings();
    if (method === "whatsapp" && !settings.whatsapp) {
      return NextResponse.json(
        { error: "WhatsApp checkout is not available yet." },
        { status: 400 }
      );
    }

    const slugs = items.map((i) => i.slug);
    const productResult = await pool.query(
      `SELECT slug, name, price FROM products WHERE slug = ANY($1)`,
      [slugs]
    );
    const productMap = new Map<string, { name: string; price: number }>();
    for (const row of productResult.rows) {
      productMap.set(String(row.slug), {
        name: String(row.name),
        price: Number(row.price),
      });
    }

    const lineItems = items
      .map((i) => {
        const p = productMap.get(i.slug);
        const qty = Math.max(1, Math.floor(Number(i.qty) || 1));
        return p ? { slug: i.slug, name: p.name, price: p.price, qty } : null;
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);

    if (lineItems.length === 0) {
      return NextResponse.json({ error: "No valid products in cart." }, { status: 400 });
    }

    const subtotal = lineItems.reduce((sum, it) => sum + it.price * it.qty, 0);
    const reference = `SSV-${Date.now().toString(36).toUpperCase()}${Math.random()
      .toString(36)
      .slice(2, 6)
      .toUpperCase()}`;

    client = await pool.connect();
    try {
      await client.query("BEGIN");
      const orderResult = await client.query(
        `INSERT INTO orders (reference, customer_name, email, phone, address, city, country, notes, delivery_method, subtotal, total)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
         RETURNING id, reference`,
        [
          reference,
          name,
          email,
          typeof body.phone === "string" ? body.phone : "",
          typeof body.address === "string" ? body.address : "",
          typeof body.city === "string" ? body.city : "",
          typeof body.country === "string" ? body.country : "",
          typeof body.notes === "string" ? body.notes : "",
          method,
          subtotal.toFixed(2),
          subtotal.toFixed(2),
        ]
      );
      const orderId = orderResult.rows[0].id;

      for (const it of lineItems) {
        await client.query(
          `INSERT INTO order_items (order_id, product_slug, product_name, price, qty)
           VALUES ($1,$2,$3,$4,$5)`,
          [orderId, it.slug, it.name, it.price.toFixed(2), it.qty]
        );
      }
      await client.query("COMMIT");
    } catch (err) {
      if (client) await client.query("ROLLBACK");
      throw err;
    }

    const contactBlock =
      `*Customer:* ${name} (${email})%0A` +
      (body.phone ? `*Phone:* ${body.phone}%0A` : "") +
      (body.address
        ? `*Address:* ${body.address}, ${body.city || ""} ${body.country || ""}%0A`
        : "") +
      (body.notes ? `*Notes:* ${body.notes}%0A` : "");

    const itemsBlock =
      lineItems.map((it) => `• ${it.qty} x ${it.name} — $${(it.price * it.qty).toFixed(2)}`).join("%0A");

    const message =
      `*New Order ${reference}*%0A%0A` +
      contactBlock +
      `%0A` +
      itemsBlock +
      `%0A%0A*Total: $${subtotal.toFixed(2)}*`;

    let deliveryUrl: string;
    if (method === "whatsapp") {
      const text = message.replace(/%0A/g, "\n");
      deliveryUrl = `https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(text)}`;
    } else {
      const subject = encodeURIComponent(`New order ${reference} from ${name}`);
      const bodyText = encodeURIComponent(
        message.replace(/%0A/g, "\n").replace(/\*/g, "")
      );
      deliveryUrl = `mailto:${settings.contactEmail}?subject=${subject}&body=${bodyText}`;
    }

    return NextResponse.json({
      reference,
      subtotal: subtotal.toFixed(2),
      deliveryMethod: method,
      deliveryUrl,
    });
  } catch (err) {
    console.error("create order error", err);
    return NextResponse.json({ error: "Failed to place order." }, { status: 500 });
  } finally {
    if (client) client.release();
  }
}