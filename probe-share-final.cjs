const fs = require("fs");
const lucide = require("lucide-react");
const keys = Object.keys(lucide);
for (const n of ["Share", "Share2", "Instagram", "Facebook", "Copy", "PawPrint", "MessageCircle", "Mail", "Phone", "MapPin"]) {
  console.log("LUCIDE-" + n + ":", keys.includes(n));
}
const b = fs.readFileSync("src/components/Footer.tsx", "utf8");
b.split("\n").forEach((x, i) => {
  if (/\bShare\b/.test(x)) console.log("FOOTER-LINE-" + (i + 1) + ": " + x);
});
