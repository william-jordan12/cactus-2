const fs = require("fs");
const p = "src/components/admin/SettingsForm.tsx";
const b = fs.readFileSync(p, "utf8");
const l = b.split("\n");
console.log("TOTAL:", l.length);
console.log("===STATES===");
const deps = l.filter((x) => /^{(useState|useEffect|useCallback)}|^import|from "lucide-react"|from "@\/lib/.test(x));
deps.forEach((x, i) => console.log("I" + (l.indexOf(x) + 1) + ": " + x));
l.forEach((x, i) => {
  if (/const \[(whatsapp|contactEmail|phone|address|adminUsername|loading|saving|saved|error),/.test(x)) {
    console.log("S" + (i + 1) + ": " + x);
  }
});
console.log("===ANCHOR-COUNT===");
console.log("A-LOADER-EMAIL:", /setContactEmail\(data\.settings\?\.contactEmail \?\? ""\);/.test(b));
console.log("A-LOADER-PHONE:", /setPhone\(data\.settings\?\.phone \?\? ""\);/.test(b));
console.log("A-LOADER-ADDRESS:", /setAddress\(data\.settings\?\.address \?\? ""\);/.test(b));
console.log("A-INPUT-PHONE:", /id="settings-phone"/.test(b));
console.log("A-INPUT-ADDRESS:", /id="settings-address"/.test(b));
console.log("===SAVE-BODY===");
const sb = l.filter((x) => /JSON\.stringify/.test(x));
console.log(sb.join("\n") || "NO-SAVE-BODY");
