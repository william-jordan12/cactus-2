"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Heart,
  PawPrint,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";

const slides = [
  {
    photo: "photo-1543466835-00a7907e9de1",
    label: "Dogs",
  },
  {
    photo: "photo-1514888286974-6c03e2ca1dba",
    label: "Cats",
  },
  {
    photo: "photo-1585110396000-c9ffd4e4b308",
    label: "Rabbits",
  },
  {
    photo: "photo-1452570053594-1b985d6ea890",
    label: "Birds",
  },
  {
    photo: "photo-1522069169874-c58ec4b76be5",
    label: "Aquatic",
  },
  {
    photo: "photo-1546548970-71785318a17b",
    label: "Reptiles",
  },
];

const photoUrl = (id: string) =>
  `https://images.unsplash.com/${id}?w=1920&q=80&auto=format&fit=crop`;

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const go = (dir: number) =>
    setActive((a) => (a + dir + slides.length) % slides.length);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.photo}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photoUrl(s.photo)}
              alt={`Happy Tails ${s.label}`}
              loading={i === 0 ? "eager" : "lazy"}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-stone-950/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-stone-950/60" />
      </div>

      <button
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-white/10 p-2.5 text-white backdrop-blur transition-colors hover:bg-white/20"
      >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-white/10 p-2.5 text-white backdrop-blur transition-colors hover:bg-white/20"
        >
          <ChevronRight className="h-5 w-5" />
      </button>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
        <div className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
          <PawPrint className="h-4 w-4" />
          Ethically bred &amp; vet-checked pets
        </div>

        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Find Your New{" "}
          <span className="text-sage-200">Best</span>{" "}
          <span className="text-terracotta-200">Friend</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
          Happy Tails brings you healthy, temperament-tested puppies, kittens,
          bunnies, birds, fish, and reptiles — matched to your family with
          lifetime support. Every pet is vet-checked before it comes home.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/shop"
            className="flex items-center justify-center gap-2 rounded-lg bg-terracotta-600 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-terracotta-700"
          >
            Meet the Pets
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/about#adoption-guide"
            className="flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-8 py-3.5 font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            How Adoption Works
          </Link>
        </div>

        <div className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Vet-Checked",
              desc: "Health records included",
            },
            {
              icon: Heart,
              title: "Temperament Tested",
              desc: "Matched to your home",
            },
            {
              icon: PawPrint,
              title: "Lifetime Support",
              desc: "Advice, always",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-2 rounded-2xl border border-white/25 bg-white/10 p-5 backdrop-blur"
            >
              <item.icon className="h-7 w-7 text-sage-200" />
              <div>
                <p className="font-semibold text-white">{item.title}</p>
                <p className="text-sm text-white/75">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2.5">
          {slides.map((s, i) => (
            <button
              key={s.photo}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}: ${s.label}`}
              className={`h-2.5 rounded-full transition-all ${
                i === active
                  ? "w-8 bg-terracotta-400"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
