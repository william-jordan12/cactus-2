const fs = require("fs");
const b = fs.readFileSync("src/lib/settings.ts", "utf8");
const l = b.split("\n");
console.log("===FALLBACK+GET===");
l.slice(18, 44).forEach((x, i) => console.log(19 + i + ": " + x));
