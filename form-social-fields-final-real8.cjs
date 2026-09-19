const fs = require("fs");
const P = "src/components/admin/SettingsForm.tsx";
let t = fs.readFileSync(P, "utf8");
let w = false, s = [];

const A1 = "  const [address, setAddress] = useState(\"\");";
const A2 = "      setAddress(data.settings?.address ?? \"\");";
const A3 = "        body: JSON.stringify({ whatsapp, contactEmail, phone, address }),";
const AD = "id=\"settings-address\"";

const N1 = "\n  const [facebook, setFacebook] = useState(\"\");\n  const [telegram, setTelegram] = useState(\"\");\n  const [instagram, setInstagram] = useState(\"\");";
const N2 = "\n      setFacebook(data.settings?.facebook ?? \"\");\n      setTelegram(data.settings?.telegram ?? \"\");\n      setInstagram(data.settings?.instagram ?? \"\");";
const N3 = "        body: JSON.stringify({ whatsapp, contactEmail, phone, address, facebook, telegram, instagram }),";

const BLOCK = '\n            <label className="block">\n              <span className="flex items-center gap-2 text-sm font-medium text-stone-700">\n                Facebook URL\n              </span>\n              <input\n                id="settings-facebook"\n                type="url"\n                value={facebook}\n                onChange={(e) => setFacebook(e.target.value)}\n                className="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"\n                placeholder="https://www.facebook.com/yourpage"\n              />\n              <span className="mt-1 block text-xs text-stone-400">\n                Footer Facebook icon opens this link.\n              </span>\n            </label>\n            <label className="block">\n              <span className="flex items-center gap-2 text-sm font-medium text-stone-700">\n                Telegram URL\n              </span>\n              <input\n                id="settings-telegram"\n                type="url"\n                value={telegram}\n                onChange={(e) => setTelegram(e.target.value)}\n                className="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"\n                placeholder="https://t.me/yourchannel"\n              />\n              <span className="mt-1 block text-xs text-stone-400">\n                Footer Telegram icon opens this link.\n              </span>\n            </label>\n            <label className="block">\n              <span className="flex items-center gap-2 text-sm font-medium text-stone-700">\n                Instagram URL\n              </span>\n              <input\n                id="settings-instagram"\n                type="url"\n                value={instagram}\n                onChange={(e) => setInstagram(e.target.value)}\n                className="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"\n                placeholder="https://www.instagram.com/yourhandle"\n              />\n              <span className="mt-1 block text-xs text-stone-400">\n                Footer Instagram icon opens this link.\n              </span>\n            </label>';

function cnt(h, sub) { let n = 0, i = -1; while ((i = h.indexOf(sub, i + 1)) >= 0) n++; return n; }
function chk(c, tag) { s.push(tag + ":" + (c ? "OK" : "FAIL")); return c; }

let iA = t.indexOf(A1);
let iLoad = t.indexOf(A2, 0);
let iSave = t.indexOf(A3, 0);
let adPos = t.indexOf(AD);

const hasPrev = t.includes("setFacebook(") || t.includes("id=\"settings-facebook\"");
const anchorsOK = cnt(t, A1) === 1 && cnt(t, A2) === 1 && cnt(t, A3) === 1 && cnt(t, AD) === 1;

if (chk(anchorsOK, "AN") && chk(!hasPrev, "NP") && chk(iA > 0 && iLoad > 0 && iSave > 0 && adPos > 0, "IND") ) {
  t = t.split(A1).join(A1 + N1);
  t = t.split(A2).join(A2 + N2);
  t = t.split(A3).join(N3);
  adPos = t.indexOf(AD);
  let close = t.indexOf("</label>", adPos);
  let scan = t.indexOf("\n", adPos);
  while (scan < close && scan >= 0) { let next = t.indexOf("\n", scan + 1); if (next < 0) break; let line = t.slice(scan + 1, next).trim(); if (line === "</label>") { close = scan + 1; break; } scan = next; }
  let ins = t.indexOf("\n", close) + 1;
  t = t.slice(0, ins) + BLOCK + "\n" + t.slice(ins);
  fs.writeFileSync(P, t);
  w = true;
}

const v = fs.readFileSync(P, "utf8");
s.push("W:" + w);
s.push("V-ST-FB:" + v.includes("const [facebook, setFacebook] = useState(\"\")"));
s.push("V-ST-TG:" + v.includes("const [telegram, setTelegram] = useState(\"\")"));
s.push("V-ST-IG:" + v.includes("const [instagram, setInstagram] = useState(\"\")"));
s.push("V-LD-FB:" + v.includes("setFacebook(data.settings?.facebook ?? \"\")"));
s.push("V-LD-TG:" + v.includes("setTelegram(data.settings?.telegram ?? \"\")"));
s.push("V-LD-IG:" + v.includes("setInstagram(data.settings?.instagram ?? \"\")"));
s.push("V-SV-7:" + v.includes("body: JSON.stringify({ whatsapp, contactEmail, phone, address, facebook, telegram, instagram })"));
s.push("V-IN-FB:" + v.includes("id=\"settings-facebook\""));
s.push("V-IN-TG:" + v.includes("id=\"settings-telegram\""));
s.push("V-IN-IG:" + v.includes("id=\"settings-instagram\""));
s.push("V-ONCE-FB:" + cnt(v, "id=\"settings-facebook\"") === 1);
console.log(s.join("\n"));
