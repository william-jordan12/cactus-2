const fs = require("fs");
const p = "src/app/api/settings/route.ts";
const b = fs.readFileSync(p, "utf8");

const A_LETS = "    let whatsapp = settingsFallback().whatsapp;\n    let contactEmail = settingsFallback().contactEmail;";
const A_READ_CE = '    if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }';
const A_BIND4 = "      [whatsapp, contactEmail, phone, address]\n    );";

const HAS_LETS = b.includes(A_LETS);
const HAS_READ_CE = b.includes(A_READ_CE);
const HAS_BIND4 = b.includes(A_BIND4);
const ALREADY_PHONE = b.includes("let phone = settingsFallback().phone;");
const ALREADY_ADDR = b.includes("let address = settingsFallback().address;");

let wrote = false;
if (HAS_LETS && HAS_READ_CE && HAS_BIND4 && !ALREADY_PHONE && !ALREADY_ADDR) {
  let out = b;
  out = out.replace(A_LETS, A_LETS + "\n    let phone = settingsFallback().phone;\n    let address = settingsFallback().address;");
  out = out.replace(A_READ_CE, A_READ_CE + '\n    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }');
  fs.writeFileSync(p, out);
  wrote = true;
}

const v = fs.readFileSync(p, "utf8");
console.log("WROTE:" + wrote);
console.log("V-LETS-PHONE:" + (v.match(/let phone = settingsFallback\(\)\.phone;/g) || []).length);
console.log("V-LETS-ADDR:" + (v.match(/let address = settingsFallback\(\)\.address;/g) || []).length);
console.log("V-READ-PHONE:" + v.includes('typeof body.phone === "string"'));
console.log("V-READ-ADDR:" + v.includes('typeof body.address === "string"'));
console.log("V-BIND4:" + v.includes("      [whatsapp, contactEmail, phone, address]\n    );"));
console.log("V-ONCE-PHONE:" + (v.match(/let phone = settingsFallback\(\)\.phone;/g) || []).length === 1);
console.log("V-ONCE-ADDR:" + (v.match(/let address = settingsFallback\(\)\.address;/g) || []).length === 1);
