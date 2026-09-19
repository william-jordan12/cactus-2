import Link from "next/link";
import { Mail, Phone, MapPin, PawPrint, MessageCircle } from "lucide-react";
import { getSettings } from "@/lib/settings";

export default async function Footer() {
  const settings = await getSettings();
  return (
    <footer className="border-t border-sage-200 bg-sage-950/95 text-sage-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta-500 text-lg font-bold text-white">
              <PawPrint className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-xl font-bold tracking-tight text-white">
                Happy Tails
              </p>
              <p className="text-xs uppercase tracking-widest text-sage-400">
                Pet Store
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-sage-300">
            Premium pet supplies, grooming, and happy tails — delivered with
            love to every pet family.
          </p>
          <div className="mt-4 flex gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-900 text-sage-300">
              <PawPrint className="h-4 w-4" />
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-900 text-sage-300">
              <MessageCircle className="h-4 w-4" />
            </span>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/shop">Shop All</Link>
            </li>
            <li>
              <Link href="/shop/dogs">Dogs</Link>
            </li>
            <li>
              <Link href="/shop/cats">Cats</Link>
            </li>
            <li>
              <Link href="/shop/birds">Birds</Link>
            </li>
            <li>
              <Link href="/shop/reptiles">Reptiles</Link>
            </li>
            <li>
              <Link href="/shop/aquatic">Aquatic</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Customer Care
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/care">Pet Care Guide</Link>
            </li>
            <li>
              <Link href="/grooming">Grooming Salon</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/shipping">Shipping & Returns</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sage-400" />
              <span>{settings.contactEmail}</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sage-400" />
              <span>{settings.phone}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage-400" />
              <span>{settings.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-sage-800/60 py-5 text-center text-xs text-sage-400">
        © {new Date().getFullYear()} Happy Tails Pet Store. All rights reserved.
      </div>
    </footer>
  );
}
