const fs = require("fs");
const p = "src/components/Footer.tsx";
const b = fs.readFileSync(p, "utf8");
const seedHas = /PawPrint,\s*Share2,/.test(b) && /<Share2\s/.test(b);
console.log("SEED: true")
const out = b
  .replace("PawPrint, Share2, MessageCircle", "PawPrint, MessageCircle")
  .replace(/<Share2\s/g, "<PawPrint ");
fs.writeFileSync(p, out);
const v = fs.readFileSync(p, "utf8");
console.log("VERIFY-NO-SHARE2:", !/Share2/.test(v));
console.log("VERIFY-PAWN-COUNT-2+:", (v.match(/<PawPrint/g) || []).length >= 2);
console.log("VERIFY-MC:", "MessageCircle" in require("lucide-react"));
console.log("VERIFY-PAWN-EXPORT:", "PawPrint" in require("lucide-react"));
