"use client";
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "./SectionLabel";

type ProcessStep = {
  /** "01", "02", … */
  number: string;
  title: string;
  /** Optional one-sentence description. */
  description?: string;
};

type CaseStudyProcessProps = {
  label: string;
  heading: string;
  steps: ProcessStep[];
};

/**
 * "Proces" — minimalna typograficzna sekcja, cienkie linie między krokami,
 * elegancka numeracja. Subtle stagger animation on scroll.
 */
const CaseStudyProcess: React.FC<CaseStudyProcessProps> = ({ label, heading, steps }) => {
  const { variants } = useScrollAnimation();

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="layout-container-wide relative z-10 max-w-5xl mx-auto">
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

          <div className="border-t border-white/[0.08]">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={variants.fadeInUp}
                className="group grid grid-cols-12 gap-4 md:gap-8 items-start py-7 md:py-9 border-b border-white/[0.08] transition-colors duration-500 hover:bg-white/[0.015]"
              >
                <span
                  className="col-span-2 md:col-span-1 text-[#C05775] text-[0.7rem] md:text-[0.8rem] font-light tracking-[0.32em] pt-1.5"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {step.number}
                </span>
                <div className="col-span-10 md:col-span-11 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-10">
                  <h3
                    className="text-2xl md:text-3xl lg:text-[2.25rem] font-light text-white leading-[1.1] tracking-[-0.02em] md:w-[40%] shrink-0 transition-colors duration-500 group-hover:text-[#E889A1]"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  {step.description && (
                    <p
                      className="text-base md:text-lg text-white/55 font-light leading-[1.7]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {step.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyProcess;
