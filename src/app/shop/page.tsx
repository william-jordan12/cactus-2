"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ProductGrid from "@/components/ProductGrid";
import { categories, products } from "@/lib/products";
import { Leaf } from "lucide-react";

type CategoryKey = "all" | "cacti" | "succulents" | "rare" | "tools";

const validKeys: CategoryKey[] = ["all", "cacti", "succulents", "rare", "tools"];

function ShopContent() {
  const searchParams = useSearchParams();
  const param = searchParams.get("category") as CategoryKey;
  const state: CategoryKey = validKeys.includes(param) ? param : "all";

  const filtered = useMemo(
    () =>
      state === "all"
        ? products
        : products.filter((p) => p.category === state),
    [state]
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center gap-3">
        {[
          { key: "all" as const, label: "All Products" },
          ...categories.map((c) => ({ key: c.slug as CategoryKey, label: c.name })),
        ].map((cat) => (
          <a
            key={cat.key}
            href={`/shop${cat.key === "all" ? "" : `?category=${cat.key}`}`}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              state === cat.key
                ? "bg-sage-700 text-white"
                : "border border-stone-200 bg-white text-stone-700 hover:border-sage-500 hover:text-sage-700"
            }`}
          >
            {cat.label}
          </a>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <p className="text-sm text-stone-500">
          Showing {filtered.length} {filtered.length === 1 ? "product" : "products"}
        </p>
        <p className="flex items-center gap-1.5 text-sm text-stone-400">
          <Leaf className="h-4 w-4" />
          Free shipping over $50
        </p>
      </div>

      {filtered.length > 0 ? (
        <ProductGrid products={filtered} />
      ) : (
        <div className="py-20 text-center text-stone-500">
          No products in this category yet.
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <main className="flex-1">
      <div className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-stone-900">Shop</h1>
          <p className="mt-3 max-w-2xl text-lg text-stone-600">
            Explore our curated collection of premium cactus and succulent
            seeds, plus everything you need to grow them.
          </p>
        </div>
      </div>
      <Suspense fallback={<div className="py-20 text-center text-stone-500">Loading...</div>}>
        <ShopContent />
      </Suspense>
    </main>
  );
}
