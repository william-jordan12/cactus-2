export const env = {
  databaseUrl: process.env.DATABASE_URL || "",
  databaseCa: process.env.DATABASE_CA || "",
  contactEmail: process.env.CONTACT_EMAIL || "hello@happytailspetstore.com",
  adminWhatsApp: process.env.ADMIN_WHATSAPP || "",
  adminEmail: process.env.ADMIN_EMAIL || "hello@happytailspetstore.com",
  adminInitialPassword: process.env.ADMIN_INITIAL_PASSWORD || "ChangeMe123!",
  footerPhone: process.env.FOOTER_PHONE || "+1 (555) PET-TAIL",
  footerAddress:
    process.env.FOOTER_ADDRESS || "2754 Meadow Lane, Phoenix, AZ 85001",
  isProduction: process.env.NODE_ENV === "production",
};