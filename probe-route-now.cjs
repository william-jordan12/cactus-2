const fs = require("fs");
const p = "src/app/api/settings/route.ts";
const b = fs.readFileSync(p, "utf8");
const l = b.split("\n");
console.log("TOTAL:", l.length);
l.forEach((x, i) => {
  if (/whatsapp|contactEmail|phone|address|JSON\.stringify|VALUES|SET|INSERT|UPDATE|upsert|onConflict/u.test(x)) {
    console.log((i + 1) + ": " + x.trim());
  }
});
