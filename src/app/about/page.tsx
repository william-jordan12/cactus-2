import Link from "next/link";
import { Leaf, Sprout, BookOpen, FlaskConical, Sun, Droplets } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-terracotta-600">
              Our Story
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
              Growing Desert Passion, One Seed at a Time
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Saguaro Seed Vault began in a small Tucson greenhouse with a
              simple belief: everyone deserves to grow something extraordinary.
              Today, we've grown into a trusted source for rare and beautiful
              cactus and succulent seeds, shipped to growers in over 40
              countries.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              icon: Leaf,
              title: "Our Mission",
              desc: "To make the wonder of desert horticulture accessible to everyone, from curious beginners to serious collectors — with seeds of the highest quality and the education to grow them successfully.",
            },
            {
              icon: Sprout,
              title: "Quality First",
              desc: "Every seed is hand-selected, germination-tested, and packed in a climate-controlled facility. We never sell old inventory, and every pack includes detailed growing instructions.",
            },
            {
              icon: FlaskConical,
              title: "Responsible Sourcing",
              desc: "We work only with ethical, sustainable growers. Rare species are propagated responsibly, and we never contribute to wild population endangerment.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-stone-200 bg-white p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                <item.icon className="h-7 w-7" />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-stone-900">{item.title}</h2>
              <p className="mt-3 text-stone-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="growing-guides" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-stone-900">Growing Guides</h2>
            <p className="mt-4 text-lg text-stone-600">
              The essentials for turning a tiny seed into a thriving desert plant.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta-100 text-terracotta-600">
                <FlaskConical className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-stone-900">
                Germination Basics
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                Start with a sterile, well-draining mix. Surface-sow your seeds
                and cover lightly. Keep warm (75–85°F) and consistently moist
                but not waterlogged.
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta-100 text-terracotta-600">
                <Sun className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-stone-900">
                Light & Location
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                Provide bright, indirect light while seedlings establish.
                Gradually introduce direct sun. A south- or west-facing
                windowsill is ideal once plants mature.
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta-100 text-terracotta-600">
                <Droplets className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-stone-900">
                Watering Wisdom
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                Let soil dry fully between waterings. Always water deeply but
                rarely. Reduce watering in winter dormancy to prevent rot.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="/shop"
              className="inline-flex items-center rounded-lg bg-sage-700 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-sage-800"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Start Your Collection
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
