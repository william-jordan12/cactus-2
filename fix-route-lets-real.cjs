const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");

const aLets = "  let whatsapp = settingsFallback().whatsapp;\n  let contactEmail = settingsFallback().contactEmail;";
const aRead = '    if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }';

console.log("A-LETS:", b.includes(aLets), "A-READ:", b.includes(aRead));
console.log("HAS-LET-PHONE:", /let phone = settingsFallback\(\)\.phone;/.test(b));
console.log("HAS-LET-ADDR:", /let address = settingsFallback\(\)\.address;/.test(b));
console.log("HAS-READ-PHONE:", /typeof body\.phone === "string"/.test(b));
console.log("HAS-READ-ADDR:", /typeof body\.address === "string"/.test(b));

const addLets = "\n  let phone = settingsFallback().phone;\n  let address = settingsFallback().address;";
const addReads = '\n    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }';

let wrote = false;
if (b.includes(aLets) && b.includes(aRead) && !/let phone = settingsFallback\(\)\.phone;/.test(b) && !/let address = settingsFallback\(\)\.address;/.test(b)) {
  b = b.replace(aRead, aRead + addReads);
  b = b.replace(aLets, aLets + addLets);
  fs.writeFileSync(p, b);
  wrote = true;
}
const v = fs.readFileSync(p, "utf8");
console.log("WROTE:", wrote);
console.log("V-LET-PHONE:", /let phone = settingsFallback\(\)\.phone;/.test(v));
console.log("V-LET-ADDR:", /let address = settingsFallback\(\)\.address;/.test(v));
console.log("V-READ-PHONE:", /typeof body\.phone === "string"/.test(v));
console.log("V-READ-ADDR:", /typeof body\.address === "string"/.test(v));
console.log("V-ONCE-LET-PHONE:", (v.match(/let phone = settingsFallback\(\)\.phone;/g) || []).length === 1);
console.log("V-ONCE-REQ-PHONE:", (v.match(/typeof body\.phone === "string"/g) || []).length === 1);
console.log("V-BIND4-KEPT:", /\[whatsapp, contactEmail, phone, address\]/.test(v));
