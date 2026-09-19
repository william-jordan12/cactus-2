const fs = require("fs");
const path = require("path");
function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (!/node_modules|\.next|\.git/.test(e.name)) walk(f, out);
    } else if (/SettingsForm\.tsx$/.test(e.name)) out.push(f);
  }
  return out;
}
const files = walk("src");
console.log("FORM-FILES:", files.length, files.map((x) => x.replace(/\\/g, "/")).join("|"));
if (!files.length) process.exit(0);
const p = files[0].replace(/\\/g, "/");
let b = fs.readFileSync(p, "utf8");
console.log("HAS-PHONE-STATE:", /const \[phone, setPhone\]/.test(b));
console.log("HAS-ADDRESS-STATE:", /const \[address, setAddress\]/.test(b));
console.log("LOADER-SET-PHONE:", /setPhone\(data\.settings\?\.phone \?\? ""\);/.test(b));
console.log("LOADER-SET-ADDRESS:", /setAddress\(data\.settings\?\.address \?\? ""\);/.test(b));
console.log("SAVE-PHONE:", /phone,/.test(b) && /setPhone\(""\)/.test(b) === false);
console.log("IMPORT-LUCIDE:", /from "lucide-react"/.test(b));
console.log("HAS-INPUT-PHONE:", /id="settings-phone"/.test(b));
console.log("HAS-INPUT-ADDRESS:", /id="settings-address"/.test(b));
