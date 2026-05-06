"use client";
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  { name: "Stal Mar", weight: "font-medium tracking-tight" },
];

const ClientStrip: React.FC = () => {
  const { ref, isVisible, variants } = useScrollAnimation({ threshold: 0.15 });

  // Two copies side-by-side so the loop is seamless: when first set scrolls
  // out (-50%), the second set has already taken its place.
  const track = [...clients, ...clients];

  return (
    <section
      ref={ref}
      className="relative bg-[#08090C] border-y border-white/[0.04] py-20 md:py-24 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[280px] bg-[#C05775]/[0.025] blur-[140px] rounded-full pointer-events-none"
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
            — Zaufali nam
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
                  className={`inline-block text-[1.15rem] md:text-[1.4rem] text-white/40 select-none ${c.weight}`}
                >
                  {c.name}
                </span>
              ))}
            </div>

            {/* Edge fades — soft entry/exit so logos don't pop in/out at borders */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#08090C] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#08090C] to-transparent" />
          </motion.div>

          <motion.p
            variants={variants.fadeInUp}
            className="mt-12 md:mt-14 text-[0.85rem] text-white/35 font-light tracking-wide max-w-md text-center px-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Marki, dla których projektujemy obecność cyfrową — od butikowych e-commerce po kliniki i biura.
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
