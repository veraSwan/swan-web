"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

const StatItem = ({ value, suffix = '', label, delay = 0 }: { value: string; suffix?: string; label: string; delay?: number }) => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const duration = 2000;
      const end = parseInt(value, 10);

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        if (elapsed < delay) { window.requestAnimationFrame(step); return; }
        const progress = Math.min((elapsed - delay) / duration, 1);
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeProgress * end));
        if (progress < 1) window.requestAnimationFrame(step);
        else { setCount(end); setDone(true); }
      };

      window.requestAnimationFrame(step);
    }
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center text-center px-4 group"
    >
      <motion.div
        aria-hidden="true"
        animate={done ? { opacity: [0, 0.6, 0], scale: [0.6, 1.1, 1.4] } : { opacity: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="absolute top-1 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-[#C05775]/20 blur-[40px] pointer-events-none"
      />
      <div
        className="relative text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-4 drop-shadow-md flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.04]"
        style={{ fontFamily: 'DM Sans, sans-serif' }}
      >
        {count}
        <span className="text-[#C05775] transition-all duration-500 group-hover:[text-shadow:0_0_28px_rgba(192,87,117,0.7)]">
          {suffix}
        </span>
      </div>
      <div className="text-[#E5E7EB] opacity-60 font-light text-sm md:text-base tracking-[0.15em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
        {label}
      </div>
    </motion.div>
  );
};

const statValues = [
  { value: "20", suffix: "+" },
  { value: "15", suffix: "+" },
  { value: "3",  suffix: "+" },
  { value: "100", suffix: "%" },
];

const AnimatedStatistics = () => {
  const tr = useTranslation();

  return (
    <section className="py-20 md:py-32 relative bg-[#0E0F12] border-t border-white/[0.02]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-[#C05775] opacity-[0.02] blur-[100px] rounded-full pointer-events-none" />
      <div className="layout-container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 divide-x-0 lg:divide-x divide-white/5">
          {tr.stats.map((stat, index) => (
            <StatItem
              key={index}
              value={statValues[index].value}
              suffix={statValues[index].suffix}
              label={stat.label}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStatistics;
