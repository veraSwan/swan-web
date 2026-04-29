"use client";
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import BrowserMockup from "@/components/mockups/BrowserMockup";
import SectionLabel from "./SectionLabel";

type CaseStudyMiniMockupProps = {
  label: string;
  heading: string;
  caption?: string;
  url: string;
  /** Background color of the inner viewport (where the "site" is rendered). */
  innerBg?: string;
  /** Mock content rendered inside the browser frame. */
  children: React.ReactNode;
};

/**
 * Mini website preview wrapped in a browser frame. Lighter than the full
 * site mockups in CaseStudyVisuals — meant to give a "this is a real site"
 * feel without rebuilding the whole thing.
 */
const CaseStudyMiniMockup: React.FC<CaseStudyMiniMockupProps> = ({
  label,
  heading,
  caption,
  url,
  innerBg,
  children,
}) => {
  const { variants } = useScrollAnimation();

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="layout-container-wide relative z-10 max-w-6xl mx-auto">
        <motion.div
          variants={variants.staggerContainer(0.18, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={variants.fadeInUp} className="mb-12 md:mb-16 max-w-3xl">
            <SectionLabel>— {label}</SectionLabel>
            <h2
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-white leading-[1.1] tracking-[-0.025em] mb-4"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {heading}
            </h2>
            {caption && (
              <p
                className="text-base md:text-lg text-white/65 font-light leading-[1.7] max-w-2xl"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {caption}
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <BrowserMockup url={url} innerBg={innerBg ?? "bg-[#0E0F12]"}>
              {children}
            </BrowserMockup>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyMiniMockup;
