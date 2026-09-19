const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");
console.log("SEED-SINGLE-PLACEHOLD:", /VALUES \('whatsapp', \$1\), \('contact_email', \$2\)/.test(b));
console.log("SEED-DOUBLE:", /VALUES \('whatsapp', \$1\), \('contact_email', \$2\), \('phone', \$3\), \('address', \$4\)/.test(b));
if (/VALUES \('whatsapp', \$1\), \('contact_email', \$2\)/.test(b)) {
  b = b.replace(
    "VALUES ('whatsapp', $1), ('contact_email', $2)",
    "VALUES ('whatsapp', $1), ('contact_email', $2), ('phone', $3), ('address', $4)"
  );
  fs.writeFileSync(p, b);
  const v = fs.readFileSync(p, "utf8");
  console.log("WROTE: true");
  console.log("VERIFY-4KEYS:", /VALUES \('whatsapp', \$1\), \('contact_email', \$2\), \('phone', \$3\), \('address', \$4\)/.test(v));
} else {
  console.log("WROTE: false (no single anchor)");
}
