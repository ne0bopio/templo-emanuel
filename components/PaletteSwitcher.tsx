"use client";

import { useState } from "react";

// Demo-only control so the client can compare the 3 palette options live.
// Remove before final delivery.
const PALETTES = [
  { id: "calido", label: "Cálido", dot: "#a34a00" },
  { id: "cielo", label: "Cielo", dot: "#1d4fa8" },
  { id: "oliva", label: "Oliva", dot: "#a04520" },
];

export function PaletteSwitcher() {
  const [active, setActive] = useState("calido");

  const apply = (id: string) => {
    document.documentElement.setAttribute("data-palette", id);
    setActive(id);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-1 rounded-full bg-capsule/90 backdrop-blur-xl border border-white/[0.08] px-2 py-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
      {PALETTES.map((p) => (
        <button
          key={p.id}
          onClick={() => apply(p.id)}
          aria-label={`Paleta ${p.label}`}
          title={p.label}
          className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-semibold transition-all ${
            active === p.id
              ? "bg-white/[0.14] text-white"
              : "text-white/50 hover:text-white"
          }`}
        >
          <span
            className="inline-block w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: p.dot }}
          />
          {p.label}
        </button>
      ))}
    </div>
  );
}
