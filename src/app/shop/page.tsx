import { getProducts } from "@/lib/store";
import ShopContent from "./ShopContent";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Shop",
  description:
    "Browse our curated collection of premium cactus and succulent seeds.",
};

export default async function ShopPage() {
  const products = await getProducts();
  const categories: { slug: string; name: string }[] = [
    { slug: "cacti", name: "Cactus Seeds" },
    { slug: "succulents", name: "Succulent Seeds" },
    { slug: "rare", name: "Rare & Exotic" },
    { slug: "tools", name: "Growing Tools" },
  ];

  return (
    <main className="flex-1">
      <div className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-stone-900">Shop</h1>
          <p className="mt-3 max-w-2xl text-lg text-stone-600">
            Explore our curated collection of premium cactus and succulent
            seeds, plus everything you need to grow them.
          </p>
        </div>
      </div>
      <ShopContent products={products} categories={categories} />
    </main>
  );
}