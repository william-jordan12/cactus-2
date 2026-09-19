const fs = require("fs");
const b = fs.readFileSync("src/components/Footer.tsx", "utf8");
const lines = b.split("\n");
console.log("USE-CLIENT:", lines[0].includes('"use client"'));
console.log("===1-12===");
lines.slice(0, 12).forEach((l, i) => console.log(i + 1 + ": " + l));
console.log("===HARDCODED===");
[
  "hello@happytailspetstore.com",
  "+1 (555) PET-TAIL",
  "2754 Meadow Lane",
  "Email",
  "Link href=\"/mailto:",
].forEach((s) => console.log((b.includes(s) ? "FOUND   " : "MISSING ") + s));
