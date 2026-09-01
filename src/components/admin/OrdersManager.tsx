"use client";

import { useCallback, useEffect, useState } from "react";
import { Loader2, ChevronDown, ChevronUp, PackageOpen } from "lucide-react";

interface Order {
  id: string;
  reference: string;
  customer_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  notes: string;
  delivery_method: "email" | "whatsapp";
  status: string;
  subtotal: string;
  total: string;
  item_count: number;
  created_at: string;
  items?: { product_name: string; price: string; qty: number }[];
}

const STATUS_COLORS: Record<string, string> = {
  pending: "bg-amber-100 text-amber-800",
  confirmed: "bg-blue-100 text-blue-800",
  shipped: "bg-purple-100 text-purple-800",
  delivered: "bg-sage-100 text-sage-800",
  cancelled: "bg-red-100 text-red-700",
};

const STATUSES = ["pending", "confirmed", "shipped", "delivered", "cancelled"];

export default function OrdersManager() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/orders").then((r) => r.json());
      setOrders(res.orders ?? []);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function handleStatus(order: Order, status: string) {
    const res = await fetch(`/api/orders/${order.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (res.ok) load();
  }

  async function toggleExpand(order: Order) {
    if (expanded === order.id) {
      setExpanded(null);
      return;
    }
    if (!order.items) {
      const res = await fetch(`/api/orders/${order.id}`).then((r) => r.json());
      setOrders((prev) =>
        prev.map((o) => (o.id === order.id ? { ...o, items: res.order.items } : o))
      );
    }
    setExpanded(order.id);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center rounded-2xl border border-stone-200 bg-white p-10">
        <Loader2 className="h-6 w-6 animate-spin text-sage-700" />
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-stone-200 bg-white p-14 text-center">
        <PackageOpen className="h-14 w-14 text-stone-300" />
        <p className="mt-4 font-medium text-stone-700">No orders yet</p>
        <p className="mt-1 text-sm text-stone-500">
          Orders placed through checkout will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-stone-900">
        Orders ({orders.length})
      </h2>

      {orders.map((order) => {
        const date = new Date(order.created_at).toLocaleString();
        return (
          <div
            key={order.id}
            className="overflow-hidden rounded-2xl border border-stone-200 bg-white"
          >
            <button
              onClick={() => toggleExpand(order)}
              className="flex w-full flex-col gap-3 px-5 py-4 text-left transition-colors hover:bg-stone-50 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-sm font-semibold text-stone-900">
                  {order.reference}
                </span>
                <span className="text-sm text-stone-500">{date}</span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-stone-700">
                  {order.customer_name}
                </span>
                <span className="text-sm text-stone-500">{order.email}</span>
                <span className="text-sm font-semibold text-stone-900">
                  ${Number(order.total).toFixed(2)}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${STATUS_COLORS[order.status] || STATUS_COLORS.pending}`}
                >
                  {order.status}
                </span>
                {expanded === order.id ? (
                  <ChevronUp className="h-4 w-4 text-stone-400" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-stone-400" />
                )}
              </div>
            </button>

            {expanded === order.id && (
              <div className="border-t border-stone-100 bg-stone-50/50 px-5 py-4">
                <div className="grid gap-4 text-sm md:grid-cols-2">
                  <div>
                    <p className="font-semibold text-stone-900">Contact</p>
                    <p className="mt-1 text-stone-600">
                      Phone: {order.phone || "—"}
                      <br />
                      Address: {order.address || "—"}, {order.city} {order.country}
                      <br />
                      Delivery:{" "}
                      <span className="capitalize">{order.delivery_method}</span>
                      {order.notes ? (
                        <>
                          <br />
                          Notes: {order.notes}
                        </>
                      ) : null}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">Items</p>
                    <ul className="mt-1 space-y-1 text-stone-600">
                      {(order.items ?? []).map((it, i) => (
                        <li key={i}>
                          {it.qty} x {it.product_name} — $
                          {(Number(it.price) * it.qty).toFixed(2)}
                        </li>
                      ))}
                      <li className="pt-1 font-semibold text-stone-900">
                        Total: ${Number(order.total).toFixed(2)}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-stone-600">Status:</span>
                  {STATUSES.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleStatus(order, s)}
                      className={`rounded-full px-3 py-1 text-xs font-medium capitalize transition-colors ${
                        order.status === s
                          ? STATUS_COLORS[s]
                          : "border border-stone-300 bg-white text-stone-500 hover:border-sage-500 hover:text-sage-700"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}