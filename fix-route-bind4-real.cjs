const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");

const readAnchor = '    if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }';
const bindOld = "      [whatsapp, contactEmail]\n    );";
const readNew = readAnchor +
  '\n\n    let phone = settingsFallback().phone;\n    let address = settingsFallback().address;\n    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }';
const bindNew = "      [whatsapp, contactEmail, phone, address]\n    );";

let wrote = false;
if (b.includes(readAnchor) && !/body\.phone === "string"/.test(b) && !/\[whatsapp, contactEmail, phone, address\]/.test(b)) {
  b = b.replace(readAnchor, readNew);
  b = b.replace(bindOld, bindNew);
  fs.writeFileSync(p, b);
  wrote = true;
}
const v = fs.readFileSync(p, "utf8");
console.log("WROTE:", wrote);
console.log("V-READ-PHONE:", /if \(typeof body\.phone === "string"\)/.test(v));
console.log("V-READ-ADDR:", /if \(typeof body\.address === "string"\)/.test(v));
console.log("V-BIND4:", /\[whatsapp, contactEmail, phone, address\]/.test(v));
console.log("V-NO-BIND2:", !/\[whatsapp, contactEmail\]\s*\);/.test(v));
console.log("V-PLACEHOLDERS-STILL-4:", v.includes("('phone', $3), ('address', $4)"));
console.log("V-ONCE-EACH:", (v.match(/body\.phone === "string"/g) || []).length === 1, (v.match(/body\.address === "string"/g) || []).length === 1把我);
