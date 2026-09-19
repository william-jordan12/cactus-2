const fs = require("fs");
const b = fs.readFileSync("src/components/Footer.tsx", "utf8");
const l = b.split("\n");
console.log("UL-LEFT-AROUND:");
l.forEach((x, i) => {
  if (i >= 82 && i <= 110) console.log((i + 1) + ": " + x);
});
