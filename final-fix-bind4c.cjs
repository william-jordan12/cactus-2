const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");
const letBoth = "  let phone = settingsFallback().phone;\n  let address = settingsFallback().address;";
const readPhone = '    if (typeof body.phone === "string") {\n      phone = body.phone.trim();\n    }';
const readAddr = '    if (typeof body.address === "string") {\n      address = body.address.trim();\n    }';
const bind4 = "      [whatsapp, contactEmail, phone, address]\n    );";

// agent sees anchor A (uses contactEmail default already present)
const aLets = "  let whatsapp = settingsFallback().whatsapp;\n  let contactEmail = settingsFallback().contactEmail;";
// agent reads this block near line 42-43
const aRead = '    if (typeof body.contactEmail === "string") {\n      contactEmail = body.contactEmail.trim();\n    }';
const aBind = "      [whatsapp, contactEmail]\n    );";

const ok =
  b.includes(aLets) && b.includes(aRead) && b.includes(aBind) &&
  !b.includes("let phone = settingsFallback().phone;");
let wrote = false;

if (ok) {
  b = b.replace(aLets, aLets + "\n" + letBoth);
  b = b.replace(aRead, aRead + "\n" + readPhone + "\n" + readAddr);
  b = b.replace(aBind, bind4);
  fs.writeFileSync(p, b);
  wrote = true;
  const v = fs.readFileSync(p, "utf8");
  console.log("WROTE:", wrote);
  console.log("V-LET-PHONE:", /let phone = settingsFallback\(\)\.phone;/.test(v));
  console.log("V-LET-ADDR:", /let address = settingsFallback\(\)\.address;/.test(v));
  console.log("V-READ-PHONE:", /typeof body\.phone === "string"/.test(v));
  console.log("V-READ-ADDR:", /typeof body\.address === "string"/.test(v));
  console.log("V-BIND4:", /\[whatsapp, contactEmail, phone, address\]\n\s*\);/.test(v));
  console.log("V-BIND2-GONE:", !/\[whatsapp, contactEmail\]\n\s*\);/.test(v));
} else {
  console.log("WROTE:", wrote, "ok=" + ok);
  if (!b.includes(aLets)) console.log("FAIL:aLets");
  if (!b.includes(aRead)) console.log("FAIL:aRead");
  if (!b.includes(aBind)) console.log("FAIL:aBind");
  if (b.includes("let phone = settingsFallback().phone;")) console.log("NOTE:already-patched");
}
