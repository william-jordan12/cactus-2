const icons = Object.keys(require("lucide-react"));
const want = ["MessageCircle", "Share2", "Instagram", "Facebook", "Send", "PawPrint", "Mail", "Phone", "MapPin"];
want.forEach((k) => console.log("EXPO-" + k + ":", icons.includes(k)));
const fs = require("fs");
const b = fs.readFileSync("src/components/Footer.tsx", "utf8");
console.log("IMPORT-LINE:", b.split("\n").find((x) => /lucide-react/.test(x)));
