const fs = require("fs");
const R = [];
function dump(p) {
  if (!fs.existsSync(p)) { R.push("MISSING:" + p); return; }
  const lines = fs.readFileSync(p, "utf8");
  R.push("=== " + p + " ===");
  R.push(lines);
}
dump("src/lib/settings.ts");
console.log(R.join("\n"));
