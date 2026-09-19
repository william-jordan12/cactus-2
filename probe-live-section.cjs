const https = require("https");
https
  .get("https://cactus-2.vercel.app/", (r) => {
    let b = "";
    r.on("data", (c) => (b += c));
    r.on("end", () => {
      const i = b.indexOf("WhatsApp");
      const j = b.indexOf("All rights reserved");
      console.log("STATUS:", r.statusCode);
      console.log("SOCIAL-REGION-FROM:", i);
      if (i >= 0 && j > i) {
        const seg = b.slice(i, j).replace(/</g, "\n<").replace(/>/g, ">\n").split("\n").map((x) => x.trim()).filter((x) => x)
          .filter((x) => /href=|wa\.me|t\.me|facebook|aria-label|>(2754|[+]?\(?[0-9])/u.test(x) || /phone|address|email/i.test(x));
        console.log("===SECTION===");
        [...new Set(seg)].slice(0, 40).forEach((x) => console.log(x.slice(0, 140)));
      }
    });
  })
  .on("error", (e) => console.log("ERR:", e.message));
