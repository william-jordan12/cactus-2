const https = require("https");
const fs = require("fs");
const get = (u) =>
  new Promise((res, rej) => {
    const r = https.get(u, (resp) => {
      let b = "";
      resp.on("data", (c) => (b += c));
      resp.on("end", () => res({ s: resp.statusCode, b }));
    });
    r.on("error", rej);
  });
(async () => {
  const p = await get("https://cactus-2.vercel.app/");
  console.log("STATUS", p.s, "BYTES", p.b.length);
  const markers = [
    "Meet the Pets",
    "Birds",
    "Rabbits",
    "Aquatic",
    "Reptiles",
    "Find Your New Best Friend",
    "Pet-Safe",
    "Veterinarian",
  ];
  for (const m of markers) console.log((p.b.includes(m) ? "FOUND   " : "MISSING ") + m);
  const urls = Array.from(new Set(p.b.match(/_next\/static\/[^"'\s\\]+\.js/g) || []));
  console.log("CHUNKS", urls.length);
})().catch((e) => console.log("ERR", e.message));
