(async () => {
  const r = await fetch("https://cactus-2.vercel.app/", { redirect: "follow" });
  const h = await r.text();
  console.log("STATUS:", r.status, "BYTES:", h.length);
  const fs = require("fs");
  const commitOk = fs.existsSync("5f0d2e3") ? "" : "";
  const chips = [...new Set((h.match(/\/_next\/static\/chunks\/[^"'\\s]+\\.js/g) || []))];
  console.log("CHUNKS:", chips.length);
  let bound = false;
  for (const c of chips) {
    try {
      const cr = await fetch("https://cactus-2.vercel.app" + c);
      const cb = await cr.text();
      if (/contactEmail/.test(cb) && /phone:\\s*env\\.footerPhone/.test(cb) && /settings\\.address/.test(cb)) {
        bound = true;
        console.log("BOUND-IN:", c.split("/").pop().slice(0, 50));
        break;
      }
    } catch (e) {}
  }
  console.log("LIVE-FOOTER-SETTINGS-BOUND:", bound);
})();
