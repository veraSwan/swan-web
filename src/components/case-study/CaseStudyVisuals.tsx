"use client";
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "./SectionLabel";

type SubSection = {
  label: string;
  heading: string;
  /** Optional one-line caption below the heading. */
  caption?: string;
  visual: React.ReactNode;
};

type CaseStudyVisualsProps = {
  /** Top-level eyebrow + heading for the whole visuals block. */
  label: string;
  heading: string;
  /** Optional "Widok strony" — full BrowserMockup with the homepage. Skip when the same mockup is already shown at the top of the page (in CaseStudyHero). */
  desktopView?: SubSection;
  /** "Mobile experience" — PhoneMockup. */
  mobileView: SubSection;
  /** Optional "Najważniejsze sekcje" — 3 cropped section mocks. */
  keySections?: SubSection;
  /** "Detale interfejsu" — close-ups of components (button, form field, card). */
  interfaceDetails: SubSection;
};

const SubSectionHeader: React.FC<{ label: string; heading: string; caption?: string }> = ({
  label,
  heading,
  caption,
}) => (
  <div className="mb-10 md:mb-14 max-w-3xl">
    <SectionLabel>— {label}</SectionLabel>
    <h3
      className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-white leading-[1.05] tracking-[-0.025em]"
      style={{ fontFamily: "DM Sans, sans-serif" }}
    >
      {heading}
    </h3>
    {caption && (
      <p
        className="mt-4 text-base md:text-lg text-white/55 font-light leading-[1.7] max-w-2xl"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {caption}
      </p>
    )}
  </div>
);

const CaseStudyVisuals: React.FC<CaseStudyVisualsProps> = ({
  label,
  heading,
  desktopView,
  mobileView,
  keySections,
  interfaceDetails,
}) => {
  const { variants } = useScrollAnimation();

  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      <div className="layout-container-wide relative z-10 max-w-6xl mx-auto">
        {/* Top-level title */}
        <motion.div
          variants={variants.staggerContainer(0.18, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14 md:mb-20 text-center max-w-3xl mx-auto"
        >
          <motion.div variants={variants.fadeInUp}>
            <SectionLabel className="mx-auto inline-block">— {label}</SectionLabel>
          </motion.div>
          <motion.h2
            variants={variants.fadeInUp}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-white leading-[1.05] tracking-[-0.025em]"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            {heading}
          </motion.h2>
        </motion.div>

        {/* Desktop view (optional — often shown at the top in CaseStudyHero) */}
        {desktopView && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14 md:mb-20"
          >
            <SubSectionHeader {...desktopView} />
            {desktopView.visual}
          </motion.div>
        )}

        {/* Mobile view + Interface Details side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-14 md:mb-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <SubSectionHeader {...mobileView} />
            <div className="flex justify-center lg:justify-start">{mobileView.visual}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <SubSectionHeader {...interfaceDetails} />
            {interfaceDetails.visual}
          </motion.div>
        </div>

        {/* Optional "key sections" full-width strip */}
        {keySections && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubSectionHeader {...keySections} />
            {keySections.visual}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CaseStudyVisuals;
