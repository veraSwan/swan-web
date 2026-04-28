"use client";
import React from "react";
import type { MockTheme } from "./types";

type MockHeroProps = {
  theme: MockTheme;
  label: string;
  heading: string;
  subline: string;
  cta: string;
  /** Optional image url shown as the hero artwork. */
  image?: string;
  compact?: boolean;
};

const MockHero: React.FC<MockHeroProps> = ({
  theme,
  label,
  heading,
  subline,
  cta,
  image,
  compact = false,
}) => {
  const padX = compact ? "px-4" : "px-8 md:px-14 lg:px-20";
  const padY = compact ? "py-8" : "py-20 md:py-28 lg:py-32";
  const labelSize = compact ? "text-[0.45rem]" : "text-[0.55rem] md:text-[0.7rem]";
  const headingSize = compact
    ? "text-base"
    : "text-3xl md:text-5xl lg:text-[4rem]";
  const sublineSize = compact ? "text-[0.55rem]" : "text-[0.75rem] md:text-[0.95rem]";
  const ctaSize = compact ? "text-[0.45rem] px-3 py-1.5" : "text-[0.6rem] md:text-[0.75rem] px-7 py-3 md:px-8 md:py-4";

  return (
    <div
      className={`relative ${padX} ${padY} overflow-hidden`}
      style={theme.heroGradient ? { background: theme.heroGradient } : undefined}
    >
      <div className={`grid ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"} gap-6 md:gap-10 items-center relative z-10`}>
        <div>
          <span
            className={`${labelSize} ${theme.accentText} tracking-[0.32em] uppercase mb-3 md:mb-5 block font-medium`}
            style={{ fontFamily: theme.bodyFont }}
          >
            {label}
          </span>
          <h1
            className={`${headingSize} ${theme.text} font-medium leading-[1.02] tracking-[-0.03em] mb-4 md:mb-7`}
            style={{ fontFamily: theme.displayFont }}
          >
            {heading}
          </h1>
          <p
            className={`${sublineSize} ${theme.textMuted} font-light leading-[1.75] mb-6 md:mb-10 max-w-[32ch]`}
            style={{ fontFamily: theme.bodyFont }}
          >
            {subline}
          </p>
          <span
            className={`${ctaSize} ${theme.accentBg} text-white tracking-[0.22em] uppercase font-semibold rounded-full inline-flex items-center gap-2`}
            style={{ fontFamily: theme.bodyFont }}
          >
            {cta}
            <span className="text-[0.7em]">→</span>
          </span>
        </div>
        {!compact && (
          <div className="relative">
            <div className={`relative aspect-[4/5] rounded-[1rem] overflow-hidden ${theme.surface} border ${theme.border}`}>
              {image ? (
                <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
              ) : (
                <div className="w-full h-full relative">
                  {/* Layered atmospheric gradient — feels like a magazine spread */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse at 30% 25%, rgba(255,255,255,0.10), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(192,87,117,0.18), transparent 60%), linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.35) 100%)",
                    }}
                  />
                  {/* Centered "object" silhouette suggesting a perfume bottle / product still life */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-[40%] h-[60%] rounded-[0.5rem] opacity-60"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 30%, rgba(0,0,0,0.4) 100%)",
                        boxShadow:
                          "0 30px 60px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -20px 40px rgba(0,0,0,0.3)",
                      }}
                    />
                  </div>
                  {/* Soft top highlight */}
                  <div
                    className="absolute inset-x-0 top-0 h-[40%] pointer-events-none opacity-50"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 100%)",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MockHero;
