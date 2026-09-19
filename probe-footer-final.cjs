const fs = require("fs");
const b = fs.readFileSync("src/components/Footer.tsx", "utf8");
const lines = b.split("\n");
console.log("TOTAL", lines.length);
console.log("L1:", lines[0]);
console.log("L2:", lines[1] || "");
console.log("USE-CLIENT:", b.includes('"use client"'));
console.log("HAS-NewsletterForm:", /import\s+NewsletterForm/s.test(b));
console.log("HAS-Logo:", /import\s+Logo/s.test(b));
console.log("===EMAIL/PHONE/ADDR-LINES===");
lines.forEach((l, i) => {
  if (/happytailspetstore|555|Meadow|mailto:|tel:/.test(l)) console.log(i + 1 + ": " + l.trim());
});
