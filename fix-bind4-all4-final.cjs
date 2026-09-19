const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");

// anchors verified: dup sets exist
const al1 = "  let whatsapp = settingsFallback().whatsapp;\n  let contactEmail = settingsFallback().contactEmail;";
const ar1 = '    if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }';
const ab2 = "      [whatsapp, contactEmail]\n    );";

const addLets = "\n  let phone = settingsFallback().phone;\n  let address = settingsFallback().address;";
const addReads = '\n    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }';
const addBind = "      [whatsapp, contactEmail, phone, address]\n    );";

const has2 = b.includes(al1) && b.includes(ar1) && b.includes(ab2);
console.log("HAS2:", has2);
let wrote = false;
if (has2 && !/let phone = settingsFallback\(\)\.phone;/.test(b)) {
  b = b.replace(al1, al1 + addLets);
  b = b.replace(ar1, ar1 + addReads);
  b = b.replace(ab2, addBind);
  fs.writeFileSync(p, b);
  wrote = true;
}
const v = fs.readFileSync(p, "utf8");
console.log("WROTE:", wrote);
console.log("V-LET-PHONE:", /let phone = settingsFallback\(\)\.phone;/.test(v));
console.log("V-LET-ADDR:", /let address = settingsFallback\(\)\.address;/.test(v));
console.log("V-READ-PHONE:", /typeof body\.phone === "string"/.test(v));
console.log("V-READ-ADDR:", /typeof body\.address === "string"/.test(v));
console.log("V-BIND4:", /\[whatsapp, contactEmail, phone, address\]\n    \);/.test(v));
console.log("V-BIND2-GONE:", !/\[whatsapp, contactEmail\]\n    \);/.test(v));
console.log("V-2LETS:", /\blet what\b/g.test(v) === /let whatsapp = settingsFallback\(\)\.whatsapp;/.test(v));
