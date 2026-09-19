const https = require("https");
const url = "https://cactus-2.vercel.app/api/settings";
https.get(url, (res) => {
  let d = "";
  res.on("data", (c) => (d += c));
  res.on("end", () => {
    console.log("ST:%s", res.statusCode);
    console.log("HAS-WHATSAPP:%s", d.includes("\"whatsapp\""));
    console.log("HAS-EMAIL:%s", d.includes("contactEmail"));
    console.log("HAS-PHONE:%s", d.includes("\"phone\""));
    console.log("HAS-ADDR:%s", d.includes("\"address\""));
  });
}).on("error", (e) => console.log("ERR:%s", e.message));
