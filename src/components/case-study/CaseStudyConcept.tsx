"use client";
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "./SectionLabel";

type CaseStudyConceptProps = {
  label: string;
  heading: string;
  body: string;
};

/** "Koncepcja / Idea" section — short paragraph explaining the design thinking. */
const CaseStudyConcept: React.FC<CaseStudyConceptProps> = ({ label, heading, body }) => {
  const { variants } = useScrollAnimation();

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="layout-container-wide relative z-10 max-w-5xl mx-auto">
        <motion.div
          variants={variants.staggerContainer(0.18, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start"
        >
          <motion.div variants={variants.fadeInUp} className="lg:col-span-4">
            <SectionLabel>— {label}</SectionLabel>
            <h2
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-white leading-[1.1] tracking-[-0.025em]"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {heading}
            </h2>
          </motion.div>
          <motion.div variants={variants.fadeInUp} className="lg:col-span-8">
            <p
              className="text-lg md:text-xl text-white/75 font-light leading-[1.75]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {body}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyConcept;
