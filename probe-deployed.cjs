const https = require("https");
function get(u) {
  return new Promise((res, rej) => {
    https.get(u, (r) => {
      let b = "";
      r.on("data", (c) => (b += c));
      r.on("end", () => res({ s: r.statusCode, b }));
    }).on("error", rej);
  });
}
(async () => {
  const p = await get("https://cactus-2.vercel.app/");
  console.log("STATUS", p.s, "BYTES", p.b.length);
  const markers = [
    "settings.phone",
    "settings.address",
    "hello@happytailspetstore.com",
    "+1 (555) PET-TAIL",
    "2754 Meadow Lane",
    "getSettings",
  ];
  markers.forEach((m) => console.log((p.b.includes(m) ? "FOUND   " : "MISSING ") + m));
})().catch((e) => console.log("ERR", e.message));
