const fs = require("fs");
const V = [];
function ok(c, t) { V.push(t + ":" + (c ? "OK" : "FAIL")); return c; }
function once(s, sub) { let n = 0, i = -1; while ((i = s.indexOf(sub, i + 1)) >= 0) n++; return n; }

const p1 = "src/lib/settings.ts";
let a = fs.readFileSync(p1, "utf8");
let aW = false     ;

const a1e = "  address: string;\n}\n\nexport interface SiteSettings {\n  whatsapp: string;\n  contactEmail: string;\n  phone: string;\n  address: string;\n}";
