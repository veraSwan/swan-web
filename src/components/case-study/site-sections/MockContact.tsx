"use client";
import React from "react";
import type { MockTheme } from "./types";

type MockContactProps = {
  theme: MockTheme;
  label: string;
  heading: string;
  fields?: { label: string; value?: string }[];
  cta: string;
  compact?: boolean;
};

const MockContact: React.FC<MockContactProps> = ({
  theme,
  label,
  heading,
  fields = [
    { label: "Imię" },
    { label: "Email" },
    { label: "Wiadomość" },
  ],
  cta,
  compact = false,
}) => {
  const padX = compact ? "px-4" : "px-8 md:px-12 lg:px-16";
  const padY = compact ? "py-6" : "py-14 md:py-20";
  const headingSize = compact ? "text-sm" : "text-xl md:text-2xl lg:text-3xl";
  const fieldLabelSize = compact ? "text-[0.45rem]" : "text-[0.55rem] md:text-[0.6rem]";
  const fieldHeight = compact ? "h-6" : "h-9 md:h-10";
  const ctaSize = compact ? "text-[0.5rem] px-4 py-2" : "text-[0.6rem] md:text-[0.7rem] px-6 py-3 md:px-8 md:py-3.5";
  const labelSize = compact ? "text-[0.45rem]" : "text-[0.55rem] md:text-[0.65rem]";

  return (
    <div className={`${padX} ${padY}`}>
      <div className={`grid ${compact ? "grid-cols-1 gap-5" : "grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"} items-start`}>
        <div>
          <span
            className={`${labelSize} ${theme.accentText} tracking-[0.32em] uppercase mb-2 md:mb-3 block font-medium`}
            style={{ fontFamily: theme.bodyFont }}
          >
            {label}
          </span>
          <h2
            className={`${headingSize} ${theme.text} font-medium leading-tight tracking-[-0.02em]`}
            style={{ fontFamily: theme.displayFont }}
          >
            {heading}
          </h2>
        </div>
        <div className="flex flex-col gap-2.5 md:gap-3.5">
          {fields.slice(0, fields.length - 1).map((field, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span
                className={`${fieldLabelSize} ${theme.textMuted} tracking-[0.2em] uppercase`}
                style={{ fontFamily: theme.bodyFont }}
              >
                {field.label}
              </span>
              <div className={`${fieldHeight} rounded-md ${theme.surface} border ${theme.border}`} />
            </div>
          ))}
          {fields.length > 0 && (
            <div className="flex flex-col gap-1">
              <span
                className={`${fieldLabelSize} ${theme.textMuted} tracking-[0.2em] uppercase`}
                style={{ fontFamily: theme.bodyFont }}
              >
                {fields[fields.length - 1].label}
              </span>
              <div className={`${compact ? "h-12" : "h-20 md:h-24"} rounded-md ${theme.surface} border ${theme.border}`} />
            </div>
          )}
          <span
            className={`${ctaSize} ${theme.accentBg} text-white tracking-[0.22em] uppercase font-semibold rounded-full inline-flex items-center gap-2 self-start mt-1`}
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

export default MockContact;
