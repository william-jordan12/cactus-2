const fs = require("fs");
const s = fs.readFileSync("src/lib/settings.ts", "utf8");
const fb = s.match(/export function settingsFallback\(\): SiteSettings \{\n([\s\S]*?)\n\}/);
console.log("===FALLBACK-BODY===");
console.log(fb ? fb[1] : "NO-FALLBACK");
const g = s.match(/export async function getSettings[\s\S]*?\n\}/);
console.log("===GETS=PHONE/ADDRESS===", g ? /phone/.test(g[0]) && /address/.test(g[0]) : false);
