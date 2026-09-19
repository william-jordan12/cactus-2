const fs = require("fs");
const b = fs.readFileSync("src/components/Footer.tsx", "utf8");
const lines = b.split("\n");
console.log("TOTAL", lines.length);
console.log("L1:", JSON.stringify(lines[0]));
console.log("IMPORTS:", lines.slice(4, 15).map((l) => l.trim()).join(" "));
console.log("---84-96---");
lines.slice(83, 96).forEach((l, i) => console.log(84 + i + ": " + l));
