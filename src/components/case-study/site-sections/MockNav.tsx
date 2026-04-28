"use client";
import React from "react";
import type { MockTheme } from "./types";

type MockNavProps = {
  theme: MockTheme;
  brand: string;
  links?: string[];
  cta?: string;
  compact?: boolean;
};

const MockNav: React.FC<MockNavProps> = ({
  theme,
  brand,
  links = ["Home", "Kolekcja", "Studio", "Kontakt"],
  cta,
  compact = false,
}) => {
  const padX = compact ? "px-4" : "px-8 md:px-12";
  const padY = compact ? "py-3" : "py-5";
  const brandSize = compact ? "text-[0.7rem]" : "text-[0.9rem] md:text-[1rem]";
  const linkSize = compact ? "text-[0.5rem]" : "text-[0.55rem] md:text-[0.65rem]";

  return (
    <div className={`flex items-center justify-between ${padX} ${padY} border-b ${theme.border}`}>
      <span
        className={`${brandSize} ${theme.text} font-light tracking-[0.32em] uppercase`}
        style={{ fontFamily: theme.displayFont }}
      >
        {brand}
      </span>
      {!compact && (
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((link, i) => (
            <span
              key={i}
              className={`${linkSize} ${theme.textMuted} tracking-[0.2em] uppercase`}
              style={{ fontFamily: theme.bodyFont }}
            >
              {link}
            </span>
          ))}
        </div>
      )}
      {cta && !compact && (
        <span
          className={`${linkSize} ${theme.text} px-3.5 py-1.5 rounded-full ${theme.surface} border ${theme.border} tracking-[0.2em] uppercase`}
          style={{ fontFamily: theme.bodyFont }}
        >
          {cta}
        </span>
      )}
      {compact && (
        <div className="flex items-center gap-1">
          <span className={`block w-3 h-0.5 ${theme.textMuted.replace("text-", "bg-")}`} />
        </div>
      )}
    </div>
  );
};

export default MockNav;
