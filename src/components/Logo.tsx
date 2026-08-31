import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-bold text-xl text-stone-900"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-700 text-white">
        <Leaf className="h-5 w-5" />
      </span>
      <span>
        Saguaro<span className="text-terracotta-600">Seed</span>Vault
      </span>
    </Link>
  );
}
