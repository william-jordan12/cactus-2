const fs = require("fs");
const b = fs.readFileSync("src/components/Footer.tsx", "utf8");
const l = b.split("\n");
console.log("BIND-await-getSettings:", /const siteSettings = await getSettings\(\);/.test(b));
console.log("ASYNC-FN:", /export default async function Footer\(\)/.test(b));
console.log("USES-getSettings-import:", /import\s*\{[^}]*getSettings[^}]*\}\s*from\s*"@\/lib\/settings"/.test(b));
const idx = l.findIndex((x) => x.includes("Contact"));
console.log("CONTACT-INDEX:", idx + 1);
l.slice(idx, idx + 18).forEach((x, i) => console.log(idx + 1 + i + ": " + x));
