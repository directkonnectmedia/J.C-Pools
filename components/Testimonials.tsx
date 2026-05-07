import { TESTIMONIALS } from "@/lib/site-data";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-[72px] border-y border-slate-950/10 bg-hero-cta-blue py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-900/85">
            Reviews
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-slate-950">
            Trusted by Phoenix-area homeowners & properties
          </h2>
        </header>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <li key={t.id}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-slate-950/10 bg-white/90 p-8 shadow-lg shadow-slate-950/10">
                <div className="flex gap-1 text-amber-500" aria-hidden>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="mt-4 flex-1 text-lg leading-relaxed text-slate-800">
                  “{t.quote}”
                </p>
                <footer className="mt-6 text-sm text-slate-600">
                  <span className="font-semibold text-slate-950">{t.name}</span>
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
