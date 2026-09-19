const fs = require("fs");
const b = fs.readFileSync("src/components/Footer.tsx", "utf8");
const l = b.split("\n");
const shareLines = [];
l.forEach((x, i) => {
  if (/Share/.test(x)) shareLines.push(i + 1);
});
console.log("SHARE-LINES:", shareLines.join(","));
l.slice(0, 3).forEach((x, i) => console.log(i + 1 + ": " + x));
shareLines.slice(1).forEach((n) => {
  const line = l[n - 1];
  const pos = line.indexOf("Share");
  console.log("MLINE-" + n + ": |" + line.slice(0, pos) + "<<<" + line.slice(pos, pos + 7) + ">>>|");
});
