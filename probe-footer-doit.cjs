const fs = require("fs");
const p = "src/components/Footer.tsx";
const b = fs.readFileSync(p, "utf8");
const lines = b.split("\n");
console.log("FILE-STARTS:", JSON.stringify(b.slice(0, 60)));
console.log("CONTAINS-PROBE-SOURCE:", /readFileSync\(/.test(b) && /probe/.test(b));
console.log("CONTAINS-use-client:", b.startsWith('"use client"'));
console.log("TOTAL-LINES:", lines.length published);
console.log("L1-4:", JSON.stringify(lines[0]), JSON.stringify(lines[1]), JSON.stringify(lines[2]), JSON.stringify(lines[3]));
const exp = /export default function Footer\(\)\s*\{/;
console.log("HAS-FN-DECL:", exp.test(b));
const hasImport = /from\s*["']@\/lib\/settings["']/.test(b);
console.log("HAS-SETTINGS-IMPORT:", hasImport);
const r1 = b.replace(
  /<span>\+1 \(555\) PET-TAIL<\/span>/,
  "{settings && settings.phone}"
);
const r2 = r1.replace(
  /<span>2754 Meadow Lane, Phoenix, AZ 85001<\/span>/,
  "{settings && settings.address}"
);
console.log("EDIT1-MATCHED:", r1 !== b);
console.log("EDIT2-MATCHED:", r2 !== r1);
if (r2 !== r1) {
  fs.writeFileSync(p, r2);
  console.log("WROTE:", true);
  const check = fs.readFileSync(p, "utf8");
  console.log("VERIFY-phone:", /\{settings && settings\.phone\}/.test(check));
  console.log("VERIFY-address:", /\{settings && settings\.address\}/.test(check));
} else {
  console.log("WROTE: NO-MATCH, NO-WRITE");
}
