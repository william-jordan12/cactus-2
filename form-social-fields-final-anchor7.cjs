const fs = require("fs");
const P = "src/components/admin/SettingsForm.tsx";
let t = fs.readFileSync(P, "utf8");
let w = false;
const S = [];
function ok(c, tag) { S.push(tag + ":" + (c ? "OK" : "FAIL")); return c; }
function cnt(s, sub) { let n = 0, i = -1; while ((i = s.indexOf(sub, i + 1)) >= 0) n++; return n; }

const A_STATE = "  const [address, setAddress] = useState(\"\");";
const A_LOAD = "      setAddress(data.settings?.address ?? \"\");";
const A_SAVE = "        body: JSON.stringify({ whatsapp, contactEmail, phone, address }),";
const A_ADDR_IN = "id=\"settings-address\"";

const ADD_STATES = "\n  const [facebook, setFacebook] = useState(\"\");\n  const [telegram, setTelegram] = useState(\"\");\n  const [instagram, setInstagram] = useState(\"\");";
const ADD_LOADS = "\n      setFacebook(data.settings?.facebook ?? \"\");\n      setTelegram(data.settings?.telegram ?? \"\");\n      setInstagram(data.settings?.instagram ?? \"\");";
const NEW_SAVE = "        body: JSON.stringify({ whatsapp, contactEmail, phone, address, facebook, telegram, instagram }),";

const FB_BLOCK = '            <label className="block">\n              <span className="flex items-center gap-2 text-sm font-medium text-stone-700">\n                Facebook URL\n              </span>\n              <input\n                id="settings-facebook"\n                type="url"\n                value={facebook}\n                onChange={(e) => setFacebook(e.target.value)}\n                className="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"\n                placeholder="https://www.facebook.com/yourpage"\n              />\n              <span className="mt-1.5 block text-xs text-stone-400">\n                Footer Facebook icon opens this link.\n              </span>\n            </label>';
const TG_BLOCK = '            <label className="block">\n              <span className="flex items-center gap-2 text-sm font-medium text-stone-700">\n                Telegram URL\n              </span>\n              <input\n                id="settings-telegram"\n                type="url"\n                value={telegram}\n                onChange={(e) => setTelegram(e.target.value)}\n                className="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"\n                placeholder="https://t.me/yourchannel"\n              />\n              <span className="mt-1.5 block text-xs text-stone-400">\n                Footer Telegram icon opens this link.\n              </span>\n            </label>';
const IG_BLOCK = '            <label className="block">\n              <span className="flex items-center gap-2 text-sm font-medium text-stone-700">\n                Instagram URL\n              </span>\n              <input\n                id="settings-instagram"\n                type="url"\n                value={instagram}\n                onChange={(e) => setInstagram(e.target.value)}\n                className="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"\n                placeholder="https://www.instagram.com/yourhandle"\n              />\n              <span className="mt-1.5 block text-xs text-stone-400">\n                Footer Instagram icon opens this link.\n              </span>\n            </label>';

const hasPrev = t.includes("settings-facebook");

if (
  ok(cnt(t, A_STATE) === 1, "ST") && ok(cnt(t, A_LOAD) === 1, "LO") && ok(cnt(t, A_SAVE) === 1, "SV") &&
  ok(cnt(t, A_ADDR_IN) === 1, "AD") && ok(!hasPrev, "NP")
) {
  t = t.replace(A_STATE, A_STATE + ADD_STATES);
  t = t.replace(A_LOAD, A_LOAD + ADD_LOADS);
  t = t.replace(A_SAVE, NEW_SAVEapsed);
  const ia = t.indexOf(A_ADDR_IN);
  const close = t.indexOf("</label>", ia);
  if (ok(close > 0 && close > ia, "CL")) {
    const ins = t.indexOf("\n", close) + 1;
    t = t.slice(0, ins) + FB_BLOCK + "\n" + TG_BLOCK + "\n" + IG_BLOCK + "\n            " + t.slice(ins);
    w = true;
  }
}
if (w) fs.writeFileSync(P, t);
const v = fs.readFileSync(P, "utf8");
console.log("W:" + w);
console.log("V-ST-FB:" + v.includes("const [facebook, setFacebook] = useState(\"\")"));
console.log("V-ST-TG:" + v.includes("const [telegram, setTelegram] = useState(\"\")"));
console.log("V-LD-FB:" + v.includes("setFacebook(data.settings?.facebook ?? \"\")"));
console.log("V-SV-7:" + v.includes("JSON.stringify({ whatsapp, contactEmail, phone, address, facebook, telegram, instagram })"));
console.log("V-IN-FB:" + v.includes("id=\"settings-facebook\""));
console.log("V-IN-TG:" + v.includes("id=\"settings-telegram\""));
console.log("V-IN-IG:" + v.includes("id=\"settings-instagram\""));
console.log("V-ONCE-FB:" + cnt(v, "id=\"settings-facebook\"") === 1);
