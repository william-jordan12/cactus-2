const fs = require("fs");
const p = "src/app/api/settings/route.ts";
const b = fs.readFileSync(p, "utf8");

const A_LETS = "  let whatsapp = settingsFallback().whatsapp;\n  let contactEmail = settingsFallback().contactEmail;";
const A_READ_CE = '    if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }';

const IS_DONE_LETS = b.includes("let phone = settingsFallback().phone;") && b.includes("let address = settingsFallback().address;");
const IS_DONE_READS = b.includes('typeof body.phone === "string"') && b.includes('typeof body.address === "string"');

let wrote = false;
const hasLets = b.includes(A_LETS);
const hasReadCE = b.includes(A_READ_CE     );
const hasBind4 = b.includes("      [whatsapp, contactEmail, phone, address]\n    );");

if (hasLets && hasReadCE && hasBind4 && !IS_DONE_LETS && !IS_DONE_READS) {
  const ADD_LETS = "\n  let phone = settingsFallback().phone;\n  let address = settingsFallback().address;";
  const ADD_READS = '\n    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }';
  let out = b.replace(A_LETS, A_LETS + ADD_LETS);
  out = out.replace(A_READ_CE, A_READ_CE + ADD_READS);
  fs.writeFileSync(p, out);
  wrote = true;
}

const v = fs.readFileSync(p, "utf8");
console.log("WROTE:" + wrote);
console.log("V-LETS-PHONE:" + v.includes("let phone = settingsFallback().phone;"));
console.log("V-LETS-ADDR:" + v.includes("let address = settingsFallback().address;"));
console.log("V-READS-PHONE:" + v.includes('typeof body.phone === "string"'));
console.log("V-READS-ADDR:" + v.includes('typeof body.address === "string"'));
console.log("V-BIND4:" + v.includes("      [whatsapp, contactEmail, phone, address]\n    );"));
console.log("V-ONCE-PHONE:" + (v.split("let phone = settingsFallback().phone;").length - 1 === 1));
console.log("V-ONCE-ADDR:" + (v.split("let address = settingsFallback().address;").length - 1 === 1));
