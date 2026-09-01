export const env = {
  databaseUrl: process.env.DATABASE_URL || "",
  databaseCa: process.env.DATABASE_CA || "",
  contactEmail: process.env.CONTACT_EMAIL || "hello@saguaroseedvault.com",
  adminWhatsApp: process.env.ADMIN_WHATSAPP || "",
  adminEmail: process.env.ADMIN_EMAIL || "hello@saguaroseedvault.com",
  adminInitialPassword: process.env.ADMIN_INITIAL_PASSWORD || "ChangeMe123!",
  isProduction: process.env.NODE_ENV === "production",
};