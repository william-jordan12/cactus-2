"use client";

import { useState } from "react";
import { KeyRound, Save, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function ChangePasswordForm() {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [ok, setOk] = useState(false);
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setOk(false);

    if (next.length < 8) {
      setError("New password must be at least 8 characters.");
      return;
    }
    if (next !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setSaving(true);
    try {
      const res = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword: current, newPassword: next }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to change password.");
      } else {
        setOk(true);
        setCurrent("");
        setNext("");
        setConfirm("");
      }
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="max-w-md">
      <div className="rounded-2xl border border-stone-200 bg-white p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-sage-700">
          <KeyRound className="h-6 w-6" />
        </div>
        <h2 className="mt-4 text-lg font-semibold text-stone-900">
          Change Password
        </h2>
        <p className="mt-1 text-sm text-stone-500">
          Update the password used to access this admin dashboard.
        </p>

        {error && (
          <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
            <AlertTriangle className="h-4 w-4 shrink-0" />
            {error}
          </div>
        )}
        {ok && (
          <div className="mt-4 flex items-center gap-2 rounded-lg bg-sage-50 px-4 py-3 text-sm text-sage-800">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            Password updated successfully.
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-stone-700">
              Current Password
            </label>
            <input
              type="password"
              required
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm outline-none focus:border-sage-500"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-stone-700">
              New Password
            </label>
            <input
              type="password"
              required
              value={next}
              onChange={(e) => setNext(e.target.value)}
              className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm outline-none focus:border-sage-500"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-stone-700">
              Confirm New Password
            </label>
            <input
              type="password"
              required
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm outline-none focus:border-sage-500"
            />
          </div>
          <button
            type="submit"
            disabled={saving}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-sage-700 py-3 text-sm font-semibold text-white hover:bg-sage-800 disabled:opacity-60"
          >
            <Save className="h-4 w-4" />
            {saving ? "Saving..." : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
}