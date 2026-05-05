"use client";
import React, { useEffect, useRef } from "react";

type Props = {
  className?: string;
  size?: number;
  color?: string;
};

const MouseSpotlight: React.FC<Props> = ({
  className = "",
  size = 600,
  color = "rgba(192, 87, 117, 0.12)",
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = ref.current?.parentElement?.getBoundingClientRect();
      if (!rect) return;
      target.current.x = e.clientX - rect.left;
      target.current.y = e.clientY - rect.top;
    };

    const tick = () => {
      const lerp = 0.12;
      current.current.x += (target.current.x - current.current.x) * lerp;
      current.current.y += (target.current.y - current.current.y) * lerp;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${current.current.x - size / 2}px, ${current.current.y - size / 2}px, 0)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [size]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute top-0 left-0 z-0 ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at center, ${color} 0%, transparent 65%)`,
        willChange: "transform",
        opacity: 0.95,
      }}
    />
  );
};

export default MouseSpotlight;
