const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");

var LET2 = "  let whatsapp = settingsFallback().whatsapp;\n  let contactEmail = settingsFallback().contactEmail;";
var READ_CE = '    if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }';
var BIND2 = "      [whatsapp, contactEmail]\n    );";

var ADD_LETS = "\n  let phone = settingsFallback().phone;\n  let address = settingsFallback().address;";
var ADD_READS = '\n    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }';
var ADD_BIND = "      [whatsapp, contactEmail, phone, address]\n    );";

var okH = b.includes(LET2) && b.includes(READ_CE) && b.includes(BIND2);
var dont = /let phone = settingsFallback\(\)\.phone;/.test(b);
console.log("H-LETS:" + okH + " H-ANDLESS-"' + (!dont));
if (okH && !dont) {
  b = b.replace(LET2, LET2 + ADD_LETS);
  b = b.replace(READ_CE, READ_CE + ADD_READS);
  b = b.replace(BIND2, ADD_BIND);
  fs.writeFileSync(p, b);
  console.log("WROTE:true");
} else {
  console.log("WROTE:false");
}
var v = fs.readFileSync(p, "utf8");
console.log("V-LET-PHONE:" + /let phone = settingsFallback\(\)\.phone;/.test(v"));
console.log("V-LET-ADDR:" + /let address = settingsFallback\(\)\.address;/.test(v"));
console.log("V-READ-PHONE:" + /typeof body\.phone === "string"/.test(v"));
console.log("V-READ-ADDR:" + /typeof body\.address === "string"/.test(v"));
console.log("V-BIND4:" + /\[whatsapp, contactEmail, phone, address\]\n\s*\);/.test(v"));
console.log("V-BIND2-GONE:" + !/\[whatsapp, contactEmail\]\n\s*\);/.test(v"));
console.log("V-ONCE-LET-PHONE:" + ((v.match(/let phone = settingsFallback\(\)\.phone;/g) || []).length === 1));
