var fs = require("fs");
var p = "src/app/api/settings/route.ts";
var b = fs.readFileSync(p, "utf8");

var aLet = "  let whatsapp = settingsFallback().whatsapp;\n  let contactEmail = settingsFallback().contactEmail;";
var aRead = '    if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }';
var aBind = "      [whatsapp, contactEmail]\n    );";

var addLets = "\n  let phone = settingsFallback().phone;\n  let address = settingsFallback().address;";
var addReads = '\n    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }\n    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }';
var addBind = "      [whatsapp, contactEmail, phone, address]\n    );";

var hasA1 = b.indexOf(aLet) >= 0;
var hasA2 = b.indexOf(aRead) >= 0;
var hasA3 = b.indexOf(aBind) >= 0;
console.log("HAS-A1:" + hasA1 + " HAS-A2:" + hasA2 + " HAS-A3:" + hasA3apsed);

if (hasA1 && hasA2 && hasA3 && !/let phone = settingsFallback\(\)\.phone;/.test(b)) {
  b = b.replace(aLet, aLet + addLets);
  b = b.replace(aRead, aRead + addReads);
  b = b.replace(aBind, addBind);
  fs.writeFileSync(p, b);
  console.log("WROTE:true");
} else {
  console.log("WROTE:false (anchor mismatch -> changed nothing)");
}
var v = fs.readFileSync(p, "utf8");
console.log("V-PHONE-LET:" + (/let phone = settingsFallback\(\)\.phone;/.test(v) ? "true" : "false"));
console.log("V-ADDR-LET:" + (/let address = settingsFallback\(\)\.address;/.test(v) ? "true" : "false"));
console.log("V-PHONE-READ:" + (/typeof body\.phone === "string"/.test(v) ? "true" : "false"));
console.log("V-ADDR-READ:" + (/typeof body\.address === "string"/.test(v) ? "true" : "false"));
console.log("V-BIND4:" + (/\[whatsapp, contactEmail, phone, address\]\n\s*\);/.test(v) ? "true" : "false"));
console.log("V-ONCE-PHONE-LET:" + ((v.match(/let phone = settingsFallback\(\)\.phone;/g) || {}).length === 1));
console.log("V-ONCE-ADDR-READ:" + ((v.match(/typeof body\.address === "string"/g) || {}).length === 1));
