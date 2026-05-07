"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { SERVICE_SLIDES } from "@/lib/site-data";
import { WaveTransition } from "./WaveTransition";

export function ServicesCarousel() {
  const reduceMotion = useReducedMotion();
  const prefersReducedMotion = reduceMotion === true;
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 5500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    [],
  );
  const plugins = prefersReducedMotion ? [] : [autoplay];
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, skipSnaps: false },
    plugins,
  );

  const [waveDir, setWaveDir] = useState<"next" | "prev" | null>(null);
  const [waveToken, setWaveToken] = useState(0);

  const runWaveScroll = useCallback(
    (dir: "next" | "prev") => {
      if (!emblaApi) return;
      if (prefersReducedMotion) {
        if (dir === "next") emblaApi.scrollNext();
        else emblaApi.scrollPrev();
        return;
      }
      setWaveDir(dir);
      setWaveToken((t) => t + 1);
      window.setTimeout(() => {
        if (dir === "next") emblaApi.scrollNext();
        else emblaApi.scrollPrev();
      }, 320);
      window.setTimeout(() => {
        setWaveDir(null);
      }, 720);
    },
    [emblaApi, prefersReducedMotion],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        runWaveScroll("prev");
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        runWaveScroll("next");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [emblaApi, runWaveScroll]);

  return (
    <section
      id="services"
      className="scroll-mt-[72px] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400/90">
            Services
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-white">
            Remodeling expertise for every detail
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            Explore our core offerings — each card highlights how we elevate your
            pool.
          </p>
        </header>

        <div className="relative mt-14">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 shadow-2xl shadow-cyan-950/40">
            <div ref={emblaRef}>
              <div className="flex touch-pan-y">
                {SERVICE_SLIDES.map((slide) => (
                  <div
                    key={slide.id}
                    className="min-w-0 shrink-0 grow-0 basis-full"
                  >
                    <article className="grid gap-0 lg:grid-cols-[1.15fr_1fr]">
                      <div className="relative aspect-[4/3] w-full bg-slate-900 lg:aspect-auto lg:min-h-[340px]">
                        <Image
                          src={slide.imageUrl}
                          alt={slide.imageAlt}
                          fill
                          sizes="(max-width:1024px) 100vw, 55vw"
                          className="object-cover object-center"
                          priority={slide.id === SERVICE_SLIDES[0].id}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:bg-gradient-to-r" />
                      </div>
                      <div className="flex flex-col justify-center px-6 py-10 sm:px-10">
                        <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">
                          {slide.title}
                        </h3>
                        <p className="mt-4 text-lg leading-relaxed text-slate-300">
                          {slide.description}
                        </p>
                        <a
                          href="#contact"
                          className="mt-8 inline-flex min-h-[48px] w-fit items-center rounded-full border border-cyan-400/40 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                        >
                          Discuss this service
                        </a>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <WaveTransition direction={waveDir} token={waveToken} />

            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-4">
              <button
                type="button"
                aria-label="Previous service"
                onClick={() => runWaveScroll("prev")}
                className="pointer-events-auto flex h-12 min-h-[48px] w-12 min-w-[48px] items-center justify-center rounded-full border border-white/15 bg-slate-950/80 text-2xl text-white shadow-lg backdrop-blur-sm transition hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next service"
                onClick={() => runWaveScroll("next")}
                className="pointer-events-auto flex h-12 min-h-[48px] w-12 min-w-[48px] items-center justify-center rounded-full border border-white/15 bg-slate-950/80 text-2xl text-white shadow-lg backdrop-blur-sm transition hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
