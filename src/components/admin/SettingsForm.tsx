"use client";

import { useCallback, useEffect, useState } from "react";
import { Save, Loader2, MessageCircle, Mail, KeyRound } from "lucide-react";

export default function SettingsForm() {
  const [whatsapp, setWhatsapp] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/settings");
      if (!res.ok) throw new Error("Failed to load settings.");
      const data = await res.json();
      setWhatsapp(data.settings?.whatsapp ?? "");
      setContactEmail(data.settings?.contactEmail ?? "");
      setAdminEmail(data.adminEmail ?? "");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load settings.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    setError("");
    try {
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ whatsapp, contactEmail, adminEmail }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to save settings.");
        return;
      }
      setWhatsapp(data.settings.whatsapp);
      setContactEmail(data.settings.contactEmail);
      setAdminEmail(data.adminEmail);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch {
      setError("Failed to save settings.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center rounded-2xl border border-stone-200 bg-white p-10">
        <Loader2 className="h-6 w-6 animate-spin text-sage-700" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl space-y-4">
      <div className="rounded-2xl border border-stone-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-stone-900">Store Settings</h2>
        <p className="mt-1 text-sm text-stone-500">
          Manage your WhatsApp number, contact email, and admin login email.
          Changes apply immediately — you&apos;ll use the updated login email on
          your next sign-in.
        </p>

        <div className="mt-6 space-y-5">
          <label className="block">
            <span className="flex items-center gap-2 text-sm font-medium text-stone-700">
              <MessageCircle className="h-4 w-4 text-sage-700" />
              WhatsApp Number
            </span>
            <input
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="e.g. 15551234567"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"
            />
            <span className="mt-1 block text-xs text-stone-400">
              International format, digits only (no +, spaces or dashes).
            </span>
          </label>

          <label className="block">
            <span className="flex items-center gap-2 text-sm font-medium text-stone-700">
              <Mail className="h-4 w-4 text-sage-700" />
              Contact Email
            </span>
            <input
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              placeholder="hello@saguaroseedvault.com"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"
            />
            <span className="mt-1 block text-xs text-stone-400">
              Shown to customers and used for email orders (mailto links).
            </span>
          </label>

          <div className="border-t border-stone-100 pt-5">
            <label className="block">
              <span className="flex items-center gap-2 text-sm font-medium text-stone-700">
                <KeyRound className="h-4 w-4 text-sage-700" />
                Admin Login Email
              </span>
              <input
                type="email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"
              />
              <span className="mt-1 block text-xs text-stone-400">
                The email you use to sign in to this dashboard. Use the new
                email on your next login.
              </span>
            </label>
          </div>
        </div>

        {error ? (
          <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        ) : null}
        {saved ? (
          <p className="mt-4 rounded-lg bg-sage-50 px-4 py-3 text-sm text-sage-800">
            Settings saved.
          </p>
        ) : null}

        <button
          onClick={handleSave}
          disabled={saving}
          className="mt-6 flex items-center gap-2 rounded-lg bg-sage-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-sage-800 disabled:opacity-50"
        >
          {saving ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Save className="h-4 w-4" />
          )}
          Save Settings
        </button>
      </div>
    </div>
  );
}