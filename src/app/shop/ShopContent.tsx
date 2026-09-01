"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ProductGrid from "@/components/ProductGrid";
import type { Product, Category } from "@/lib/products";
import { Leaf } from "lucide-react";

type CategoryKey = Category | "all";

const validKeys: CategoryKey[] = ["all", "cacti", "succulents", "rare", "tools"];

function ShopContentInner({
  products,
  categories,
}: {
  products: Product[];
  categories: { slug: string; name: string }[];
}) {
  const searchParams = useSearchParams();
  const param = searchParams.get("category");
  const state: CategoryKey = validKeys.includes(param as CategoryKey)
    ? (param as CategoryKey)
    : "all";

  const filtered = useMemo(
    () =>
      state === "all" ? products : products.filter((p) => p.category === state),
    [products, state]
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center gap-3">
        <a
          href="/shop"
          className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
            state === "all"
              ? "bg-sage-700 text-white"
              : "border border-stone-200 bg-white text-stone-700 hover:border-sage-500 hover:text-sage-700"
          }`}
        >
          All Products
        </a>
        {categories.map((cat) => (
          <a
            key={cat.slug}
            href={`/shop?category=${cat.slug}`}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              state === cat.slug
                ? "bg-sage-700 text-white"
                : "border border-stone-200 bg-white text-stone-700 hover:border-sage-500 hover:text-sage-700"
            }`}
          >
            {cat.name}
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

export default function ShopContent(props: {
  products: Product[];
  categories: { slug: string; name: string }[];
}) {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-stone-500">Loading...</div>
      }
    >
      <ShopContentInner {...props} />
    </Suspense>
  );
}