const { execSync } = require("child_process");
function sh(c) {
  try {
    return execSync(c, { encoding: "utf8", cwd: process.cwd() }).trim();
  } catch (e) {
    return "ERR:" + String(e.stderr).split("\n").slice(0, 3).join(" | ");
  }
}
console.log("HEAD:", sh("git rev-parse HEAD"));
console.log("ORIGIN-MAIN:", sh("git rev-parse origin/main"));
console.log("LOCAL-BRANCH:", sh("git branch --show-current"));
console.log("AHEAD-BEHIND:", sh("git rev-list --left-right --count origin/main...HEAD"));
console.log("LAST-3:", sh("git log --oneline -3"));
console.log("FOOTER-IN-HEAD:", sh('git show HEAD:src/components/Footer.tsx') === "ERR:"
  ? sh("git cat-file -p HEAD:src/components/Footer.tsx")
  : sh('git log -1 --format=%H -- src/components/Footer.tsx'));
