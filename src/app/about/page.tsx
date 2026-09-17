import Link from "next/link";
import { Heart, ShieldCheck, PawPrint, BookOpen, HelpingHand, BellRing, Bone } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-terracotta-600">
                Our Story
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
                Welcoming Pets Home, One Tail at a Time
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Happy Tails Pet Store began in a small Phoenix home with a
                simple belief: every pet deserves a loving home, and every home
                deserves the right companion. Today, our care team has matched
                over 12,000 healthy, vet-checked pets with families across the
                country.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 stagger-children">
          {[
            {
              icon: Heart,
              title: "Our Mission",
              desc: "To make finding a new best friend joyful and responsible — pairing healthy, well-socialized pets with homes where they'll thrive, supported by lifetime advice.",
            },
            {
              icon: ShieldCheck,
              title: "Care-First Matching",
              desc: "Every pet is vet-checked, vaccinated, and temperament-tested. We ask about your home and lifestyle so every adoption is a match, not just a sale.",
            },
            {
              icon: PawPrint,
              title: "Ethical Sourcing",
              desc: "We work only with trusted breeders and rescue partners who raise animals in clean, social environments. Health records always included.",
            },
          ].map((item) => (
            <div key={item.title} className="hover-lift rounded-2xl border border-stone-200 bg-white p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                <item.icon className="h-7 w-7" />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-stone-900">{item.title}</h2>
              <p className="mt-3 text-stone-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="adoption-guide" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-stone-900">Adoption Guide</h2>
              <p className="mt-4 text-lg text-stone-600">
                The essentials for welcoming a new pet into your home.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-12 grid gap-8 md:grid-cols-3 stagger-children">
            <div className="hover-lift rounded-2xl border border-stone-200 bg-stone-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta-100 text-terracotta-600">
                <BellRing className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-stone-900">
                Preparing to Bring Home
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                Set up a safe space with bedding, bowls, and age-appropriate
                toys before pickup. Pet-proof the home and stock the right food
                recommended by our team.
              </p>
            </div>
            <div className="hover-lift rounded-2xl border border-stone-200 bg-stone-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta-100 text-terracotta-600">
                <Bone className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-stone-900">
                Feeding &amp; Care Basics
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                Every adoption includes a species-specific care sheet. Keep a
                consistent schedule, fresh water daily, and book a vet visit
                within the first week home.
              </p>
            </div>
            <div className="hover-lift rounded-2xl border border-stone-200 bg-stone-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta-100 text-terracotta-600">
                <HelpingHand className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-stone-900">
                Training &amp; Bonding
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                Go slow for the first week. Use positive reinforcement, keep
                routines predictable, and give your new friend space to settle.
                We&apos;re always a call away for advice.
              </p>
            </div>
          </div>

          <AnimateOnScroll>
            <div className="mt-10 text-center">
              <a
                href="/shop"
                className="inline-flex items-center rounded-lg bg-sage-700 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-sage-800"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Meet the Pets
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}