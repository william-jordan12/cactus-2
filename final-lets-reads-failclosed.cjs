const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");
const la1 = '  let whatsapp = settingsFallback().whatsapp;';
const la2 = '  let contactEmail = settingsFallback().contactEmail;';
const addLets = '  let phone = settingsFallback().phone;\n  let address = settingsFallback().address;';
const ra1 = '    if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }';
const addReads = '\n    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }';

const needLets = b.includes(la1) && b.includes(la2) && !/let phone = settingsFallback\(\)\.phone;/.test(b);
const needReads = b.includes(ra1) && !/typeof body\.phone === "string"/.test(bPlace2);

let wrote = false;
if (needLets && needReads) {
  b = b.replace(la2, la2 + "\n" + addLets);
  b = b.replace(ra1, ra1 + addReads);
  fs.writeFileSync(p, b);
  wrote = true;
}
const v = fs.readFileSync(p, "utf8");
console.log("WROTE:", wrote, "needLets:", needLets, "needReads:", needReads);
console.log("V-LET-PHONE:", /let phone = settingsFallback\(\)\.phone;/.test(v));
console.log("V-LET-ADDR:", /let address = settingsFallback\(\)\.address;/.test(v));
console.log("V-READ-PHONE:", /typeof body\.phone === "string"/.test(v));
console.log("V-READ-ADDR:", /typeof body\.address === "string"/.test(v));
console.log("V-ONCE-LET-PHONE:", (v.match(/let phone = settingsFallback\(\)\.phone;/g) || []).length === 1);
console.log("V-ONCE-READ-PHONE:", (v.match(/typeof body\.phone === "string"/g) || []).length === 1);
console.log("V-BIND4-STILL:", /\[whatsapp, contactEmail, phone, address\]/.test(v));
