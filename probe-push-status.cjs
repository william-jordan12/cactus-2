const { execSync } = require("child_process");
function sh(c) {
  try {
    return execSync(c, { encoding: "utf8", shell: "cmd.exe" }).trim();
  } catch (e) {
    return "ERR:" + (e.stderr || "").split("\n")[0];
  }
}
const head = sh("git rev-parse HEAD");
const origin = sh("git rev-parse origin/main");
const upstream = sh("git rev-parse @{u}");
console.log("HEAD:", head);
console.log("ORIGIN-MAIN:", origin);
console.log("UPSTREAM:", upstream);
const push = sh("git show --stat --oneline HEAD");
console.log("===HEAD-STAT===");
console.log(push.slice(0, 600));
