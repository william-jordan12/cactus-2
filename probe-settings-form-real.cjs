const fs = require("fs");
const b = fs.readFileSync("src/components/admin/SettingsForm.tsx", "utf8");
const l = b.split("\n");
console.log("TOTAL:", l.length);
const i = l.findIndex((x) => x.includes("useState"));
console.log("STATE-LINES", i + 1, "=>", l[i], "||", l[i + 1]);
l.forEach((x, n) => {
  if (/<input|name=|label|value=|onSave|body:/ || /whatsapp|contactEmail/.test(x)) {
    const key = /name=["']([^"']+)/.exec(x);
    console.log(n + 1 + ": " + (key ? "NAME={" + key[1] + "} " : "") + x.slice(0, 110));
  }
});
