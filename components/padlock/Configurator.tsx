import { useState, useMemo } from "react";
import { CheckCircle2, ShoppingCart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PadlockPreview } from "./PadlockPreview";

const COLORS = [
  { id: "red", name: "Red", hex: "#ef4444" },
  { id: "orange", name: "Orange", hex: "#f97316" },
  { id: "yellow", name: "Yellow", hex: "#eab308" },
  { id: "green", name: "Green", hex: "#22c55e" },
  { id: "blue", name: "Blue", hex: "#3b82f6" },
  { id: "purple", name: "Purple", hex: "#a855f7" },
  { id: "black", name: "Black", hex: "#111827" },
  { id: "white", name: "White", hex: "#f9fafb", border: "#e5e7eb", text: "#111827" },
];

const MATERIALS = [
  { id: "thermo", name: "Thermoplastic", badge: "Non‑conductive" },
  { id: "alum", name: "Aluminum", badge: "Lightweight" },
  { id: "steel", name: "Laminated Steel", badge: "Rugged" },
];

const SHACKLES = [
  { id: "std", name: "Standard", height: 38 },
  { id: "tall", name: "Tall", height: 76 },
];

const KEYINGS = [
  { id: "kd", name: "Keyed Different (KD)", tip: "Setiap gembok punya kunci unik." },
  { id: "ka", name: "Keyed Alike (KA)", tip: "Satu kunci membuka beberapa gembok." },
  { id: "mk", name: "Master Keyed (MK)", tip: "Kunci master + kunci individual (untuk hierarki)." },
];

export function Configurator() {
  const [material, setMaterial] = useState("thermo");
  const [color, setColor] = useState("orange");
  const [shackle, setShackle] = useState("std");
  const [keying, setKeying] = useState("kd");
  const [engraving, setEngraving] = useState("GEMBOKLOTO");
  const [qty, setQty] = useState(24);

  const price = useMemo(() => {
    const base = material === "steel" ? 17 : material === "alum" ? 15 : 14;
    const sh = shackle === "tall" ? 2 : 0;
    const mk = keying === "mk" ? 1.5 : 0;
    const eng = engraving ? 0.5 : 0;
    return Math.round((base + sh + mk + eng) * 100) / 100;
  }, [material, shackle, keying, engraving]);

  const total = useMemo(() => Math.round(price * qty * 100) / 100, [price, qty]);
  const matName = MATERIALS.find((m) => m.id === material)?.name || "Thermoplastic";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium text-foreground">Material</label>
            <div className="mt-3 grid grid-cols-1 gap-2">
              {MATERIALS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMaterial(m.id)}
                  className={`flex items-center justify-between rounded-xl border px-3 py-2 text-left transition ${
                    material === m.id ? "border-primary bg-secondary" : "border-border"
                  }`}
                >
                  <div>
                    <div className="text-sm font-medium">{m.name}</div>
                    <div className="text-xs text-muted-foreground">{m.badge}</div>
                  </div>
                  {material === m.id && <CheckCircle2 className="h-4 w-4" />}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Color (Standardized)</label>
            <div className="mt-3 grid grid-cols-8 gap-2">
              {COLORS.map((c) => (
                <button
                  aria-label={c.name}
                  key={c.id}
                  onClick={() => setColor(c.id)}
                  className={`h-8 w-8 rounded-full border transition ${
                    color === c.id ? "ring-2 ring-offset-2 ring-primary" : ""
                  }`}
                  style={{ backgroundColor: c.hex, borderColor: c.border || "#d1d5db" }}
                />
              ))}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Color coding supports identification by department/role.</p>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Shackle Height</label>
            <div className="mt-3 flex gap-2">
              {SHACKLES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setShackle(s.id)}
                  className={`rounded-xl border px-3 py-2 text-sm transition flex-1 ${
                    shackle === s.id ? "border-primary bg-secondary" : "border-border"
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Match device/hasp/box reach.</p>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">Keying</label>
            <div className="mt-3 grid grid-cols-1 gap-2">
              {KEYINGS.map((k) => (
                <button
                  key={k.id}
                  onClick={() => setKeying(k.id)}
                  className={`rounded-xl border px-3 py-2 text-left transition ${
                    keying === k.id ? "border-primary bg-secondary" : "border-border"
                  }`}
                >
                  <div className="text-sm font-medium">{k.name}</div>
                  <div className="text-xs text-muted-foreground">{k.tip}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="text-sm font-medium text-foreground">Engraving (Logo/Name/ID)</label>
            <input
              value={engraving}
              onChange={(e) => setEngraving(e.target.value.toUpperCase().slice(0, 16))}
              placeholder="e.g., PT SAFETY – ID 023"
              className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <p className="mt-2 text-xs text-muted-foreground">Max 16 chars for best legibility on body.</p>
          </div>
        </div>
      </Card>

      <Card className="p-5">
        <div className="grid grid-cols-1 gap-4">
          <div className="aspect-square w-full">
            <PadlockPreview color={color} engraving={engraving} shackle={shackle} material={matName} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Unit Price (est)</div>
              <div className="text-2xl font-semibold">${price.toFixed(2)}</div>
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Quantity</label>
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) => setQty(Math.max(1, Number(e.target.value || 1)))}
                className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-border pt-4">
            <div>
              <div className="text-xs text-muted-foreground">Key‑retaining • OSHA aligned • Group lockout ready</div>
              <div className="text-sm font-medium mt-1">Total: ${total.toFixed(2)}</div>
            </div>
            <button className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 transition">
              <ShoppingCart className="h-4 w-4" /> Add to Quote
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
