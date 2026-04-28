"use client";
import React from "react";
import type { MockTheme } from "./types";

type LookbookItem = {
  /** Look name, e.g. "Look 01 — Soirée". */
  name: string;
  /** Optional one-line caption (collection / season). */
  caption?: string;
  /** Image URL — usually a portrait shot. */
  image?: string;
  /** Override for the placeholder background. */
  tileBg?: string;
};

type MockLookbookProps = {
  theme: MockTheme;
  label: string;
  heading: string;
  items: LookbookItem[];
  compact?: boolean;
};

/**
 * MockLookbook — editorial-style asymmetric grid for fashion case studies.
 * Looks unlike a "products grid": tall + short tiles, generous whitespace,
 * captions like a magazine spread.
 */
const MockLookbook: React.FC<MockLookbookProps> = ({
  theme,
  label,
  heading,
  items,
  compact = false,
}) => {
  const padX = compact ? "px-4" : "px-8 md:px-14 lg:px-20";
  const padY = compact ? "py-6" : "py-16 md:py-24";
  const headingSize = compact ? "text-sm" : "text-2xl md:text-3xl lg:text-[2.75rem]";
  const labelSize = compact ? "text-[0.45rem]" : "text-[0.55rem] md:text-[0.65rem]";
  const itemTitleSize = compact ? "text-[0.55rem]" : "text-[0.7rem] md:text-[0.8rem]";
  const itemCaptionSize = compact ? "text-[0.45rem]" : "text-[0.55rem] md:text-[0.65rem]";

  // Pick first 4 items, pad with empties if needed.
  const slots = [...items, ...items, ...items, ...items].slice(0, 4);

  return (
    <div className={`${padX} ${padY}`}>
      <div className={`mb-8 md:mb-14 ${compact ? "" : "max-w-3xl"}`}>
        <span
          className={`${labelSize} ${theme.accentText} tracking-[0.32em] uppercase mb-2 md:mb-4 block font-medium`}
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
      <div
        className={`grid ${
          compact
            ? "grid-cols-2 gap-2"
            : "grid-cols-12 gap-4 md:gap-6"
        }`}
      >
        {/* Asymmetric editorial layout on desktop:
              [ 5 col, tall ] [ 7 col, short ]
              [ 7 col, short ] [ 5 col, tall ] */}
        {slots.map((item, i) => {
          // Mapping: 0 → tall, 1 → short, 2 → short, 3 → tall
          const isTall = compact ? false : i === 0 || i === 3;
          const colClass = compact
            ? ""
            : i === 0
              ? "col-span-12 md:col-span-5"
              : i === 1
                ? "col-span-12 md:col-span-7"
                : i === 2
                  ? "col-span-12 md:col-span-7"
                  : "col-span-12 md:col-span-5";
          const aspectClass = compact
            ? "aspect-[3/4]"
            : isTall
              ? "aspect-[3/4]"
              : "aspect-[16/10]";
          return (
            <div key={i} className={`${colClass} flex flex-col gap-2`}>
              <div
                className={`relative ${aspectClass} rounded-[0.6rem] overflow-hidden border ${theme.border}`}
                style={
                  item.image
                    ? undefined
                    : item.tileBg
                      ? { background: item.tileBg }
                      : {
                          background:
                            "radial-gradient(ellipse at 30% 20%, rgba(0,0,0,0.06), transparent 55%), linear-gradient(160deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.18) 100%)",
                        }
                }
              >
                {item.image ? (
                  <>
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.35) 100%)",
                      }}
                    />
                  </>
                ) : null}
              </div>
              <div className="flex items-baseline justify-between gap-3 px-1">
                <span
                  className={`${itemTitleSize} ${theme.text} font-medium tracking-tight truncate`}
                  style={{ fontFamily: theme.displayFont }}
                >
                  {item.name}
                </span>
                {item.caption && (
                  <span
                    className={`${itemCaptionSize} ${theme.textMuted} font-light shrink-0 tracking-[0.15em] uppercase`}
                    style={{ fontFamily: theme.bodyFont }}
                  >
                    {item.caption}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MockLookbook;
