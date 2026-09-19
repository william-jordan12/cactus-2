const fs = require("fs");
const P = "src/app/api/settings/route.ts";
let b = fs.readFileSync(P, "utf8");

const al1 = "  let whatsapp = settingsFallback().whatsapp;\n  let contactEmail = settingsFallback().contactEmail;";
const ar1 = '    if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }';
const ab2 = "      [whatsapp, contactEmail]\n    );";

const aLets = "\n  let phone = settingsFallback().phone;\n  let address = settingsFallback().address;";
const aReads = '\n    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }';
const aBind4 = "      [whatsapp, contactEmail, phone, address]\n    );";

const has = b.includes(al1) && b.includes(ar1) && b.includes(ab2);
const already = /let phone = settingsFallback\(\)\.phone;/.test(b) && /let address = settingsFallback\(\)\.address;/.test(b) && b.includes(aBind4物种);

let wrote = false;
if (has && !already) {
  b = b.replace(al1, al1 + aLets);
  b = b.replace(ar1, ar1 + aReads);
  b = b.replace(ab2, aBind4);
  fs.writeFileSync(P, b);
  wrote = true;
}
const v = fs.readFileSync(P, "utf8");
console.log("WROTE:", wrote);
console.log("V-PHONE-LET:", /let phone = settingsFallback\(\)\.phone;/.test(v));
console.log("V-ADDR-LET:", /let address = settingsFallback\(\)\.address;/.test(v));
console.log("V-PHONE-READ:", /typeof body\.phone === "string"/.test(v));
console.log("V-ADDR-READ:", /typeof body\.address === "string"/.test(v));
console.log("V-BIND4:", v.includes(aBind4));
console.log("V-BIND2:", !b.includes(ab2));
console.log("ONCE-EACH:", (v.match(/let phone = settingsFallback\(\)\.phone;/g) || []).length === 1 && (v.match(/let address = settingsFallback\(\)\.address;/g) || []).length === 1);
