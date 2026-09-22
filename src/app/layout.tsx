import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "floyd raphael pet store — Vet-Checked Puppies, Kittens & More",
    template: "%s | floyd raphael pet store",
  },
  description:
    "Adopt your next best friend from floyd raphael pet store. Health-checked puppies, kittens, rabbits, birds, fish, and reptiles from trusted breeders and rescue partners.",
  keywords: [
    "pet store",
    "puppies for sale",
    "kittens for sale",
    "bunnies",
    "parrots",
    "aquarium fish",
    "reptiles for sale",
    "adopt a pet",
  ],
  openGraph: {
    title: "floyd raphael pet store — Vet-Checked Puppies, Kittens & More",
    description:
      "Ethically sourced, vet-checked pets adopted with lifetime support.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream font-sans text-stone-900">
        <CartProvider>
          <Navbar />
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
          <CartDrawer />
        </CartProvider>
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          src="https://embed.tawk.to/6ab25ddb7883ea344035d289/default"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
