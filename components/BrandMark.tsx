import Image from "next/image";
import { COMPANY, COMPANY_LOGO_SRC } from "@/lib/site-data";

type Props = {
  variant?: "header" | "hero";
  className?: string;
};

export function BrandMark({ variant = "header", className = "" }: Props) {
  const isHero = variant === "hero";

  return (
    <div
      className={`flex items-center gap-3 ${isHero ? "flex-col sm:flex-row sm:gap-5" : ""} ${className}`}
    >
      <div
        className={`relative shrink-0 overflow-visible drop-shadow-lg ${
          isHero
            ? "h-[8.5rem] w-[11rem] sm:h-[10rem] sm:w-[13rem]"
            : "h-14 w-[5.25rem] sm:h-16 sm:w-24"
        }`}
      >
        <Image
          src={COMPANY_LOGO_SRC}
          alt=""
          role="presentation"
          fill
          priority
          sizes={
            isHero
              ? "(max-width: 640px) 176px, 208px"
              : "(max-width: 640px) 84px, 96px"
          }
          unoptimized
          className="object-contain object-left"
        />
      </div>
      <div className={`min-w-0 text-center ${isHero ? "sm:text-left" : ""}`}>
        <p
          className={`font-semibold tracking-tight text-white drop-shadow-md ${
            isHero
              ? "font-[family-name:var(--font-display)] text-[clamp(1.75rem,6vw,3.25rem)] leading-tight"
              : "font-[family-name:var(--font-display)] text-lg sm:text-xl leading-snug"
          }`}
        >
          {COMPANY.name}
        </p>
        {!isHero ? (
          <p className="hidden text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-100/90 sm:block">
            Remodeling
          </p>
        ) : (
          <p className="mt-3 max-w-xl text-base text-white/90 drop-shadow sm:text-lg">
            {COMPANY.tagline}
          </p>
        )}
      </div>
    </div>
  );
}
