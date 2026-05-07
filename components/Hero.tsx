import Image from "next/image";
import { BrandMark } from "./BrandMark";
import { COMPANY, HERO_IMAGE } from "@/lib/site-data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[88vh] min-h-[min(100dvh,920px)] flex-col justify-center overflow-hidden scroll-mt-[72px]"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-slate-950" />
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center bg-slate-900">
        <Image
          src={HERO_IMAGE}
          alt="Modern swimming pool with blue mosaic tile steps"
          fill
          priority
          sizes="100vw"
          unoptimized
          className="object-cover object-center opacity-[0.92]"
        />
      </div>
      <div
        className="hero-overlay-blue-pulse pointer-events-none absolute inset-0 -z-[8] bg-gradient-to-b from-sky-300/55 via-cyan-200/40 to-sky-400/50"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 -z-[5] bg-gradient-to-b from-slate-950/52 via-slate-950/32 to-slate-950/62" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-20 sm:px-8">
        <div className="relative isolate mx-auto w-fit max-w-full sm:mx-0">
          <div
            className="hero-brand-radial-glow pointer-events-none absolute left-1/2 top-[48%] z-0 h-[min(28rem,56vh)] w-[min(38rem,94vw)] -translate-x-1/2 -translate-y-1/2 sm:top-1/2"
            aria-hidden
          />
          <BrandMark variant="hero" className="relative z-10 drop-shadow-xl" />
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4 sm:justify-start">
          <a
            href="#contact"
            style={{ backgroundImage: "var(--hero-cta-gradient)" }}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get a quote
          </a>
          <a
            href={COMPANY.phoneTel}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            Call {COMPANY.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
