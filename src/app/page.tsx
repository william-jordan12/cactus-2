import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { getFeaturedProducts } from "@/lib/store";
import { Leaf, ShieldCheck, Sprout, PackageCheck, Star, CheckCircle2 } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { reviews } from "@/lib/reviews";

const featuredReviews = reviews
  .filter((r) => r.rating === 5)
  .slice(0, 4);

export default async function Home() {
  const featured = await getFeaturedProducts();

  return (
    <main className="flex-1">
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-terracotta-600">
                Hand-Picked
              </p>
              <h2 className="mt-2 text-3xl font-bold text-stone-900">
                Featured Seeds
              </h2>
            </div>
            <a
              href="/shop"
              className="text-sm font-semibold text-sage-700 hover:text-sage-800"
            >
              View All Products →
            </a>
          </div>
        </AnimateOnScroll>
        <ProductGrid products={featured} />
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Seeds You Can Trust"
              description="Every pack is hand-packed, humidity-controlled, and germination-tested by real growers."
            />
          </AnimateOnScroll>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
            {[
              {
                icon: Sprout,
                title: "Germination Tested",
                desc: "98% average germination rate, guaranteed.",
              },
              {
                icon: ShieldCheck,
                title: "Safe & Discreet",
                desc: "Packaged to protect your privacy, worldwide.",
              },
              {
                icon: PackageCheck,
                title: "Fresh Stock",
                desc: "Seeds harvested last season, never old inventory.",
              },
              {
                icon: Leaf,
                title: "Grower Support",
                desc: "Detailed guides with every single order.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="hover-lift rounded-2xl border border-stone-100 bg-stone-50 p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-stone-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="overflow-hidden rounded-3xl bg-sage-800">
            <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
              <div>
                <h2 className="text-3xl font-bold text-white">
                  New to growing cacti from seed?
                </h2>
                <p className="mt-4 text-sage-100">
                  It&apos;s easier than you think. Learn our proven step-by-step
                  germination method and watch your first spines emerge in weeks.
                </p>
                <a
                  href="/about#growing-guides"
                  className="mt-6 inline-block rounded-lg bg-terracotta-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-terracotta-700"
                >
                  Read the Growing Guide
                </a>
              </div>
              <div className="flex items-end gap-6 text-sage-200">
                <div className="flex-1 rounded-t-2xl border-x border-t border-sage-700 bg-sage-700 p-6">
                  <Star className="h-8 w-8 text-amber-400" />
                  <p className="mt-4 text-2xl font-bold text-white">
                    12,000+
                  </p>
                  <p className="text-sm text-sage-200">Happy growers</p>
                </div>
                <div className="flex-1 rounded-t-2xl border-x border-t border-sage-700 bg-sage-700 p-6 pt-10">
                  <p className="text-2xl font-bold text-white">50+</p>
                  <p className="text-sm text-sage-200">Seed varieties</p>
                </div>
                <div className="flex-1 rounded-t-2xl border-x border-t border-sage-700 bg-sage-700 p-6 pt-10">
                  <p className="text-2xl font-bold text-white">4.9★</p>
                  <p className="text-sm text-sage-200">Average rating</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved by Growers Worldwide"
            description="Real reviews from our community of cactus and succulent enthusiasts."
          />
        </AnimateOnScroll>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
          {featuredReviews.map((review) => (
            <div
              key={review.id}
              className="hover-lift flex flex-col rounded-2xl border border-stone-200 bg-white p-6"
            >
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-500" />
                ))}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
                &ldquo;{review.body.slice(0, 120)}...&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-2 border-t border-stone-100 pt-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sage-100 text-xs font-bold text-sage-700">
                  {review.customerName.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-medium text-stone-900">
                    {review.customerName}
                    {review.verified && (
                      <CheckCircle2 className="ml-1 inline h-3 w-3 text-sage-600" />
                    )}
                  </p>
                  <p className="text-xs text-stone-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="/reviews"
            className="text-sm font-semibold text-sage-700 hover:text-sage-800"
          >
            Read All Reviews →
          </a>
        </div>
      </section>
    </main>
  );
}