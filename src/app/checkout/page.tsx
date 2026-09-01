"use client";

import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import {
  ShoppingBag,
  User,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Loader2,
  ArrowLeft,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import ProductImage from "@/components/ProductImage";

export default function CheckoutPage() {
  const { cartDetails, subtotal, clearCart } = useCart();
  const [whatsappAvailable, setWhatsappAvailable] = useState(true);
  const [method, setMethod] = useState<"email" | "whatsapp">("whatsapp");
  const [form, setForm] = useState({
    customerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => r.json().catch(() => ({})))
      .then((data) => {
        const hasWhatsApp = Boolean(data.settings?.whatsapp);
        setWhatsappAvailable(hasWhatsApp);
        if (!hasWhatsApp) setMethod("email");
      })
      .catch(() => {
        setWhatsappAvailable(true);
      });
  }, []);

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          deliveryMethod: method,
          items: cartDetails.map(({ product, qty }) => ({
            slug: product.slug,
            qty,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not place order.");
      setReference(data.reference);
      setStatus("done");
      clearCart();
      // Carry the customer directly to their chosen app.
      window.location.href = data.deliveryUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not place order.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="flex flex-1 items-center justify-center px-4 py-24">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sage-100 text-sage-700">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="mt-6 text-3xl font-bold text-stone-900">Order Placed!</h1>
          <p className="mt-4 text-stone-600">
            Your order <span className="font-semibold">{reference}</span> has been
            recorded. We just opened your {method === "whatsapp" ? "WhatsApp" : "email"}{" "}
            app with the order details — simply press send to confirm your order.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-block rounded-lg bg-sage-700 px-8 py-3 font-semibold text-white hover:bg-sage-800"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (cartDetails.length === 0 && status !== "error") {
    return (
      <div className="flex flex-1 items-center justify-center px-4 py-24">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-stone-100 text-stone-400">
            <ShoppingBag className="h-10 w-10" />
          </div>
          <h1 className="mt-6 text-2xl font-bold text-stone-900">Your cart is empty</h1>
          <p className="mt-3 text-stone-600">
            Add some seeds to your cart before checking out.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-block rounded-lg bg-sage-700 px-8 py-3 font-semibold text-white hover:bg-sage-800"
          >
            Browse the Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to shop
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-stone-900">Checkout</h1>
        <p className="mt-2 text-stone-600">
          Fill in your details, then choose to send your order via WhatsApp or email.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          <form onSubmit={handleSubmit} className="lg:col-span-3">
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-stone-900">
                <User className="h-5 w-5 text-sage-700" />
                Your Details
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Label>Full Name *</Label>
                  <input
                    required
                    value={form.customerName}
                    onChange={(e) => update("customerName", e.target.value)}
                    className={inputCls}
                    placeholder="Jane Grower"
                  />
                </div>
                <div>
                  <Label>
                    Email *
                  </Label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputCls}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <Label>Phone</Label>
                  <input
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={inputCls}
                    placeholder="+1 555 123 4567"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label>Address</Label>
                  <input
                    value={form.address}
                    onChange={(e) => update("address", e.target.value)}
                    className={inputCls}
                    placeholder="Street address"
                  />
                </div>
                <div>
                  <Label>City</Label>
                  <input
                    value={form.city}
                    onChange={(e) => update("city", e.target.value)}
                    className={inputCls}
                    placeholder="Tucson"
                  />
                </div>
                <div>
                  <Label>Country</Label>
                  <input
                    value={form.country}
                    onChange={(e) => update("country", e.target.value)}
                    className={inputCls}
                    placeholder="United States"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label>Order Notes (optional)</Label>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    className={inputCls}
                    placeholder="Anything you'd like us to know"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-stone-900">Send My Order Via</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {whatsappAvailable && (
                  <button
                    type="button"
                    onClick={() => setMethod("whatsapp")}
                    className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-colors ${
                      method === "whatsapp"
                        ? "border-sage-600 bg-sage-50"
                        : "border-stone-200 hover:border-stone-300"
                    }`}
                  >
                    <MessageCircle className="h-6 w-6 text-sage-600" />
                    <div>
                      <p className="font-semibold text-stone-900">WhatsApp</p>
                      <p className="text-sm text-stone-500">
                        Opens WhatsApp with your order
                      </p>
                    </div>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setMethod("email")}
                  className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-colors ${
                    method === "email"
                      ? "border-sage-600 bg-sage-50"
                      : "border-stone-200 hover:border-stone-300"
                  }`}
                >
                  <Mail className="h-6 w-6 text-sage-600" />
                  <div>
                    <p className="font-semibold text-stone-900">Email</p>
                    <p className="text-sm text-stone-500">
                      Opens your mail app with the order
                    </p>
                  </div>
                </button>
              </div>
              {!whatsappAvailable && (
                <p className="mt-3 text-sm text-stone-400">
                  WhatsApp checkout is not available yet — use email instead.
                </p>
              )}
            </div>

            {error && (
              <div className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-terracotta-600 py-4 text-lg font-semibold text-white transition-colors hover:bg-terracotta-700 disabled:opacity-60"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Placing order...
                </>
              ) : (
                <>
                  <MessageCircle className="h-5 w-5" />
                  Place Order via {method === "whatsapp" ? "WhatsApp" : "Email"}
                </>
              )}
            </button>
          </form>

          <div className="lg:col-span-2">
            <div className="sticky top-24 rounded-2xl border border-stone-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-stone-900">Your Order</h2>
              <ul className="mt-4 space-y-4">
                {cartDetails.map(({ product, qty }) => (
                  <li key={product.slug} className="flex items-center gap-3">
                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                      <ProductImage
                        category={product.category}
                        name={product.name}
                        className="h-full w-full"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-stone-900">
                        {product.name}
                      </p>
                      <p className="text-xs text-stone-500">Qty: {qty}</p>
                    </div>
                    <span className="text-sm font-semibold text-stone-900">
                      ${(product.price * qty).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-stone-200 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-stone-600">Subtotal</span>
                  <span className="text-lg font-bold text-stone-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <p className="mt-2 text-xs text-stone-400">
                  Shipping arranged separately with you on{" "}
                  {method === "whatsapp" ? "WhatsApp" : "email"} after your order is sent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const inputCls =
  "w-full rounded-lg border border-stone-300 px-4 py-3 text-stone-900 outline-none focus:border-sage-500";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-1.5 block text-sm font-medium text-stone-700">{children}</label>
  );
}