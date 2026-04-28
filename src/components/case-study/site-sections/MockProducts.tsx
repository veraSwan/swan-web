"use client";
import React from "react";
import type { MockTheme } from "./types";

type ProductItem = {
  name: string;
  price: string;
  /** Optional bg gradient/color for the product tile placeholder. */
  tileBg?: string;
  /** Optional product image URL — when set, replaces the synthetic silhouette. */
  image?: string;
};

type MockProductsProps = {
  theme: MockTheme;
  label: string;
  heading: string;
  items: ProductItem[];
  compact?: boolean;
};

const MockProducts: React.FC<MockProductsProps> = ({ theme, label, heading, items, compact = false }) => {
  const padX = compact ? "px-4" : "px-8 md:px-12 lg:px-16";
  const padY = compact ? "py-6" : "py-14 md:py-20";
  const headingSize = compact ? "text-sm" : "text-xl md:text-2xl lg:text-3xl";
  const nameSize = compact ? "text-[0.55rem]" : "text-[0.7rem] md:text-[0.8rem]";
  const priceSize = compact ? "text-[0.5rem]" : "text-[0.6rem] md:text-[0.7rem]";
  const labelSize = compact ? "text-[0.45rem]" : "text-[0.55rem] md:text-[0.65rem]";

  return (
    <div className={`${padX} ${padY}`}>
      <div className={`mb-5 md:mb-10 ${compact ? "text-left" : "flex items-end justify-between"}`}>
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
      </div>
      <div className={`grid ${compact ? "grid-cols-2 gap-2" : "grid-cols-2 md:grid-cols-4 gap-3 md:gap-5"}`}>
        {items.map((item, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div
              className={`relative aspect-[3/4] rounded-[0.6rem] overflow-hidden border ${theme.border}`}
              style={
                item.image
                  ? undefined
                  : item.tileBg
                    ? { background: item.tileBg }
                    : {
                        background:
                          "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.10), transparent 55%), linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.35) 100%)",
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
                  {/* Subtle dark gradient bottom for legibility — keeps brand mood */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 0%, transparent 60%, rgba(0,0,0,0.45) 100%)",
                    }}
                  />
                </>
              ) : (
                <>
                  {/* Soft top highlight */}
                  <div
                    className="absolute inset-x-0 top-0 h-[35%] pointer-events-none opacity-60"
                    style={{
                      background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 100%)",
                    }}
                  />
                  {/* Centered object silhouette */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className="w-[35%] h-[60%] rounded-[0.3rem] opacity-55"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 30%, rgba(0,0,0,0.5) 100%)",
                        boxShadow:
                          "0 8px 18px -6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
                      }}
                    />
                  </div>
                </>
              )}
            </div>
            <div className="flex items-baseline justify-between gap-2 px-1">
              <span
                className={`${nameSize} ${theme.text} font-medium tracking-tight truncate`}
                style={{ fontFamily: theme.displayFont }}
              >
                {item.name}
              </span>
              <span
                className={`${priceSize} ${theme.textMuted} font-light shrink-0`}
                style={{ fontFamily: theme.bodyFont }}
              >
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockProducts;
