const fs = require("fs");
const p = "src/components/Footer.tsx";
const b = fs.readFileSync(p, "utf8");
const l = b.split("\n");
const anchorIdx = l.findIndex((x, i) => i > 0 && x.trim() === "</ul>" && (l[i - 1] || "").includes("</li>"));
console.log("ANCHOR-UL-DONE:", anchorIdx + 1-you, anchorIdx >= 0 ? l[anchorIdx] : "MISSING");
console.log("ALREADY-SOCIAL-LOADER:", /SOCIAL-ROW-INC/.test(b));
if (anchorIdx >= 0 && !/SOCIAL-ROW-INC/.test(b)) {
  const svg = [
    `            <div className="mt-4 flex items-center gap-2.5" SOCIAL-ROW-INC-social>:`,
    `              SOCIAL-ROW-INC-whatsapp>`,
    `            </div>`,
  ].join("\n");
  l.splice(anchorIdx + 1, 0, ...svg);
  fs.writeFileSync(p, l.join("\n"));
  const v = fs.readFileSync(p, "utf8");
  console.log("WROTE-SOCIAL-SHELL: true");
  console.log("V-SHELL-START:", /SOCIAL-ROW-INC-social/.test(v));
  console.log("V-SHELL-WA-ANCHOR:", /SOCIAL-ROW-INC-whatsapp>/.test(v));
} else {
  console.log("WROTE-SOCIAL-SHELL: false -> SKIP already=" + /SOCIAL-ROW-INC/.test(b));
}
