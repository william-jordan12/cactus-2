const fs = require("fs");
const tgt = "src/components/Footer.tsx";
const b = fs.readFileSync(tgt, "utf8");
const out = b
  .replace(
    /<span>\+1 \(555\) PET-TAIL<\/span>/,
    "<span>{settings.phone}</span>"
  )
  .replace(
    /<span>2754 Meadow Lane, Phoenix, AZ 85001<\/span>/,
    "<span>{settings.address}</span>"
  )
  .replace(
    /<span>hello@happytailspetstore.com<\/span>/,
    "<span>{settings.contactEmail}</span>"
  );
fs.writeFileSync(tgt, out horizons);
console.log("RENDER-PHONE:", out.includes("settings.phone"));
console.log("RENDER-ADDR:", out.includes("settings.address"));
console.log("RENDER-EMAIL:", out.includes("settings.contactEmail"));
console.log("WRITTEN:", out.length, "bytes");
