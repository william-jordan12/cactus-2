const { execSync } = require("child_process");
function sh(c) {
  try {
    return execSync(c, { encoding: "utf8", cwd: process.cwd() }).trim();
  } catch (e) {
    return String(e.stderr || e.message);
  }
}
const files = sh("git ls-tree -r HEAD --name-only src/components").split("\n").filter((x) => /SettingsForm|admin/i.test(x));
console.log("ADMIN-FILES:", files.join("|") || "NONE");
for (const f of files) {
  if (!/SettingsForm|cadmin|\.tsx$/.test(f)) continue;
  const src = sh('git show HEAD:"' + f.replace(/\\/g, "/") + '"');
  if (!src || src.startsWith("fatal")) { console.log("SHOW-FAIL:", f); continue; }
  console.log("===FILE:", f, "===");
  console.log("HAS-PHONE-STATE:", /const \[phone, setPhone\]/.test(src));
  console.log("HAS-ADDRESS-STATE:", /const \[address, setAddress\]/.test(src));
  console.log("INPUT-PHONE:", /id="settings-phone"/.test(src));
  console.log("INPUT-ADDRESS:", /id="settings-address"/.test(src));
  console.log("LOADER-SET-PHONE:", /setPhone\(data\.settings\?\.phone/.test(src));
  console.log("LOADER-SET-ADDRESS:", /setAddress\(data\.settings\?\.address/.test(src));
  console.log("SAVE-PHONE:", /phone,/.test(src) && /JSON\.stringify\(\{[^}]*phone/.test(src));
  console.log("SAVE-ADDRESS:", /address,/.test(src) && /JSON\.stringify\(\{[^}]*address/.test(src));
  const lines = src.split("\n");
  const imp = lines.findIndex((x) => x.includes("lucide-react"));
  console.log("LUCIDE-IMPORT:", imp >= 0 ? lines[imp].slice(0, 120) : "NONE");
}
