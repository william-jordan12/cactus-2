const fs = require("fs");
const p = "src/components/admin/SettingsForm.tsx";
let b = fs.readFileSync(p, "utf8");
const sep = '<div className="border-t border-stone-100 pt-5">';
const hasInputs = /id="settings-phone"/.test(b) || /id="settings-address"/.test(b);
const log = [];
if (!hasInputs && b.includes(sep)) {
  const blocks = `          <label className="block">
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
          </label>

`;
  b = b.replace(sep, blocks + sep);
  if (!/MessageCircle, Mail, User/.test(b)) {
    b = b.replace(
      'import { Save, Loader2, MessageCircle, Mail, User } from "lucide-react";',
      'import { Save, Loader2, MessageCircle, Mail, User, Phone, MapPin } from "lucide-react";'
    );
    log.push("IMPORT-ICONS");
  }
  fs.writeFileSync(p, b);
  log.push("INPUTS");
}
const v = fs.readFileSync(p, "utf8");
console.log("LUCIDE-REACT-PHONE:", /id="settings-phone"/.test(v));
console.log("LUCIDE-REACT-ADDRESS:", /id="settings-address"/.test(v));
console.log("IMPORT-SEEDED:", /Phone, MapPin/.test(v));
console.log("ANCHOR-SEP-KEPT:", v.includes(sep));
console.log("WROTE", log.join(","));
