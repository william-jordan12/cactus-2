const fs = require("fs");
const p = "src/lib/settings.ts";
const b = fs.readFileSync(p, "utf8");
const l = b.split("\n");
console.log("TOTAL:", l.length);
l.forEach(function (x, i) {
  if (/return \{|whatsapp|contactEmail|phone|address|fallback|Fallback|\?\.|\?\?|env\./.test(x)) {
    console.log((i + 1) + ": " + x.trim());
  }
});
