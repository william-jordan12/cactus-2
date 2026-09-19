const fs = require("fs");
const p = "src/app/api/settings/route.ts";
let b = fs.readFileSync(p, "utf8");
const l = b.split("\n");

const letA = `  let whatsapp = settingsFallback().whatsapp;
  let contactEmail = settingsFallback().contactEmail;`;
const readA = `    if (typeof body.contactEmail === "string") {
      contactEmail = body.contactEmail.trim();
    }`;
const bindA = "      [whatsapp, contactEmail]\n    );";

const hasLA = b.includes(letA);
const hasRA = b.includes(readA);
const hasBA = b.includes(bindA);
console.log("A-LET:", hasLA, "A-READ:", hasRA, "A-BIND:", hasBA);

if (hasLA && hasRA && hasBA && !/typeof body\.phone === "string"/.test(b)) {
  const letP = `  let phone = settingsFallback().phone;
  let address = settingsFallback().address;`;
  const readP = `
    if (typeof body.phone === "string") {
      phone = body.phone.trim();
    }
    if (typeof body.address === "string") {
      address = body.address.trim();
    }`;
  const bind4 = "      [whatsapp, contactEmail, phone, address]\n    );";

  b = b.replace(letA, letA + "\n" + letP);
  b = b.replace(readA, readA + readP);
  b = b.replace(bindA, bind4);
  fs.writeFileSync(p, b,-1);
  const v = fs.readFileSync(p, "utf8");
  console.log("WROTE: true");
  console.log("V-ONT:false TRUE:", /let phone = settingsFallback\(\)\.phone;/.test(v));
  console.log("V-ONADDR:", /let address = settingsFallback\(\)\.address;/.test(v));
  console.log("V-READPHONE:", /typeof body\.phone === "string"/.test(v));
  console.log("V-READADDR:", /typeof body\.address === "string"/.test(v));
  console.log("V-BIND4:", /\[whatsapp, contactEmail, phone, address\]/.test(v));
  console.log("V-BIND2-GONE:", !/\[whatsapp, contactEmail\]\n\s*\);/.test(v));
} else {
  console.log("WROTE: false (anchors missing or already applied)");instalkring=false;}
