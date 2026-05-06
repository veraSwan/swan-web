"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.4,
    restDelta: 0.001,
  });

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed top-0 inset-x-0 z-[60] h-[2px] transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <motion.div
        style={{ scaleX, transformOrigin: "0% 50%" }}
        className="h-full bg-gradient-to-r from-[#C05775] via-[#E889A1] to-[#9D5B8B] shadow-[0_0_18px_rgba(192,87,117,0.55)]"
      />
    </div>
  );
};

export default ScrollProgress;
