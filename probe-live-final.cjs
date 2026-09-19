const https = require("https");
https
  .get("https://cactus-2.vercel.app/", (r) => {
    let b = "";
    r.on("data", (c) => (b += c));
    r.on("end", () => {
      console.log("STATUS:", r.statusCode);
      console.log("WA-ME:", /wa\.me/.test(b));
      console.log("T-ME:", /t\.me/.test(b));
      console.log("FB:", /facebook\.[a-z]+/.test(b));
      console.log("SOCIAL-ROW:", /SOCIAL-ROW-INC/.test(b));
      console.log("SETTINGS-PHONE:", /settings\.phone/.test(b));
      console.log("SETTINGS-ADDR:", /settings\.address/.test(b));
      console.log("OLD-HARDCODE-2754:", /2754/.test(b));
      console.log("DEPLOY-STAMP:", /deployed/i.test(b));
    });
  })
  .on("error", (e) => console.log("ERR:", e.message));
