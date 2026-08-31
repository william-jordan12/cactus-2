"use client";

import type { Product } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  columns = 4,
}: {
  products: Product[];
  columns?: number;
}) {
  const colClass =
    columns === 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={`grid grid-cols-1 gap-6 ${colClass}`}>
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
