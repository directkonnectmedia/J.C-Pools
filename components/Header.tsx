"use client";

import { useState } from "react";
import { BrandMark } from "./BrandMark";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-sky-200/80 bg-surface-baby-blue/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a
            href="#hero"
            className="group flex min-h-[44px] items-center gap-2 rounded-lg outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-700"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("hero")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <BrandMark variant="header" />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="min-h-[44px] min-w-[44px] rounded-full border border-sky-400/70 bg-white/80 px-5 py-2 font-semibold tracking-wide text-slate-900 shadow-sm shadow-sky-900/10 transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
          >
            Menu
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
