const fs = require("fs");
const V = [];
function ok(c, t) { V.push(t + ":" + (c ? "OK" : "FAIL")); return c; }
function once(s, sub) { return s.split(sub).length - 1; }

// ================= FILE 1: lib =================
const p1 = "src/lib/settings.ts";
let a = fs.readFileSync(p1, "utf8");
let aW = false;

const A_IFACE = "export interface SiteSettings {\n  whatsapp: string;\n  contactEmail: string;\n  phone: string;\n  address: string;\n}";
const A_FALLBACK = "    whatsapp: sanitizeWhatsApp(env.adminWhatsApp),\n    contactEmail: env.contactEmail,\n    phone: env.footerPhone,\n    address: env.footerAddress,";
const A_SELECT = "WHERE key IN ('whatsapp', 'contact_email', 'phone', 'address')";
const A_MAP = "      whatsapp: map.get(\"whatsapp\") || fallback.whatsapp,\n      contactEmail: map.get(\"contact_email\") || fallback.contactEmail,\n      phone: map.get(\"phone\") || fallback.phone,\n      address: map.get(\"address\") || fallback.address,";

const N_IFACE = "  facebook: string;\n  telegram: string;\n  instagram: string;";
const N_FALLBACK = "\n    facebook: \"https://www.facebook.com/petssmartys/\",\n    telegram: \"https://t.me/petssmartys\",\n    instagram: \"https://www.instagram.com/petssmartys/\"\n },".replace('\n },', '\n  },');
const N_SELECT = ", 'facebook', 'telegram', 'instagram'";
const N_MAP = "\n      facebook: map.get(\"facebook\") || fallback.facebook,\n      telegram: map.get(\"telegram\") || fallback.telegram,\n      instagram: map.get(\"instagram\") || fallback.instagram,";

const hasPrev = a.includes("facebook: string;") && a.includes("telegram: string;");

if (
  ok(once(a, A_IFACE) === 1, "AR-IFACE") &&
  ok(a.includes(A_FALLBACK), "AR-FALLBACK") &&
  ok(a.includes(A_SELECT), "AR-SELECT") &&
  ok(a.includes(A_MAP), "AR-MAP") &&
  ok(!hasPrev, "AR-NOT-PREV")
) {
  a = a.replace(A_IFACE, A_IFACE.replace("\n}", N_IFACE + "\n}"));
  a = a.replace(A_FALLBACK, A_FALLBACK + "\n    facebook: \"https://www.facebook.com/petssmartys/\",\n    telegram: \"https://t.me/petssmartys\",\n    instagram: \"https://www.instagram.com/petssmartys/\"");
  a = a.replace(A_SELECT, A_SELECT.replace(")", N_SELECT + ")"));
  a = a.replace(A_MAP, A_MAP + "\n      facebook: map.get(\"facebook\") || fallback.facebook,\n      telegram: map.get(\"telegram\") || fallback.telegram,\n      instagram: map.get(\"instagram\") || fallback.instagram,");
  fs.writeFileSync(p1, a);
  aW = true;
}
a = fs.readFileSync(p1, "utf8");
ok(once(a, "facebook: string;") === 1, "AV-IFACE-FB");
ok(once(a, "telegram: string;") === 1, "AV-IFACE-TG");
ok(once(a, "instagram: string;") === 1, "AV-IFACE-IG");
ok(a.includes("map.get(\"facebook\") || fallback.facebook,"), "AV-MAP-FB");
ok(a.includes("map.get(\"telegram\") || fallback.telegram,"), "AV-MAP-TG");
ok(a.includes("map.get(\"instagram\") || fallback.instagram,"), "AV-MAP-IG");
V.push("LIB-WRITTEN:" + aW);

// ================= FILE 2: route =================
const p2 = "src/app/api/settings/route.ts";
let r = fs.readFileSync(p2, "utf8");
let rW = false;
const R_LETS = "    let whatsapp = settingsFallback().whatsapp;\n    let contactEmail = settingsFallback().contactEmail;\n    let phone = settingsFallback().phone;\n    let address = settingsFallback().address;";
const R_READS = "    if (typeof body.address === \"string\") {\n      address = body.address.trim();\n    }";
const R_VALUES = "VALUES ('whatsapp', $1), ('contact_email', $2), ('phone', $3), ('address', $4)";
const R_BIND = "      [whatsapp, contactEmail, phone, address]\n    );";

const hasPrevR = r.includes("let facebook = settingsFallback().facebook;");

if (
  ok(once(r, R_LETS) === 1, "AR-R-LETS") &&
  ok(r.includes(R_READS), "AR-R-READS") &&
  ok(once(r, R_VALUES) === 1, "AR-R-VALUES") &&
  ok(once(r, R_BIND) === 1, "AR-R-BIND") &&
  ok(!hasPrevR, "AR-R-NOT-PREV")
) {
  r = r.replace(R_LETS, R_LETS + "\n    let facebook = settingsFallback().facebook;\n    let telegram = settingsFallback().telegram;\n    let instagram = settingsFallback().instagram;");
  r = r.replace(R_READS, R_READS + "\n    if (typeof body.facebook === \"string\") {\n      facebook = body.facebook.trim();\n    }\n    if (typeof body.telegram === \"string\") {\n      telegram = body.telegram.trim();\n    }\n    if (typeof body.instagram === \"string\") {\n      instagram = body.instagram.trim();\n    }");
  r = r.replace(R_VALUES, "VALUES ('whatsapp', $1), ('contact_email', $2), ('phone', $3), ('address', $4), ('facebook', $5), ('telegram', $6), ('instagram', $7)");
  r = r.replace(R_BIND, "      [whatsapp, contactEmail, phone, address, facebook, telegram, instagram]\n    );");
  fs.writeFileSync(p2, r);
  rW = true;
}
r = fs.readFileSync(p2, "utf8");
ok(once(r, "let facebook = settingsFallback().facebook;") === 1, "AV-R-LET-FB");
ok(once(r, "let telegram = settingsFallback().telegram;") === 1, "AV-R-LET-TG");
ok(once(r, "let instagram = settingsFallback().instagram;") === 1, "AV-R-LET-IG");
ok(r.includes("typeof body.facebook === \"string\""), "AV-R-READ-FB");
ok(r.includes("typeof body.telegram === \"string\""), "AV-R-READ-TG");
ok(r.includes("typeof body.instagram === \"string\""), "AV-R-READ-IG");
ok(r.includes("('facebook', $5), ('telegram', $6), ('instagram', $7)"), "AV-R-VALUES7");
ok(r.includes("[whatsapp, contactEmail, phone, address, facebook, telegram, instagram]"), "AV-R-BIND7");
V.push("ROUTE-WRITTEN:" + rW);

// ================= FILE 3: admin form =================
const p3 = "src/components/admin/SettingsForm.tsx";
let fo = fs.readFileSync(p3, "utf8");
let foW = false	;

const F_STATE = "  const [whatsapp, setWhatsapp] = useState(\"\");\n  const [contactEmail, setContactEmail] = useState(\"\");\n  const [phone, setPhone] = useState(\"\");\n  const [address, setAddress] = useState(\"\");";
const F_LOAD = "      setWhatsapp(data.settings?.whatsapp ?? \"\");\n      setContactEmail(data.settings?.contactEmail ?? \"\");\n      setPhone(data.settings?.phone ?? \"\");\n      setAddress(data.settings?.address ?? \"\");";
const F_SAVE = "        body: JSON.stringify({ whatsapp, contactEmail, phone, address }),";

const hasPrevF = fo.includes("setFacebook(");

if (
  ok(once(fo, F_STATE) === 1, "AR-F-STATE") &&
  ok(once(fo, F_LOAD) === 1, "AR-F-LOAD") &&
  ok(once(fo, F_SAVE) === 1, "AR-F-SAVE") &&
  ok(!hasPrevF, "AR-F-NOT-PREV")
) {
  fo = fo.replace(F_STATE, F_STATE + "\n  const [facebook, setFacebook] = useState(\"\");\n  const [telegram, setTelegram] = useState(\"\");\n  const [instagram, setInstagram] = useState(\"\");");
  fo = fo.replace(F_LOAD, F_LOAD + "\n      setFacebook(data.settings?.facebook ?? \"\");\n      setTelegram(data.settings?.telegram ?? \"\");\n      setInstagram(data.settings?.instagram ?? \"\");");
  fo = fo.replace(F_SAVE, "        body: JSON.stringify({ whatsapp, contactEmail, phone, address, facebook, telegram, instagram }),");
  const ANCH = "id=\"settings-address\"";
  const ia = fo.indexOf(ANCH);
  if (ok(ia > 0, "AR-F-ADDR-ANCHOR")) {
    const nl = fo.indexOf("\n", ia);
    const insertAt = fo.indexOf("\n        </div>\n", nl);
    if (insertAt > 0) {
      const block = [
        "            <label className=\"block\">",
        "              <span className=\"flex items-center gap-2 text-sm font-medium text-stone-700\">",
        "                Facebook URL",
        "              </span>",
        "              <input",
        "                id=\"settings-facebook\"",
        "                type=\"url\"",
        "                value={facebook}",
        "                onChange={(e) => setFacebook(e.target.value)}",
        "                className=\"mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200\"",
        "                placeholder=\"https://facebook.com/yourpage\"",
        "              />",
        "              <span className=\"mt-1 block text-xs text-stone-400\">",
        "                Footer Facebook icon opens this link.",
        "              </span>",
        "            </label>",
        "            <label className=\"block\">",
        "              <span className=\"flex items-center gap-2 text-sm font-medium text-stone-700\">",
        "                Telegram URL",
        "              </span>",
        "              <input",
        "                id=\"settings-telegram\"",
        "                type=\"url\"",
        "                value={telegram}",
        "                onChange={(e) => setTelegram(e.target.value)}",
        "                className=\"mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200\"",
        "                placeholder=\"https://t.me/yourchannel\"",
        "              />",
        "              <span className=\"mt-1 block text-xs text-stone-400\">",
        "                Footer Telegram icon opens this link.",
        "              </span>",
        "            </label>",
        "            <label className=\"block\">",
        "              <span className=\"flex items-center gap-2 text-sm font-medium text-stone-700\">",
        "                Instagram URL",
        "              </span>",
        "              <input",
        "                id=\"settings-instagram\"",
        "                type=\"url\"",
        "                value={instagram}",
        "                onChange={(e) => setInstagram(e.target.value)}",
        "                className=\"mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200\"",
        "                placeholder=\"https://instagram.com/yourhandle\"",
        "              />",
        "              <span className=\"mt-1 block text-xs text-stone-400\">",
        "                Footer Instagram icon opens this link.",
        "              </span>",
        "            </label>",
        ""
      ].join("\n");
      fo = fo.slice(0, insertAt) + block + fo.slice(insertAt);
      fs.writeFileSync(p3, fo);
      foW = true;
    }
  }
}
fo = fs.readFileSync(p3, "utf8");
ok(once(fo, "setFacebook(") === 1, "AV-F-USE-FB");
ok(once(fo, "setTelegram(") === 1, "AV-F-USE-TG");
ok(once(fo, "setInstagram(") === 1, "AV-F-USE-IG");
ok(fo.includes("JSON.stringify({ whatsapp, contactEmail, phone, address, facebook, telegram, instagram })"), "AV-F-SAVE7");
ok(fo.includes("id=\"settings-facebook\""), "AV-F-INPUT-FB");
ok(fo.includes("id=\"settings-telegram\""), "AV-F-INPUT-TG");
ok(fo.includes("id=\"settings-instagram\""), "AV-F-INPUT-IG");
V.push("FORM-WRITTEN:" + foW);

// ================= FILE 4: footer =================
const p4 = "src/components/Footer.tsx";
let f = fs.readFileSync(p4, "utf8");
let fW = false;
const FB_OLD = "                href=\"https://www.facebook.com/petssmartys/\"";
const TG_OLD = "                href=\"https://t.me/petssmartys\"";
const hasFb = f.includes("settings.facebook ||");
const hasTg = f.includes("settings.telegram ||");

if (
  ok(once(f, FB_OLD) === 1, "AR-F-FB-OLD") &&
  ok(once(f, TG_OLD) === 1, "AR-F-TG-OLD") &&
  ok(!hasFb && !hasTg, "AR-F-NOT-PREV")
) {
  f = f.replace(FB_OLD, "                href={settings.facebook || \"https://www.facebook.com/petssmartys/\"}");
  f = f.replace(TG_OLD, "                href={settings.telegram || \"https://t.me/petssmartys\"}");
  fs.writeFileSync(p4, f);
  fW = true;
}
f = fs.readFileSync(p4, "utf8");
ok(f.includes("href={settings.facebook || \"https://www.facebook.com/petssmartys/\"}"), "AV-F-FB-NEW");
ok(f.includes("href={settings.telegram || \"https://t.me/petssmartys\"}"), "AV-F-TG-NEW");
ok(!f.includes("                href=\"https://www.facebook.com/petssmartys/\""), "AV-F-FB-OLD-GONE");
ok(!f.includes("                href=\"https://t.me/petssmartys\""), "AV-F-TG-OLD-GONE");
V.push("FOOTER-WRITTEN:" + fW);

console.log(V.join("\n"));
