import { NextResponse } from "next/server";
import { getPool, initDb } from "@/lib/db";
import { getSessionAdmin } from "@/lib/auth";
import {
  getSettings,
  sanitizeWhatsApp,
  isValidEmail,
  settingsFallback,
} from "@/lib/settings";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await initDb();
    const settings = await getSettings();
    const admin = await getSessionAdmin();
    return NextResponse.json({ settings, adminEmail: admin?.email ?? null });
  } catch (err) {
    console.error("get settings error", err);
    return NextResponse.json({ error: "Failed to load settings." }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    await initDb();
    const admin = await getSessionAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const body = await req.json();

    let whatsapp = settingsFallback().whatsapp;
    let contactEmail = settingsFallback().contactEmail;
    let adminEmail = admin.email;

    if (typeof body.whatsapp === "string") {
      whatsapp = sanitizeWhatsApp(body.whatsapp);
    }
    if (typeof body.contactEmail === "string") {
      contactEmail = body.contactEmail.trim();
    }
    if (typeof body.adminEmail === "string") {
      adminEmail = body.adminEmail.trim().toLowerCase();
    }

    if (whatsapp && !/^\d{7,15}$/.test(whatsapp)) {
      return NextResponse.json(
        { error: "WhatsApp number must be 7-15 digits." },
        { status: 400 }
      );
    }
    if (!isValidEmail(contactEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid contact email." },
        { status: 400 }
      );
    }
    if (!isValidEmail(adminEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid admin login email." },
        { status: 400 }
      );
    }

    const pool = getPool();

    if (adminEmail !== admin.email) {
      const dup = await pool.query(
        `SELECT id FROM admins WHERE email = $1 AND id <> $2`,
        [adminEmail, admin.id]
      );
      if (dup.rows.length > 0) {
        return NextResponse.json(
          { error: "That admin email is already in use." },
          { status: 400 }
        );
      }
      await pool.query(`UPDATE admins SET email = $1 WHERE id = $2`, [
        adminEmail,
        admin.id,
      ]);
    }

    await pool.query(
      `INSERT INTO settings (key, value) VALUES ('whatsapp', $1), ('contact_email', $2)
       ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = now()`,
      [whatsapp, contactEmail]
    );

    return NextResponse.json({
      settings: { whatsapp, contactEmail },
      adminEmail,
    });
  } catch (err) {
    console.error("update settings error", err);
    return NextResponse.json({ error: "Failed to save settings." }, { status: 500 });
  }
}