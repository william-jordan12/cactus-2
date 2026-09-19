const fs = require("fs");
const b = fs.readFileSync("src/components/Footer.tsx", "utf8");
console.log("IMPORT-LINE:", b.split("\n").find((x) => x.includes("lucide-react")));
try {
  const lucide = require("lucide-react");
  const names = Object.keys(lucide);
  console.log("LUCIDE-COUNT:", names.length);
  for (const n of ["Share", "Share2", "MessageCircle", "MessagesSquare", "PawPrint", "Heart", "Mail", "Phone", "MapPin", "Send"]) {
    console.log("EXPORTED-" + n + ":", names.includes(n));
  }
} catch (e) {
  console.log("LUCIDE-LOAD-FAIL:", e.message);
}
