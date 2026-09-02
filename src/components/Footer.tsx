import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <NewsletterForm />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="mb-4 [&_a]:text-white [&_span]:text-terracotta-400">
              <Logo />
            </div>
            <p className="text-sm leading-relaxed text-stone-400">
              Premium cactus and succulent seeds, shipped worldwide in discreet
              packaging. Grow your desert collection today.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Shop
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop?category=cacti" className="hover:text-white">
                  Cactus Seeds
                </Link>
              </li>
              <li>
                <Link href="/shop?category=succulents" className="hover:text-white">
                  Succulent Seeds
                </Link>
              </li>
              <li>
                <Link href="/shop?category=rare" className="hover:text-white">
                  Rare &amp; Exotic
                </Link>
              </li>
              <li>
                <Link href="/shop?category=tools" className="hover:text-white">
                  Growing Tools
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/about#growing-guides" className="hover:text-white">
                  Growing Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-400" />
                <span>hello@saguaroseedvault.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-400" />
                <span>+1 (800) SEED-VLT</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-400" />
                <span>Tucson, Arizona, USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-stone-800 pt-6 text-center text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} Saguaro Seed Vault. All rights
            reserved. Seeds for novelty collection purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
