"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function ThankYouModal({ open, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    queueMicrotask(() => closeRef.current?.focus());
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="thank-you-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm"
            aria-label="Dismiss overlay"
            onClick={onClose}
          />
          <motion.div
            className="relative z-10 w-full max-w-md rounded-3xl border border-white/15 bg-slate-900 p-8 shadow-2xl shadow-cyan-950/50"
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
          >
            <div className="flex justify-end">
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="flex h-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <h2
              id="thank-you-title"
              className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-white"
            >
              Thank you for choosing our company and services.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              We received your request details. If your mail app opened, send the
              message and our team will follow up shortly. You can also call us
              directly from the header or footer anytime.
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
