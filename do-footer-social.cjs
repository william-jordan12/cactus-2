const fs = require("fs");
const p = "src/components/Footer.tsx";
let b = fs.readFileSync(p, "utf8");
const l = b.split("\n");
const anchorIdx = l.findIndex((x) => x.includes("</ul>"));
console.log("ANCHOR-UL-CLOSE:", anchorIdx + 1, "LINE:", l[anchorIdx]);
console.log("HAS-SOCIAL-ROW:", /SOCIAL-ROW|wa\.me\/|facebook\.com\//.test(b));
if (anchorIdx >= 0 && !/SOCIAL-ROW/.test(b)) {
  const row = `            <div className="mt-4 flex items-center gap-3" data-social-row className="" SOCIAL-ROW>
              <a
                href={\`https://wa.me/\${settings.whatsapp?.replace(/\\D/g, "") || "+1555"\}\`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-800 text-sage-300 transition hover:bg-sage-600 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com/cactuspethaven"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-800 text-sage-300 transition hover:bg-sage-600 hover:text-white"
              >
                <Share2 className="h-4 w-4" />
              </a>
              <a
                href="https://t.me/cactuspethaven"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-800 text-sage-300 transition hover:bg-sage-600 hover:text-white"
              >
                <Send className="h-4 w-4" />
              </a>
            </div>`;
  l[anchorIdx] = l[anchorIdx].replace("</ul>", row + "\n            </ul>");
  b = l.join("\n");
  fs.writeFileSync(p, b);
  const v = fs.readFileSync(p, "utf8");
  console.log("WROTE-SOCIAL: true");
  console.log("VERIFY-WA:", /wa\.me\//.test(v));
  console.log("VERIFY-FB:", /facebook\.com/.test(v));
  console.log("VERIFY-TG:", /t\.me\//.test(v));
  console.log("VERIFY-SEND-ICON:", /Send>/.test(v) || /Send /.test(v.split("\n").find((x) => /lucide-react/.test(x)) || ""));
} else {
  console.log("WROTE-SOCIAL: false", "ANCHOR:", anchorIdx >= 0, "ALREADY:", /SOCIAL-ROW/.test(b));
}
