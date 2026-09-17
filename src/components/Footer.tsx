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
              Ethically bred, vet-checked pets adopted to loving homes with
              lifetime support. Dogs, cats, rabbits, birds, fish, and reptiles
              — your new best friend is waiting.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Meet a Pet
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop?category=dogs" className="hover:text-white">
                  Dogs
                </Link>
              </li>
              <li>
                <Link href="/shop?category=cats" className="hover:text-white">
                  Cats
                </Link>
              </li>
              <li>
                <Link href="/shop?category=rabbits" className="hover:text-white">
                  Rabbits
                </Link>
              </li>
              <li>
                <Link href="/shop?category=reptiles" className="hover:text-white">
                  Reptiles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Learn
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
                <Link href="/about#adoption-guide" className="hover:text-white">
                  Adoption Guide
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
                <span>hello@happytailspetstore.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-400" />
                <span>+1 (555) PET-TAIL</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-400" />
                <span>2754 Meadow Lane, Phoenix, AZ 85001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-stone-800 pt-6 text-center text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} Happy Tails Pet Store. All rights
            reserved. Every adoption is matched by a home check.
          </p>
        </div>
      </div>
    </footer>
  );
}
