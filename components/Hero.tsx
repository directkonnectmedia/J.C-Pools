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
      <div className="pointer-events-none absolute inset-0 -z-[5] bg-gradient-to-b from-slate-950/70 via-slate-950/45 to-slate-950/85" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-20 sm:px-8">
        <BrandMark variant="hero" className="mx-auto drop-shadow-xl sm:mx-0" />
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
