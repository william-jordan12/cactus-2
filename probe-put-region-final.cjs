const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");
const l = b.split("\n");
const s = l.findIndex((x) => x.includes("export async function PUT"));
const e = l.findIndex((x) => x.includes("Failed to save settings"));
console.log("PUT:", s + 1, "END:", e + 1);
if (s >= 0 && e > s) l.slice(s, e).forEach((x, i) => console.log(s + i + 1 + ": " + x));
