const fs = require("fs");
const V = [];
function ok(c, t) { V.push(t + ":" + (c ? "OK" : "FAIL")); return c; }
function once(s, sub) { let n = 0, i = -1; while ((i = s.indexOf(sub, i + 1)) >= 0) n++; return n; }

// ---------- FILE 1: src/lib/settings.ts ----------
const p1 = "src/lib/settings.ts";
let a = fs.readFileSync(p1, "utf8");
let aW = false;

const a1_int = "export interface SiteSettings {\n\twhatsapp: string;\n\tcontactEmail: string;\n\tphone: string;\n\taddress: string;\n}\n";
const a2_fb = "export function settingsFallback(): SiteSettings {\n\treturn {\n\t\twhatsapp: sanitizeWhatsApp(env.adminWhatsApp),\n\t\tcontactEmail: env.contactEmail,\n\t\tphone: env.footerPhone,\n\t\taddress: env.footerAddress,\n\t};\n}\n";
const a3_map = "SELECT key, value FROM ssv_settings WHERE key IN ('whatsapp', 'contact_email', 'phone', 'address')";
const a4_ret = "\twhatsapp: map.get(\"whatsapp\") || fallback.whatsapp,\n\tcontactEmail: map.get(\"contact_email\") || fallback.contactEmail,\n\tphone: map.get(\"phone\") || fallback.phone,\n\taddress: map.get(\"address\") || fallback.address,\n";

const need_int = [
  "export interface SiteSettings {",
  "\twhatsapp: string;",
  "\tcontactEmail: string;",
  "\tphone: string;",
  "\taddress: string;",
  "}",
].join("\n");
const hasPrevLib = a.includes("facebook: string;") && a.includes("telegram: string;") && a.includes("instagram: string;");

if (
  ok(once(a, "export interface SiteSettings {") === 1, "A1-INT") &&
  ok(once(a, "whatsapp: string;") === 1, "A2-WA") &&
  ok(once(a, "contactEmail: string;") === 1, "A3-CE") &&
  ok(once(a, "phone: string;") === 1, "A4-PH") &&
  ok(once(a, "address: string;") === 1, "A5-AD") &&
  ok(a.includes(a3_map), "A6-SELECT") &&
  ok(!hasPrevLib, "A7-NOT-ALREADY")
) {
  a = a.replace(
    "whatsapp: string;\n\tcontactEmail: string;\n\tphone: string;\n\taddress: string;\n}",
    "whatsapp: string;\n\tcontactEmail: string;\n\tphone: string;\n\taddress: string;\n\tfacebook: string;\n\ttelegram: string;\n\tinstagram: string;\n}"
  );
  a = a.replace(
    "phone: env.footerPhone,\n\t\taddress: env.footerAddress,\n\t};",
    "phone: env.footerPhone,\n\t\taddress: env.footerAddress,\n\t\tfacebook: \"https://www.facebook.com/petssmartys/\",\n\t\ttelegram: \"https://t.me/petssmartys\",\n\t\tinstagram: \"https://www.instagram.com/petssmartys/\",\n\t};"
  );
  a = a.replace(a3_map, "SELECT key, value FROM ssv_settings WHERE key IN ('whatsapp', 'contact_email', 'phone', 'address', 'facebook', 'telegram', 'instagram')");
  a = a.replace(
    "phone: map.get(\"phone\") || fallback.phone,\n\taddress: map.get(\"address\") || fallback.address,\n",
    "phone: map.get(\"phone\") || fallback.phone,\n\taddress: map.get(\"address\") || fallback.address,\n\tfacebook: map.get(\"facebook\") || fallback.facebook,\n\ttelegram: map.get(\"telegram\") || fallback.telegram,\n\tinstagram: map.get(\"instagram\") || fallback.instagram,\n"
  );
  fs.writeFileSync(p1, a);
  aW = true;
}
a = fs.readFileSync(p1, "utf8");
V.push("LIB-WRITTEN:" + aW);
V.push("LIB-V-FB:" + (once(a, "facebook: string;") === 1));
V.push("LIB-V-TG:" + (once(a, "telegram: string;") === 1));
V.push("LIB-V-IG:" + (once(a, "instagram: string;") === 1));

// ---------- FILE 2: route.ts ----------
const p2 = "src/app/api/settings/route.ts";
let r = fs.readFileSync(p2, "utf8");
let rW = false;

const r_lets = "let whatsapp = settingsFallback().whatsapp;\n\t\tlet contactEmail = settingsFallback().contactEmail;\n\t\tlet phone = settingsFallback().phone;\n\t\tlet address = settingsFallback().address;";
const r_sel = "[whatsapp, contactEmail, phone, address]\n\t\t);";
const r_ins = "('whatsapp', $1), ('contact_email', $2), ('phone', $3), ('address', $4)";

const hasPrevR = r.includes("let facebook = settingsFallback().facebook;") && r.includes("let telegram = settingsFallback().telegram;") && r.includes("let instagram = settingsFallback().instagram;");

if (
  ok(once(r, "let whatsapp = settingsFallback().whatsapp;") === 1, "R1-LET-WA") &&
  ok(once(r, "let contactEmail = settingsFallback().contactEmail;") === 1, "R2-LET-CE") &&
  ok(once(r, "let phone = settingsFallback().phone;") === 1, "R3-LET-PH") &&
  ok(once(r, "let address = settingsFallback().address;") === 1, "R4-LET-AD") &&
  ok(r.includes(r_ins), "R5-INSERT") &&
  ok(r.includes(r_sel), "R6-BIND") &&
  ok(!hasPrevR, "R7-NOT-ALREADY")
) {
  r = r.replace(
    "let address = settingsFallback().address;",
    "let address = settingsFallback().address;\n\t\tlet facebook = settingsFallback().facebook;\n\t\tlet telegram = settingsFallback().telegram;\n\t\tlet instagram = settingsFallback().instagram;"
  );
  r = r.replace(
    "if (typeof body.address === \"string\") {\n\t\t\taddress = body.address.trim();\n\t\t}",
    "if (typeof body.address === \"string\") {\n\t\t\taddress = body.address.trim();\n\t\t}\n\t\tif (typeof body.facebook === \"string\") {\n\t\t\tfacebook = body.facebook.trim();\n\t\t}\n\t\tif (typeof body.telegram === \"string\") {\n\t\t\ttelegram = body.telegram.trim();\n\t\t}\n\t\tif (typeof body.instagram === \"string\") {\n\t\t\tinstagram = body.instagram.trim();\n\t\t}"
  );
  r = r.replace(r_ins, "('whatsapp', $1), ('contact_email', $2), ('phone', $3), ('address', $4), ('facebook', $5), ('telegram', $6), ('instagram', $7)");
  r = r.replace(r_sel, "[whatsapp, contactEmail, phone, address, facebook, telegram, instagram]\n\t\t);");
  fs.writeFileSync(p2, r);
  rW = true;
}
r = fs.readFileSync(p2, "utf8");
V.push("ROUTE-WRITTEN:" + rW);
V.push("ROUTE-V-LET-FB:" + (once(r, "let facebook = settingsFallback().facebook;") === 1));
V.push("ROUTE-V-LET-TG:" + (once(r, "let telegram = settingsFallback().telegram;") === 1));
V.push("ROUTE-V-LET-IG:" + (once(r, "let instagram = settingsFallback().instagram;") === 1));
V.push("ROUTE-V-BIND7:" + r.includes("[whatsapp, contactEmail, phone, address, facebook, telegram, instagram]"));
V.push("ROUTE-V-INS7:" + r.includes("('whatsapp', $1), ('contact_email', $2), ('phone', $3), ('address', $4), ('facebook', $5), ('telegram', $6), ('instagram', $7)"));
V.push("ROUTE-V-READ-FB:" + r.includes("typeof body.facebook === \"string\""));
V.push("ROUTE-V-READ-TG:" + r.includes("typeof body.telegram === \"string\""));
V.push("ROUTE-V-READ-IG:" + r.includes("typeof body.instagram === \"string\""));

// ---------- FILE 3: Footer.tsx ----------
const p3 = "src/components/Footer.tsx";
let f = fs.readFileSync(p3, "utf8");
let fW = false;
const f_fb = "href=\"https://www.facebook.com/petssmartys/\"";
const f_tg = "href=\"https://t.me/petssmartys\"";
const f_ig = "href=\"https://www.instagram.com/petssmartys/\""; // may not exist currently
const hasPrevF = f.includes("settings.facebook ||") && f.includes("settings.telegram ||");

if (
  ok(once(f, f_fb) === 1, "F1-FB-HREF") &&
  ok(once(f, f_tg) === 1, "F2-TG-HREF") &&
  ok(!hasPrevF, "F3-NOT-ALREADY") &&
  ok(f.includes("const settings = getSettings();") || f.includes("const { settings }"), "F4-SETTINGS")
) {
  f = f.replace(f_fb, "href={settings.facebook || \"https://www.facebook.com/petssmartys/\"}");
  f = f.replace(f_tg, "href={settings.telegram || \"https://t.me/petssmartys\"}");
  if (once(f, f_ig) === 1 && !f.includes("settings.instagram ||")) {
    f = f.replace(f_ig, "href={settings.instagram || \"https://www.instagram.com/petssmartys/\"}");
  }
  fs.writeFileSync(p3, f);
  fW = true;
}
f = fs.readFileSync(p3, "utf8");
V.push("FOOTER-WRITTEN:" + fW);
V.push("FOOTER-V-FB:" + f.includes("settings.facebook || \"https://www.facebook.com/petssmartys/\""));
V.push("FOOTER-V-TG:" + f.includes("settings.telegram || \"https://t.me/petssmartys\""));

console.log(V.join("\n"));
