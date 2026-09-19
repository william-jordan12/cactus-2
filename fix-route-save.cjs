const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");
console.log("SEED-PHONE:", /name === ['"]phone['"]/.test(b));
console.log("SEED-ADDRESS:", /name === ['"]address['"]/.test(b));
let wrote = false;
if (/name === ['"]phone['"]/.test(b)) {
  b = b.replace(/\bcontact_email\b/g, "contact_email, phone, address");
  fs.writeFileSync(p, b);
  const v = fs.readFileSync(p, "utf8");
  console.log("WROTE:", true);
  console.log("HAS-PHONE-KEY-TRIPLE:", /'whatsapp', 'contact_email', 'phone', 'address'|contact_email'\][^\n]*phone|phone, address/.test(v));
} else {
  console.log("WROTE: false (no phone anchor)");}
