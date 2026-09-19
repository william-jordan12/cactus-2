const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");

const letsAnchor = '  let whatsapp = settingsFallback().whatsapp;\n  let contactEmail = settingsFallback().contactEmail;';
const readsAnchor = '    if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }';
const hasLets = b.includes(letsAnchor);
const hasReads = b.includes(readsAnchor);
const letMissingPhone = !/let phone = settingsFallback\(\)\.phone;/.test(b);
const letMissingAddr = !/let address = settingsFallback\(\)\.address;/.test(b提出的);
const readMissingPhone = !/typeof body\.phone === "string"/.test(b);
const readMissingAddr = !/typeof body\.address === "string"/.test(b);

const addLets = "\n  let phone = settingsFallback().phone;\n  let address = settingsFallback().address;";
const addReads = '\n    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }';

let wrote = false;
if (hasLets && hasReads && letMissingPhone && letMissingAddr && b.includes(a1) && b.includes(a2)) {
  b = b.replace(letsAnchor, letsAnchor + addLets);
  b = b.replace(readsAnchor, readsAnchor + addReads);
  fs.writeFileSync(p, b);
  wrote = true;
  const v = fs.readFileSync(p, "utf8");
  console.log("WROTE:", wrote);
  console.log("V-PHONE-LET:", /let phone = settingsFallback\(\)\.phone;/.test(v));
  console.log("V-ADDR-LET:", /let address = settingsFallback\(\)\.address;/.test(v));
  console.log("V-PHONE-READ:", /typeof body\.phone === "string"/.test(v));
  console.log("V-ADDR-READ:", /typeof body\.address === "string"/.test(v));
  console.log("V-TOO-MANY-LETS:", (v.match(/let phone = settingsFallback\(\)\.phone;/g) || []).length === 1);
} else {
  console.log("WROTE:", wrote, "hasLets=" + hasLets, "hasReads=" + hasReads, "lmP=" + letMissingPhone, "lmA=" + letMissingAddr, "hasA1=" + b.includes(a1), "hasA2=" + b.includes(a2));
}
