import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sage-100 via-cream to-terracotta-100" />
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sage-200/40 blur-3xl animate-float" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-terracotta-200/30 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <div className="flex items-center gap-2 rounded-full border border-sage-300 bg-white/70 px-4 py-1.5 text-sm font-medium text-sage-800 backdrop-blur">
          <Leaf className="h-4 w-4" />
          Rare seeds shipped worldwide
        </div>

        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
          Cultivate Your Desert{" "}
          <span className="text-sage-700">Garden</span> in the{" "}
          <span className="text-terracotta-600">Vault</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
          Premium cactus and succulent seeds, hand-selected from growers
          across the Southwest. From iconic Saguaro to the rarest Aztekium,
          start your collection today.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/shop"
            className="flex items-center justify-center gap-2 rounded-lg bg-terracotta-600 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-terracotta-700"
          >
            Shop All Seeds
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/about"
            className="flex items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white px-8 py-3.5 font-semibold text-stone-800 transition-colors hover:bg-stone-50"
          >
            Learn How to Grow
          </Link>
        </div>

        <div className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Trusted Quality",
              desc: "98% germination rate",
            },
            {
              icon: Truck,
              title: "Discreet Shipping",
              desc: "Sent worldwide",
            },
            {
              icon: Leaf,
              title: "Grower Support",
              desc: "Guides included",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-2 rounded-2xl border border-white bg-white/70 p-5 backdrop-blur"
            >
              <item.icon className="h-7 w-7 text-sage-700" />
              <div>
                <p className="font-semibold text-stone-900">{item.title}</p>
                <p className="text-sm text-stone-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
