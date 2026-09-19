const fs = require("fs");
const p = "src/components/Footer.tsx";
let b = fs.readFileSync(p, "utf8");
const l = b.split("\n");
if (/SOCIAL-ROW/.test(b)) { console.log("ALREADY-EXISTS: true"); process.exit(0); }
const ulIdx = l.findIndex((x) => x.trim() === "</ul>");
console.log("UL-CLOSE-IDX:", ulIdx + 1);
if (ulIdx < 2) { console.log("FATAL-NO-ANCHOR"); process.exit(1); }
const wa = l[ulIdx - 4];
const addr = l[ulIdx - 1];
const span = `            <div className="mt-5 flex items-center gap-3" SOCIAL-ROW data-social>
              <a
                href={\`https://wa.me/\${(settings.whatsapp || "").replace(/\\D/g, "")}\`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 text-sage-300 ring-1 ring-stone-700 transition hover:bg-sage-600 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.18c-1.48 0-2.93-.4-4.2-1.16l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.4C4.79 7.4 8.03 4.17 12.04 4.17c3.98 0 7.22 3.23 7.22 7.21s-3.23 7.21-7.22 7.21zm3.96-5.4c-.22-.11-1.3-.64-1.5-.71-.2-.08-.35-.11-.5.11-.15.22-.57.71-.7.85-.13.15-.27.17-.49.06-.22-.11-.94-.35-1.79-1.1-.66-.59-1.11-1.31-1.24-1.53-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.21-.69-1.66-.18-.43-.37-.38-.5-.38h-.43c-.15 0-.39.06-.6.28-.2.22-.78.76-.78 1.85s.8 2.15.91 2.3c.11.15 1.57 2.4 3.81 3.36.53.23.95.37 1.27.47.53.17 1.02.15 1.4.09.43-.07 1.3-.53 1.49-1.04.18-.51.18-.95.13-1.04-.05-.09-.19-.15-.41-.26z"/></svg>
              </a>
              <a
                href="https://www.facebook.com/petssmartys"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 text-sage-300 ring-1 ring-stone-700 transition hover:bg-sage-600 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5h1.65V4.6c-.3-.04-1.3-.12-2.4-.12-2.4 0-4 1.46-4 4.14v2.3H7.5V14h2.8v8h3.2z"/></svg>
              </a>
              <a
                href="https://t.me/petssmartys"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                title="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 text-sage-300 ring-1 ring-stone-700 transition hover:bg-sage-600 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M9.04 15.02l-.39 5.25c.56 0 .8-.24 1.09-.53l2.62-2.51 5.44 4a1.47 1.47 0 0 0 1.68.34c.28-.13.4-.4.33-.65l-6.25-19.1c-.13-.4-.56-.67-.97-.61-.34.05-.6.3-.68.61l-7.9 14.4z"/></svg>
              </a>
            </div>`;
l[ulIdx] = span + "\n" + l[ulIdx];
fs.writeFileSync(p, l.join("\n"));
const v = fs.readFileSync(p, "utf8");
console.log("WROTE-SOCIAL: true");
console.log("V-WA:", /wa\.me\sol\\.test/.test(""));
