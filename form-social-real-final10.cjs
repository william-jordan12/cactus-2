const fs = require("fs");
const P = "src/components/admin/SettingsForm.tsx";
let t = fs.readFileSync(P, "utf8");
const S = [];
function ok(c, tag) { S.push(tag + ":" + (c ? "OK" : "FAIL")); return c; }
function cnt(s, sub) { let n = 0, i = -1; while ((i = s.indexOf(sub, i + 1)) >= 0) n++; return n; }

const A_ST = "  const [address, setAddress] = useState(\"\");\n";
const A_LO = "      setAddress(data.settings?.address ?? \"\");\n";
const A_SV = "        body: JSON.stringify({ whatsapp, contactEmail, phone, address }),\n";
const A_BX = "id=\"settings-address\"";

const N_ST = "  const [facebook, setFacebook] = useState(\"\");\n  const [telegram, setTelegram] = useState(\"\");\n  const [instagram, setInstagram] = useState(\"\");\n";
const N_LO = "      setFacebook(data.settings?.facebook ?? \"\");\n      setTelegram(data.settings?.telegram ?? \"\");\n      setInstagram(data.settings?.instagram ?? \"\");\n";
const N_SV = "        body: JSON.stringify({ whatsapp, contactEmail, phone, address, facebook, telegram, instagram }),\n";

const B1 = "            <label className=\"block\">\n              <span className=\"flex items-center gap-2 text-sm font-medium text-stone-700\">\n                Facebook URL\n              </span>\n              <input\n                id=\"settings-facebook\"\n                type=\"url\"\n                value={facebook}\n                onChange={(e) => setFacebook(e.target.value)}\n                className=\"mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200\"\n                placeholder=\"https://www.facebook.com/yourpage\"\n              />\n              <span className=\"mt-1 block text-xs text-stone-400\">\n                Footer Facebook icon opens this link.\n              </span>\n            </label>\n";
const B2 = "            <label className=\"block\"><span className=\"flex items-center gap-2 text-sm font-medium text-stone-700\">Telegram URL</span><input id=\"settings-telegram\" type=\"url\" value={telegram} onChange={(e) => setTelegram(e.target.value)} className=\"mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200\" placeholder=\"https://t.me/yourchannel\" /><span className=\"mt-1 block text-xs text-stone-400\">Footer Telegram icon opens this link.</span></label>\n";
const B3 = "            <label className=\"block\"><span className=\"flex items-center gap-2 text-sm font-medium text-stone-700\">Instagram URL</span><input id=\"settings-instagram\" type=\"url\" value={instagram} onChange={(e) => setInstagram(e.target.value)} className=\"mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200\" placeholder=\"https://www.instagram.com/yourhandle\" /><span className=\"mt-1 block text-xs text-stone-400\">Footer Instagram icon opens this link.</span></label>\n";

const hasPrev = t.includes("settings-facebook");
if (
  ok(cnt(t, A_ST) === 1, "ST") && ok(cnt(t, A_LO) === 1, "LO") && ok(cnt(t, A_SV) === 1, "SV") &&
  ok(cnt(t, A_BX) === 1, "BX") && ok(!hasPrev, "NP")
) {
  t = t.replace(A_ST, N_ST + A_ST);
  t = t.replace(A_LO, N_LO + A_LO);
  t = t.replace(A_SV, N_SV);
  const b = t.indexOf(A_BX);
  const c = t.indexOf("</label>", b);
  const close = t.indexOf("\n", c) + 1;
  t = t.slice(0, close) + B1 + B2 + B3 + t.slice(close);
  fs.writeFileSync(P, t);
}
const v = fs.readFileSync(P, "utf8");
console.log(S.join(" "));
console.log("W:WROTE");
console.log("V-ST-FB:" + v.includes("const [facebook, setFacebook] = useState(\"\")"));
console.log("V-LD-FB:" + v.includes("setFacebook(data.settings?.facebook ?? \"\")"));
console.log("V-SV7:" + v.includes("JSON.stringify({ whatsapp, contactEmail, phone, address, facebook, telegram, instagram })"));
console.log("V-IN-FB:" + v.includes("id=\"settings-facebook\""));
console.log("V-IN-TG:" + v.includes("id=\"settings-telegram\""));
console.log("V-IN-IG:" + v.includes("id=\"settings-instagram\""));
console.log("V-ONCE-FB:" + (cnt(v, "id=\"settings-facebook\"") === 1));
