const fs = require("fs");
const p = "src/app/api/settings/route.ts";
const b = fs.readFileSync(p, "utf8");
const l = b.split("\n");
const putStart = l.findIndex((x) => x.includes("export async function PUT"));
console.log("PUT-START:", putStart + 1);
console.log("===PUT 1-70===");
l.slice(putStart, Math.min(putStart + 70, l.length)).forEach((x, i) => console.log(putStart + 1 + i + ": " + x));
