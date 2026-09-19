const fs = require("fs");
const P = "src/components/admin/SettingsForm.tsx";
let t = fs.readFileSync(P, "utf8");
let W = false, WN = "";
function once(s, sub) { let n = 0, i = -1; while ((i = s.indexOf(sub, i + 1)) >= 0) n++; return n; }
function ok(c, tag) { WN += tag + ":" + (c ? "OK" : "FAIL") + "\n"; return c; }

const A_STATE = "  const [whatsapp, setWhatsapp] = useState(\"\");\n  const [contactEmail, setContactEmail] = useState(\"\");\n  const [phone, setPhone] = useState(\"\");\n  const [address, setAddress] = useState(\"\");";
const A_LOAD = "      setWhatsapp(data.settings?.whatsapp ?? \"\");\n      setContactEmail(data.settings?.contactEmail ?? \"\");\n      setPhone(data.settings?.phone ?? \"\");\n      setAddress(data.settings?.address ?? \"\");";
const A_SAVE = "        body: JSON.stringify({ whatsapp, contactEmail, phone, address }),";
const A_ADDR_ID = "id=\"settings-address\"";
const A_ADDR_CLOSE = "            </label>";

const ST1 = "  const [facebook, setFacebook] = useState(\"\");\n  const [telegram, setTelegram] = useState(\"\");\n  const [instagram, setInstagram] = useState(\"\");";
const ST2 = "      setFacebook(data.settings?.facebook ?? \"\");\n      setTelegram(data.settings?.telegram ?? \"\");\n      setInstagram(data.settings?.instagram ?? \"\");";
const ST3 = "        body: JSON.stringify({ whatsapp, contactEmail, phone, address, facebook, telegram, instagram }),";

const FB_BLOCK = `
            <label className="block">
              <span className="flex items-center gap-2 text-sm font-medium text-stone-700">
                <Facebook className="h-4 w-4 text-sage-700" />
                Facebook URL
              </span>
              <input
                id="settings-facebook"
                type="url"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"
                placeholder="https://www.facebook.com/yourpage"
              />
              <span className="mt-1 block text-xs text-stone-400">
                Footer Facebook icon opens this link.
              </span>
            </label>
            <label className="block">
              <span className="flex items-center gap-2 text-sm font-medium text-stone-700">
                <Send className="h-4 w-4 text-sage-700" />
                Telegram URL
              </span>
              <input
                id="settings-telegram"
                type="url"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"
                placeholder="https://t.me/yourchannel"
              />
              <span className="mt-1 block text-xs text-stone-400">
                Footer Telegram icon opens this link.
              </span>
            </label>
            <label className="block">
              <span className="flex items-center gap-2 text-sm font-medium text-stone-700">
                <Instagram className="h-4 w-4 text-sage-700" />
                Instagram URL
              </span>
              <input
                id="settings-instagram"
                type="url"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"
                placeholder="https://www.instagram.com/yourhandle"
              />
              <span className="mt-1 block text-xs text-stone-400">
                Footer Instagram icon opens this link.
              </span>
            </label>`;

const hasPrev = t.includes("const [facebook, setFacebook] = useState(\"\")");
const ia = t.indexOf(A_ADDR_ID);
const closeAt = ia > 0 ? t.indexOf(A_ADDR_CLOSE, ia) : -1;

if (
  ok(once(t, A_STATE) === 1, "ST") &&
  ok(once(t, A_LOAD) === 1, "LO") &&
  ok(once(t, A_SAVE) === 1, "SV") &&
  ok(ia > 0, "AD") &&
  ok(closeAt > 0, "AC") &&
  ok(!hasPrev, "NP")
) {
  t = t.replace(A_STATE, A_STATE + "\n" + ST1);
  t = t.replace(A_LOAD, A_LOAD + "\n" + ST2);
  t = t.replace(A_SAVE, ST3);
  const ins = closeAt + A_ADDR_CLOSE.length;
  t = t.slice(0, ins) + FB_BLOCK + "\n" + t.slice(ins);
  fs.writeFileSync(P, t);
  W = true;
}

const v = fs.readFileSync(P, "utf8");
ok(W, "WR");
ok(once(v, "const [facebook, setFacebook] = useState(\"\")") === 1, "VST1");
ok(once(v, "id=\"settings-facebook\"") === 1, "VIN1");
ok(once(v, "id=\"settings-telegram\"") === 1, "VIN2");
ok(once(v, "id=\"settings-instagram\"") === 1, "VIN3");
ok(v.includes("whatsapp, contactEmail, phone, address, facebook, telegram, instagram"), "VSAV");
console.log(WN + "WROTE:" + W);
