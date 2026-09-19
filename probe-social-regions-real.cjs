const fs = require("fs");
function grab(p, re, tag) {
  const t = fs.readFileSync(p, "utf8");
  const out = [];
  const lines = t.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (re.test(lines[i])) out.push(tag + "L" + (i + 1) + ": " + lines[i]);
  }
  return out.join("\n");
}
const res = [];
res.push(grab("src/components/Footer.tsx", /wa\.me|t\.me|facebook\.com|https?:|href=|icon:|Icon|whatsapp|telegram|instagram|PetssMartys|petssmartys|social/i, "FOOT "));
res.push("----");
res.push(grab("src/components/admin/SettingsForm.tsx", /settings\.|setSettings|whatsapp|contactEmail|phone|address|body\.|type="text"|name=|label|onChange|value=/i, "FORM "));
process.stdout.write(res.join("\n"));
