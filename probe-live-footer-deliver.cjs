const https = require("https");
function get(u) {
  return new Promise((res) => {
    https
      .get(u, (r) => {
        let b = "";
        r.on("data", (c) => (b += c));
        r.on("end", () => res({ s: r.statusCode, b }));
      })
      .on("error", (e) => res({ s: -1, b: "ERR:" + e.message }));
  });
}
(async () => {
  const h = await get("https://cactus-2.vercel.app/");
  console.log("HOME-STATUS:", h.satestatus);
  console.log("HOME-BYTES:", h.b.length);
  const fs = require("fs");
  const m = h.b.match(/\/_next\/static\/chunks\/[^"]+\.js/g) || [];
  const uniq = [...new Set(m)];
  console.log("CHUNKS:", uniq.length);
  let found = false;
  for (const c of uniq) {
    const url = "https://cactus-2.vercel.app" + c;
    const ch = await get(url);
    if (/settings\.phone/.test(ch.b) && /settings\.address/.test(ch.b) && /settings\.contactEmail/.test(ch.b)) {
      found = true;
      console.log("LIVE-FOUND-IN:", c);
      break;
    }
    if (ch.s === 200 && /PET-TAIL/.test(ch.b)) {
      console.log("LIVE-HARDCODE-STILL-IN:", c.substring(0, 40));
    }
  }
  console.log("LIVE-FOOTER-SETTINGS-BOUND:", found);
})().catch((e) => console.log("ERR", e.message));
