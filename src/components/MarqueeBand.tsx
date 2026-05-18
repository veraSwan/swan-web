"use client";
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";

type Props = {
  items: readonly string[];
  speedSec?: number;
  reverse?: boolean;
  className?: string;
};

const MarqueeBand: React.FC<Props> = ({
  items,
  speedSec = 38,
  reverse = false,
  className = "",
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const track = [...items, ...items];

  return (
    <div
      className={`relative overflow-hidden py-8 md:py-10 ${className}`}
      style={{
        background: isDark
          ? "linear-gradient(90deg,#0A0B12 0%,#0F1018 50%,#0A0B12 100%)"
          : "linear-gradient(90deg,#EDE8DC 0%,#E8E3D5 50%,#EDE8DC 100%)",
        borderTop:    isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.07)",
        borderBottom: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.07)",
      }}
      aria-hidden="true"
    >
      <div
        className="flex gap-12 md:gap-20 whitespace-nowrap will-change-transform"
        style={{
          animation: `marquee-${reverse ? "right" : "left"} ${speedSec}s linear infinite`,
        }}
      >
        {track.map((it, i) => (
          <span
            key={i}
            className="group inline-flex items-center gap-12 md:gap-20 text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] font-light tracking-[-0.02em] hover:text-[#C05775] transition-all duration-500 ease-[0.22,1,0.36,1] hover:-translate-y-1 hover:[text-shadow:0_0_24px_rgba(192,87,117,0.35)] cursor-default"
            style={{
              fontFamily: "DM Sans, sans-serif",
              color: isDark ? "rgba(255,255,255,0.07)" : "rgba(17,17,17,0.10)",
            }}
          >
            {it}
            <span
              aria-hidden="true"
              className="inline-block w-px h-[0.55em] bg-gradient-to-b from-transparent to-transparent transition-colors duration-500"
              style={{
                backgroundImage: `linear-gradient(to bottom, transparent, ${isDark ? "rgba(192,87,117,0.35)" : "rgba(192,87,117,0.30)"}, transparent)`,
              }}
            />
          </span>
        ))}
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40"
        style={{
          background: isDark
            ? "linear-gradient(to right,#08090C,transparent)"
            : "linear-gradient(to right,#EDE8DC,transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40"
        style={{
          background: isDark
            ? "linear-gradient(to left,#08090C,transparent)"
            : "linear-gradient(to left,#EDE8DC,transparent)",
        }}
      />

      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
      `}</style>
    </div>
  );
};

export default MarqueeBand;
