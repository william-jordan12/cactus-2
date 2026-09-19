const fs = require("fs");
const b = fs.readFileSync("src/components/Footer.tsx", "utf8");
const l = b.split("\n");
console.log("TOTAL:", l.length);
console.log("HAS-CONTACT-EMAIL-RENDER:", /settings\.contactEmail/.test(b));
console.log("HAS-SOCIAL-ROW:", /wa\.me|facebook\.com|t\.me|Telegram|Facebook/.test(b));
console.log("HAS-LUCIDE-IMPORT:", /from "lucide-react"/.test(b));
l.forEach((x, i) => {
  if (/settings\.(contactEmail|phone|address)/.test(x)) {
    console.log("R: " + (i + 1) + ": " + x);
  }
});
console.log("===AROUND-CONTACT-EMAIL-BLOCK===");
const idx = l.findIndex((x) => x.includes("settings.contactEmail"));
if (idx >= 0) l.slice(idx - 6, idx + 12).forEach((x, i) => console.log(idx - 5 + i + ": " + x));
