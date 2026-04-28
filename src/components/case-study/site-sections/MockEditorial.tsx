"use client";
import React from "react";
import type { MockTheme } from "./types";

type MockEditorialProps = {
  theme: MockTheme;
  label: string;
  heading: string;
  body: string;
  signature?: string;
  compact?: boolean;
};

/**
 * MockEditorial — "Notatka redakcyjna" / "O marce" section. A long, premium
 * paragraph balanced with a small label — feels like a magazine spread.
 */
const MockEditorial: React.FC<MockEditorialProps> = ({
  theme,
  label,
  heading,
  body,
  signature,
  compact = false,
}) => {
  const padX = compact ? "px-4" : "px-8 md:px-12 lg:px-20";
  const padY = compact ? "py-8" : "py-20 md:py-28";
  const headingSize = compact ? "text-base" : "text-2xl md:text-3xl lg:text-[2.5rem]";
  const bodySize = compact ? "text-[0.55rem]" : "text-[0.8rem] md:text-[0.95rem]";
  const labelSize = compact ? "text-[0.45rem]" : "text-[0.55rem] md:text-[0.65rem]";
  const sigSize = compact ? "text-[0.45rem]" : "text-[0.55rem] md:text-[0.65rem]";

  return (
    <div className={`${padX} ${padY}`}>
      <div className={`grid ${compact ? "grid-cols-1 gap-3" : "grid-cols-12 gap-6 md:gap-12 lg:gap-16"}`}>
        <div className={compact ? "" : "col-span-12 md:col-span-4"}>
          <span
            className={`${labelSize} ${theme.accentText} tracking-[0.32em] uppercase mb-2 md:mb-3 block font-medium`}
            style={{ fontFamily: theme.bodyFont }}
          >
            {label}
          </span>
          <h2
            className={`${headingSize} ${theme.text} font-medium leading-[1.05] tracking-[-0.025em]`}
            style={{ fontFamily: theme.displayFont }}
          >
            {heading}
          </h2>
        </div>
        <div className={compact ? "" : "col-span-12 md:col-span-7 md:col-start-6"}>
          <p
            className={`${bodySize} ${theme.text} font-light leading-[1.85]`}
            style={{ fontFamily: theme.bodyFont }}
          >
            {body}
          </p>
          {signature && (
            <span
              className={`${sigSize} ${theme.textMuted} tracking-[0.25em] uppercase mt-4 md:mt-8 block font-medium`}
              style={{ fontFamily: theme.bodyFont }}
            >
              — {signature}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MockEditorial;
