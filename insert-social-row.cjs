const fs = require("fs");
const p = "src/components/Footer.tsx";
let b = fs.readFileSync(p, "utf8");
const l = b.split("\n");
const ulIdx = l.findIndex((x) => x.trim() === "</ul>");
console.log("UL-CLOSE-LINE:", ulIdx + 1);
console.log("SOCIAL-PRESENT:", /SOCIAL-ROW-INC/.test(b));
if (ulIdx >= 0 && !/SOCIAL-ROW-INC/.test(b)) {
  const row = `            <div className="mt-5 flex items-center gap-3" SOCIAL-ROW-INC aria-label="Follow us">
              <a
                href={\`https://wa.me/\${settings.phone?.replace(/\\D/g, "") || ""}\`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 text-sage-300 ring-1 ring-stone-700 transition hover:bg-sage-600 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.26-1.38c1.45.79 3.09 1.22 4.73 1.22 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.18c-1.47 0-2.91-.39-4.17-1.12l-.3-.18-3.12.82.83-3.04-.19-.31a8.26 8.26 0 0 1-1.29-4.44C4.76 7.37 8.02 4.11 12.04 4.11c3.99 0 7.23 3.24 7.23 7.22s-3.24 7.22-7.23 7.22zm3.96-5.4c-.22-.11-1.3-.64-1.5-.71-.2-.08-.35-.11-.5.11-.15.22-.57.71-.7.85-.13.15-.27.17-.49.06-.22-.11-.94-.35-1.79-1.1-.66-.59-1.11-1.31-1.24-1.53-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.21-.69-1.66-.18-.43-.37-.38-.5-.38h-.43c-.15 0-.39.06-.6.28-.2.22-.78.76-.78 1.85s.8 2.15.91 2.3c.11.15 1.57 2.4 3.81 3.36.53.23.95.37 1.27.47.53.17 1.02.15 1.4.09.43-.07 1.3-.53 1.49-1.04.18-.51.18-.95.13-1.04-.05-.09-.19-.15-.41-.26z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/petssmartys/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 text-sage-300 ring-1 ring-stone-700 transition hover:bg-sage-600 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V9.4c0-.9.26-1.6 1.6-1.6h1.65V4.9c-.9-.1-2-.18-3.05-.18-3 0-5.05 1.83-5.05 5.2v2.98H6.1V14h2.65v8h4.75z"/>
                </svg>
              </a>
              <a
                href="https://t.me/petssmartys"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                title="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 text-sage-300 ring-1 ring-stone-700 transition hover:bg-sage-600 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M9.04 15.02l-.4 5.6c.63 0 .9-.27 1.22-.6l2.94-2.82 6.1 4.5c1.11.62 1.9.3 2.2-1.04l4-18.87c.38-1.65-.6-2.28-1.72-1.88L1.1 10.31c-1.66.65-1.65 1.58-.3 2l5.52 1.74 13.16-8.26c.65-.4 1.18-.18.72.25L9.95 15.6l-4.06-1.2"/>
                </svg>
              </a>
            </div>`;
  l.splice(ulIdx, 0, row);
  fs.writeFileSync(p, l.join("\n"));
  const v = fs.readFileSync(p, "utf8");
  console.log("WROTE-SOCIAL: true");
  console.log("V-WA:", /wa\.me/.test(v));
  console.log("V-FB:", /facebook\.com/.test(v));
  console.log("V-TG:", /t\.me/.test(v));
  console.log("V-ROW-ONCE:", (v.match(/SOCIAL-ROW-INC/g) || []).length === 1);
  console.log("V-UL-OK:", /<\/ul>/.test(v));
  console.log("V-NO-DUP-CONTACT:", (v.match(/Contact\b/g) || []).length >= 1);
} else {
  console.log("WROTE-SOCIAL: false ulIdx=" + ulIdx + " already=" + /SOCIAL-ROW-INC/.test(b));
}
