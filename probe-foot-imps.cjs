const fs = require("fs");
const b = fs.readFileSync("src/components/Footer.tsx", "utf8");
const l = b.split("\n");
console.log("===1-6===");
l.slice(0, 6).forEach((x, i) => console.log(i + 1 + ": " + x));
console.log("===28-36===");
l.slice(27, 36).forEach((x, i) => console.log(28 + i + ": " + x));
const imp = l.find((x) => x.includes("lucide-react"));
console.log("IMPORT:", imp);
for (const icon of ["Mail", "Phone", "MapPin", "PawPrint", "MessageCircle", "Instagram", "Facebook", "Share", "Share2"]) {
  console.log("USES-" + icon + ":", new RegExp("<" + icon + "\\b").test(b));
}
