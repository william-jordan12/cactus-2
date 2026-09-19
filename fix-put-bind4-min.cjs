const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");

const anchorDefaults = 'let whatsapp = settingsFallback().whatsapp;\n  let contactEmail = settingsFallback().contactEmail;';
const anchorReadEnd = '    if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }';

if (!/typeof body\.phone === "string"/.test(b) || !/\[whatsapp, contactEmail, phone, address\]/.test(b)) {
  const readBlock = '\n    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }';
  if (!/typeof body\.phone === "string"/.test(b)) b = b.replace(anchorReadEnd, anchorReadEnd + readBlock);

  const defaultsBlock = '\n    let phone = settingsFallback().phone;\n    let address = settingsFallback().address;';
  if (!/let phone = settingsFallback\(\)\.phone/.test(b) && /let contactEmail = settingsFallback\(\)\.contactEmail/.test(b)) {
    b = b.replace(anchorDefaults, anchorDefaults + defaultsBlock);
  }

  if (!/\[whatsapp, contactEmail, phone, address\]/.test(b)) {
    b = b.replace("[whatsapp, contactEmail]", "[whatsapp, contactEmail, phone, address]");
  }
  fs.writeFileSync(p, b);
}

const v = fs.readFileSync(p, "utf8");
console.log("V-READ-PHONE:", /typeof body\.phone === "string"/.test(v));
console.log("V-READ-ADDR:", /typeof body\.address === "string"/.test(v));
console.log("V-DEFAULT-PHONE:", /let phone = settingsFallback\(\)\.phone/.test(v));
console.log("V-DEFAULT-ADDR:", /let address = settingsFallback\(\)\.address/.test(v));
console.log("V-BIND-4:", /\[whatsapp, contactEmail, phone, address\]/.test(v));
