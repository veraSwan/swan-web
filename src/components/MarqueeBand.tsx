"use client";
import React from "react";

type Props = {
  items: string[];
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
  const track = [...items, ...items];

  return (
    <div
      className={`relative overflow-hidden border-y border-white/[0.06] bg-gradient-to-r from-[#0A0B12] via-[#0F1018] to-[#0A0B12] py-8 md:py-10 ${className}`}
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
            className="group inline-flex items-center gap-12 md:gap-20 text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] font-light tracking-[-0.02em] text-white/[0.07] hover:text-[#E889A1] transition-all duration-500 ease-[0.22,1,0.36,1] hover:-translate-y-1 hover:[text-shadow:0_0_24px_rgba(232,137,161,0.45)] cursor-default"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            {it}
            <span
              aria-hidden="true"
              className="inline-block w-px h-[0.55em] bg-gradient-to-b from-transparent via-[#C05775]/35 to-transparent group-hover:via-[#E889A1] transition-colors duration-500"
            />
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#08090C] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#08090C] to-transparent" />

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
