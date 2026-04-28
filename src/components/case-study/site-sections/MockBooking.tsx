"use client";
import React from "react";
import type { MockTheme } from "./types";

type BookingTreatment = {
  name: string;
  duration: string;
  /** Optional price label, e.g. "od 480 zł". */
  price?: string;
};

type MockBookingProps = {
  theme: MockTheme;
  label: string;
  heading: string;
  subline?: string;
  /** Date label + sample value, e.g. { label: "Data", value: "16 listopada" }. */
  dateField: { label: string; value: string };
  /** Time slots — show as picker chips. */
  timeSlots: string[];
  /** Treatment list — picker cards. */
  treatments: BookingTreatment[];
  cta: string;
  compact?: boolean;
};

/**
 * MockBooking — visit-booking widget for clinic / wellness case studies.
 * Date field + time slot chips + selectable treatment cards + CTA.
 * Distinguishes the case study from generic e-commerce mocks.
 */
const MockBooking: React.FC<MockBookingProps> = ({
  theme,
  label,
  heading,
  subline,
  dateField,
  timeSlots,
  treatments,
  cta,
  compact = false,
}) => {
  const padX = compact ? "px-4" : "px-8 md:px-14 lg:px-20";
  const padY = compact ? "py-6" : "py-16 md:py-24";
  const headingSize = compact ? "text-sm" : "text-2xl md:text-3xl lg:text-[2.5rem]";
  const labelSize = compact ? "text-[0.45rem]" : "text-[0.55rem] md:text-[0.65rem]";
  const sublineSize = compact ? "text-[0.55rem]" : "text-[0.7rem] md:text-[0.85rem]";
  const fieldLabelSize = compact ? "text-[0.45rem]" : "text-[0.55rem] md:text-[0.6rem]";
  const fieldValueSize = compact ? "text-[0.55rem]" : "text-[0.75rem] md:text-[0.85rem]";
  const slotSize = compact ? "text-[0.45rem] px-2 py-1" : "text-[0.6rem] md:text-[0.7rem] px-3.5 py-1.5 md:px-4 md:py-2";
  const treatmentTitleSize = compact ? "text-[0.55rem]" : "text-[0.7rem] md:text-[0.85rem]";
  const treatmentMetaSize = compact ? "text-[0.45rem]" : "text-[0.55rem] md:text-[0.65rem]";
  const ctaSize = compact ? "text-[0.5rem] px-4 py-2" : "text-[0.6rem] md:text-[0.7rem] px-6 py-3 md:px-8 md:py-3.5";

  return (
    <div className={`${padX} ${padY}`}>
      <div className={`grid ${compact ? "grid-cols-1 gap-5" : "grid-cols-12 gap-6 md:gap-12 lg:gap-16"}`}>
        <div className={compact ? "" : "col-span-12 md:col-span-5"}>
          <span
            className={`${labelSize} ${theme.accentText} tracking-[0.32em] uppercase mb-2 md:mb-4 block font-medium`}
            style={{ fontFamily: theme.bodyFont }}
          >
            {label}
          </span>
          <h2
            className={`${headingSize} ${theme.text} font-medium leading-[1.05] tracking-[-0.025em] mb-3 md:mb-5`}
            style={{ fontFamily: theme.displayFont }}
          >
            {heading}
          </h2>
          {subline && (
            <p
              className={`${sublineSize} ${theme.textMuted} font-light leading-[1.7]`}
              style={{ fontFamily: theme.bodyFont }}
            >
              {subline}
            </p>
          )}
        </div>
        <div className={compact ? "" : "col-span-12 md:col-span-7"}>
          <div className={`p-5 md:p-7 rounded-[1rem] ${theme.surface} border ${theme.border}`}>
            {/* Date field */}
            <div className="mb-4 md:mb-5">
              <span
                className={`${fieldLabelSize} ${theme.textMuted} tracking-[0.2em] uppercase mb-1.5 block`}
                style={{ fontFamily: theme.bodyFont }}
              >
                {dateField.label}
              </span>
              <div className={`flex items-center justify-between gap-3 px-4 py-3 rounded-md ${theme.surface} border ${theme.border}`}>
                <span
                  className={`${fieldValueSize} ${theme.text} font-medium`}
                  style={{ fontFamily: theme.displayFont }}
                >
                  {dateField.value}
                </span>
                <span className={`${theme.accentText} text-[0.85em]`}>▾</span>
              </div>
            </div>

            {/* Time slots */}
            <div className="mb-4 md:mb-6 flex flex-wrap gap-1.5 md:gap-2">
              {timeSlots.map((slot, i) => (
                <span
                  key={i}
                  className={`${slotSize} rounded-full ${i === 1 ? `${theme.accentBg} text-[#F4EFE6]` : `${theme.surface} ${theme.text} border ${theme.border}`} tracking-wide font-medium`}
                  style={{ fontFamily: theme.bodyFont }}
                >
                  {slot}
                </span>
              ))}
            </div>

            {/* Treatment cards */}
            <div className="grid grid-cols-1 gap-2 md:gap-2.5 mb-5 md:mb-7">
              {treatments.map((t, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between gap-3 px-4 py-3 md:px-5 md:py-3.5 rounded-md ${
                    i === 0 ? `border-2 ${theme.accentText.replace("text-", "border-")}` : `border ${theme.border}`
                  } ${theme.surface}`}
                >
                  <div className="flex flex-col min-w-0">
                    <span
                      className={`${treatmentTitleSize} ${theme.text} font-medium tracking-tight truncate`}
                      style={{ fontFamily: theme.displayFont }}
                    >
                      {t.name}
                    </span>
                    <span
                      className={`${treatmentMetaSize} ${theme.textMuted} font-light tracking-[0.1em] uppercase`}
                      style={{ fontFamily: theme.bodyFont }}
                    >
                      {t.duration}
                    </span>
                  </div>
                  {t.price && (
                    <span
                      className={`${treatmentMetaSize} ${theme.text} font-light shrink-0`}
                      style={{ fontFamily: theme.bodyFont }}
                    >
                      {t.price}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <span
              className={`${ctaSize} ${theme.accentBg} text-[#F4EFE6] tracking-[0.22em] uppercase font-semibold rounded-full inline-flex items-center gap-2`}
              style={{ fontFamily: theme.bodyFont }}
            >
              {cta}
              <span className="text-[0.7em]">→</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockBooking;
