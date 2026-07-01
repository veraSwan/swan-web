"use client";
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "./SectionLabel";

type CaseStudyPhotoGridProps = {
  label: string;
  heading: string;
  caption?: string;
  images: [string, string, string];
};

const CaseStudyPhotoGrid: React.FC<CaseStudyPhotoGridProps> = ({ label, heading, caption, images }) => {
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
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-3 md:gap-4"
            style={{ gridTemplateRows: 'auto auto' }}
          >
            <div className="aspect-[4/3] md:aspect-auto md:row-span-2 overflow-hidden rounded-2xl bg-white/[0.03]">
              <img src={images[0]} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-[2s] ease-[0.22,1,0.36,1] hover:scale-[1.03]" />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white/[0.03]">
              <img src={images[1]} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-[2s] ease-[0.22,1,0.36,1] hover:scale-[1.03]" />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white/[0.03]">
              <img src={images[2]} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-[2s] ease-[0.22,1,0.36,1] hover:scale-[1.03]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyPhotoGrid;
