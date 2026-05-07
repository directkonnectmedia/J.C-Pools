"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
] as const;

type Props = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const prevOverflow = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (open) {
      prevOverflow.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      queueMicrotask(() => closeBtnRef.current?.focus());
    } else if (prevOverflow.current !== undefined) {
      document.body.style.overflow = prevOverflow.current ?? "";
    }
    return () => {
      document.body.style.overflow = prevOverflow.current ?? "";
    };
  }, [open]);

  function handleNav(href: string) {
    onClose();
    queueMicrotask(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-slate-950/97 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex justify-end p-4 sm:p-6">
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              className="flex h-12 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/15 bg-white/10 text-lg font-medium text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-center justify-center gap-4 px-6 pb-24">
            {LINKS.map((link) => (
              <motion.button
                key={link.href}
                type="button"
                onClick={() => handleNav(link.href)}
                className="min-h-[48px] w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center font-[family-name:var(--font-display)] text-2xl font-semibold text-white shadow-lg transition hover:bg-cyan-500/20 hover:border-cyan-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22 }}
              >
                {link.label}
              </motion.button>
            ))}
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
