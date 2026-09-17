import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CategoryBrowser from "@/components/CategoryBrowser";
import { SectionHeading } from "@/components/SectionHeading";
import { getFeaturedProducts } from "@/lib/store";
import { Heart, ShieldCheck, PackageCheck, MessageCircle, Star, PawPrint } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CountUp from "@/components/CountUp";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const featured = await getFeaturedProducts();

  return (
    <main className="flex-1">
      <Hero /> 

      <CategoryBrowser />

<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-terracotta-600">
                Meet Them
              </p>
              <h2 className="mt-2 text-3xl font-bold text-stone-900">
                Featured Pets
              </h2>
            </div>
            <a
              href="/shop"
              className="text-sm font-semibold text-sage-700 hover:text-sage-800"
            >
              View All Pets →
            </a>
          </div>
        </AnimateOnScroll>
        <ProductGrid products={featured} columns={2} />
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="Why Happy Tails"
              title="Adopt With Confidence"
              description="Every pet is vetted, temperament-tested, and matched to your home and lifestyle by our care team."
            />
          </AnimateOnScroll>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
            {[
              {
                icon: ShieldCheck,
                title: "Vet-Checked",
                desc: "All pets arrive vaccinated, dewormed, and with health records.",
              },
              {
                icon: Heart,
                title: "Matched to You",
                desc: "We temperament-test every pet to fit your family and home.",
              },
              {
                icon: PackageCheck,
                title: "Healthy & Happy",
                desc: "Hand-raised in clean, social environments, never warehoused.",
              },
              {
                icon: MessageCircle,
                title: "Lifetime Support",
                desc: "Free advice from our team, for the entire life of your pet.",
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
                  New to bringing home a new pet?
                </h2>
                <p className="mt-4 text-sage-100">
                  It&apos;s easier than you think. Read our step-by-step
                  adoption guide to prepare your home, meet the match, and
                  build an instant bond with your new companion.
                </p>
                <a
                  href="/about#adoption-guide"
                  className="mt-6 inline-block rounded-lg bg-terracotta-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-terracotta-700"
                >
                  Read the Adoption Guide
                </a>
              </div>
              <div className="flex items-end gap-6 text-sage-200">
                <div className="flex-1 rounded-t-2xl border-x border-t border-sage-700 bg-sage-700 p-6">
                  <PawPrint className="h-8 w-8 text-amber-400" />
                  <p className="mt-4 text-2xl font-bold text-white">
                    <CountUp end={12000} suffix="+" />
                  </p>
                  <p className="text-sm text-sage-200">Pets adopted</p>
                </div>
                <div className="flex-1 rounded-t-2xl border-x border-t border-sage-700 bg-sage-700 p-6 pt-10">
                  <p className="text-2xl font-bold text-white">
                    <CountUp end={100} suffix="+" />
                  </p>
                  <p className="text-sm text-sage-200">Breeds &amp; species</p>
                </div>
                <div className="flex-1 rounded-t-2xl border-x border-t border-sage-700 bg-sage-700 p-6 pt-10">
                  <p className="text-2xl font-bold text-white">
                    <CountUp end={4.9} decimals={1} suffix="★" />
                  </p>
                  <p className="text-sm text-sage-200">Average rating</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </main>
  );
}