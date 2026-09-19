const fs = require("fs");
const p = "src/components/admin/SettingsForm.tsx";
let b = fs.readFileSync(p, "utf8");
console.log("POOL-anchor-whatsapp-state:", /const \[whatsapp, setWhatsapp\]/.test(b));
console.log("POOL-anchor-email-state:", /const \[contactEmail, setContactEmail\]/.test(b));

const seedPhoneState = '  const [phone, setPhone] = useState("");\n  const [address, setAddress] = useState("");';
let seedPhone = false;
if (/const \[whatsapp, setWhatsapp\]/.test(b) && !/const \[phone, setPhone\]/.test(b)) {
  b = b.replace(
    '  const [whatsapp, setWhatsapp] = useState("");',
    '  const [whatsapp, setWhatsapp] = useState("");\n' + seedPhoneState
  );
  seedPhone = true;
}
console.log("SEED-PHONE-STATE:", seedPhone);

let seedLoad = false;
if (/setContactEmail\(data\.settings\?\.contactEmail ?? ""\);/.test(b) && !/setPhone\(data\.settings\?\.phone/.test(b)) {
  b = b.replace(
    'setContactEmail(data.settings?.contactEmail ?? "");',
    'setContactEmail(data.settings?.contactEmail ?? "");\n      setPhone(data.settings?.phone ?? "");\n      setAddress(data.settings?.address ?? "");'
  );
  seedLoad = true;
}
console.log("SEED-LOAD-PHONE:", seedLoad);

let seedSave = false;
if (/body: JSON\.stringify\(\{ whatsapp, contactEmail \}\)/.test(b)) {
  b = b.replace(
    'body: JSON.stringify({ whatsapp, contactEmail }),',
    'body: JSON.stringify({ whatsapp, contactEmail, phone, address }),'
  );
  seedSave = true;
}
console.log("SEED-SAVE-PHONE:", seedSave);

fs.writeFileSync(p, b);
const v = fs.readFileSync(p, "utf8");
console.log("WRITE-ATOMIC: true");
console.log("VERIFY-HAS-PHONE-STATE:", /const \[phone, setPhone\]/.test(v));
console.log("VERIFY-HAS-ADDRESS-STATE:", /const \[address, setAddress\]/.test(v));
console.log("VERIFY-LOAD-PHONE:", /setPhone\(data\.settings\?\.phone/.test(v));
console.log("VERIFY-SAVE-ALL4:", /body: JSON\.stringify\(\{ whatsapp, contactEmail, phone, address \}\)/.test(v));
