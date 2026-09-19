const fs = require("fs");
function once(t, s) { let n = 0, i = -1; while ((i = t.indexOf(s, i + 1)) >= 0) n++; return n; }

const p1 = "src/components/admin/SettingsForm.tsx";
const p2 = "src/components/Footer.tsx";
const p3 = "src/lib/settings.ts";
const p4 = "src/app/api/settings/route.ts";

console.log("=====F1=====");
{
  const t = fs.readFileSync(p1, "utf8").split("\n");
  for (let i = 21; i < Math.min(55, t.length); i++) console.log("S" + i + ":" + t[i]);
}
console.log("=====F2=====");
{
  const t = fs.readFileSync(p2, "utf8").split("\n");
}
const J = fs.readFileSync(p2, "utf8");
console.log("WA-ME-COUNT:" + once(J, "wa.me"));
console.log("FB-ONCE:" + once(J, "https://www.facebook.com/petssmartys/"));
console.log("TG-ONCE:" + once(J, "https://t.me/petssmartys"));
console.log("IG-ONCE:" + once(J, "instagram.com"));
const L = J.split("\n");
for (let i = 70; i < Math.min(95, L.length); i++) console.log("F" + i + ":" + L[i]);
console.log("=====F3=====");
{
  const t = fs.readFileSync(p3, "utf8").split("\n");
  for (let i = 0; i < Math.min(75, t.length); i++) {
    if (/interface|facebook|telegram|instagram|whatsapp|contactEmail|phone|address|SELECT|map\.get|settingsFallback|return \{|env\./.test(t[i])) console.log("L" + i + ":" + t[i]);
  }
}
console.log("=====F4=====");
{
  const t = fs.readFileSync(p4, "utf8").split("\n");
  for (let i = 30; i < Math.min(80, t.length); i++) {
    if (/let |typeof body|INSERT|VALUES|\$1|\$2|\$3|\$4|\[whatsapp|ON CONFLICT/.test(t[i])) console.log("R" + i + ":" + t[i]);
  }
}
