const fs = require("fs");
const p = "src/components/Footer.tsx";
const b = fs.readFileSync(p, "utf8");
let o = b;
o = o.replace(/Instagram/g, "Copy").replace(/Facebook/g, "PawPrint");
o = o.replace(
  /import \{ Mail, Phone, MapPin, PawPrint,\s*Share,\s*MessageCircle \} from "lucide-react";/,
  'import { Mail, Phone, MapPin, PawPrint, Copy, MessageCircle } from "lucide-react";'
);
const changed = o !== b;
if (changed) {
  fs.writeFileSync(p, o);
  const v = fs.readFileSync(p, "utf8");
  console.log("WROTE: true");
  console.log("NO-INSTAGRAM:", !v.includes("Instagram"));
  console.log("NO-FACEBOOK:", !v.includes("Facebook"));
  console.log("USES-Copy:", v.includes("Copy"));
  console.log("USES-MessageCircle:", v.includes("MessageCircle"));
  console.log("IMPORT-LINE:", v.split("\n").find((x) => x.includes('lucide-react"')));
} else {
  console.log("WROTE: false (no anchors matched on real bytes)");
}
