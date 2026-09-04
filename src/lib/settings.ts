import { getPool, initDb } from "./db";
import { env } from "./env";

export interface SiteSettings {
  whatsapp: string;
  contactEmail: string;
}

export function sanitizeWhatsApp(value: string): string {
  return (value || "").replace(/[^\d]/g, "");
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function settingsFallback(): SiteSettings {
  return {
    whatsapp: sanitizeWhatsApp(env.adminWhatsApp),
    contactEmail: env.contactEmail,
  };
}

export async function getSettings(): Promise<SiteSettings> {
  if (!env.databaseUrl) return settingsFallback();
  try {
    await initDb();
    const result = await getPool().query(
      `SELECT key, value FROM ssv_settings WHERE key IN ('whatsapp', 'contact_email')`
    );
    const map = new Map<string, string>();
    for (const row of result.rows) {
      map.set(String(row.key), String(row.value));
    }
    const fallback = settingsFallback();
    return {
      whatsapp: map.get("whatsapp") || fallback.whatsapp,
      contactEmail: map.get("contact_email") || fallback.contactEmail,
    };
  } catch (err) {
    console.error("getSettings error", err);
    return settingsFallback();
  }
}