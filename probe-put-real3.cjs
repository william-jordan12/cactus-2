const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");
const l = b.split("\n");
console.log("TOTAL:", l.length);
console.log("===REAL-READS===");
l.forEach((x, i) => {
  if (/body\.(whatsapp|contactEmail|phone|address)|typeof body\./.test(x) && /string/.test(x)) {
    console.log((i + 1) + ": " + x.trim());
  }
});
const bindIdx = l.findIndex((x) => /\[whatsapp, contactEmail\]/.test(x) && x.includes("]);"));
console.log("BIND-LINE:", bindIdx + 1, bindIdx >= 0 ? l[bindIdx].trim() : "");
const bindIdx4 = l.findIndex((x) => /\[whatsapp, contactEmail, phone, address\]/.test(x));
console.log("BIND4-LINE:", bindIdx4 + 1);
