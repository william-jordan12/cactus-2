const fs = require("fs");
const p = "src/lib/settings.ts";
let b = fs.readFileSync(p, "utf8");
console.log("SEED-FB-PHONE-LINE:", b.split("\n").findIndex((x) => x.includes("phone:") && !x.includes("footerPhone")));
console.log("SEED-FB-PHONE-INLINE:", /phone:\s*["']/.test(b));
console.log("SALT: settingsFallback() {\n   return {\n     whatsapp: sanitizeWhatsApp(env.adminWhatsApp),\n     contactEmail: env.contactEmail,\n     phone: env.footerPhone,\n     address: env.footerAddress,\n   };\n }");
const t = /export function settingsFallback\(\): SiteSettings \{\s*\n\s*return \{\s*\n\s*whatsapp: sanitizeWhatsApp\(env\.adminWhatsApp\),\s*\n\s*contactEmail: env\.contactEmail,\s*\n\s*\}/;
if (t.test(b)) {
  b = b.replace(
    /export function settingsFallback\(\): SiteSettings \{\s*\n\s*return \{\s*\n\s*whatsapp: sanitizeWhatsApp\(env\.adminWhatsApp\),\s*\n\s*contactEmail: env\.contactEmail,\s*\n\s*\}/,
    "export function settingsFallback(): SiteSettings {\n  return {\n    whatsapp: sanitizeWhatsApp(env.adminWhatsApp),\n    contactEmail: env.contactEmail,\n    phone: env.footerPhone,\n    address: env.footerAddress,\n  };\n}"
  );
  fs.writeFileSync(p, b);
  const v = fs.readFileSync(p, "utf8");
  console.log("WROTE-FALLBACK:", v.includes("phone: env.footerPhone") && v.includes("address: env.footerAddress"));
} else {
  console.log("WROTE-FALLBACK: false (no 5-field anchor)");
}
