"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface HeroCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  floatDelay?: number;
  entranceDelay?: number;
}

const HeroCard: React.FC<HeroCardProps> = ({
  icon: Icon,
  title,
  description,
  className = "",
  floatDelay = 0,
  entranceDelay = 0,
}) => {
  const innerRef = useRef<HTMLDivElement>(null);

  // raw cursor offsets (relative to card center, in pixels)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // smoothed via spring for premium feel
  const smoothMx = useSpring(mx, { stiffness: 140, damping: 18, mass: 0.5 });
  const smoothMy = useSpring(my, { stiffness: 140, damping: 18, mass: 0.5 });

  // tilt: max ~6deg, very subtle
  const rotateX = useTransform(smoothMy, [-100, 100], [4, -4]);
  const rotateY = useTransform(smoothMx, [-100, 100], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = innerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    mx.set(px - rect.width / 2);
    my.set(py - rect.height / 2);
    // also expose to CSS for spotlight gradient
    el.style.setProperty("--mx", `${px}px`);
    el.style.setProperty("--my", `${py}px`);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    // outer: entrance fade-up
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay: entranceDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      style={{ perspective: 1000 }}
    >
      {/* middle: continuous slow floating */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 7 + floatDelay * 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        }}
        className="h-full"
      >
        {/* inner: 3D tilt parallax */}
        <motion.div
          ref={innerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            ["--mx" as string]: "50%",
            ["--my" as string]: "50%",
          }}
          className="group relative overflow-hidden h-full rounded-[1.5rem] p-7 md:p-9 backdrop-blur-2xl bg-white/[0.025] border border-white/[0.08] transition-[box-shadow,border-color,background-color] duration-700 ease-[0.22,1,0.36,1] hover:bg-white/[0.045] hover:border-[#C05775]/30 hover:shadow-[0_30px_60px_-20px_rgba(192,87,117,0.32),0_0_0_1px_rgba(192,87,117,0.10)_inset]"
        >
          {/* cursor-following spotlight */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "radial-gradient(500px circle at var(--mx) var(--my), rgba(192,87,117,0.14), transparent 45%)",
            }}
          />

          {/* top-left specular highlight */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[1.5rem] opacity-70"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 45%)",
            }}
          />

          {/* depth: bottom-right faint inner shadow */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[1.5rem] opacity-100"
            style={{
              background:
                "radial-gradient(120% 80% at 100% 100%, rgba(0,0,0,0.25) 0%, transparent 55%)",
            }}
          />

          <div
            className="relative z-10"
            style={{ transform: "translateZ(20px)" }}
          >
            <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] group-hover:border-[#C05775]/40 group-hover:bg-[#C05775]/12 transition-all duration-700 ease-[0.22,1,0.36,1] group-hover:shadow-[0_0_25px_-5px_rgba(192,87,117,0.4)]">
              <Icon
                className="w-[19px] h-[19px] text-white/65 group-hover:text-[#C05775] transition-all duration-700 ease-[0.22,1,0.36,1] stroke-[1.5] group-hover:rotate-[8deg] group-hover:scale-110"
              />
            </div>
            <h3 className="text-[1.1rem] md:text-[1.2rem] font-medium text-white/95 mb-3 tracking-tight">
              {title}
            </h3>
            <p
              className="text-[0.85rem] md:text-[0.92rem] text-white/55 font-light leading-[1.7]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroCard;
