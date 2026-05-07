import { COMPANY } from "@/lib/site-data";
import { CompanyLogo } from "./CompanyLogo";

type Props = {
  variant?: "header" | "hero";
  className?: string;
};

export function BrandMark({ variant = "header", className = "" }: Props) {
  const isHero = variant === "hero";
  const onLight = variant === "header";

  return (
    <div
      className={`flex items-center gap-3 ${isHero ? "flex-col sm:flex-row sm:gap-5" : ""} ${className}`}
    >
      <CompanyLogo variant={variant} />
      <div className={`min-w-0 text-center ${isHero ? "sm:text-left" : ""}`}>
        <p
          className={`tracking-tight ${
            onLight
              ? "text-slate-900"
              : "text-white drop-shadow-md"
          } ${
            isHero
              ? "font-[family-name:var(--font-display)] text-[clamp(2.125rem,7.5vw,4.25rem)] font-bold leading-[1.06]"
              : "font-[family-name:var(--font-display)] text-lg font-semibold sm:text-xl leading-snug"
          }`}
        >
          {COMPANY.name}
        </p>
        {!isHero ? (
          <p
            className={`hidden text-[11px] font-medium uppercase tracking-[0.2em] sm:block ${onLight ? "text-sky-700" : "text-cyan-100/90"}`}
          >
            Remodeling
          </p>
        ) : (
          <p className="relative z-10 mt-3 max-w-xl text-base font-semibold text-white/95 drop-shadow-md sm:text-lg">
            {COMPANY.tagline}
          </p>
        )}
      </div>
    </div>
  );
}
