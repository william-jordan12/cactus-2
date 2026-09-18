const l = require("lucide-react");
const names = ["Wallet","WalletCards","WalletMinimal","MessagesSquare","MessageSquare","MessageCircle","CreditCard","Landmark","Banknote","PiggyBank"];
for (const n of names) {
  console.log(n, typeof l[n] !== "undefined" ? "YES" : "no");
}
