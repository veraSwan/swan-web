"use client";
import React from "react";
import type { MockTheme } from "./types";

type ProductItem = {
  name: string;
  price: string;
  /** Optional bg gradient/color for the product tile placeholder. */
  tileBg?: string;
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
                item.tileBg
                  ? { background: item.tileBg }
                  : {
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(0,0,0,0.25))",
                    }
              }
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 35% 30%, rgba(255,255,255,0.08), transparent 60%)",
                }}
              />
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
