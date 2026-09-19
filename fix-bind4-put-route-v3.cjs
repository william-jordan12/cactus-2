const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");

const l1 = "  let whatsapp = settingsFallback().whatsapp;";
const l2 = "  let contactEmail = settingsFallback().contactEmail;";
const r1 = '    if (typeof body.contactEmail === "string") {';
const r2 = "      contactEmail = body.contactEmail.trim();";
const r3 = "    }";
const x = "      [whatsapp, contactEmail]";
const y = "    );";

const hasLet = b.includes(l1) && b.includes(l2);
const hasRead = b.includes(r1) && b.includes(r2) && b.includes(r3);
const hasBind = b.includes(x) && b.includes(y);
console.log("H-LET:", hasLet, "H-READ:", hasRead, "H-BIND:", hasBindapsed);
console.log("ALREADY:", /typeof body\.phone === "string"/.test(b));

let wrote = false;
if (hasLet && hasRead && hasBind && !/typeof body\.phone === "string"/.test(b)) {
  const addLet = "\n  let phone = settingsFallback().phone;\n  let address = settingsFallback().address;";
  const addRead = '\n    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }';
  const addBind = "      [whatsapp, contactEmail, phone, address]";
  b = b.replace(l2, l2 + addLet);
  b = b.replace(r3, r3 + addRead);
  b = b.replace(x, addBind);
  fs.writeFileSync(p, b);
  wrote = true;
}
const v = fs.readFileSync(p, "utf8");
console.log("WROTE:", wrote);
console.log("V-LET-PHONE:", /let phone = settingsFallback\(\)\.phone;/.test(v));
console.log("V-LET-ADDR:", /let address = settingsFallback\(\)\.address;/.test(v));
console.log("V-READ-PHONE:", /typeof body\.phone === "string"/.test(v));
console.log("V-READ-ADDR:", /typeof body\.address === "string"/.test(v));
console.log("V-BIND4:", /\[whatsapp, contactEmail, phone, address\]/.test(v));
console.log("V-BIND2-GONE:", !/\[whatsapp, contactEmail\]\n\s*\);\s*$/.test(v.replace(addBind, "")));
