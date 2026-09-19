const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");
const l = b.split("\n");
const c = '/    if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }';
const ph = '/    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }';
const addLets = '  let phone = settingsFallback().phone;\n  let address = settingsFallback().address;';
const defaultAnchor = '  let whatsapp = settingsFallback().whatsapp;\n  let contactEmail = settingsFallback().contactEmail;';
let wrote = false, wrote2 = false;

if (!b.includes("  let phone = settingsFallback().phone;")) {
  if (b.includes(defaultAnchor)) {
    b = b.replace(defaultAnchor, defaultAnchor + "\n" + addLets);
  }
  if (b.includes(c)) {
    b = b.replace(c, c + ph);
  }
  if (b.includes("      [whatsapp, contactEmail]\n    );")) {
    b = b.replace("      [whatsapp, contactEmail]\n    );", "      [whatsapp, contactEmail, phone, address]\n    );");
  }
  fs.writeFileSync(p, b);
  wrote = true;
}
const v = fs.readFileSync(p, "utf8");
console.log("WROTE:", wrote);
console.log("V-LETS:", /let phone = settingsFallback\(\)\.phone;\n  let address = settingsFallback\(\)\.address;/.test(v));
console.log("V-READS:", /typeof body\.phone === "string"/.test(v) && /typeof body\.address === "string"/.test(v));
console.log("V-SET:", /setPhone\(|setAddress\(/.test(v));
