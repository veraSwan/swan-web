"use client";
import React from "react";
import type { MockTheme } from "./types";

type MockCTAProps = {
  theme: MockTheme;
  heading: string;
  subline?: string;
  cta: string;
  compact?: boolean;
};

const MockCTA: React.FC<MockCTAProps> = ({ theme, heading, subline, cta, compact = false }) => {
  const padX = compact ? "px-4" : "px-8 md:px-12 lg:px-16";
  const padY = compact ? "py-8" : "py-16 md:py-24";
  const headingSize = compact ? "text-base" : "text-2xl md:text-3xl lg:text-4xl";
  const sublineSize = compact ? "text-[0.55rem]" : "text-[0.7rem] md:text-[0.85rem]";
  const ctaSize = compact ? "text-[0.5rem] px-4 py-2" : "text-[0.6rem] md:text-[0.7rem] px-6 py-3 md:px-8 md:py-3.5";

  return (
    <div className={`${padX} ${padY}`}>
      <div
        className={`relative overflow-hidden rounded-[1.25rem] ${theme.surface} border ${theme.border} ${compact ? "p-5" : "p-10 md:p-16"} text-center`}
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04), transparent 60%)",
        }}
      >
        <h2
          className={`${headingSize} ${theme.text} font-medium leading-[1.05] tracking-[-0.02em] mb-3 md:mb-5 max-w-[20ch] mx-auto`}
          style={{ fontFamily: theme.displayFont }}
        >
          {heading}
        </h2>
        {subline && (
          <p
            className={`${sublineSize} ${theme.textMuted} font-light leading-[1.7] mb-5 md:mb-8 max-w-[40ch] mx-auto`}
            style={{ fontFamily: theme.bodyFont }}
          >
            {subline}
          </p>
        )}
        <span
          className={`${ctaSize} ${theme.accentBg} text-white tracking-[0.22em] uppercase font-semibold rounded-full inline-flex items-center gap-2`}
          style={{ fontFamily: theme.bodyFont }}
        >
          {cta}
          <span className="text-[0.7em]">→</span>
        </span>
      </div>
    </div>
  );
};

export default MockCTA;
