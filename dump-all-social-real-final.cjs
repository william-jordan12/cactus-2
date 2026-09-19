const fs = require("fs");

const FILES = {
  lib: "src/lib/settings.ts",
  route: "src/app/api/settings/route.ts",
  form: "src/components/admin/SettingsForm.tsx",
  footer: "src/components/Footer.tsx",
};

const cur = {};
for (const k of Object.keys(FILES)) cur[k] = fs.readFileSync(FILES[k], "utf8");

function show(t, re, label) {
  const out = [];
  const lines = t.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (re.test(lines[i])) out.push(label + "L" + (i + 1) + ":" + lines[i]);
  }
  return out;
}

const s = [];
s.push(show(cur.lib, /whatsapp|contactEmail|phone|address|interface SiteSettings|settingsFallback|getSettings/, "LIB ").join("\n"));
s.push("----ROUTE----");
s.push(show(cur.route, /INSERT INTO|\$\d|\[whatsapp|typeof body\.|let whatsapp|contact_email/, isNull ? "R " : "R ").join("\n"));
s.push("----FORM----");
s.push(show(cur.form, /import |useState|label|value=\{settings|settings\(\)|body\.|JSON\.stringify|type="text"|name=/, "F ").join("\n"));
s.push("----FOOTER----");
s.push(show(cur.footer, /wa\.me|t\.me|facebook|weibo|social|href|icon|Icon|settings\./, "FO ").join("\n"));
console.log(s.join("\n"));
