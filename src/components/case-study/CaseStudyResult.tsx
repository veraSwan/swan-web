"use client";
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "./SectionLabel";

type CaseStudyResultProps = {
  label: string;
  body: string;
};

/** "Efekt / Rezultat" — single calm closing paragraph. */
const CaseStudyResult: React.FC<CaseStudyResultProps> = ({ label, body }) => {
  const { variants } = useScrollAnimation();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[160px] opacity-40"
          style={{
            background: "radial-gradient(ellipse, rgba(192,87,117,0.18), transparent 65%)",
          }}
        />
      </div>
      <div className="layout-container-wide relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          variants={variants.staggerContainer(0.18, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={variants.fadeInUp}>
            <SectionLabel className="mx-auto inline-block">— {label}</SectionLabel>
          </motion.div>
          <motion.blockquote
            variants={variants.fadeInUp}
            className="text-2xl md:text-3xl lg:text-[2.5rem] text-white/95 font-light leading-[1.3] tracking-[-0.015em]"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            {body}
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyResult;
