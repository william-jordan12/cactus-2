const fs = require("fs");
const p = "src/components/admin/SettingsForm.tsx";
let b = fs.readFileSync(p, "utf8");
const anchor = 'setContactEmail(data.settings?.contactEmail ?? "");';
if (b.includes(anchor) && !/setPhone\(data\.settings\?\.phone \?\? ""\);/.test(b)) {
  const block = '\n      setPhone(data.settings?.phone ?? "");\n      setAddress(data.settings?.address ?? "");';
  b = b.replace(anchor, anchor + block);
  fs.writeFileSync(p, b);
  const v = fs.readFileSync(p, "utf8");
  console.log("WROTE-LOADER: true");
  console.log("VERIFY-LOADER-PHONE:", /setPhone\(data\.settings\?\.phone \?\? ""\);/.test(v));
  console.log("VERIFY-LOADER-ADDRESS:", /setAddress\(data\.settings\?\.address \?\? ""\);/.test(v));
  console.log("VERIFY-ONCE-EACH:", (v.match(/setPhone\(data\.settings\?\.phone/g) || []).length === 1, (v.match(/setAddress\(data\.settings\?\.address/g) || []).length === 1);
} else {
  console.log("WROTE-LOADER: false", b.includes(anchor), /setPhone\(data\.settings\?\.phone \?\? ""\);/.test(b));
}
