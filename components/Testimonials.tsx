import { TESTIMONIALS } from "@/lib/site-data";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-[72px] border-y border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400/90">
            Reviews
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-white">
            Trusted by Chicagoland homeowners & properties
          </h2>
        </header>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <li key={t.id}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-inner shadow-black/20">
                <div className="flex gap-1 text-amber-400" aria-hidden>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="mt-4 flex-1 text-lg leading-relaxed text-slate-200">
                  “{t.quote}”
                </p>
                <footer className="mt-6 text-sm text-slate-400">
                  <span className="font-semibold text-white">{t.name}</span>
                  <span className="text-slate-500"> · {t.location}</span>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
