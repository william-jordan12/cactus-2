"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products as staticProducts, type Product } from "@/lib/products";

export interface CartItem {
  slug: string;
  qty: number;
}

interface CartContextValue {
  items: CartItem[];
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (slug: string, qty?: number) => void;
  removeFromCart: (slug: string) => void;
  updateQty: (slug: string, qty: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  cartDetails: { product: Product; qty: number }[];
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const CART_KEY = "saguaro-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [catalog, setCatalog] = useState<Product[]>(staticProducts);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch {
      // ignore invalid stored data
    }
    setLoaded(true);

    // Resolve cart item details against the live catalog (DB via API,
    // falling back to the bundled seed data).
    fetch("/api/products")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data.products) && data.products.length > 0) {
          setCatalog(data.products);
        }
      })
      .catch(() => {
        // keep static catalog
      });
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    }
  }, [items, loaded]);

  const addToCart = (slug: string, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === slug);
      if (existing) {
        return prev.map((i) =>
          i.slug === slug ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [...prev, { slug, qty }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (slug: string) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  };

  const updateQty = (slug: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(slug);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.slug === slug ? { ...i, qty } : i))
    );
  };

  const clearCart = () => setItems([]);

  const cartCount = useMemo(
    () => items.reduce((sum, i) => sum + i.qty, 0),
    [items]
  );

  const cartDetails = useMemo(
    () =>
      items
        .map((i) => {
          const product =
            catalog.find((p) => p.slug === i.slug) ??
            staticProducts.find((p) => p.slug === i.slug);
          return product ? { product, qty: i.qty } : null;
        })
        .filter((x): x is { product: Product; qty: number } => x !== null),
    [items, catalog]
  );

  const subtotal = useMemo(
    () =>
      cartDetails.reduce((sum, { product, qty }) => sum + product.price * qty, 0),
    [cartDetails]
  );

  const value: CartContextValue = {
    items,
    cartOpen,
    setCartOpen,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    cartCount,
    subtotal,
    cartDetails,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
