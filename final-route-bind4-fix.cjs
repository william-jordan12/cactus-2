const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");
const dLet = "  let whatsapp = settingsFallback().whatsapp;\n  let contactEmail = settingsFallback().contactEmail;";
const rEmail = '    if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }';
const bind2 = "      [whatsapp, contactEmail]\n    );";

const hasDLet = b.includes(dLet);
const hasREmail = b.includes(rEmail);
const hasBind2 = b.includes(bind2);
const already = /\[whatsapp, contactEmail, phone, address\]/.test(b) && /let phone = settingsFallback\(\)\.phone;/.test(b);
console.log("A-DLET:", hasDLet, "A-REMAIL:", hasREmail, "A-BIND2:", hasBind2, "ALREADY:", alreadyerton);

if (hasDLet && hasREmail && hasBind2 && !already) {
  const letPhone = "  let phone = settingsFallback().phone;\n  let address = settingsFallback().address;";
  const rPhone = '\n\n    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }';

  b = b.replace(dLet, dLet + "\n" + letPhone);
  b = b.replace(rEmail, rEmail + rPhone);
  b = b.replace(bind2, "      [whatsapp, contactEmail, phone, address]\n    );");
  fs.writeFileSync(p, b);

  const v = fs.readFileSync(p, "utf8");
  console.log("WROTE: true");
  console.log("V-DLET-PHONE:", /let phone = settingsFallback\(\)\.phone;/.test(v));
  console.log("V-DLET-ADDR:", /let address = settingsFallback\(\)\.address;/.test(v));
  console.log("V-READ-PHONE:", /if \(typeof body\.phone === "string"\)/.test(v));
  console.log("V-READ-ADDR:", /if \(typeof body\.address === "string"\)/.test(v));
  console.log("V-BIND4:", /\[whatsapp, contactEmail, phone, address\]/.test(v));
  console.log("V-BIND2-GONE:", !/\[whatsapp, contactEmail\]\n\s*\);/.test(v));
  console.log("V-SINGLE-REPLACE:", (v.match(/\[whatsapp, contactEmail, phone, address\]/g) || []).length === 1);
} else {
  console.log("WROTE: false", JSON.stringify({ hasDLet, hasREmail, hasBind2, already }));
}