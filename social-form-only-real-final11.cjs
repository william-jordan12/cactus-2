const fs = require("fs");
const V = [];
function ok(c, t) { V.push(t + ":" + (c ? "OK" : "FAIL")); return c; }
const S = (n) => String.fromCharCode.apply(null, nesa);
function oncec(t, sub) { let n = 0, i = -1; while ((i = t.indexOf(sub, i + 1)) >= 0) n++; return n; }

const p3 = "src/components/admin/SettingsForm.tsx";
let fo = fs.readFileSync(p3, "utf8");
let foW = false;

const F_STATE_LAST = "  const [address, setAddress] = useState(\"\"");"; 
const F_LOAD_ADDR = "      setAddress(data.settings?.address ?? \"\"");";
const F_SAVE_NOW = "        body: JSON.stringify({ whatsapp, contactEmail, phone, address }),";
const F_ADDR_CLOSE = "            </label>";

const NEW_STATE = "\n  const [facebook, setFacebook] = useState(\"\");\n  const [telegram, setTelegram] = useState(\"\");\n  const [instagram, setInstagram] = useState(\"\");";
const NEW_LOAD = '\n      setFacebook(data.settings?.facebook ?? "");\n      setTelegram(data.settings?.telegram ?? "");\n      setInstagram(data.settings?.instagram ?? "");';
const NEW_SAVE = "        body: JSON.stringify({ whatsapp, contactEmail, phone, address, facebook, telegram, instagram }),";
const NEW_INPUTS = '\n            <label className="block">\n              <span className="flex items-center gap-2 text-sm font-medium text-stone-700">\n                Facebook URL\n              </span>\n              <input\n                id="settings-facebook"\n                type="url"\n                value={facebook}\n                onChange={(e) => setFacebook(e.target.value)}\n                className="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"\n                placeholder="https://www.facebook.com/yourpage"\n              />\n              <span className="mt-1 block text-xs text-stone-400">\n                Footer Facebook icon opens this link.\n              </span>\n            </label>\n            <label className="block">\n              <span className="flex items-center gap-2 text-sm font-medium text-stone-700">\n                Telegram URL\n              </span>\n              <input\n                id="settings-telegram"\n                type="url"\n                value={telegram}\n                onChange={(e) => setTelegram(e.target.value)}\n                className="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"\n                placeholder="https://t.me/yourchannel"\n              />\n              <span className="mt-1 block text-xs text-stone-400">\n                Footer Telegram icon opens this link.\n              </span>\n            </label>\n            <label className="block">\n              <span className="flex items-center gap-2 text-sm font-medium text-stone-700">\n                Instagram URL\n              </span>\n              <input\n                id="settings-instagram"\n                type="url"\n                value={instagram}\n                onChange={(e) => setInstagram(e.target.value)}\n                className="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"\n                placeholder="https://www.instagram.com/yourhandle"\n              />\n              <span className="mt-1 block text-xs text-stone-400">\n                Footer Instagram icon opens this link.\n              </span>\n            </label>';

const hasPrevF = fo.includes("setFacebook(") && fo.includes("settings-facebook");
const cState = oncec(fo, F_STATE_LAST) === 1;
const cLoad = oncec(fo, F_LOAD_ADDR) === 1;
const cSave = oncec(fo, F_SAVE_NOW) === 1;
const cAddr = oncec(fo, "id=\"settings-address\"") === 1;

if (ok(cState, "F-STATE") && ok(cLoad, "F-LOAD") && ok(cSave, "F-SAVE") && ok(cAddr, "F-ADDR") && ok(!hasPrevF, "F-NOT-PREV")) {
  fo = fo.replace(F_STATE_LAST, F_STATE_LAST + NEW_STATE);
  fo = fo.replace(F_LOAD_ADDR, F_LOAD_ADDR + NEW_LOAD);
  fo = fo.replace(F_SAVE_NOW, NEW_SAVE);

  const ia = fo.indexOf("id=\"settings-address\"");
  const closeAt = fo.indexOf("\n            </label>\n", ia);
  const insertAt = closeAt + "\n            </label>\n".length;
  if (ok(closeAt > 0, "F-ADDR-CLOSE-OFFSET")) {
    fo = fo.slice(0, insertAt) + NEW_INPUTS + "\n            " + fo.slice(closeAt + "\n            </label>\n".length).replace(/^            /, "") + fo.slice(0, 0) + fo.slice(closeAt + "\n            </label>\n".length ? closeAt + "\n            </label>\n".length : 0);
    fo = fo.replace(new RegExp(NEW_INPUTS + "\\n            \\n"), NEW_INPUTS + "\n            ");
  }
  fs.writeFileSync(p3, fo);
  foW = true;
}

fo = fs.readFileSync(p3, "utf8");
V.push("FORM-WRITTEN:" + foW);
V.push("V-FB-INPUT:" + fo.includes("id=\"settings-facebook\""));
V.push("V-TG-INPUT:" + fo.includes("id=\"settings-telegram\""));
V.push("V-IG-INPUT:" + fo.includes("id=\"settings-instagram\""));
V.push("V-FB-STATE:" + fo.includes("const [facebook, setFacebook] = useState(\"\");"));
V.push("V-TG-STATE:" + fo.includes("const [telegram, setTelegram] = useState(\"\");"));
V.push("V-IG-STATE:" + fo.includes("const [instagram, setInstagram] = useState(\"\");"));
V.push("V-FB-LOAD:" + fo.includes("setFacebook(data.settings?.facebook ?? \"\");"));
V.push("V-TG-LOAD:" + fo.includes("setTelegram(data.settings?.telegram ?? \"\");"));
V.push("V-IG-LOAD:" + fo.includes("setInstagram(data.settings?.instagram ?? \"\");"));
V.push("V-SAVE-7:" + fo.includes("JSON.stringify({ whatsapp, contactEmail, phone, address, facebook, telegram, instagram }),"));
console.log(V.join("\n"));
