import Link from "next/link";
import { Star, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/products";
import ProductImage from "./ProductImage";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-shadow hover:shadow-lg">
      <Link href={`/product/${product.slug}`} className="relative block">
        <ProductImage
          category={product.category}
          name={product.name}
          className="h-56 w-full transition-transform duration-300 group-hover:scale-105"
        />
        {product.category === "rare" && (
          <span className="absolute left-3 top-3 rounded-full bg-terracotta-600 px-3 py-1 text-xs font-semibold text-white">
            Rare
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium uppercase tracking-wider text-sage-600">
          {product.category}
        </p>
        <Link
          href={`/product/${product.slug}`}
          className="mt-1 line-clamp-2 font-semibold text-stone-900 hover:text-sage-700"
        >
          {product.name}
        </Link>

        <div className="mt-2 flex items-center gap-1 text-sm text-amber-500">
          <Star className="h-4 w-4 fill-amber-500" />
          <span className="font-medium text-stone-700">{product.rating}</span>
          <span className="text-stone-400">({product.reviews})</span>
        </div>

        <div className="mt-3 flex items-center justify-between pt-3">
          <span className="text-lg font-bold text-stone-900">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product.slug)}
            className="flex items-center gap-2 rounded-lg bg-sage-700 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-sage-800"
          >
            <ShoppingBag className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
