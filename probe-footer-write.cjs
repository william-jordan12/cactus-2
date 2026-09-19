const fs = require("fs");
const p = "src/components/Footer.tsx";
let b = fs.readFileSync(p, "utf8");
console.log("SEED-IMPORT-COL:", /PawPrint, Copy/.test(b));
console.log("SEED-USAGE-BARE-SHARE:", /<Share\s/.test(b));
if (/PawPrint, Copy/.test(b) && /<Share\s/.test(b)) {
  b = b.replace("PawPrint, Copy", "PawPrint, Share2");
  b = b.replace(/<Share\s/g, "<Share2 ");
  fs.writeFileSync(p, b);
  const v = fs.readFileSync(p, "utf8");
  console.log("WROTE: true");
  console.log("VERIFY-IMPORT:", /vindPawPrint,\s*Share2[\r\n]?\s*MessageCircle}.test(v));
  console.log("VERIFY-USAGE:", /<Share2 /.test(v));
  console.log("NO-BARE-SHARE:", !/<Share\s/.test(v));
} else {
  console.log("WROTE: false (no exact anchors matched)");
}
