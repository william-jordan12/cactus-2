const fs = require("fs");
const p = "src/components/Footer.tsx";
const b = fs.readFileSync(p, "utf8");
console.log("IMPORT-LINE:", b.split("\n").slice(0, 1)[0]);
for (const icon of ["Instagram", "Facebook", "Share", "Share2", "MessageCircle", "PawPrint"]) {
  console.log("HAS-IDENT-" + icon + ":", new RegExp("\\b" + icon + "\\b").test(b));
}
const lucide = require("lucide-react");
console.log("LUCIDE-HAS-Share:", typeof lucide.Share);
console.log("LUCIDE-HAS-Share2:", typeof lucide.Share2);
console.log("LUCIDE-HAS-MessageCircle:", typeof lucide.MessageCircle);
console.log("LUCIDE-HAS-PawPrint:", typeof lucide.PawPrint);
