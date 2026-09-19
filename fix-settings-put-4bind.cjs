const fs = require("fs");
const p = "src/app/api/settings/route.ts";
const b = fs.readFileSync(p, "utf8");
const l = b.split("\n");
console.log("HAS-PHONE-ASSIGN-READPATH:", /body\.phone/.test(b));
console.log("HAS-ADDR-ASSIGN-READPATH:", /body\.address/.test(b));
const bi = l.findIndex((x) => x.includes("bind"));
console.log("BIND-USE-ARRAY-EXISTS:", bi >= 0);
console.log("BIND-LINE:", bi + 1, bi >= 0 ? l[bi].trim() : "");
const anchorPhone = '    if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }';
const anchorBind = "      [whatsapp, contactEmail]\n    );";
console.log("ANCHOR-PHONE-READ:", b.includes(anchorPhone));
console.log("ANCHOR-BIND2:", b.includes(anchorBind));
let w1 = false, w2 = false;
if (b.includes(anchorPhone) && !/body\.phone/.test(b)) {
  b = b.replace(
    anchorPhone,
    anchorPhone +
      '\n\n    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }'
  );
  w1 = true;
}
if (b.includes("[whatsapp, contactEmail]\n )") && !/\[whatsapp, contactEmail, phone, address\]/.test(b)) {
  b = b.replace("      [whatsapp, contactEmail]\n    );", "      [whatsapp, contactEmail, phone, address]\n    );");
  w2 = true;
}
if (w1 || w2) {
  fs.writeFileSync(p, b);
  const v = fs.readFileSync(p, "utf8");
  console.log("WROTE: true");
  console.log("V-READS-PHONE:", /if \(typeof body\.phone === "string"\)/.test(v));
  console.log("V-READS-ADDR:", /if \(typeof body\.address === "string"\)/.test(v));
  console.log("V-HAS-LET-PHONE:", /let phone = settingsFallback\(\)\.phone;/.test(v));
  console.log("V-HAS-LET-ADDR:", /let address = settingsFallback\(\)\.address;/.test(v));
  console.log("V-BIND4:", /\[whatsapp, contactEmail, phone, address\]/.test(v) && !/\[whatsapp, contactEmail\]/.test(v));
  console.log("V-INSERT-4KEYS:", /INSERT INTO ssv_settings \(key, value\) VALUES \('whatsapp', \$1\), \('contact_email', \$2\), \('phone', \$3\), \('address', \$4\)/.test(v));
} else {
  console.log("WROTE: false (anchors) phoneRead=" + b.includes(anchorPhone) + " bind2=" + b.includes(anchorBind + "\n"));
}
