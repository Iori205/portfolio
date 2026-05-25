"use client";

import { Copy } from "lucide-react";

export function HomeFooter() {
  return (
    <footer className="void-shell flex flex-col items-start justify-between gap-5 border-t border-white/[0.08] pt-7  text-xs uppercase tracking-[0.16em] text-zinc-500 md:flex-row md:items-center">
      <p>Baatar-Ochir Sodbilegt / Full-stack developer</p>
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => navigator.clipboard.writeText("sodoo53@gmail.com")}
          className="inline-flex items-center gap-2 text-zinc-300"
        ></button>
        <span>Ulaanbaatar</span>
      </div>
    </footer>
  );
}
