import type { Metadata } from "next";
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
    default: "Saguaro Seed Vault — Premium Cactus & Succulent Seeds",
    template: "%s | Saguaro Seed Vault",
  },
  description:
    "Premium cactus and succulent seeds shipped worldwide in discreet packaging. From iconic Saguaro to rare Aztekium, start your desert garden today.",
  keywords: [
    "cactus seeds",
    "succulent seeds",
    "rare cactus",
    "saguaro seeds",
    "desert plants",
  ],
  openGraph: {
    title: "Saguaro Seed Vault — Premium Cactus & Succulent Seeds",
    description:
      "Premium cactus and succulent seeds shipped worldwide. Grow your desert collection today.",
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
      </body>
    </html>
  );
}
