const fs = require("fs");
const r = fs.readFileSync("src/app/api/settings/route.ts", "utf8");
const put = r.match(/export async function PUT[\s\S]*?\n}/);
console.log("===PUT===");
console.log(put ? put[0] : "NO-PUT");
console.log("PUT-SAVES-PHONE:", /phone/.test(r));
console.log("PUT-SAVES-ADDRESS:", /address/.test(r));
console.log("HAS-BOTH-KEYS:", /phone[\s\S]{0,400}address/.test(r));
