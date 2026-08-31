"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { Star, ShoppingBag, Check, ChevronRight, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { getProductBySlug, getRelatedProducts } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import ProductImage from "@/components/ProductImage";
import ProductGrid from "@/components/ProductGrid";

export default function ProductPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product);

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="mb-8 flex items-center gap-2 text-sm text-stone-500">
          <Link href="/" className="hover:text-stone-800">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/shop" className="hover:text-stone-800">
            Shop
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href={`/shop?category=${product.category}`} className="hover:text-stone-800">
            {product.category}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-stone-800">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white">
            <ProductImage
              category={product.category}
              name={product.name}
              className="aspect-square w-full"
            />
          </div>

          <div>
            {product.category === "rare" && (
              <span className="inline-block rounded-full bg-terracotta-600 px-3 py-1 text-xs font-semibold text-white">
                Rare &amp; Limited
              </span>
            )}

            <p className="mt-3 text-sm font-medium uppercase tracking-wider text-sage-600">
              {product.category}
            </p>
            <h1 className="mt-1 text-3xl font-bold text-stone-900">
              {product.name}
            </h1>

            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.round(product.rating)
                        ? "fill-amber-500"
                        : "fill-stone-200 text-stone-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-stone-700">
                {product.rating}
              </span>
              <span className="text-sm text-stone-400">
                ({product.reviews} reviews)
              </span>
            </div>

            <p className="mt-6 text-3xl font-bold text-stone-900">
              ${product.price.toFixed(2)}
            </p>

            <p className="mt-6 leading-relaxed text-stone-600">
              {product.description}
            </p>

            <ul className="mt-6 space-y-2">
              {product.details.map((detail) => (
                <li key={detail} className="flex items-start gap-2 text-sm text-stone-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage-600" />
                  {detail}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() => addToCart(product.slug)}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-sage-700 px-6 py-4 font-semibold text-white transition-colors hover:bg-sage-800"
              >
                <ShoppingBag className="h-5 w-5" />
                Add to Cart
              </button>
            </div>

            <div className="mt-4 text-sm text-stone-400">
              {product.stock > 0 ? (
                <span className="text-sage-700">
                  In stock ({product.stock} available)
                </span>
              ) : (
                <span className="text-terracotta-600">Out of stock</span>
              )}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-stone-200 pt-6 text-center text-sm">
              <div>
                <Truck className="mx-auto h-6 w-6 text-sage-700" />
                <p className="mt-2 font-medium text-stone-800">Discreet Shipping</p>
              </div>
              <div>
                <ShieldCheck className="mx-auto h-6 w-6 text-sage-700" />
                <p className="mt-2 font-medium text-stone-800">98% Germination</p>
              </div>
              <div>
                <RotateCcw className="mx-auto h-6 w-6 text-sage-700" />
                <p className="mt-2 font-medium text-stone-800">Satisfaction Guarantee</p>
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-stone-900">
                You May Also Like
              </h2>
              <Link
                href={`/shop?category=${product.category}`}
                className="text-sm font-semibold text-sage-700 hover:text-sage-800"
              >
                View More →
              </Link>
            </div>
            <ProductGrid products={related} columns={4} />
          </section>
        )}
      </div>
    </main>
  );
}
