"use client";
import React from "react";

/**
 * Tiny shared component — the section eyebrow used across case study sections.
 * "— Koncepcja", "— Proces", etc. Keeps spacing/typography consistent.
 */
const SectionLabel: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <span
    className={`text-[#C05775] text-[0.7rem] font-medium tracking-[0.4em] uppercase mb-6 block ${className}`}
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    {children}
  </span>
);

export default SectionLabel;
