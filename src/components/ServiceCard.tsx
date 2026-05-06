"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smoothMx = useSpring(mx, { stiffness: 130, damping: 20, mass: 0.5 });
  const smoothMy = useSpring(my, { stiffness: 130, damping: 20, mass: 0.5 });
  const rotateX = useTransform(smoothMy, [-100, 100], [3, -3]);
  const rotateY = useTransform(smoothMx, [-100, 100], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    mx.set(px - rect.width / 2);
    my.set(py - rect.height / 2);
    el.style.setProperty("--mx", `${px}px`);
    el.style.setProperty("--my", `${py}px`);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1100,
        ["--mx" as string]: "50%",
        ["--my" as string]: "50%",
      }}
      className="group relative overflow-hidden h-full rounded-[1.5rem] p-10 bg-white/[0.025] backdrop-blur-2xl border border-white/[0.07] transition-[box-shadow,border-color,background-color] duration-700 ease-[0.22,1,0.36,1] hover:-translate-y-1.5 hover:bg-white/[0.045] hover:border-[#C05775]/30 hover:shadow-[0_30px_60px_-20px_rgba(192,87,117,0.32),0_0_0_1px_rgba(192,87,117,0.10)_inset] flex flex-col items-start"
    >
      {/* cursor-following spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(520px circle at var(--mx) var(--my), rgba(192,87,117,0.16), transparent 45%)",
        }}
      />

      {/* specular highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[1.5rem] opacity-70"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 45%)",
        }}
      />

      {/* depth shadow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[1.5rem]"
        style={{
          background:
            "radial-gradient(120% 80% at 100% 100%, rgba(0,0,0,0.22) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 w-full" style={{ transform: "translateZ(20px)" }}>
        <div className="mb-8 bg-white/[0.04] group-hover:bg-[#C05775]/12 w-14 h-14 flex items-center justify-center rounded-xl border border-white/[0.06] group-hover:border-[#C05775]/40 group-hover:shadow-[0_0_25px_-5px_rgba(192,87,117,0.45)] transition-all duration-700 ease-[0.22,1,0.36,1]">
          {React.cloneElement(icon, {
            className:
              "text-white/60 group-hover:text-[#C05775] transition-all duration-700 ease-[0.22,1,0.36,1] stroke-[1.5] group-hover:rotate-[8deg] group-hover:scale-110 w-6 h-6",
          })}
        </div>
        <h3 className="text-2xl font-medium text-white mb-4 transition-colors duration-500 tracking-wide group-hover:text-white/95">
          {title}
        </h3>
        <p
          className="text-[#E5E7EB] opacity-60 group-hover:opacity-85 font-light text-base leading-[1.7] transition-opacity duration-500"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
