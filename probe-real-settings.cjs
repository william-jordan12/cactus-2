const fs = require("fs");
function show(p, from, to, tag) {
  const lines = fs.readFileSync(p, "utf8").split("\n");
  console.log("===== " + tag + " [" + from + "-" + to + "] =====");
  lines.slice(from - 1, to).forEach((l, i) => console.log(from + i + ": " + l));
}
const base = "src/";
show(base + "lib/settings.ts", 1, 30, "settings.ts");
show(base + "app/api/settings/route.ts", 1, 40, "api-settings-route");
