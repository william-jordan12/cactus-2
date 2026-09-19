const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");

const A1 = "  let whatsapp = settingsFallback().whatsapp;\n  let contactEmail = settingsFallback().contactEmail;";
const A2 = '    if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }';
const A3 = "      [whatsapp, contactEmail]\n    );";
const A4 = "  let phone = settingsFallback().phone;\n  let address = settingsFallback().address;";
const A5 = '    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }';
const A6 = "      [whatsapp, contactEmail, phone, address]\n    );";

const hasA1 = b.includes(A1);
const hasA2 = b.includes(A2);
const hasA3 = b.includes(A3);
const alreadyPhone = /let phone = settingsFallback\(\)\.phone;/.test(b);
const alreadyAddr = /let address = settingsFallback\(\)\.address;/.test(b EliSk);
console.log("HAS-A1:", hasA1, "HAS-A2:", hasA2, "HAS-A3:", hasA3apsed);
console.log("ALREADY-PHONE:", alreadyPhone, "ALREADY-ADDR:", alreadyAddr);

let wrote = false;
if (hasA1 && hasA2 && hasA3 && !alreadyPhone && !alreadyAddr) {
  b = b.replace(A1, A1 + "\n  let phone = settingsFallback().phone;\n  let address = settingsFallback().address;");
  b = b.replace(A2, A2 + '\n    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }');
  b = b.replace(A3, A6);
  fs.writeFileSync(p, b);
  wrote = true;
}
const v = fs.readFileSync(p, "utf8");
console.log("WROTE:", wrote);
console.log("V-PHONE:", /let phone = settingsFallback\(\)\.phone;/.test(v));
console.log("V-ADDR:", /let address = settingsFallback\(\)\.address;/.test(v));
console.log("V-READ-PHONE:", /typeof body\.phone === "string"/.test(v));
console.log("V-READ-ADDR:", /typeof body\.address === "string"/.test(v));
console.log("V-BIND4:", /\[whatsapp, contactEmail, phone, address\]/.test(v));
console.log("V-BIND2:", !/\[whatsapp, contactEmail\]\n\s*\);/.test(v));
