const fs = require("fs");
const b = fs.readFileSync("src/components/Footer.tsx", "utf8");
const l = b.split("\n");
console.log("===26-40===");
l.slice(25, 40).forEach((x, i) => console.log(26 + i + ": " + x));
console.log("IMPORT-LINE:", l.find((x) => x.includes("lucide-react")));
console.log("HAS-Instagram:", /Instagram/.test(b));
console.log("HAS-Facebook:", /Facebook/.test(b));
