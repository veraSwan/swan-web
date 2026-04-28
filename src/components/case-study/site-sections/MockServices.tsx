"use client";
import React from "react";
import type { MockTheme } from "./types";

type ServiceItem = {
  title: string;
  description: string;
};

type MockServicesProps = {
  theme: MockTheme;
  label: string;
  heading: string;
  items: ServiceItem[];
  compact?: boolean;
};

const MockServices: React.FC<MockServicesProps> = ({ theme, label, heading, items, compact = false }) => {
  const padX = compact ? "px-4" : "px-8 md:px-12 lg:px-16";
  const padY = compact ? "py-6" : "py-14 md:py-20";
  const headingSize = compact ? "text-sm" : "text-xl md:text-2xl lg:text-3xl";
  const cardTitleSize = compact ? "text-[0.6rem]" : "text-[0.85rem] md:text-[1rem]";
  const cardBodySize = compact ? "text-[0.5rem]" : "text-[0.65rem] md:text-[0.75rem]";
  const labelSize = compact ? "text-[0.45rem]" : "text-[0.55rem] md:text-[0.65rem]";

  return (
    <div className={`${padX} ${padY}`}>
      <div className={`mb-5 md:mb-10 ${compact ? "text-left" : "text-center"}`}>
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
      <div className={`grid ${compact ? "grid-cols-1 gap-2" : "grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"}`}>
        {items.map((item, i) => (
          <div
            key={i}
            className={`p-3 md:p-5 lg:p-6 rounded-[0.75rem] ${theme.surface} border ${theme.border}`}
          >
            <div className={`w-6 h-6 md:w-8 md:h-8 rounded-md ${theme.accentBg} opacity-90 mb-2 md:mb-4`} />
            <h3
              className={`${cardTitleSize} ${theme.text} font-medium mb-1 md:mb-2 tracking-tight`}
              style={{ fontFamily: theme.displayFont }}
            >
              {item.title}
            </h3>
            <p
              className={`${cardBodySize} ${theme.textMuted} font-light leading-[1.6]`}
              style={{ fontFamily: theme.bodyFont }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockServices;
