const fs = require("fs");
const f = "src/app/api/settings/route.ts";
const b = fs.readFileSync(f, "utf8");
const L = b.split("\n");
for (let i = 33; i < Math.min(L.length, 65); i++) {
  console.log((i + 1) + "\t" + JSON.stringify(L[i]));
}
