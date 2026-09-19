const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");
const l = b.split("\n");
console.log("TOTAL:", l.length);
console.log("HAS-FETCH-BODY-PHONE:", /typeof body\.phone === "string"/.test(b));
console.log("HAS-FETCH-BODY-ADDR:", /typeof body\.address === "string"/.test(b));
console.log("HAS-BIND-BODY-PHONE:", /typeof body\.phone/.test(b) && /typeof body\.address/.test(b));
const bi = l.findIndex((x) => /\[whatsapp, contactEmail\]/.test(x));
console.log("BIND-2-LINE:", bi + 1, bi >= 0 ? l[bi].trim() : "-");
console.log("===ROUTE-LET-DEFAULTS===");
l.forEach((x, i) => {
  if (/^  let (whatsapp|contactEmail|phone|address) =/.test(x)) console.log(i + 1 + ": " + x.trim());
});
console.log("===READ-BLOCKS===");
l.forEach((x, i) => {
  if (/typeof body\.(whatsapp|contactEmail|phone|address) === "string"/.test(x)) console.log(i + 1 + ": " + x.trim());
});
