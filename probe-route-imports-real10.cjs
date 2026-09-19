const fs = require("fs");
const t = fs.readFileSync("src/app/api/settings/route.ts", "utf8");
const L = t.split("\n");
for (let i = 0; i < L.length; i++) {
  if (/^import|initDb|getPool|settingsFallback|getSettings|export (async )?function|export async function|from "|from '/.test(L[i])) {
    console.log("R" + (i + 1) + ":" + L[i]);
  }
}
