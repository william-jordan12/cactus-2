"use client";

import { useCallback, useEffect, useState } from "react";
import { Plus, Trash2, Loader2 } from "lucide-react";

interface Category {
  slug: string;
  name: string;
}

interface Species {
  slug: string;
  category: string;
  name: string;
}

export default function SpeciesManager() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [species, setSpecies] = useState<Species[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [cRes, sRes] = await Promise.all([
        fetch("/api/categories").then((r) => r.json()),
        fetch("/api/species").then((r) => r.json()),
      ]);
      const cats = cRes.categories ?? [];
      setCategories(cats);
      setSpecies(sRes.species ?? []);
      setSelectedCategory((prev) =>
        prev && cats.some((c: Category) => c.slug === prev) ? prev : cats[0]?.slug || ""
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const catName = (slug: string) => {
    const c = categories.find((x) => x.slug === slug);
    return c ? c.name : slug;
  };

  const speciesForCategory = species.filter((s) => s.category === selectedCategory);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !selectedCategory) return;
    const res = await fetch("/api/species", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, category: selectedCategory }),
    });
    const data = await res.json();
    if (res.ok) {
      setMsg({ ok: true, text: `Species "${name}" added to ${catName(selectedCategory)}.` });
      setName("");
      load();
    } else {
      setMsg({ ok: false, text: data.error || "Failed to add species." });
    }
  }

  async function handleDelete(slug: string) {
    if (!confirm("Delete this species from the category?")) return;
    const res = await fetch(`/api/species/${slug}?category=${selectedCategory}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (res.ok) {
      setMsg({ ok: true, text: "Species deleted." });
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

      <div className="rounded-2xl border border-stone-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-stone-900">Add Species to Category</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-[1fr,1fr,auto]">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-stone-700">
              Category *
            </label>
            <select
              required
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm outline-none focus:border-sage-500"
            >
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-stone-700">
              Species Name *
            </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm outline-none focus:border-sage-500"
              placeholder="e.g. Beagle"
            />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              onClick={handleAdd}
              className="flex items-center gap-2 rounded-lg bg-sage-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sage-800"
            >
              <Plus className="h-4 w-4" />
              Add
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center rounded-2xl border border-stone-200 bg-white p-10">
          <Loader2 className="h-6 w-6 animate-spin text-sage-700" />
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-stone-200 bg-stone-50 text-xs uppercase tracking-wider text-stone-500">
              <tr>
                <th className="px-4 py-3">Species</th>
                <th className="px-4 py-3">Slug</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {species.map((s) => (
                <tr key={`${s.category}-${s.slug}`} className="hover:bg-stone-50">
                  <td className="px-4 py-3 font-medium text-stone-900">{s.name}</td>
                  <td className="px-4 py-3 font-mono text-stone-500">{s.slug}</td>
                  <td className="px-4 py-3 capitalize text-stone-600">
                    {catName(s.category)}
                    {s.category === selectedCategory && (
                      <span className="ml-2 rounded-full bg-sage-100 px-2 py-0.5 text-xs font-medium text-sage-700">
                        selected
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => {
                        setSelectedCategory(s.category);
                        handleDelete(s.slug);
                      }}
                      className="rounded-lg border border-red-200 p-2 text-red-600 hover:bg-red-50"
                      aria-label="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {speciesForCategory.length > 0 && (
                <tr className="bg-stone-50">
                  <td
                    colSpan={4}
                    className="px-4 py-3 text-sm font-medium text-stone-500"
                  >
                    {speciesForCategory.length} species in{" "}
                    {catName(selectedCategory) || "this category"}:
                    {speciesForCategory.map((s) => s.name).join(", ")}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}