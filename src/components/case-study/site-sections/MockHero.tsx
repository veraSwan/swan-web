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
  const padX = compact ? "px-4" : "px-8 md:px-12 lg:px-16";
  const padY = compact ? "py-8" : "py-16 md:py-24 lg:py-28";
  const labelSize = compact ? "text-[0.45rem]" : "text-[0.55rem] md:text-[0.65rem]";
  const headingSize = compact
    ? "text-base"
    : "text-2xl md:text-4xl lg:text-5xl";
  const sublineSize = compact ? "text-[0.55rem]" : "text-[0.7rem] md:text-[0.85rem]";
  const ctaSize = compact ? "text-[0.45rem] px-3 py-1.5" : "text-[0.55rem] md:text-[0.65rem] px-5 py-2.5 md:px-6 md:py-3";

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
            className={`${headingSize} ${theme.text} font-medium leading-[1.05] tracking-[-0.02em] mb-3 md:mb-5`}
            style={{ fontFamily: theme.displayFont }}
          >
            {heading}
          </h1>
          <p
            className={`${sublineSize} ${theme.textMuted} font-light leading-[1.7] mb-5 md:mb-8 max-w-[28ch]`}
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
                <div className={`w-full h-full ${theme.surface}`}>
                  {/* Subtle gradient placeholder */}
                  <div
                    className="w-full h-full"
                    style={{
                      background:
                        "radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.06), transparent 60%), linear-gradient(135deg, rgba(255,255,255,0.03), rgba(0,0,0,0.2))",
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
