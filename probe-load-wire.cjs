const fs = require("fs");
const b = fs.readFileSync("src/components/admin/SettingsForm.tsx", "utf8");
const l = b.split("\n");
console.log("TOTAL:", l.length);
const ld = l.findIndex((x) => x.includes("setContactEmail(data.settings?.contactEmail"));
console.log("LOADER-LINE:", ld + 1);
l.slice(ld, ld + 8).forEach((x, i) => console.log(ld + 1 + i + ": " + x));
console.log("===PHONE/ADDR STATE===");
l.forEach((x, i) => {
  if (/const \[(phone|address|whatsapp|contactEmail),/.test(x)) console.log(i + 1 + ": " + x);
});
console.log("===SAVE BODY===");
l.forEach((x, i) => {
  if (/JSON\.stringify/.test(x) && /whatsapp|contactEmail/.test(x)) console.log(i + 1 + ": " + x);
});
console.log("HAS-PHONE-INPUT:", /id="settings-phone"/.test(b));
console.log("HAS-ADDR-INPUT:", /id="settings-address"/.test(b));
