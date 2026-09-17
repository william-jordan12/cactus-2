import { getProducts } from "@/lib/store";
import ShopContent from "./ShopContent";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Shop",
  description:
    "Browse our hand-selected, vet-checked dogs, cats, rabbits, birds, fish, and reptiles.",
};

export default async function ShopPage() {
  const products = await getProducts();
  const categories: { slug: string; name: string }[] = [
    { slug: "dogs", name: "Dogs" },
    { slug: "cats", name: "Cats" },
    { slug: "rabbits", name: "Rabbits" },
    { slug: "birds", name: "Birds" },
    { slug: "aquatic", name: "Aquatic Animals" },
    { slug: "reptiles", name: "Reptiles" },
  ];

  return (
    <main className="flex-1">
      <div className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-stone-900">Shop</h1>
          <p className="mt-3 max-w-2xl text-lg text-stone-600">
            Explore our healthy, ethically raised pets — from playful puppies
            and kittens to lively birds, fish, and reptiles.
          </p>
        </div>
      </div>
      <ShopContent products={products} categories={categories} />
    </main>
  );
}