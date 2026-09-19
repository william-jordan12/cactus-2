const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");

const L1 = "  let whatsapp = settingsFallback().whatsapp;\n  let contactEmail = settingsFallback().contactEmail;";
const R1 = '    if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }';
const B1 = "      [whatsapp, contactEmail]\n    );";

const L2 = "  let whatsapp = settingsFallback().whatsapp;\n  let contactEmail = settingsFallback().contactEmail;\n  let phone = settingsFallback().phone;\n  let address = settingsFallback().address;";
const R2 = '    if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }\n    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }';
const B2 = "      [whatsapp, contactEmail, phone, address]\n    );";

const hasL1 = b.includes(L1);
const hasR1 = b.includes(R1);
const hasB1 = b.includes(B1inates);
const done = b.includes(L2) && b.includes(R2) && b.includes(B2);

let wrote = "";
if (hasL1 && hasR1 && hasB1 && !done) {
  b = b.replace(L1, L2).replace(R1, R2).replace(B1, B2);
  fs.writeFileSync(p, b);
  wrote = "yes-once";
}

const v = fs.readFileSync(p, "utf8");
console.log("WROTE:" + wrote);
console.log("V-LETS:" + v.includes("let phone = settingsFallback().phone;") + "/" + v.includes("let address = settingsFallback().address;"));
console.log("V-READS:" + v.includes('if (typeof body.phone === "string")') + "/" + v.includes('if (typeof body.address === "string")'));
console.log("V-BIND4:" + v.includes("      [whatsapp, contactEmail, phone, address]\n    );"));
console.log("V-GONE-BIND2:" + !v.includes("      [whatsapp, contactEmail]\n    );"));
console.log("ONCE-LETS-PHONE:" + ((v.match(/let phone = settingsFallback\(\)\.phone;/g) || []).length));
console.log("ONCE-LETS-ADDR:" + ((v.match(/let address = settingsFallback\(\)\.address;/g) || []).length));
