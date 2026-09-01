"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Loader2,
  Star,
  X,
  Save,
} from "lucide-react";
import type { Product } from "@/lib/products";

interface CategoryOpt {
  slug: string;
  name: string;
}

interface ProductForm {
  name: string;
  slug: string;
  category: string;
  price: string;
  image: string;
  description: string;
  details: string;
  featured: boolean;
  stock: string;
  rating: string;
  reviews: string;
}

const emptyForm: ProductForm = {
  name: "",
  slug: "",
  category: "cacti",
  price: "",
  image: "",
  description: "",
  details: "",
  featured: false,
  stock: "0",
  rating: "0",
  reviews: "0",
};

export default function ProductsManager() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<CategoryOpt[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<ProductForm | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [pRes, cRes] = await Promise.all([
        fetch("/api/products").then((r) => r.json()),
        fetch("/api/categories").then((r) => r.json()),
      ]);
      setProducts(pRes.products ?? []);
      setCategories(cRes.categories ?? []);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function handleDelete(slug: string) {
    if (!confirm("Delete this product permanently?")) return;
    const res = await fetch(`/api/products/${slug}`, { method: "DELETE" });
    if (res.ok) {
      setMsg({ ok: true, text: "Product deleted." });
      load();
    } else {
      const data = await res.json();
      setMsg({ ok: false, text: data.error || "Delete failed." });
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!editing) return;
    setSaving(true);
    try {
      const payload = {
        ...editing,
        price: Number(editing.price),
        stock: Number(editing.stock),
        rating: Number(editing.rating),
        reviews: Number(editing.reviews),
        details: editing.details
          .split("\n")
          .map((d) => d.trim())
          .filter(Boolean),
      };
      const isNew = !products.some((p) => p.slug === payload.slug);
      const res = await fetch(
        isNew ? "/api/products" : `/api/products/${payload.slug}`,
        {
          method: isNew ? "POST" : "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setMsg({ ok: false, text: data.error || "Save failed." });
      } else {
        setMsg({ ok: true, text: isNew ? "Product created." : "Product updated." });
        setEditing(null);
        load();
      }
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center rounded-2xl border border-stone-200 bg-white p-10">
        <Loader2 className="h-6 w-6 animate-spin text-sage-700" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {msg && (
        <div
          className={`rounded-lg px-4 py-3 text-sm ${
            msg.ok ? "bg-sage-50 text-sage-800" : "bg-red-50 text-red-700"
          }`}
        >
          {msg.text}
          <button onClick={() => setMsg(null)} className="ml-3 font-semibold">
            x
          </button>
        </div>
      )}

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-stone-900">
          Products ({products.length})
        </h2>
        <button
          onClick={() => setEditing({ ...emptyForm, category: categories[0]?.slug || "cacti" })}
          className="flex items-center gap-2 rounded-lg bg-sage-700 px-4 py-2 text-sm font-semibold text-white hover:bg-sage-800"
        >
          <Plus className="h-4 w-4" />
          Add Product
        </button>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs uppercase tracking-wider text-stone-500">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3">Featured</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {products.map((p) => (
              <tr key={p.slug} className="hover:bg-stone-50">
                <td className="px-4 py-3 font-medium text-stone-900">{p.name}</td>
                <td className="px-4 py-3 capitalize text-stone-600">{p.category}</td>
                <td className="px-4 py-3 font-semibold">${Number(p.price).toFixed(2)}</td>
                <td className="px-4 py-3">{p.stock}</td>
                <td className="px-4 py-3">
                  {p.featured ? (
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ) : (
                    <span className="text-stone-300">—</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() =>
                        setEditing({
                          name: p.name,
                          slug: p.slug,
                          category: p.category,
                          price: String(p.price),
                          image: p.image || "",
                          description: p.description || "",
                          details: (p.details || []).join("\n"),
                          featured: p.featured ?? false,
                          stock: String(p.stock),
                          rating: String(p.rating),
                          reviews: String(p.reviews),
                        })
                      }
                      className="rounded-lg border border-stone-200 p-2 text-stone-600 hover:bg-stone-100"
                      aria-label="Edit"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(p.slug)}
                      className="rounded-lg border border-red-200 p-2 text-red-600 hover:bg-red-50"
                      aria-label="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 p-4">
          <form
            onSubmit={handleSave}
            className="mt-8 w-full max-w-2xl rounded-2xl border border-stone-200 bg-white p-6 shadow-2xl"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-bold text-stone-900">
                {products.some((p) => p.slug === editing.slug)
                  ? "Edit Product"
                  : "Add Product"}
              </h3>
              <button
                type="button"
                onClick={() => setEditing(null)}
                className="rounded-full p-2 text-stone-500 hover:bg-stone-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name *">
                <input
                  required
                  value={editing.name}
                  onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                  className={inputCls}
                />
              </Field>
              <Field label="Slug">
                <input
                  value={editing.slug}
                  onChange={(e) =>
                    setEditing({ ...editing, slug: e.target.value.trim().toLowerCase() })
                  }
                  className={inputCls}
                  placeholder="auto-generated from name"
                />
              </Field>
              <Field label="Category *">
                <select
                  required
                  value={editing.category}
                  onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                  className={inputCls}
                >
                  {categories.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Price (USD) *">
                <input
                  required
                  type="number"
                  min="0.01"
                  step="0.01"
                  value={editing.price}
                  onChange={(e) => setEditing({ ...editing, price: e.target.value })}
                  className={inputCls}
                />
              </Field>
              <Field label="Stock">
                <input
                  type="number"
                  min="0"
                  value={editing.stock}
                  onChange={(e) => setEditing({ ...editing, stock: e.target.value })}
                  className={inputCls}
                />
              </Field>
              <Field label="Rating">
                <input
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  value={editing.rating}
                  onChange={(e) => setEditing({ ...editing, rating: e.target.value })}
                  className={inputCls}
                />
              </Field>
              <Field label="Reviews">
                <input
                  type="number"
                  min="0"
                  value={editing.reviews}
                  onChange={(e) => setEditing({ ...editing, reviews: e.target.value })}
                  className={inputCls}
                />
              </Field>
              <Field label="Image URL (optional)">
                <input
                  value={editing.image}
                  onChange={(e) => setEditing({ ...editing, image: e.target.value })}
                  className={inputCls}
                  placeholder="/images/your-product.jpg"
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Description">
                  <textarea
                    rows={3}
                    value={editing.description}
                    onChange={(e) =>
                      setEditing({ ...editing, description: e.target.value })
                    }
                    className={inputCls}
                  />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Details (one per line)">
                  <textarea
                    rows={4}
                    value={editing.details}
                    onChange={(e) => setEditing({ ...editing, details: e.target.value })}
                    className={inputCls}
                    placeholder={"20 seeds per pack\n98% germination\nShips worldwide"}
                  />
                </Field>
              </div>
              <label className="flex items-center gap-2 text-sm font-medium text-stone-700">
                <input
                  type="checkbox"
                  checked={editing.featured}
                  onChange={(e) =>
                    setEditing({ ...editing, featured: e.target.checked })
                  }
                  className="h-4 w-4 accent-sage-700"
                />
                Featured on homepage
              </label>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setEditing(null)}
                className="rounded-lg border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="flex items-center gap-2 rounded-lg bg-sage-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sage-800 disabled:opacity-60"
              >
                <Save className="h-4 w-4" />
                {saving ? "Saving..." : "Save Product"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

const inputCls =
  "w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm text-stone-900 outline-none focus:border-sage-500";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-stone-700">{label}</label>
      {children}
    </div>
  );
}