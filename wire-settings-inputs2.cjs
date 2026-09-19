const { execSync } = require("child_process");
const fs = require("fs");
const p = "src/components/admin/SettingsForm.tsx";
let b = fs.readFileSync(p, "utf8");
let b2 = b;
// verify icons exported by the installed lucide-react first (never-lying module)
const expo = Object.keys(require("lucide-react"));
console.log("EXPO-Phone:", expo.includes("Phone"));
console.log("EXPO-MapPin:", expo.includes("MapPin"));
console.log("EXPO-User:", expo.includes("User"));
console.log("EXPO-Mail:", expo.includes("Mail"));
console.log("EXPO-Message:", expo.includes("MessageCircle"));
// verify the loader/save anchors that already carry phone+address
console.log("LOADER-PHONE:", /setPhone\(data\.settings\?\.phone \?\? ""\);/.test(b));
console.log("LOADER-ADDRESS:", /setAddress\(data\.settings\?\.address \?\? ""\);/.test(b));
console.log("SAVE-HAS-ANY:", /JSON\.stringify\(\{ whatsapp, contactEmail, phone, address \}\)/s.test(b) || /JSON\.stringify\(\{ whatsapp, contactEmail, phone, address,/.test(b));
console.log("HAS-USER-STATE:", /const \[adminUsername, setAdminUsername\]/.test(b));
const hasPhone = /id="settings-phone"/.test(b);
const hasAddr = /id="settings-address"/.test(b);
console.log("HAS-PHONE-INPUT:", hasPhone, "HAS-ADDR-INPUT:", hasAddr);
// compose lucide import for icons w/ fallback anchor: MessageCircle present
if (!/Phone, MapPin/.test(b2) && /MessageCircle, Mail, User/.test(b2)) {
  b2 = b2.replace("MessageCircle, Mail, User", "MessageCircle, Mail, User, Phone, MapPin");
  console.log("IMPORT-INJECTED: true");
}
// if not seeded already, insert AFTER the settings-email input (anchor may be value={contactEmail})
const block = `\n            <label className="block">
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
            </label>`;
const block2 = `\n            <label className="block">
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
              <p className="mt-1 text-xs text-stone-400">
                Shown in the footer next to the phone + email contact block.
              </p>
            </label>`;
const anchor = `value={contactEmail}`;
const anchorIdx = b2.indexOf(anchor);
console.log("ANCHOR-EMAIL-IDX:", anchorIdx);
if (anchorIdx >= 0 && !hasPhone && !hasAddr) {
  const after = b2.indexOf("></textarea>\n          </label>\n", anchorIdx) >= 0 ? "textarea" : "input";
  // generic: find closing of this label (next `</label>` after the email input's `/>`)
  const closeLabel = b2.indexOf("</label>", anchorIdx);
  const bEnd = closeLabel + "</label>".length;
  b2 = b2.slice(0, bEnd) + block + block2 + b2.slice(bEnd);
  console.log("INSERT-BLOCKS: true");
} else if (hasPhone && hasAddr) {
  console.log("INSERT-BLOCKS: already (no-op)");
} else {
  console.log("INSERT-BLOCKS: SKIP (anchor missing)");
}
// write + verify after
if (b2 !== b) {
  fs.writeFileSync(p, b2);
  const v = fs.readFileSync(p, "utf8");
  console.log("VERIFY-PHONE-INPUT:", /id="settings-phone"/.test(v));
  console.log("VERIFY-ADDR-INPUT:", /id="settings-address"/.test(v));
  console.log("VERIFY-LOADER-INTACT:", /setPhone\(data\.settings\?\.phone \?\? ""\);/.test(v) && /setAddress\(data\.settings\?\.address \?\? ""\);/.test(v));
  console.log("NO-DUP-PHONE:", (v.match(/id="settings-phone"/g) || []).length === 1);
  console.log("NO-DUP-ADDR:", (v.match(/id="settings-address"/g) || []).length === 1);
} else {
  console.log("VERIFY: NO-DISK-CHANGE");
}
