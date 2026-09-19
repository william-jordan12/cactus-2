const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");
const l = b.split("\n");

const a1 = '    let contactEmail = settingsFallback().contactEmail;';
const a2 = '    if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }';
const a3 = '      [whatsapp, contactEmail]\n    );';
const has1 = b.includes(a1);
const has2 = b.includes(a2);
const has3 = b.includes(a3);
const all = has1 && has2 && has3;
console.log("A1:", has1, "A2:", has2, "A3:", has3, "ALL:", all);
if (all) {
  const addLet =
    '    let phone = settingsFallback().phone;\n    let address = settingsFallback().address;';
  const addRead =
    '    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }';
  b = b.replace(a1, a1 + "\n" + addLet);
  b = b.replace(a2, a2 + "\n" + addRead);
  b = b.replace(a3, "      [whatsapp, contactEmail, phone, address]\n    );");
  fs.writeFileSync(p, b);
  const v = fs.readFileSync(p, "utf8");
  console.log("WROTE: true");
  console.log("V-LET-PHONE:", /let phone = settingsFallback\(\)\.phone;/.test(v));
  console.log("V-LET-ADDR:", /let address = settingsFallback\(\)\.address;/.test(v));
  console.log("V-READ-PHONE:", /typeof body\.phone === "string"/.test(v));
  console.log("V-READ-ADDR:", /typeof body\.address === "string"/.test(v));
  console.log("V-BIND4:", /\[whatsapp, contactEmail, phone, address\]/.test(v));
  console.log("V-BIND2-GONE:", !/\[whatsapp, contactEmail\]\s*\);/.test(v.replace("x[whatsapp, contactEmail, phone, address]", "")));
} else {
  console.log("WROTE: false (probe only)");
}
