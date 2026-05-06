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

  return (
    <section
      ref={ref}
      className="relative bg-[#08090C] border-y border-white/[0.04] py-20 md:py-24 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[280px] bg-[#C05775]/[0.025] blur-[140px] rounded-full pointer-events-none"
      />

      <div className="layout-container relative z-10">
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
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14 md:gap-y-8 max-w-5xl"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            {clients.map((c, i) => (
              <motion.span
                key={c.name}
                variants={variants.fadeInUp}
                className={`group relative text-[1.15rem] md:text-[1.4rem] text-white/40 hover:text-white transition-all duration-500 ease-[0.22,1,0.36,1] cursor-default select-none ${c.weight}`}
              >
                {c.name}
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 h-px w-0 bg-[#C05775] transition-all duration-500 ease-[0.22,1,0.36,1] group-hover:w-full"
                />
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            variants={variants.fadeInUp}
            className="mt-12 md:mt-14 text-[0.85rem] text-white/35 font-light tracking-wide max-w-md text-center"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Marki, dla których projektujemy obecność cyfrową — od butikowych e-commerce po kliniki i biura.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientStrip;
