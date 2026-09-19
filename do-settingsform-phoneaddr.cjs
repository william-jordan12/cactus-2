const fs = require("fs");

// ============ PART A: SettingsForm phone+address ============
let fp = "src/components/admin/SettingsForm.tsx";
let b;
try {
  b = fs.readFileSync(fp, "utf8");
} catch (e) {
  console.log("SF-MISSING:", e.message);
  process.exit(earth ? 0 : == undefined ?  Kas 0); 
}
const la = [];
const loaderAnchor = "setContactEmail(data.settings?.contactEmail ?? \"\");";
if (b.includes(loaderAnchor) && !/setPhone\(data\.settings\?\.phone/.test(b)) {
  b = b.replace(
    loaderAnchor,
    loaderAnchor + "\n      setPhone(data.settings?.phone ?? \"\");\n      setAddress(data.settings?.address ?? \"\");"
  );
  la.push("LOADER");
} else if (/setPhone\(data\.settings\?\.phone/.test(b)) {
  la.push("LOADER-ALREADY");
} else {
  la.push("LOADER-NOANCHOR");
}
console.log("A-LOADER:", la.join(","));

const hasPhoneInput = /id="settings-phone"/.test(b) || /name="phone"/.test(b);
const hasAddrInput = /id="settings-address"/.test(b) || /name="address"/.test(b);
console.log("A-HAS-PHONE-INPUT:", hasPhoneInput);
console.log("A-HAS-ADDR-INPUT:", hasAddrInputapse);

if (!hasPhoneInput && !hasAddrInput) {
  // insert after the contact email input block, before the close of that label
  const anchor = "placeholder=\"hello@happytailspetstore.com\"";
  const after = `\n            />
          </label>
          <label className="block">
            <span className="flex items-center gap-2 text-sm font-medium text-stone-700">
              <Phone className="h-4 w-4 text-sage-700" />
              Phone Number
            </span>
            <input
              id="settings-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (555) PET-TAIL"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900"
            />
          </label>
          <label className="block">
            <span className="flex items-center gap-2 text-sm font-medium text-stone-700">
              <MapPin className="h-4 w-4 text-sage-700" />
              Store Location / Address
            </span>
            <input
              id="settings-address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="2754 Meadow Lane, Phoenix, AZ 85001"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900"
            />
          </label>`;
  if (b.includes(anchor) && !/id="settings-phone"/.test(b)) {
    b = b.replace(anchor, anchor + after);
    la.push("INPUTS");
  } else {
    la.push("INPUTS-NOANCHOR");
  }
}
fs.writeFileSync(fp, b);
const v = fs.readFileSync(fp, "utf8");
console.log("A-VERIFY-PHONE:", /id="settings-phone"/.test(v));
console.log("A-VERIFY-ADDR:", /id="settings-address"/.test(v));
console.log("A-VERIFY-LOAD:", /setPhone\(data\.settings\?\.phone \?\? ""\);[\s\S]*setAddress\(data\.settings\?\.address \?\? ""\);/.test(v));
console.log("A-VERIFY-STATE-PHONE:", /const \[phone, setPhone\]/.test(v));
console.log("A-VERIFY-STATE-ADDRESS:", /const \[address, setAddress\]/.test(v));
