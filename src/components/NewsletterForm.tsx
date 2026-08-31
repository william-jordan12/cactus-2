"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="bg-sage-700">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row md:gap-10 lg:px-8">
        <div className="max-w-xl text-center md:text-left">
          <h3 className="text-2xl font-bold text-white">
            Join the Vault Newsletter
          </h3>
          <p className="mt-2 text-sm text-sage-100">
            Get 10% off your first order, growing tips, and notifications on
            rare seed drops.
          </p>
        </div>

        {subscribed ? (
          <div className="flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white">
            <CheckCircle2 className="h-5 w-5" />
            You're on the list! Check your inbox.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-sage-600 bg-white/10 px-4 py-3 text-white placeholder-sage-200 outline-none backdrop-blur focus:border-white"
            />
            <button
              type="submit"
              className="rounded-lg bg-terracotta-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-terracotta-700"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
