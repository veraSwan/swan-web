"use client";
import React from "react";
import type { MockTheme } from "./types";

type MockNewsletterProps = {
  theme: MockTheme;
  label: string;
  heading: string;
  subline: string;
  placeholder: string;
  cta: string;
  compact?: boolean;
};

/**
 * MockNewsletter — premium subscribe section with eyebrow, large heading,
 * inline form + CTA. Looks like a real waitlist module.
 */
const MockNewsletter: React.FC<MockNewsletterProps> = ({
  theme,
  label,
  heading,
  subline,
  placeholder,
  cta,
  compact = false,
}) => {
  const padX = compact ? "px-4" : "px-8 md:px-12 lg:px-20";
  const padY = compact ? "py-8" : "py-20 md:py-28";
  const headingSize = compact ? "text-base" : "text-2xl md:text-3xl lg:text-[2.5rem]";
  const sublineSize = compact ? "text-[0.55rem]" : "text-[0.7rem] md:text-[0.85rem]";
  const labelSize = compact ? "text-[0.45rem]" : "text-[0.55rem] md:text-[0.65rem]";
  const inputHeight = compact ? "h-7" : "h-12 md:h-14";
  const ctaSize = compact ? "text-[0.45rem] px-3 py-1.5" : "text-[0.55rem] md:text-[0.65rem] px-6 py-3 md:px-8 md:py-3.5";

  return (
    <div className={`${padX} ${padY}`}>
      <div className={`max-w-3xl ${compact ? "" : "mx-auto text-center"}`}>
        <span
          className={`${labelSize} ${theme.accentText} tracking-[0.32em] uppercase mb-3 md:mb-5 block font-medium`}
          style={{ fontFamily: theme.bodyFont }}
        >
          {label}
        </span>
        <h2
          className={`${headingSize} ${theme.text} font-medium leading-[1.05] tracking-[-0.02em] mb-3 md:mb-5`}
          style={{ fontFamily: theme.displayFont }}
        >
          {heading}
        </h2>
        <p
          className={`${sublineSize} ${theme.textMuted} font-light leading-[1.7] mb-5 md:mb-9 max-w-xl ${compact ? "" : "mx-auto"}`}
          style={{ fontFamily: theme.bodyFont }}
        >
          {subline}
        </p>
        <div className={`flex ${compact ? "flex-col gap-1.5" : "flex-col sm:flex-row gap-2 md:gap-3 justify-center"} max-w-xl ${compact ? "" : "mx-auto"}`}>
          <div
            className={`${inputHeight} flex-1 rounded-full ${theme.surface} border ${theme.border} flex items-center px-5 md:px-6`}
          >
            <span
              className={`${sublineSize} ${theme.textMuted}`}
              style={{ fontFamily: theme.bodyFont }}
            >
              {placeholder}
            </span>
          </div>
          <span
            className={`${ctaSize} ${theme.accentBg} text-white tracking-[0.22em] uppercase font-semibold rounded-full inline-flex items-center justify-center gap-2 shrink-0`}
            style={{ fontFamily: theme.bodyFont }}
          >
            {cta}
            <span className="text-[0.7em]">→</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MockNewsletter;
