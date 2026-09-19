const http = require("http");
function get(u, cb) {
  http.get(u, (res) => {
    let d = "";
    res.on("data", (c) => (d += c));
    res.on("end", () => cb(res.statusCode, d));
  }).on("error", (e) => cb("ERR:" + e.message, ""));
}
get("https://cactus-2.vercel.app/api/settings", (code, body) => {
  console.log("ST:" + code);
  console.log("HAS-WA:" + body.includes('"whatsapp"'));
  console.log("HAS-CE:" + body.includes('"contactEmail"'));
  console.log("HAS-PH:" + body.includes('"phone"'));
  console.log("HAS-AD:" + body.includes('"address"'));
});
