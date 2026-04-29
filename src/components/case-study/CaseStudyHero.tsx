"use client";
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "./SectionLabel";

type CaseStudyHeroProps = {
  category: string;
  title: string;
  subtitle: string;
  /** Optional big visual rendered below the title. When omitted, the hero stays
   *  minimal-typography only — useful when the full landing is shown later in
   *  the Visuals section and you want to avoid repeating it. */
  visual?: React.ReactNode;
};

const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({ category, title, subtitle, visual }) => {
  const { variants } = useScrollAnimation();

  return (
    <section className="relative pt-10 md:pt-14 pb-12 md:pb-16 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-[var(--page-glow)] z-0 opacity-80 pointer-events-none" />
      <div className="layout-container-wide relative z-10 max-w-6xl mx-auto">
        <motion.header
          variants={variants.staggerContainer(0.18, 0.05)}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto mb-14 md:mb-20"
        >
          <motion.div variants={variants.fadeInUp}>
            <SectionLabel>— {category}</SectionLabel>
          </motion.div>
          <motion.h1
            variants={variants.fadeInUp}
            className="text-5xl md:text-6xl lg:text-[5.5rem] font-medium text-white leading-[1.02] tracking-[-0.035em] mb-6 md:mb-8"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            {title}
          </motion.h1>
          <motion.p
            variants={variants.fadeInUp}
            className="text-base md:text-lg lg:text-xl text-white/65 font-light leading-[1.75] max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {subtitle}
          </motion.p>
        </motion.header>

        {visual && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {visual}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CaseStudyHero;
