const fs = require("fs");
const P = "src/components/admin/SettingsForm.tsx";
const t = fs.readFileSync(P, "utf8");
const L = t.split("\n");
for (let i = 0; i < L.length; i++) {
  if (/useState|id="settings-|setWhatsapp|setContactEmail|setPhone|setAddress|JSON\.stringify|settings\?\./.test(L[i])) {
    console.log((i + 1) + ":" + L[i]);
  }
}
