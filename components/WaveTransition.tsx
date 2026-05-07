"use client";

import { motion, AnimatePresence } from "framer-motion";

export type WaveDirection = "next" | "prev";

type Props = {
  direction: WaveDirection | null;
  /** Changes each activation so AnimatePresence replays */
  token: number;
};

export function WaveTransition({ direction, token }: Props) {
  const active = direction !== null;

  return (
    <AnimatePresence mode="wait">
      {active ? (
        <motion.div
          key={token}
          className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <motion.div
            className="absolute inset-y-[-10%] w-[130%] bg-gradient-to-r from-cyan-300/50 via-sky-400/55 to-blue-600/50 mix-blend-screen"
            initial={{
              x: direction === "next" ? "-60%" : "60%",
            }}
            animate={{
              x: direction === "next" ? "45%" : "-45%",
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: 0.58,
              ease: [0.45, 0, 0.2, 1],
              opacity: { times: [0, 0.55, 1], duration: 0.58 },
            }}
          />
          <svg
            className="absolute inset-0 h-full w-full text-white/25"
            preserveAspectRatio="none"
            viewBox="0 0 1200 320"
            aria-hidden
          >
            <motion.path
              fill="currentColor"
              d="M0,180 C150,140 350,220 600,180 C850,140 1050,220 1200,180 L1200,340 L0,340 Z"
              initial={{ x: direction === "next" ? -700 : 700 }}
              animate={{ x: direction === "next" ? 250 : -250 }}
              transition={{ duration: 0.58, ease: [0.45, 0, 0.2, 1] }}
            />
          </svg>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
