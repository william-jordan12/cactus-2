"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, PawPrint } from "lucide-react";
import { categories, speciesGroups, getProductBySlug } from "@/lib/products";
import AnimateOnScroll from "./AnimateOnScroll";

const categoryPhotos: Record<string, string> = {
  dogs: "photo-1543466835-00a7907e9de1",
  cats: "photo-1514888286974-6c03e2ca1dba",
  rabbits: "photo-1585110396000-c9ffd4e4b308",
  birds: "photo-1452570053594-1b985d6ea890",
  aquatic: "photo-1522069169874-c58ec4b76be5",
  reptiles: "photo-1546548970-71785318a17b",
};

const photoUrl = (id: string) =>
  `https://images.unsplash.com/${id}?w=192&q=75&auto=format&fit=crop`;


export default function CategoryBrowser() {
  const [open, setOpen] = useState<string | null>("dogs");

  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 stagger-children">
      {categories.map((cat) => {
        const groups = speciesGroups[cat.slug] ?? [];
        const count = groups.reduce((sum, g) => sum + g.slugs.length, 0);
        const photo = categoryPhotos[cat.slug];
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
              <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                {photo ? (
                  <img
                    src={photoUrl(photo)}
                    alt={cat.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center text-2xl">
                    🐾
                  </span>
                )}
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