const fs = require("fs");
const me = process.cwd();
const p = fs.existsSync("src/app/api/settings/route.ts")
  ? "src/app/api/settings/route.ts"
  : require("path").resolve(__dirname, "..", "..", "..", "src/app/api/settings/route.ts");
console.log("CWD:", me);
console.log("XPATH:", p);
if (!fs.existsSync(p)) { console.log("MISSING-ROUTE"); process.exit(2); }
let b = fs.readFileSync(p, "utf8");
const bind2 = "[whatsapp, contactEmail]";
const hasBind2 = b.includes(bind2);
const hasLetPhone = /let phone = settingsFallback\(\)\.phone;/.test(b);
const hasReadPhone = /typeof body\.phone === "string"/.test(b);
console.log("HAS-BIND2:", hasBind2);
console.log("HAS-LET-PHONE:", hasLetPhone, "HAS-READ-PHONE:", hasReadPhone);
console.log("HAS-LET-ADDR:", /let address = settingsFallback\(\)\.address;/.test(b), "HAS-READ-ADDR:", /typeof body\.address === "string"/.test(b));

let wrote = false;
if (hasBind2 && hasLetPhone && hasReadPhone && hasLetAddr && hasReadAddr) {
  const before = b;
  b = b.replace(
    /\[whatsapp, contactEmail\]/,
    "[whatsapp, contactEmail, phone, address]"
  );
  const single = (b.match(/\[whatsapp, contactEmail, phone, address\]/g) || []).length === 1;
  const dblGone = !b.includes(bind2);
  if (single && dblGone) { fs.writeFileSync(p, b); wrote = true; }
}
const v = fs.readFileSync(p, "utf8");
console.log("WROTE:", wrote);
console.log("V-BIND4:", /\[whatsapp, contactEmail, phone, address\]/.test(v));
console.log("V-BIND2-GONE:", !/\[whatsapp, contactEmail\]/.test(v));
