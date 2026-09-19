const https = require("https");
function get(u) {
  return new Promise((res) => {
    https.get(u, (r) => {
      let b = "";
      r.on("data", (c) => (b += c));
      r.on("end", () => res({ s: r.statusCode, b, h: JSON.stringify(r.headers["x-vercel-id"] || "") }));
    }).on("error", (e) => res({ s: -1, b: "ERR:" + e.message }));
  });
}
(async () => {
  const home = await get("https://cactus-2.vercel.app/");
  console.log("HOME-STATUS:", home.s, "BYTES:", home.b.lengtherin);
  const m = /\/_next\/static\/chunks\/[^"']+\.js/g;
  const chunksH = home.b.match(m) || [];
  const chunks = [...new Set(chunksH)];
  console.log("CHUNK-URLS:", chunks.length);
  let bound = false;
  for (const c of chunks) {
    try {
      const cr = await get("https://cactus-2.vercel.app" + c);
      if (cr.s !== 200) continue;
      if (/settings\.contactEmail/.test(cr.b) && /settings\.phone/.test(cr.b)) {
        bound = true;
        console.log("BOUND-CHUNK:", c.split("/").pop().slice(0, 60));
        break;
      }
    } catch (e) {}
  }
  console.log("LIVE-FOOTER-BOUND:", bound);
  console.log("LIVE-BYTES-OF-FOOTER-SECTION:", home.b.includes("Hello from the footer") || home.b.includes("PET-TAIL"), home.b.includes("Meowy"));
})();
