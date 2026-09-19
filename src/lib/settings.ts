import { getPool, initDb } from "./db";
import { env } from "./env";

export interface SiteSettings {
  whatsapp: string;
  contactEmail: string;
  phone: string;
  address: string;  facebook: string;
  telegram: string;
  instagram: string;
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
    phone: env.footerPhone,
    address: env.footerAddress,
    facebook: "https://www.facebook.com/petssmartys/",
    telegram: "https://t.me/petssmartys",
    instagram: "https://www.instagram.com/petssmartys/"
  };
}

export async function getSettings(): Promise<SiteSettings> {
  if (!env.databaseUrl) return settingsFallback();
  try {
    await initDb();
    const result = await getPool().query(
      `SELECT key, value FROM ssv_settings WHERE key IN ('whatsapp', 'contact_email', 'phone', 'address', 'facebook', 'telegram', 'instagram')`
    );
    const map = new Map<string, string>();
    for (const row of result.rows) {
      map.set(String(row.key), String(row.value));
    }
    const fallback = settingsFallback();
    return {
      whatsapp: map.get("whatsapp") || fallback.whatsapp,
      contactEmail: map.get("contact_email") || fallback.contactEmail,
      phone: map.get("phone") || fallback.phone,
      address: map.get("address") || fallback.address,
      facebook: map.get("facebook") || fallback.facebook,
      telegram: map.get("telegram") || fallback.telegram,
      instagram: map.get("instagram") || fallback.instagram,
    };
  } catch (err) {
    console.error("getSettings error", err);
    return settingsFallback();
  }
}