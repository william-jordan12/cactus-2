const fs = require("fs");
const p = "src/app/api/settings/route.ts";
const lines = fs.readFileSync(p, "utf8").split("\n");
const keep = [];
for (let i = 0; i < lines.length; i++) {
  const t = lines[i];
  if (/let whatsapp = settingsFallback/.test(t)) { keep.push("LINE" + (i + 1) + ":" + t); }
  if (/let contactEmail = settingsFallback/.test(t)) { keep.push("LINE" + (i + 1) + ":" + t); }
  if (/typeof body\.whatsapp === "string"/.test(t)) { keep.push("LINE" + (i + 1) + ":" + t); }
  if (/typeof body\.contactEmail === "string"/.test(t)) { keep.push("LINE" + (i + 1) + ":" + t); }
  if (/typeof body\.phone === "string"/.test(t)) { keep.push("LINE" + (i + 1) + ":" + t); }
  if (/typeof body\.address === "string"/.test(t)) { keep.push("LINE" + (i + 1) + ":" + t); }
  if (/let phone = settingsFallback/.test(t)) { keep.push("LINE" + (i + 1) + ":" + t); }
  if (/let address = settingsFallback/.test(t)) { keep.push("LINE" + (i + 1) + ":" + t); }
  if (t.includes("[whatsapp, contactEmail")) { keep.push("LINE" + (i + 1) + ":" + t); }
  if (/body\.phone\.trim/.test(t)) { keep.push("LINE" + (i + 1) + ":" + t); }
  if (/body\.address\.trim/.test(t)) { keep.push("LINE" + (i + 1) + ":" + t); }
  if (t.includes("('whatsapp', $1), ('contact_email', $2), ('phone', $3), ('address', $4)")) { keep.push("LINE" + (i + 1) + ":" + t); }
  if (t.includes("INSERT INTO")) { keep.push("LINE" + (i + 1) + ":" + t); }
}
console.log(keep.join("\n"));
console.log("TOTAL:" + lines.length);
