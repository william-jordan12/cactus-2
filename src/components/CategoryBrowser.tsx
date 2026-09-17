"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, PawPrint } from "lucide-react";
import { categories, speciesGroups, getProductBySlug } from "@/lib/products";
import AnimateOnScroll from "./AnimateOnScroll";

const categoryIcons: Record<string, { emoji: string; bg: string }> = {
  dogs: { emoji: "🐕", bg: "bg-stone-100" },
  cats: { emoji: "🐈", bg: "bg-orange-100" },
  rabbits: { emoji: "🐇", bg: "bg-pink-100" },
  birds: { emoji: "🦜", bg: "bg-sky-100" },
  aquatic: { emoji: "🐠", bg: "bg-teal-100" },
  reptiles: { emoji: "🦎", bg: "bg-lime-100" },
};

export default function CategoryBrowser() {
  const [open, setOpen] = useState<string | null>("dogs");

  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 stagger-children">
      {categories.map((cat) => {
        const groups = speciesGroups[cat.slug] ?? [];
        const count = groups.reduce((sum, g) => sum + g.slugs.length, 0);
        const icon = categoryIcons[cat.slug] ?? { emoji: "🐾", bg: "bg-stone-100" };
        const isOpen = open === cat.slug;

        return (
          <div
            key={cat.slug}
            className="overflow-hidden rounded-2xl border border-stone-200 bg-white"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : cat.slug)}
              className="flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-stone-50"
              aria-expanded={isOpen}
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-2xl ${icon.bg}`}
              >
                {icon.emoji}
              </span>
              <span className="flex-1">
                <span className="block font-semibold text-stone-900">
                  {cat.name}
                </span>
                <span className="block text-sm text-stone-500">
                  {count} species &amp; breeds
                </span>
              </span>
              <ChevronDown
                className={`h-5 w-5 text-stone-400 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="space-y-4 border-t border-stone-100 bg-stone-50/60 p-5">
                {groups.map((group) => (
                  <div key={group.label}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-sage-600">
                      {group.label}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {group.slugs.map((slug) => {
                        const product = getProductBySlug(slug);
                        if (!product) return null;
                        return (
                          <Link
                            key={slug}
                            href={`/product/${slug}`}
                            className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-700 transition-colors hover:border-sage-500 hover:text-sage-700"
                          >
                            {product.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}

                <Link
                  href={`/shop?category=${cat.slug}`}
                  className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-sage-700 hover:text-sage-800"
                >
                  <PawPrint className="h-4 w-4" />
                  View all {cat.name.toLowerCase()}
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}