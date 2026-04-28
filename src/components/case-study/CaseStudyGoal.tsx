"use client";
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "./SectionLabel";

type Pillar = {
  /** Eyebrow above the body text, e.g. "— Cel". */
  label: string;
  body: string;
};

type CaseStudyGoalProps = {
  label: string;
  heading: string;
  pillars: [Pillar, Pillar, Pillar];
};

/**
 * "Cel projektu / Co poprawiliśmy / Efekt dla użytkownika" — three-pillar strip
 * that anchors the case study in concrete business framing.
 */
const CaseStudyGoal: React.FC<CaseStudyGoalProps> = ({ label, heading, pillars }) => {
  const { variants } = useScrollAnimation();

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="layout-container-wide relative z-10 max-w-6xl mx-auto">
        <motion.div
          variants={variants.staggerContainer(0.15, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={variants.fadeInUp} className="mb-12 md:mb-16 max-w-3xl">
            <SectionLabel>— {label}</SectionLabel>
            <h2
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-white leading-[1.05] tracking-[-0.025em]"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {heading}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                variants={variants.fadeInUp}
                className="relative p-8 md:p-9 rounded-[1.25rem] bg-white/[0.025] border border-white/[0.07] backdrop-blur-2xl transition-all duration-700 ease-[0.22,1,0.36,1] hover:bg-white/[0.04] hover:border-[#C05775]/25"
              >
                <span
                  className="text-[#C05775] text-[0.6rem] font-medium tracking-[0.32em] uppercase mb-4 block"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  — {pillar.label}
                </span>
                <p
                  className="text-[1rem] md:text-[1.05rem] text-white/80 font-light leading-[1.7]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {pillar.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyGoal;
