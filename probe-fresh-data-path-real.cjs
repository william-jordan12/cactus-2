const fs = require("fs");
const out = [];

function dump(p) {
  if (!fs.existsSync(p)) { out.push("FILE-MISSING:" + p); return; }
  const lines = fs.readFileSync(p, "utf8").split("\n");
  out.push("=== " + p + " (" + lines.length + " lines) ===");
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i];
    if (/cache|cached|revalidate|revalidatePath|export const dynamic|export const runtime|getSettings|settingsFallback|fetch\(|settings\.phone|settings\.address|settings\.whatsapp|NextResponse|INSERT|SELECT/i.test(t)) {
      out.push("L" + (i + 1) + ":" + t);
    }
  }
}

dump("src/lib/settings.ts");
dump("src/components/Footer.tsx");
out.push("=== SEARCH revalidate/cache across src ===");
function grep(p) {
  if (fs.statSync(p).isDirectory()) {
    for (const e of fs.readdirSync(p)) grep(p + "/" + e);
  } else if (/\.(ts|tsx)$/.test(p)) {
    const lines = fs.readFileSync(p, "utf8").split("\n");
    for (let i = 0; i < lines.length; i++) {
      if (/revalidatePath|unstable_cache|generateStaticParams|export const revalidate|POST|null|new Response/i.test(lines[i])) {
        out.push(p + " L" + (i + 1) + ":" + lines[i]);
      }
    }
  }
}
grep("src/app");
grep("src/components");
grep("src/lib");
console.log(out.join("\n"));
