"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslation } from '@/hooks/useTranslation';

const AboutSection = () => {
  const { ref, isVisible, variants } = useScrollAnimation({ threshold: 0.15 });
  const tr = useTranslation();
  const a = tr.aboutSection;

  return (
    <section ref={ref} className="bg-[#08090C] relative overflow-hidden py-24 md:py-32 border-t border-white/[0.02]">
      <div className="absolute inset-0 bg-[var(--page-glow)] z-0 opacity-60 pointer-events-none" />

      <div className="layout-container relative z-10 max-w-5xl mx-auto">
        <motion.div
          variants={variants.staggerContainer(0.2, 0.1)}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="flex flex-col items-center text-center space-y-10"
        >
          <motion.span variants={variants.fadeInUp} className="text-[#A1A1AA] uppercase tracking-[0.3em] text-xs font-medium">
            {a.label}
          </motion.span>
          <motion.h2
            variants={variants.fadeInUp}
            className="text-4xl md:text-5xl lg:text-[4rem] font-medium text-white leading-[1.05] tracking-[-0.02em] drop-shadow-sm max-w-3xl"
          >
            {a.heading}
          </motion.h2>

          <motion.div variants={variants.fadeInUp} className="text-block mx-auto max-w-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p className="text-lg md:text-xl text-white/60 font-light leading-[1.8] tracking-wide mb-12">
              {a.paragraph}
            </p>
          </motion.div>

          <motion.div variants={variants.staggerContainer(0.2, 0.2)} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
            {a.pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                variants={variants.fadeInUp}
                className="bg-[#111216]/60 p-8 rounded-[2rem] border border-white/5 hover-lift text-left"
              >
                <span className="text-[#C05775] text-[0.7rem] font-medium tracking-[0.4em] uppercase mb-5 block">— 0{i + 1}</span>
                <h3 className="text-xl text-white font-medium mb-3 tracking-wide">{pillar.title}</h3>
                <p className="text-sm font-light text-white/60 leading-[1.7]">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
