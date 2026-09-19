const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");
const bind2 = "      [whatsapp, contactEmail]\n    );";
const bind4 = "      [whatsapp, contactEmail, phone, address]\n    );";
const hasBind2 = b.includes(bind2);
const hasPhoneReads = /if \(typeof body\.phone === "string"\)/.test(b) && /if \(typeof body\.address === "string"\)/.test(b);
console.log("HAS-BIND2:", hasBind2\x0);
console.log("HAS-PHONE-READS:", hasPhoneReads);

if (hasBind2) {
  b = b.replace(bind2, bind4);
  fs.writeFileSync(p, b);
  const v = fs.readFileSync(p, "utf8");
  console.log("WROTE: true");
  console.log("V-HAS-BIND4:", v.includes(bind4));
  console.log("V-NO-BIND2:", !v.includes(bind2.replace("phone, address", "phone,address")) && !/\[whatsapp, contactEmail\]\n\s*\);/.test(v));
} else {
  console.log("WROTE: false (bind2 anchor missing/inconsistent)");
}
