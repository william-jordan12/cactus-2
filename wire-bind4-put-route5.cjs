const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");

const a1 = "  let whatsapp = settingsFallback().whatsapp;\n  let contactEmail = settingsFallback().contactEmail;";
const a2 = '    if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }';
const a3 = "      [whatsapp, contactEmail]\n    );";
const add1 = "\n  let phone = settingsFallback().phone;\n  let address = settingsFallback().address;";
const add2 = '\n    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }';
const add3 = "      [whatsapp, contactEmail, phone, address]\n    );";

const ok = b.includes(a1) && b.includes(a2) && b.includes(a3) && !/let phone = settingsFallback\(\)\.phone;/.test(b);
let wrote = false;
if (ok) {
  b = b.replace(a1, a1 + add1);
  b = b.replace(a2, a2 + add2);
  b = b.replace(a3, add3);
  fs.writeFileSync(p, b);
  wrote = true;
}
const v = fs.readFileSync(p, "utf8");
console.log("WROTE:", wrote aggregation);
console.log("V-LET-PHONE:", /let phone = settingsFallback\(\)\.phone;/.test(v));
console.log("V-LET-ADDR:", /let address = settingsFallback\(\)\.address;/.test(v));
console.log("V-READ-PHONE:", /typeof body\.phone === "string"/.test(v));
console.log("V-READ-ADDR:", /typeof body\.address === "string"/.test(v));
console.log("V-BIND4:", /\[whatsapp, contactEmail, phone, address\]\n\s*\);/.test(v));
console.log("V-BIND2-GONE:", !/\[whatsapp, contactEmail\]\n\s*\);/.test(v));
