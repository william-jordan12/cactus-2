"use client";

import { useCallback, useEffect, useState } from "react";
import { Plus, Trash2, Loader2 } from "lucide-react";

interface Category {
  slug: string;
  name: string;
  description: string;
}

export default function CategoriesManager() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/categories").then((r) => r.json());
      setCategories(res.categories ?? []);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    const res = await fetch("/api/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description }),
    });
    const data = await res.json();
    if (res.ok) {
      setMsg({ ok: true, text: `Category "${name}" saved.` });
      setName("");
      setDescription("");
      load();
    } else {
      setMsg({ ok: false, text: data.error || "Failed to save category." });
    }
  }

  async function handleDelete(slug: string) {
    if (!confirm("Delete this category?")) return;
    const res = await fetch(`/api/categories/${slug}`, { method: "DELETE" });
    const data = await res.json();
    if (res.ok) {
      setMsg({ ok: true, text: "Category deleted." });
      load();
    } else {
      setMsg({ ok: false, text: data.error || "Delete failed." });
    }
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

      <form
        onSubmit={handleAdd}
        className="rounded-2xl border border-stone-200 bg-white p-6"
      >
        <h2 className="text-lg font-semibold text-stone-900">Add Category</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-[1fr,1fr,auto]">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-stone-700">
              Name *
            </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm outline-none focus:border-sage-500"
              placeholder="e.g. Cactus Seeds"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-stone-700">
              Description
            </label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm outline-none focus:border-sage-500"
              placeholder="Short description"
            />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-sage-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sage-800"
            >
              <Plus className="h-4 w-4" />
              Add
            </button>
          </div>
        </div>
      </form>

      {loading ? (
        <div className="flex items-center justify-center rounded-2xl border border-stone-200 bg-white p-10">
          <Loader2 className="h-6 w-6 animate-spin text-sage-700" />
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-stone-200 bg-stone-50 text-xs uppercase tracking-wider text-stone-500">
              <tr>
                <th className="px-4 py-3">Slug</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {categories.map((c) => (
                <tr key={c.slug} className="hover:bg-stone-50">
                  <td className="px-4 py-3 font-mono text-stone-500">{c.slug}</td>
                  <td className="px-4 py-3 font-medium text-stone-900">{c.name}</td>
                  <td className="px-4 py-3 text-stone-600">{c.description}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => handleDelete(c.slug)}
                      disabled={["cacti", "succulents", "rare", "tools"].includes(c.slug)}
                      className="rounded-lg border border-red-200 p-2 text-red-600 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
                      aria-label="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}