const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");
const l = b.split("\n");

const letAnchor = /let whatsapp = settingsFallback\(\)\.whatsapp;/.test(b);
const letContact = /let contactEmail = settingsFallback\(\)\.contactEmail;/.test(b);
const hasPhoneLet = /let phone = settingsFallback\(\)\.phone;/.test(b);
const hasAddrLet = /let address = settingsFallback\(\)\.address;/.test(b);
console.log("LET-WA:", letAnchor, "LET-CE:", letContact, "LET-PH:", hasPhoneLet, "LET-AD:", hasAddrLet);
console.log("READ-PH:", /typeof body\.phone === "string"/.test(b));
console.log("READ-AD:", /typeof body\.address === "string"/.test(b));
const bindIdx = l.findIndex((x) => /\[whatsapp, contactEmail/, test(x));
console.log("BIND-IDX:", bindIdx + 1, bindIdx >= 0 ? l[bindIdx].trim() : "");

let wrote = false;
if (letWhats && letContact && !hasPhoneLet && !hasAddrLet) {
  const a1 = "  let whatsapp = settingsFallback().whatsapp;";
  const a2 = "  let contactEmail = settingsFallback().contactEmail;";
  const add = a2 + "\n" + "  let phone = settingsFallback().phone;" + "\n" + "  let address = settingsFallback().address;";
  b = b.replace(a2, add);
  wrote = true;
}
const v = fs.readFileSync(p, "utf8");
console.log("WROTE:", wrote);
console.log("V1:", /let phone = settingsFallback\(\)\.phone;/.test(v));
console.log("V2:", /let address = settingsFallback\(\)\.address;/.test(v));
