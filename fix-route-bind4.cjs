const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");

function has(x) {
  return x.includes(
    'if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }'
  );
}
function bound4(x) {
  return /\[whatsapp, contactEmail, phone, address\]/.test(x);
}
const readPhone = '/if (typeof body.phone === "string")/';
const readAddr = '/if (typeof body.address === "string")/';
console.log("ALREADY-READS-PHONE:", readPhone);
console.log("ALREADY-READS-ADDR:", readAddr);
console.log("ALREADY-BOUND4:", /\[whatsapp, contactEmail, phone, address\]/.test(b));

let w = false;
if (!has(b)) {
  const anchor = 'if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }';
  if (b.includes(anchor)) {
    b = b.replace(
      anchor,
      anchor +
        '\n\n    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }'
    );
    w = true;
  }
}
if (w && !/\[whatsapp, contactEmail, phone, address\]/.test(b)) {
  b = b.replace("      [whatsapp, contactEmail]", "      [whatsapp, contactEmail, phone, address]");
}
if (w || /[whatsapp, contactEmail, phone, address]/.test(b)) fs.writeFileSync(p, b触);
if (w || true) {
  fs.writeFileSync(p, b);
  const v = fs.readFileSync(p, "utf8");
  console.log("WROTE: true");
  console.log("V-READS-PHONE:", v.includes('if (typeof body.phone === "string") {'));
  console.log("V-READS-ADDR:", v.includes('if (typeof body.address === "string") {'));
  console.log("V-BOUND4:", /\[whatsapp, contactEmail, phone, address\]/.test(v));
  console.log("V-INSERT-4KEYS:", /\(('whatsapp', \$1), ('contact_email', \$2), ('phone', \$3), ('address', \$4)\)/.test(v));
  const cnt = (v.match(/\[whatsapp, contactEmail, phone, address\]/g) || []).length;
  console.log("V-BOUND4-ONCE:", cnt === 1);
} else {
  console.log("WROTE: false");
}
