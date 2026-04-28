"use client";
import React from "react";

type PhoneMockupProps = {
  /** Inner background of the screen — overridden by children's own bg if needed. */
  innerBg?: string;
  children: React.ReactNode;
  className?: string;
  /** Show a status bar (time + signal/battery placeholders) at the top of the screen. */
  showStatusBar?: boolean;
  /** Time string for the status bar. */
  time?: string;
  /**
   * Phone bezel color (Tailwind class). Default = graphite.
   * For light-themed mockups override with a lighter tone (e.g. silver) so
   * the device contrasts with the dark page background of the case study.
   */
  frameClass?: string;
  /** Variant — quick presets. "graphite" (default) for dark mocks, "silver" for cream / off-white mocks. */
  variant?: "graphite" | "silver";
};

const VARIANTS = {
  graphite: {
    frame: "bg-[#0A0B0E]",
    bezel: "bg-black",
    notch: "bg-black",
    statusText: "text-white/80",
    statusBg: "bg-white/80",
    statusBorder: "border-white/70",
    statusFill: "bg-white/70",
    homeIndicator: "bg-white/45",
    shadow:
      "shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)_inset] border border-white/[0.08]",
  },
  silver: {
    frame: "bg-[#C7C5C0]",
    bezel: "bg-[#1A1814]",
    notch: "bg-[#1A1814]",
    statusText: "text-white/85",
    statusBg: "bg-white/85",
    statusBorder: "border-white/75",
    statusFill: "bg-white/75",
    homeIndicator: "bg-white/55",
    shadow:
      "shadow-[0_40px_80px_-20px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.4)_inset] border border-white/30",
  },
} as const;

/**
 * PhoneMockup — realistic phone frame with notch, screen, and home indicator.
 * Wraps synthetic mobile site content (or a screenshot) for the case study
 * "Mobile experience" section.
 */
const PhoneMockup: React.FC<PhoneMockupProps> = ({
  innerBg = "bg-[#0E0F12]",
  children,
  className = "",
  showStatusBar = true,
  time = "9:41",
  frameClass,
  variant = "graphite",
}) => {
  const v = VARIANTS[variant];
  const frame = frameClass ?? v.frame;

  return (
    <div
      className={`relative mx-auto w-full max-w-[280px] aspect-[9/19.5] rounded-[2.5rem] ${frame} p-2.5 ${v.shadow} ${className}`}
    >
      {/* Bezel inner */}
      <div className={`relative w-full h-full rounded-[2rem] overflow-hidden ${v.bezel}`}>
        {/* Notch */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[42%] h-[22px] ${v.notch} rounded-b-[1.1rem] z-30`} />

        {/* Screen */}
        <div className={`relative w-full h-full ${innerBg}`}>
          {showStatusBar && (
            <div
              className={`absolute top-0 left-0 right-0 h-7 px-6 flex items-center justify-between text-[0.6rem] ${v.statusText} z-20 pointer-events-none`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <span className="font-medium tracking-tight">{time}</span>
              <div className="flex items-center gap-1">
                {/* signal */}
                <div className="flex items-end gap-0.5">
                  <span className={`w-0.5 h-1 ${v.statusBg} rounded-sm`} />
                  <span className={`w-0.5 h-1.5 ${v.statusBg} rounded-sm`} />
                  <span className={`w-0.5 h-2 ${v.statusBg} rounded-sm`} />
                  <span className={`w-0.5 h-2.5 ${v.statusBg} rounded-sm`} />
                </div>
                {/* battery */}
                <div className={`ml-1 w-5 h-2.5 rounded-[3px] border ${v.statusBorder} relative`}>
                  <div className={`absolute inset-[1px] right-1 ${v.statusFill} rounded-[1.5px]`} />
                </div>
              </div>
            </div>
          )}

          <div className={`relative w-full h-full ${showStatusBar ? "pt-7" : ""}`}>{children}</div>

          {/* Home indicator */}
          <div className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[35%] h-[3px] rounded-full ${v.homeIndicator} z-20`} />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
