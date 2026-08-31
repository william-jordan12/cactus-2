import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sage-100 text-sage-700">
        <SearchX className="h-10 w-10" />
      </div>
      <h1 className="mt-6 text-4xl font-bold text-stone-900">Page Not Found</h1>
      <p className="mt-4 max-w-md text-stone-600">
        The page you're looking for doesn't exist or has been moved. Let's get
        you back to the garden.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-lg bg-sage-700 px-6 py-3 font-semibold text-white hover:bg-sage-800"
        >
          Go Home
        </Link>
        <Link
          href="/shop"
          className="rounded-lg border border-stone-300 bg-white px-6 py-3 font-semibold text-stone-800 hover:bg-stone-50"
        >
          Browse Shop
        </Link>
      </div>
    </div>
  );
}
