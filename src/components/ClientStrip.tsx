"use client";
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/hooks/useTranslation";
import { useTheme } from "@/contexts/ThemeContext";

const clients = [
  { name: "Noir Élan", weight: "font-light italic" },
  { name: "Maison Atelier", weight: "font-medium" },
  { name: "AURA Clinic", weight: "font-light" },
  { name: "LINIA Studio", weight: "font-medium tracking-[0.18em]" },
  { name: "Aureline District", weight: "font-light" },
  { name: "Daniel Kanzlei", weight: "font-medium tracking-tight" },
  { name: "Calma Studio", weight: "font-light italic" },
  { name: "Tessera", weight: "font-medium tracking-[0.25em] uppercase text-[0.85em]" },
  { name: "Smile Studio", weight: "font-light" },
  { name: "Ogrodzenia Piła", weight: "font-medium tracking-tight" },
];

const ClientStrip: React.FC = () => {
  const { ref, isVisible, variants } = useScrollAnimation({ threshold: 0.15 });
  const tr = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Two copies side-by-side so the loop is seamless: when first set scrolls
  // out (-50%), the second set has already taken its place.
  const track = [...clients, ...clients];

  return (
    <section
      ref={ref}
      className="relative border-y py-20 md:py-24 overflow-hidden"
      style={{
        background: isDark ? "#08090C" : "#EDE8DC",
        borderColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.07)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[280px] rounded-full pointer-events-none"
        style={{ background: "rgba(192,87,117,0.025)", filter: "blur(140px)" }}
      />

      <div className="relative z-10">
        <motion.div
          variants={variants.staggerContainer(0.06, 0.1)}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <motion.span
            variants={variants.fadeInUp}
            className="text-[#C05775] text-[0.7rem] font-medium tracking-[0.4em] uppercase mb-10 md:mb-12 block"
          >
            — {tr.clientStrip.label}
          </motion.span>

          <motion.div
            variants={variants.fadeInUp}
            className="relative w-full overflow-hidden group"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            <div className="marquee-track flex gap-12 md:gap-16 whitespace-nowrap will-change-transform">
              {track.map((c, i) => (
                <span
                  key={`${c.name}-${i}`}
                  className={`inline-block text-[1.15rem] md:text-[1.4rem] select-none ${c.weight}`}
                  style={{ color: isDark ? "rgba(255,255,255,0.40)" : "rgba(17,17,17,0.35)" }}
                >
                  {c.name}
                </span>
              ))}
            </div>

            {/* Edge fades — theme-aware */}
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
          </motion.div>

          <motion.p
            variants={variants.fadeInUp}
            className="mt-12 md:mt-14 text-[0.85rem] font-light tracking-wide max-w-md text-center px-6"
            style={{
              fontFamily: "Inter, sans-serif",
              color: isDark ? "rgba(255,255,255,0.35)" : "rgba(17,17,17,0.45)",
            }}
          >
            {tr.clientStrip.caption}
          </motion.p>
        </motion.div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: client-marquee 50s linear infinite;
        }
        .group:hover .marquee-track {
          animation-play-state: paused;
        }
        @keyframes client-marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default ClientStrip;
