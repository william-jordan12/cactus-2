const fs = require("fs");
const p = "src/components/Footer.tsx";
let b = fs.readFileSync(p, "utf8");
console.log("SEED-IMPORT-COL:", /PawPrint, Copy/.test(b));
console.log("SEED-BARE-SHARE:", /<Share\s/.test(b));
let ok = false;
if (/PawPrint, Copy, MessageCircle/.test(b)) {
  b = b.split("PawPrint, Copy, MessageCircle").join("PawPrint, Share2, MessageCircle");
  if (/<Share\s/.test(b)) b = b.split(/<Share\s/).join("<Share2 ");
  fs.writeFileSync(p, b);
  ok = true;
}
const v = fs.readFileSync(p, "utf8");
console.log("WROTE:", ok);
console.log("VERIFY-IMPORT-NO-COPY:", !/Copy\b/.test(v));
console.log("VERIFY-IMPORT-HAS-SHARE2:", /Share2, MessageCircle/.test(v));
console.log("VERIFY-USAGE-NO-BARE-SHARE:", !/<Share\s/.test(v));
