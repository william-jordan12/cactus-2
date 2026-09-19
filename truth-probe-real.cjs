const fs = require("fs");
const chain = [
  ["SettingsForm", "src/components/admin/SettingsForm.tsx"],
  ["Footer", "src/components/Footer.tsx"],
  ["settings lib", "src/lib/settings.ts"],
  ["env", "src/lib/env.ts"],
];
for (const [name, p] of chain) {
  const exists = fs.existsSync(p);
  if (!exists) { console.log(name.toUpperCase() + " EXISTS:false"); continue; }
  const b = fs.readFileSync(p, "utf8");
  console.log(name.toUpperCase() + " EXISTS:true LINES:" + b.split("\n").length);
  if (name === "SettingsForm") {
    console.log("  HAS-PHONE-INPUT:", /id="settings-phone"/.test(b));
    console.log("  HAS-ADDR-INPUT:", /id="settings-address"/.test(b));
    console.log("  LOADER-SET-PHONE:", /setPhone\(data\.settings\?\.phone \?\? ""\);/.test(b));
    console.log("  LOADER-SET-ADDR:", /setAddress\(data\.settings\?\.address \?\? ""\);/.test(b));
    console.log("  SAVE-ALL4:", /JSON\.stringify\(\{ whatsapp, contactEmail, phone, address \}\)/.test(b));
  }
  if (name === "Footer") {
    console.log("  HAS-SOCIAL-ROW:", /SOCIAL-ROW|wa\.me|t\.me/i.test(b));
    console.log("  RENDER-PHONE:", /settings\.phone/.test(b));
    console.log("  RENDER-ADDR:", /settings\.address/.test(b));
  }
}
try {
  const { execSync } = require("child_process");
  const o = execSync("git diff --stat", { encoding: "utf8" });
  console.log("DIFF-STAT:\n" + o.trim());
} catch (e) { console.log("DIFF-FAIL", e.message); }
