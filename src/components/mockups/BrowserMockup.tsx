"use client";
import React from "react";

type BrowserMockupProps = {
  url?: string;
  /** Visual theme of the mocked site inside the frame. Doesn't affect the chrome. */
  theme?: "dark" | "light";
  /** Optional rounded corner radius. */
  rounded?: "lg" | "xl" | "2xl";
  /** Inner background — overridden by children's own bg if needed. */
  innerBg?: string;
  /** Children render inside the viewport area. */
  children: React.ReactNode;
  /** Extra classes for the outer wrapper. */
  className?: string;
  /** Extra classes for the inner viewport (the area where the "site" is rendered). */
  viewportClassName?: string;
};

/**
 * BrowserMockup — a realistic browser chrome wrapper.
 * Use it to wrap synthetic site sections so the case study reads as
 * "this is a designed website" rather than "this is a photo".
 */
const BrowserMockup: React.FC<BrowserMockupProps> = ({
  url = "swanweb.pl",
  theme: _theme = "dark",
  rounded = "xl",
  innerBg = "bg-[#0E0F12]",
  children,
  className = "",
  viewportClassName = "",
}) => {
  const radius =
    rounded === "lg"
      ? "rounded-[1rem]"
      : rounded === "xl"
        ? "rounded-[1.25rem]"
        : "rounded-[1.75rem]";

  return (
    <div
      className={`relative w-full ${radius} bg-[#1A1C20] border border-white/[0.08] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)_inset] overflow-hidden ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 px-4 md:px-5 h-9 md:h-10 bg-gradient-to-b from-[#26282D] to-[#1A1C20] border-b border-white/[0.06]">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        {/* URL bar */}
        <div className="flex-1 mx-3 md:mx-6 h-5 md:h-6 rounded-md bg-white/[0.04] border border-white/[0.05] flex items-center justify-center">
          <span
            className="text-[0.6rem] md:text-[0.65rem] text-white/45 tracking-wide truncate px-2"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {url}
          </span>
        </div>
        {/* Right placeholders */}
        <div className="flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span className="w-1 h-1 rounded-full bg-white/30" />
        </div>
      </div>

      {/* Viewport */}
      <div className={`relative ${innerBg} ${viewportClassName}`}>{children}</div>
    </div>
  );
};

export default BrowserMockup;
