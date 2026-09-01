"use client";

import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Link from "next/link";
import ProductImage from "./ProductImage";

export default function CartDrawer() {
  const {
    cartOpen,
    setCartOpen,
    cartDetails,
    subtotal,
    updateQty,
    removeFromCart,
    clearCart,
  } = useCart();

  if (!cartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setCartOpen(false)}
      />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-stone-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-stone-900">
            Your Cart ({cartDetails.length})
          </h2>
          <button
            onClick={() => setCartOpen(false)}
            className="rounded-full p-2 text-stone-500 hover:bg-stone-100"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {cartDetails.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-16 w-16 text-stone-300" />
            <p className="text-stone-500">Your cart is empty.</p>
            <Link
              href="/shop"
              onClick={() => setCartOpen(false)}
              className="rounded-lg bg-sage-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sage-800"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-5">
                {cartDetails.map(({ product, qty }) => (
                  <li
                    key={product.slug}
                    className="flex gap-4 border-b border-stone-100 pb-5"
                  >
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                      <ProductImage
                        category={product.category}
                        name={product.name}
                        className="h-full w-full"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/product/${product.slug}`}
                          onClick={() => setCartOpen(false)}
                          className="text-sm font-medium text-stone-900 hover:text-sage-700"
                        >
                          {product.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(product.slug)}
                          className="text-stone-400 hover:text-red-500"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="mt-1 text-sm font-semibold text-sage-700">
                        ${product.price.toFixed(2)}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          onClick={() => updateQty(product.slug, qty - 1)}
                          className="flex h-7 w-7 items-center justify-center rounded border border-stone-200 text-stone-600 hover:bg-stone-50"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {qty}
                        </span>
                        <button
                          onClick={() => updateQty(product.slug, qty + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded border border-stone-200 text-stone-600 hover:bg-stone-50"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-stone-200 px-6 py-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-stone-600">Subtotal</span>
                <span className="text-lg font-bold text-stone-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="mb-4 text-xs text-stone-400">
                Shipping and taxes calculated at checkout.
              </p>
              <Link
                href="/checkout"
                onClick={() => setCartOpen(false)}
                className="flex w-full items-center justify-center rounded-lg bg-terracotta-600 py-3 font-semibold text-white transition-colors hover:bg-terracotta-700"
              >
                Proceed to Checkout
              </Link>
              <button
                onClick={clearCart}
                className="mt-3 w-full text-center text-sm text-stone-400 hover:text-red-500"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
