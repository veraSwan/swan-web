"use client";
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "./SectionLabel";

type CaseStudyDeliverablesProps = {
  label: string;
  heading: string;
  /** Short keywords / capabilities — render as a clean grid. */
  items: string[];
};

/** "Co zostało zrobione" — three-column list of deliverables. Minimal, scannable. */
const CaseStudyDeliverables: React.FC<CaseStudyDeliverablesProps> = ({ label, heading, items }) => {
  const { variants } = useScrollAnimation();

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="layout-container-wide relative z-10 max-w-6xl mx-auto">
        <motion.div
          variants={variants.staggerContainer(0.12, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={variants.fadeInUp} className="text-center mb-14 md:mb-20">
            <SectionLabel>— {label}</SectionLabel>
            <h2
              className="text-3xl md:text-4xl lg:text-[3rem] font-medium text-white leading-[1.05] tracking-[-0.025em] max-w-3xl mx-auto"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {heading}
            </h2>
          </motion.div>

          <motion.div
            variants={variants.fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-[1.25rem] overflow-hidden border border-white/[0.06]"
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="bg-[#0E0F12] px-7 py-9 md:px-9 md:py-12 transition-colors duration-500 hover:bg-white/[0.02] group"
              >
                <div className="flex items-start gap-5">
                  <span
                    className="text-[#C05775]/70 text-[0.65rem] font-medium tracking-[0.32em] uppercase pt-1 shrink-0"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-[1.05rem] md:text-[1.15rem] text-white font-light leading-[1.45] tracking-tight group-hover:text-white transition-colors"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyDeliverables;
