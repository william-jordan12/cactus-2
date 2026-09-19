const fs = require("fs");
const p = "src/components/admin/SettingsForm.tsx";
let b = fs.readFileSync(p, "utf8");
const l = b.split("\n");
console.log("===80-175===");
l.slice(79, 175).forEach((x, i) => console.log(80 + i + ": " + x));
