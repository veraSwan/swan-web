"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Step = { title: string; description: string };

const ProcessTimeline: React.FC = () => {
  const tr = useTranslation();
  const steps: readonly Step[] = tr.process.steps;

  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 30%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.4,
  });

  const lineScale = useTransform(progress, [0, 1], [0, 1]);
  const headerAnim = useScrollAnimation({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="section-spacing relative bg-[#08090C] border-t border-white/[0.02] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[var(--ambient-gradient)] z-0 opacity-40 pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[480px] bg-[#C05775]/[0.035] blur-[180px] rounded-full pointer-events-none z-0"
      />

      <div className="layout-container relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerAnim.ref}
          variants={headerAnim.variants.staggerContainer(0.18, 0.05)}
          initial="hidden"
          animate={headerAnim.isVisible ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-20 md:mb-24"
        >
          <motion.span
            variants={headerAnim.variants.fadeInUp}
            className="text-[#C05775] text-[0.7rem] font-medium tracking-[0.4em] uppercase mb-6 block"
          >
            — {tr.process.label}
          </motion.span>
          <motion.h2
            variants={headerAnim.variants.fadeInUp}
            className="text-4xl md:text-5xl lg:text-[4rem] font-medium text-white tracking-[-0.02em] leading-[1.05]"
          >
            {tr.process.heading}
          </motion.h2>
          <motion.p
            variants={headerAnim.variants.fadeInUp}
            className="mt-6 text-base md:text-lg text-white/55 font-light leading-[1.7]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {tr.process.subheading}
          </motion.p>
        </motion.div>

        {/* Timeline track */}
        <div ref={trackRef} className="relative">
          {/* Desktop horizontal rail */}
          <div className="hidden lg:block absolute top-[44px] left-[7%] right-[7%] h-[2px] z-0">
            <div className="absolute inset-0 bg-white/[0.06] rounded-full" />
            <motion.div
              style={{ scaleX: lineScale, transformOrigin: "0% 50%" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C05775] via-[#E889A1] to-[#9D5B8B] shadow-[0_0_18px_rgba(192,87,117,0.5)]"
            />
          </div>

          {/* Mobile vertical rail */}
          <div className="lg:hidden absolute top-0 bottom-0 left-[34px] w-[2px] z-0">
            <div className="absolute inset-0 bg-white/[0.06] rounded-full" />
            <motion.div
              style={{ scaleY: lineScale, transformOrigin: "50% 0%" }}
              className="absolute inset-0 rounded-full bg-gradient-to-b from-[#C05775] via-[#E889A1] to-[#9D5B8B] shadow-[0_0_18px_rgba(192,87,117,0.5)]"
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
              <ProcessStep
                key={step.title}
                index={i}
                step={step}
                progress={progress}
                total={steps.length}
                stepLabel={tr.process.stepLabel}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface StepProps {
  step: Step;
  index: number;
  total: number;
  stepLabel: string;
  progress: ReturnType<typeof useSpring>;
}

const ProcessStep: React.FC<StepProps> = ({ step, index, total, stepLabel, progress }) => {
  const threshold = (index + 0.4) / total;

  // 0 → 1 just for this step's "reached" pulse
  const reached = useTransform(progress, [threshold - 0.05, threshold], [0, 1]);
  const dotScale = useTransform(reached, [0, 1], [1, 1.08]);
  const dotGlow = useTransform(
    reached,
    [0, 1],
    ["0 0 0 0 rgba(192,87,117,0)", "0 0 32px -2px rgba(192,87,117,0.55)"]
  );
  const numberOpacity = useTransform(reached, [0, 1], [0.45, 1]);
  const cardOpacity = useTransform(reached, [0, 1], [0.55, 1]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.85,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex lg:flex-col gap-6 lg:gap-0 lg:text-center group pl-0 lg:pl-0"
    >
      {/* Dot */}
      <div className="relative shrink-0 lg:mx-auto lg:mb-7">
        <motion.div
          style={{ scale: dotScale, boxShadow: dotGlow }}
          className="relative w-[68px] h-[68px] rounded-full flex items-center justify-center bg-[#0E1016] border border-white/[0.10] backdrop-blur-md transition-colors duration-500 group-hover:border-[#C05775]/55"
        >
          {/* inner gradient ring */}
          <div
            aria-hidden="true"
            className="absolute inset-1 rounded-full bg-gradient-to-br from-[#C05775]/20 via-transparent to-[#9D5B8B]/15 opacity-60"
          />
          <motion.span
            style={{ opacity: numberOpacity }}
            className="relative z-10 text-[1.1rem] font-medium text-white tracking-tight"
            aria-hidden="true"
          >
            0{index + 1}
          </motion.span>
          <motion.div
            aria-hidden="true"
            style={{ scale: reached }}
            className="absolute inset-[-6px] rounded-full border border-[#C05775]/35 pointer-events-none"
          />
        </motion.div>
      </div>

      {/* Card content */}
      <motion.div
        style={{ opacity: cardOpacity }}
        className="flex-1 lg:px-3 text-left lg:text-center"
      >
        <span className="block text-[0.62rem] tracking-[0.32em] uppercase text-[#C05775]/80 font-semibold mb-3">
          {stepLabel} {index + 1}
        </span>
        <h3 className="text-[1.25rem] md:text-[1.4rem] font-medium text-white mb-3 tracking-tight">
          {step.title}
        </h3>
        <p
          className="text-[0.92rem] text-white/55 font-light leading-[1.7]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {step.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ProcessTimeline;
