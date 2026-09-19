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
  const home = await get("https://cactus-2.vercel.app/");
  const links = [...new Set((home.b.match(/\/_next\/static\/chunks\/[^"' ]+\.js/g) || []).slice(0, 30))];
  console.log("HOME-STATUS:", home.s, "CHUNK-LINKS:", links.length);
  let count = 0;
  for (const lnk of links) {
    const c = await get("https://cactus-2.vercel.app" + lnk);
    if (c.s === 200 && /settings\.phone|phone:\s*env\.footerPhone/.test(c.b)) {
      count++;
      if (count <= 3) console.log("CHUNK-HAS-PHONE:", lnk.split("/").pop().slice(0, 60), "S:" + c.s);
    }
  }
  console.log("LIVE-PHONE-CHUNKS:", count);
})();
