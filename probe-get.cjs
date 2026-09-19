const fs = require("fs");
const s = fs.readFileSync("src/lib/settings.ts", "utf8").split("\n");
console.log("===28-44===");
s.slice(27, 44).forEach((x, i) => console.log(28 + i + ": " + x));
const e = fs.readFileSync("src/lib/env.ts", "utf8");
console.log("ENV-HAS-footerPhone:", /footerPhone/.test(e));
console.log("ENV-HAS-footerAddress:", /footerAddress/.test(e));
console.log("ENV-PHONE-OWN:", e.split("\n").filter((l) => l.includes("footerPhone"))[0]);
console.log("ENV-ADDR-OWN:", e.split("\n").filter((l) => l.includes("footerAddress"))[0]);
