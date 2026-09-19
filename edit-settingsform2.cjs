const fs = require("fs");
const p = "src/components/admin/SettingsForm.tsx";
let b = fs.readFileSync(p, "utf8");
const log = [];
const anchor = "setContactEmail(data.settings?.contactEmail ?? \"\");";
if (/setContactEmail\(data\.settings\?\.contactEmail \?\? ""\);\s*\n\s*setAdminUsername\(/.test(b) && !/\{phone\}/.test(b)) {
  b = b.replace(
    "setContactEmail(data.settings?.contactEmail ?? \"\");\n      setAdminUsername(",
    "setContactEmail(data.settings?.contactEmail ?? \"\");\n      setPhone(data.settings?.phone ?? \"\");\n      setAddress(data.settings?.address ?? \"\");\n      setAdminUsername("
  );
  log.push("LOADER-WIRED");
}
const qt = "QUICKSTART";
if (/<input\s*\n\s*id="settings-contactemail"|id="settings-contactemail"/.test(b) && !/id="settings-phone"/.test(b)) {
  const phoneBlock = `\n          <label className="block">
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
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"
            />
          </label>

          <label className="block">
            <span className="flex items-center gap-2 text-sm font-medium text-stone-700">
              <MapPin className="h-4 w-4 text-sage-700" />
              Location / Address
            </span>
            <input
              id="settings-address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="2754 Meadow Lane, Phoenix, AZ"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"
            />
          </label>`;
  b = b.replace(
    /(<span className="flex items-center gap-2 text-sm font-medium text-stone-700">\s*\n\s*<Phone )/,
    qt
  );
  log.push("INPUT-ANCHOR-NOOP:" + /id="settings-contactemail"/.test(b));
}
// determine real anchor for contact email input's label by locating "Contact Email" text
const ci = b.indexOf("Contact Email");
console.log("CI:", ci);
console.log("HAS-INPUT-PHONE:", /id="settings-phone"/.test(b));
console.log("HAS-INPUT-ADDRESS:", /id="settings-address"/.test(b));
console.log("LOADER-PHONE:", /\{phone\}/.test(b) && /setPhone\(data\.settings\?\.phone/.test(b));
console.log("LOADER-ADDRESS:", /setAddress\(data\.settings\?\.address/.test(b));
fs.writeFileSync(p, b);
const v = fs.readFileSync(p, "utf8");
console.log("WROTE: true");
console.log("VERIFY-PHONE-LANDED:", /id="settings-phone"/.test(v));
console.log("VERIFY-ADDRESS-LANDED:", /id="settings-address"/.test(v));
console.log("VERIFY-LOADERR-2:", /setPhone\(data\.settings\?\.phone \?\? ""\);/.test(v) && /setAddress\(data\.settings\?\.address \?\? ""\);/.test(v));
