const https = require("https");
function get(u) {
  return new Promise((res) => {
    https.get(u, (r) => {
      let b = "";
      r.on("data", (c) => (b += c));
      r.on("end", () => res({ s: r.statusCode, b }));
    }).on("error", (e) => res({ s: -1, b: "ERR:" + e.message }));
  });
}
(async () => {
  const h = await get("https://cactus-2.vercel.app/");
  const b = h.b;
  const m = b.match(/\/_next\/static\/chunks\/[^"';]+\.[jt]s/g) || [];
  console.log("HP-STATUS:", h.s, "BYTES:", b.length, "CHUNK-URLS:", m.length);
  const uniq = [...new Set(m)];
  for (const u of uniq) {
    if (/Footer|footer/i.test(u)) continue; // server comps don't ship as chunks
  }
  const candidates = uniq.filter((u) => !/Footer|footer|page.*\.js$/.test(u));
  let blurred = 0;
  for (const u of candidates.slice()) {
    try {
      const c = await get("https://cactus-2.vercel.app" + u);
      const cb = c.b;
      if (/settings\.contactEmail/.test(cb) || /settings\.phone/.test(cb) || /settings\.address/.test(cb)) {
        blurred++;
        console.log("BOUND-AT:", u.slice(0, 60), "S:", c.s);
      }
      if (/hello@happytailspetstore\.com|\(\+1 \(555\) PET-TAIL|2754 Meadow Lane/.test(cb)) {
        console.log("HARDCODED-EMBEDDED-AT:", u.slice(0, 60));
      }
    } catch (e) {}
  }
  console.log("LIVE-BOUND-CONTACT:", blurred > 0);
})().catch((e) => console.log("PROBE-FAIL:", e.message));
