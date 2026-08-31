"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex-1">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-terracotta-600">
              Get in Touch
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-stone-900">
              We'd Love to Hear From You
            </h1>
            <p className="mt-6 text-lg text-stone-600">
              Questions about an order, seed care, or a specific species? Send
              us a message and our team will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-stone-900">Contact Details</h2>

            <ul className="mt-6 space-y-6">
              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-stone-900">Email</p>
                  <p className="text-stone-500">hello@saguaroseedvault.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-stone-900">Phone</p>
                  <p className="text-stone-500">+1 (800) SEED-VLT</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-stone-900">Location</p>
                  <p className="text-stone-500">
                    1280 Desert Bloom Rd
                    <br />
                    Tucson, AZ 85701
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 rounded-2xl border border-sage-200 bg-sage-50 p-6">
              <h3 className="font-semibold text-sage-900">Business Hours</h3>
              <p className="mt-3 text-sm text-stone-600">
                Monday – Friday: 9am – 5pm (MST)
                <br />
                Saturday: 10am – 2pm
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-sage-200 bg-sage-50 p-16 text-center">
                <CheckCircle2 className="h-16 w-16 text-sage-600" />
                <h2 className="mt-6 text-2xl font-bold text-stone-900">
                  Message Sent!
                </h2>
                <p className="mt-3 max-w-md text-stone-600">
                  Thanks for reaching out, {form.name || "friend"}. We've
                  received your message and will respond within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-6 rounded-lg bg-sage-700 px-6 py-3 font-semibold text-white hover:bg-sage-800"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-stone-200 bg-white p-8"
              >
                <h2 className="text-xl font-semibold text-stone-900">
                  Send us a message
                </h2>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-stone-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-stone-300 px-4 py-3 text-stone-900 outline-none focus:border-sage-500"
                      placeholder="Jane Grower"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-stone-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-stone-300 px-4 py-3 text-stone-900 outline-none focus:border-sage-500"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="mb-2 block text-sm font-medium text-stone-700">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-stone-300 px-4 py-3 text-stone-900 outline-none focus:border-sage-500"
                  >
                    <option value="">Select a topic...</option>
                    <option>Order Status</option>
                    <option>Seed Care & Growing</option>
                    <option>Product Question</option>
                    <option>Wholesale / Bulk</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="mt-6">
                  <label className="mb-2 block text-sm font-medium text-stone-700">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-lg border border-stone-300 px-4 py-3 text-stone-900 outline-none focus:border-sage-500"
                    placeholder="How can we help?"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-terracotta-600 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-terracotta-700"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
