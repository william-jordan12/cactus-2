const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");

const L1 = "  let whatsapp = settingsFallback().whatsapp;\n  let contactEmail = settingsFallback().contactEmail;";
const R1 = '    if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }';
const B1 = "      [whatsapp, contactEmail, phone, address]\n    );";

const ADD_L = "\n  let phone = settingsFallback().phone;\n  let address = settingsFallback().address;";
const ADD_R = '\n    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }';

const okLets = b.includes(L1);
const okReads = b.includes(R1);
const okBind = b.includes(B1);
const alreadyLets = /let phone = settingsFallback\(\)\.phone;/.test(b) && /let address = settingsFallback\(\)\.address;/.test(b);
const alreadyReads = /typeof body\.phone === "string"/.test(b) && /typeof body\.address === "string"/.test(b);

let wrote = false;
if (okLets && okReads && okBind && !alreadyLets && !alreadyReads) {
  b = b.replace(L1, L1 + ADD_L);
  b = b.replace(R1, R1 + ADD_R);
  fs.writeFileSync(p, b);
  wrote = true;
}

const v = fs.readFileSync(p, "utf8");
console.log("WROTE:" + wrote);
console.log("WROTE:" + wrote);
if (wrote) {
  console.log("V-LET-PHONE:" + /let phone = settingsFallback\(\)\.phone;/.test(v));
  console.log("V-LET-ADDR:" + /let address = settingsFallback\(\)\.address;/.test(v));
  console.log("V-READ-PHONE:" + /typeof body\.phone === "string"/.test(v));
  console.log("V-READ-ADDR:" + /typeof body\.address === "string"/.test(v));
  console.log("V-BIND4:" + /\[whatsapp, contactEmail, phone, address\]\n\s*\);/.test(v));
  console.log("V-ONCE-PHONE:" + ((v.match(/let phone = settingsFallback\(\)\.phone;/g) || []).length === 1));
  console.log("V-ONCE-ADDR:" + ((v.match(/let address = settingsFallback\(\)\.address;/g) || []).length === 1));
  console.log("V-ONCE-READ-PHONE:" + ((v.match(/typeof body\.phone === "string"/g) || []).length === 1));
  console.log("V-ONCE-READ-ADDR:" + ((v.match(/typeof body\.address === "string"/g) || []).length === 1));
}
