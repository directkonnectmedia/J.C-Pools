import Image from "next/image";
import { GALLERY_ITEMS } from "@/lib/site-data";

export function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-[72px] bg-surface-baby-blue py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
            Gallery
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-slate-900">
            Spaces we elevate
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Residential escapes, commercial landmarks, and tactile pool decks —
            each finish tailored on site.
          </p>
        </header>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item) => (
            <li key={item.id}>
              <figure className="group overflow-hidden rounded-2xl border border-sky-200/90 bg-white/85 shadow-lg shadow-sky-900/15 transition hover:border-cyan-400/60">
                <div className="relative aspect-[4/3] w-full bg-sky-100">
                  <Image
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="space-y-1 px-5 py-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
                    {item.category}
                  </span>
                  <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-slate-900">
                    {item.title}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
