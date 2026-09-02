"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Star,
  CheckCircle2,
  ThumbsUp,
  ChevronDown,
  Filter,
} from "lucide-react";
import { reviews, getAverageRating, getRatingDistribution } from "@/lib/reviews";
import type { Review } from "@/lib/reviews";
import AnimateOnScroll from "@/components/AnimateOnScroll";

function StarRating({ rating, size = "h-4 w-4" }: { rating: number; size?: string }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${size} ${
            i < rating ? "fill-amber-500" : "fill-stone-200 text-stone-200"
          }`}
        />
      ))}
    </div>
  );
}

function RatingBar({ stars, count, total }: { stars: number; count: number; total: number }) {
  const pct = total > 0 ? (count / total) * 100 : 0;
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="w-8 text-right font-medium text-stone-700">{stars}★</span>
      <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-stone-200">
        <div
          className="h-full rounded-full bg-amber-500 transition-all duration-1000 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-8 text-stone-500">{count}</span>
    </div>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const [helpful, setHelpful] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(review.helpful);

  function handleHelpful() {
    if (!helpful) {
      setHelpful(true);
      setHelpfulCount((c) => c + 1);
    }
  }

  return (
    <AnimateOnScroll delay={index * 60}>
      <div className="rounded-2xl border border-stone-200 bg-white p-6 transition-shadow hover:shadow-md">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <StarRating rating={review.rating} />
              <span className="text-sm font-medium text-stone-700">
                {review.rating}.0
              </span>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-stone-900">
              {review.title}
            </h3>
          </div>
        </div>

        <p className="mt-3 leading-relaxed text-stone-600">{review.body}</p>

        <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-100 text-sm font-bold text-sage-700">
              {review.customerName.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium text-stone-900">
                {review.customerName}
                {review.verified && (
                  <CheckCircle2 className="ml-1.5 inline h-3.5 w-3.5 text-sage-600" />
                )}
              </p>
              <p className="text-xs text-stone-500">{review.location}</p>
            </div>
          </div>

          <button
            onClick={handleHelpful}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              helpful
                ? "bg-sage-100 text-sage-700"
                : "text-stone-500 hover:bg-stone-100 hover:text-stone-700"
            }`}
          >
            <ThumbsUp className="h-3.5 w-3.5" />
            Helpful ({helpfulCount})
          </button>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <Link
            href={`/product/${review.productSlug}`}
            className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600 transition-colors hover:bg-stone-200"
          >
            {review.productName}
          </Link>
          <span className="text-xs text-stone-400">
            {new Date(review.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

export default function ReviewsPage() {
  const [filterProduct, setFilterProduct] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"recent" | "helpful" | "highest">("recent");

  const avgRating = useMemo(() => getAverageRating(), []);
  const distribution = useMemo(() => getRatingDistribution(), []);

  const uniqueProducts = useMemo(() => {
    const map = new Map<string, string>();
    for (const r of reviews) {
      map.set(r.productSlug, r.productName);
    }
    return Array.from(map.entries()).sort((a, b) => a[1].localeCompare(b[1]));
  }, []);

  const filtered = useMemo(() => {
    let list =
      filterProduct === "all"
        ? [...reviews]
        : reviews.filter((r) => r.productSlug === filterProduct);

    switch (sortBy) {
      case "helpful":
        list.sort((a, b) => b.helpful - a.helpful);
        break;
      case "highest":
        list.sort((a, b) => b.rating - a.rating || b.helpful - a.helpful);
        break;
      case "recent":
      default:
        list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    return list;
  }, [filterProduct, sortBy]);

  return (
    <main className="flex-1">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <AnimateOnScroll>
                <p className="text-sm font-semibold uppercase tracking-widest text-terracotta-600">
                  Customer Reviews
                </p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-stone-900">
                  What Our Growers Say
                </h1>
                <p className="mt-4 text-stone-600">
                  Real reviews from real growers. Every verified purchase is marked with{" "}
                  <CheckCircle2 className="inline h-4 w-4 text-sage-600" />.
                </p>

                <div className="mt-8 flex items-end gap-4">
                  <span className="text-5xl font-bold text-stone-900">
                    {avgRating}
                  </span>
                  <div>
                    <StarRating rating={Math.round(avgRating)} size="h-5 w-5" />
                    <p className="mt-1 text-sm text-stone-500">
                      Based on {reviews.length} reviews
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-2">
              <AnimateOnScroll delay={100}>
                <div className="space-y-2.5">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <RatingBar
                      key={stars}
                      stars={stars}
                      count={distribution[stars]}
                      total={reviews.length}
                    />
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-stone-500" />
            <select
              value={filterProduct}
              onChange={(e) => setFilterProduct(e.target.value)}
              className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 focus:border-sage-500 focus:outline-none"
            >
              <option value="all">All Products</option>
              {uniqueProducts.map(([slug, name]) => (
                <option key={slug} value={slug}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-stone-500">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 focus:border-sage-500 focus:outline-none"
            >
              <option value="recent">Most Recent</option>
              <option value="helpful">Most Helpful</option>
              <option value="highest">Highest Rated</option>
            </select>
          </div>

          <span className="ml-auto text-sm text-stone-500">
            {filtered.length} {filtered.length === 1 ? "review" : "reviews"}
          </span>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filtered.map((review, i) => (
            <ReviewCard key={review.id} review={review} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-stone-500">
            No reviews match your filter.
          </div>
        )}

        <div className="mt-16 rounded-2xl border border-stone-200 bg-stone-50 p-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold text-stone-900">
              Tried Our Seeds?
            </h2>
            <p className="mt-2 text-stone-600">
              Share your experience and help other growers make informed decisions.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-lg bg-sage-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-sage-800"
            >
              Write a Review
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}