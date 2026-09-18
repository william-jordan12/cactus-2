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
      ? "grid-cols-2 lg:grid-cols-3"
      : columns === 2
        ? "grid-cols-2"
        : "grid-cols-2 lg:grid-cols-4";

  return (
      <div className={`grid ${colClass} gap-6`}>
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
