"use client";
import React from "react";
import type { MockTheme } from "./types";

type FooterColumn = {
  title: string;
  links: string[];
};

type MockFooterProps = {
  theme: MockTheme;
  brand: string;
  tagline?: string;
  columns?: FooterColumn[];
  copyright?: string;
  compact?: boolean;
};

/**
 * MockFooter — full footer with brand block, link columns, and copyright row.
 * Anchors the mocked site so it reads as a complete landing, not a snippet.
 */
const MockFooter: React.FC<MockFooterProps> = ({
  theme,
  brand,
  tagline,
  columns = [
    { title: "Marka", links: ["O nas", "Atelier", "Editorial", "Press"] },
    { title: "Sklep", links: ["Kolekcja", "Lookbook", "Lista oczekujących"] },
    { title: "Pomoc", links: ["Kontakt", "Wysyłka", "Polityka zwrotów"] },
  ],
  copyright = "© 2026 — wszystkie prawa zastrzeżone.",
  compact = false,
}) => {
  const padX = compact ? "px-4" : "px-8 md:px-12 lg:px-20";
  const padY = compact ? "py-6" : "py-16 md:py-20";
  const brandSize = compact ? "text-[0.7rem]" : "text-[1rem] md:text-[1.15rem]";
  const tagSize = compact ? "text-[0.5rem]" : "text-[0.65rem] md:text-[0.75rem]";
  const colTitleSize = compact ? "text-[0.45rem]" : "text-[0.55rem] md:text-[0.65rem]";
  const linkSize = compact ? "text-[0.5rem]" : "text-[0.7rem] md:text-[0.8rem]";
  const copySize = compact ? "text-[0.45rem]" : "text-[0.55rem] md:text-[0.65rem]";

  return (
    <div className={`${padX} ${padY} border-t ${theme.border}`}>
      <div className={`grid ${compact ? "grid-cols-1 gap-4" : "grid-cols-12 gap-8 md:gap-12"} mb-8 md:mb-14`}>
        <div className={compact ? "" : "col-span-12 md:col-span-4"}>
          <span
            className={`${brandSize} ${theme.text} font-light tracking-[0.32em] uppercase block mb-2 md:mb-4`}
            style={{ fontFamily: theme.displayFont }}
          >
            {brand}
          </span>
          {tagline && (
            <p
              className={`${tagSize} ${theme.textMuted} font-light leading-[1.65] max-w-xs`}
              style={{ fontFamily: theme.bodyFont }}
            >
              {tagline}
            </p>
          )}
        </div>
        {!compact && (
          <div className="col-span-12 md:col-span-8 grid grid-cols-3 gap-6 md:gap-10">
            {columns.map((col, i) => (
              <div key={i}>
                <span
                  className={`${colTitleSize} ${theme.accentText} tracking-[0.28em] uppercase mb-3 md:mb-5 block font-medium`}
                  style={{ fontFamily: theme.bodyFont }}
                >
                  {col.title}
                </span>
                <ul className="space-y-1.5 md:space-y-2.5">
                  {col.links.map((link, j) => (
                    <li
                      key={j}
                      className={`${linkSize} ${theme.textMuted} font-light`}
                      style={{ fontFamily: theme.bodyFont }}
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={`flex items-center justify-between pt-5 md:pt-8 border-t ${theme.border}`}>
        <span
          className={`${copySize} ${theme.textMuted} tracking-wide font-light`}
          style={{ fontFamily: theme.bodyFont }}
        >
          {copyright}
        </span>
      </div>
    </div>
  );
};

export default MockFooter;
