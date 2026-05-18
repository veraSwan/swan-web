"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";

const PROJECTS = [
  {
    name: "Noir Élan",
    category: "E-commerce",
    image: "https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/47b5652ee02da20ef7e0a2e8a2b19e94.png",
    href: "/noir-elan",
  },
  {
    name: "Aureline District",
    category: "Nieruchomości",
    image: "https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/e7f12d1666d12ef5043f14e68faa15d5.png",
    href: "/aureline-district",
  },
  {
    name: "AURA Clinic",
    category: "Medycyna estetyczna",
    image: "https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/62a1292f8cade28ede176ba9c66f5607.png",
    href: "/portfolio/aura-clinic",
  },
] as const;

// index 0 = back, index 2 = front
const CONFIGS = [
  { rotate: -8,  x: -68, y: 28,  scale: 0.82, z: 1, strength: 0.25, floatDelay: 0   },
  { rotate:  4,  x: -12, y: -18, scale: 0.91, z: 2, strength: 0.60, floatDelay: 1.1 },
  { rotate: -1,  x:  42, y:   6, scale: 1.00, z: 3, strength: 1.00, floatDelay: 2.0 },
] as const;

type Config = (typeof CONFIGS)[number];
type Project = (typeof PROJECTS)[number];

interface CardProps {
  project: Project;
  cfg: Config;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  i: number;
  isTop: boolean;
  onHover: (i: number | null) => void;
}

const CARD_W = 188; // px
const CARD_H = Math.round(CARD_W * 4 / 3); // ≈ 251px  (3:4 aspect)

const Card: React.FC<CardProps> = ({ project, cfg, mouseX, mouseY, i, isTop, onHover }) => {
  const px = useTransform(mouseX, [-1, 1], [-16 * cfg.strength, 16 * cfg.strength]);
  const py = useTransform(mouseY, [-1, 1], [-10 * cfg.strength, 10 * cfg.strength]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, delay: i * 0.18 + 0.5, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => onHover(i)}
      onHoverEnd={() => onHover(null)}
      style={{
        position: "absolute",
        left: `calc(50% + ${cfg.x - CARD_W / 2}px)`,
        top: `calc(50% + ${cfg.y - CARD_H / 2}px)`,
        rotate: cfg.rotate,
        scale: cfg.scale,
        zIndex: isTop ? 10 : cfg.z,
        x: px,
        y: py,
        width: CARD_W,
      }}
      whileHover={{
        scale: cfg.scale * 1.06,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {/* float wrapper — separate from parallax so they don't conflict */}
      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: cfg.floatDelay,
        }}
      >
        <Link
          href={project.href}
          className="block group/card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C05775]/60 rounded-[1.35rem]"
          tabIndex={0}
        >
          <div
            className="
              rounded-[1.35rem] overflow-hidden
              border border-white/[0.12]
              shadow-[0_20px_50px_-10px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.03)_inset]
              group-hover/card:border-[#C05775]/45
              group-hover/card:shadow-[0_24px_60px_-10px_rgba(192,87,117,0.28),0_20px_50px_-10px_rgba(0,0,0,0.5)]
              transition-all duration-700
            "
          >
            {/* screenshot */}
            <div className="relative overflow-hidden bg-[#0E0F14]" style={{ aspectRatio: "3/4" }}>
              <img
                src={project.image}
                alt={project.name}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[1.3s] ease-out group-hover/card:scale-[1.05]"
                loading="lazy"
                draggable={false}
              />
              {/* gradient overlay for label readability */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#07080B]/92 via-[#07080B]/45 to-transparent pointer-events-none" />

              {/* label */}
              <div className="absolute bottom-0 inset-x-0 p-3">
                <p className="text-[0.52rem] text-[#C05775] font-semibold tracking-[0.32em] uppercase mb-0.5 leading-none">
                  {project.category}
                </p>
                <p className="text-[0.78rem] text-white/95 font-medium leading-tight tracking-tight">
                  {project.name}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

const HeroProjectStack: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mouseX = useSpring(rawX, { stiffness: 50, damping: 20, mass: 0.5 });
  const mouseY = useSpring(rawY, { stiffness: 50, damping: 20, mass: 0.5 });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    rawX.set((e.clientX - r.left - r.width  / 2) / (r.width  / 2));
    rawY.set((e.clientY - r.top  - r.height / 2) / (r.height / 2));
  };

  const onLeave = () => {
    rawX.set(0);
    rawY.set(0);
    setHoveredIdx(null);
  };

  return (
    <div
      ref={ref}
      className="relative h-[380px] sm:h-[420px] lg:h-[460px] select-none"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      aria-hidden="true"
    >
      {PROJECTS.map((p, i) => (
        <Card
          key={p.name}
          project={p}
          cfg={CONFIGS[i]}
          mouseX={mouseX}
          mouseY={mouseY}
          i={i}
          isTop={hoveredIdx === i}
          onHover={setHoveredIdx}
        />
      ))}
    </div>
  );
};

export default HeroProjectStack;
