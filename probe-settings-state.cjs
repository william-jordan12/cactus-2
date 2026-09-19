const fs = require("fs");
const b = fs.readFileSync("src/lib/settings.ts", "utf8");
const lines = b.split("\n");
console.log("TOTAL", lines.length);
console.log("===1-20===");
lines.slice(0, 20).forEach((l, i) => console.log(i + 1 + ": " + l));
console.log("===HAS-INTERFACE-PHONE:", /phone|address/.test(lines.slice(0, 12).join("\n")));
