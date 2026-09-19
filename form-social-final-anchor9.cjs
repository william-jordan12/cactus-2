const fs = require("fs");
const P = "src/components/admin/SettingsForm.tsx";
let t = fs.readFileSync(P, "utf8");
let w = false;
const S = [];
function ok(c, tag) { S.push(tag + ":" + (c ? "OK" : "FAIL")); return c; }
function cnt(s, sub) { let n = 0, i = -1; while ((i = s.indexOf(sub, i + 1)) >= 0) n++; return n; }

const A_STATE = "const [address, setAddress] = useState(\"\");";
const A_LOAD = "setAddress(data.settings?.address ?? \"\");";
const A_SAVE = "body: JSON.stringify({ whatsapp, contactEmail, phone, address }),";
const A_ADDR_IN = "id=\"settings-address\"";

const ADD_STATES = "\n  const [facebook, setFacebook] = useState(\"\");\n  const [telegram, setTelegram] = useState(\"\");\n  const [instagram, setInstagram] = useState(\"\");";
const ADD_LOADS = "\n      setFacebook(data.settings?.facebook ?? \"\");\n      setTelegram(data.settings?.telegram ?? \"\");\n      setInstagram(data.settings?.instagram ?? \"\");";
const NEW_SAVE = "body: JSON.stringify({ whatsapp, contactEmail, phone, address, facebook, telegram, instagram }),";

const BL = '<label className="block">\n<span className="flex items-center gap-2 text-sm font-medium text-stone-700">\nFacebook URL\n</span>\n<input\nid="settings-facebook"\ntype="url"\nvalue={facebook}\nonChange={(e) => setFacebook(e.target.value)}\nclassName="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"\nplaceholder="https://www.facebook.com/yourpage"\n/>\n</label>';
const BL2 = '<label className="block">\n<span className="flex items-center gap-2 text-sm font-medium text-stone-700">\nTelegram URL\n</span>\n<input\nid="settings-telegram"\ntype="url"\nvalue={telegram}\nonChange={(e) => setTelegram(e.target.value)}\nclassName="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"\nplaceholder="https://t.me/yourchannel"\n/>\n</label>';
const BL3 = '<label className="block">\n<span className="flex items-center gap-2 text-sm font-medium text-stone-700">\nInstagram URL\n</span>\n<input\nid="settings-instagram"\ntype="url"\nvalue={instagram}\nonChange={(e) => setInstagram(e.target.value)}\nclassName="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"\nplaceholder="https://www.instagram.com/yourhandle"\n/>\n</label>';

const hasPrev = t.includes("settings-facebook");

if (
  ok(cnt(t, A_STATE) === 1, "ST") && ok(cnt(t, A_LOAD) === 1, "LO") && ok(cnt(t, A_SAVE) === 1, "SV") &&
  ok(cnt(t, A_ADDR_IN) === 1, "AD") && ok(!hasPrev, "NP")
) {
  t = t.replace(A_STATE, A_STATE + ADD_STATES);
  t = t.replace(A_LOAD, A_LOAD + ADD_LOADS);
  t = t.replace(A_SAVE, NEW_SAVE);
  const ia = t.indexOf(A_ADDR_IN);
  const close = t.indexOf("</label>", ia);
  if (ok(close > 0 && close > ia, "CL")) {
    const ins = t.indexOf("\n", close) + 1;
    t = t.slice(0, ins) + BL + "\n" + BL2 + "\n" + BL3 + "\n            " + t.slice(ins);
    w = true;
  }
}
if (w) fs.writeFileSync(P, t);
const v = fs.readFileSync(P, "utf8");
console.log("W:" + w);
console.log("V-FB:" + v.includes("id=\"settings-facebook\""));
console.log("V-TG:" + v.includes("id=\"settings-telegram\""));
console.log("V-IG:" + v.includes("id=\"settings-instagram\""));
console.log("V-SV7:" + v.includes("JSON.stringify({ whatsapp, contactEmail, phone, address, facebook, telegram, instagram })"));
console.log("V-ONCE:" + cnt(v, "id=\"settings-facebook\"") === 1);
