const fs = require("fs");
const lucide = require("lucide-react");
const want = ["Share", "Share2", "Instagram", "Facebook", "MessageCircle", "PawPrint", "Mail", "Phone", "MapPin", "Copy"];
for (const n of want) console.log("EXPORT-" + n + ":", typeof lucide[n] === "function");
const b = fs.readFileSync("src/components/Footer.tsx", "utf8");
b.split("\n").forEach((x, i) => {
  if (i < 11 || /<Share|Share2|Instagram|Facebook|PawPrint|Copy|MessageCircle/.test(x)) {
    console.log("F" + (i + 1) + ": " + x);
  }
});
