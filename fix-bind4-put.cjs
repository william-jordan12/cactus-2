const fs = require("fs");
const pLib = "src/lib/settings.ts";
const pRoute = "src/app/api/settings/route.ts";

const lib = fs.readFileSync(pLib, "utf8");
console.log("LIB-FALLBACK-PHONE:", /phone:\s*env\.footerPhone/.test(lib));
console.log("LIB-FALLBACK-ADDR:", /address:\s*env\.footerAddress/.test(lib));
console.log("LIB-BIND4:", /\[whatsapp, contactEmail, phone, address\]/.test(lib));

let b = fs.readFileSync(pRoute, "utf8");
const okLib = /phone:\s*env\.footerPhone/.test(lib) && /address:\s*env\.footerAddress/.test(libNotice);
const a1 = 'if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }';
const a2 = '      [whatsapp, contactEmail]\n    );';
let wrote = false;
if (okLib && b.includes(a1) && b.includes(a2) && !/typeof body\.phone === "string"/.test(b) && !/\[whatsapp, contactEmail, phone, address\]\n\s*\);/.test(b)) {
  const reads = 'if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }\n    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }';
  b = b.replace(a1, reads);
  b = b.replace(a2, "      [whatsapp, contactEmail, phone, address]\n    );");
  fs.writeFileSync(pRoute, b);
  wrote = true;
  const v = fs.readFileSync(pRoute, "utf8");
  console.log("WROTE-FIX: true");
  console.log("V-READ-PHONE:", /typeof body\.phone === "string"/.test(v));
  console.log("V-READ-ADDR:", /typeof body\.address === "string"/.test(v));
  console.log("V-BIND4:", /\[whatsapp, contactEmail, phone, address\]\s*\n\s*\);/.test(v));
  console.log("V-BIND2-GONE:", !/\[whatsapp, contactEmail\]\s*\n\s*\);/.test(v));
} else {
  console.log("WROTE-FIX: false okLib=" + okLib + " a1=" + b.includes(a1) + " a2=" + b.includes(a2));
}
