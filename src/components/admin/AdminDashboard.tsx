"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Package,
  Tags,
  ShoppingBag,
  KeyRound,
  LogOut,
  Loader2,
} from "lucide-react";
import ProductsManager from "./ProductsManager";
import CategoriesManager from "./CategoriesManager";
import OrdersManager from "./OrdersManager";
import ChangePasswordForm from "./ChangePasswordForm";

type Tab = "products" | "categories" | "orders" | "password";

const tabs: { key: Tab; label: string; icon: typeof Package }[] = [
  { key: "products", label: "Products", icon: Package },
  { key: "categories", label: "Categories", icon: Tags },
  { key: "orders", label: "Orders", icon: ShoppingBag },
  { key: "password", label: "Change Password", icon: KeyRound },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [authState, setAuthState] = useState<"loading" | "ok" | "denied">("loading");
  const [tab, setTab] = useState<Tab>("products");

  useEffect(() => {
    fetch("/api/auth/session")
      .then((res) => {
        if (res.ok) setAuthState("ok");
        else setAuthState("denied");
      })
      .catch(() => setAuthState("denied"));
  }, []);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  }

  if (authState === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-100">
        <Loader2 className="h-8 w-8 animate-spin text-sage-700" />
      </div>
    );
  }

  if (authState === "denied") {
    router.replace("/admin/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-stone-100">
      <div className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold text-stone-900 lg:hidden">
            Admin Dashboard
          </h1>
          <div className="hidden items-center gap-2 text-stone-500 lg:flex">
            <Package className="h-5 w-5 text-sage-700" />
            <span className="font-semibold text-stone-900">Saguaro Seed Vault</span>
            <span className="text-stone-300">/</span>
            <span>Admin Dashboard</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex gap-1 overflow-x-auto rounded-xl border border-stone-200 bg-white p-1">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex shrink-0 items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                tab === t.key
                  ? "bg-sage-700 text-white"
                  : "text-stone-600 hover:bg-stone-100"
              }`}
            >
              <t.icon className="h-4 w-4" />
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {tab === "products" && <ProductsManager />}
          {tab === "categories" && <CategoriesManager />}
          {tab === "orders" && <OrdersManager />}
          {tab === "password" && <ChangePasswordForm />}
        </div>
      </div>
    </div>
  );
}