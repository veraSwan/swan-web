import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const StatItem = ({ value, suffix = '', label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const duration = 2000; // 2 seconds
      const end = parseInt(value, 10);
      
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        
        // Add a slight delay before starting the count for staggered effect
        if (elapsed < delay) {
          window.requestAnimationFrame(step);
          return;
        }
        
        const progress = Math.min((elapsed - delay) / duration, 1);
        // easeOutExpo
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeProgress * end));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(end);
        }
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
      className="flex flex-col items-center text-center px-4"
    >
      <div className="text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-4 drop-shadow-md flex items-center justify-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
        {count}
        <span className="text-[#C05775]">{suffix}</span>
      </div>
      <div className="text-[#E5E7EB] opacity-60 font-light text-sm md:text-base tracking-[0.15em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
        {label}
      </div>
    </motion.div>
  );
};

const AnimatedStatistics = () => {
  const stats = [
    { value: "50", suffix: "+", label: "Zrealizowanych projektów" },
    { value: "20", suffix: "+", label: "Zadowolonych klientów" },
    { value: "3", suffix: "+", label: "Lata doświadczenia" },
    { value: "100", suffix: "%", label: "Autorskiego designu" }
  ];

  return (
    <section className="py-20 md:py-32 relative bg-[#0E0F12] border-t border-white/[0.02]">
      {/* Subtle background glow for statistics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-[#C05775] opacity-[0.02] blur-[100px] rounded-full pointer-events-none" />
      
      <div className="layout-container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 divide-x-0 lg:divide-x divide-white/5">
          {stats.map((stat, index) => (
            <StatItem 
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 150} // Stagger the counting animation
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStatistics;