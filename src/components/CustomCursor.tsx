"use client";
import React, { useEffect, useRef, useState } from "react";

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: -100, y: -100 });
  const dot = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef<number | null>(null);
  const isHover = useRef(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (dotRef.current?.style.opacity === "0") {
        dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }
    };

    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = !!t.closest("a, button, [role='button'], input, textarea, select, label");
      if (interactive === isHover.current) return;
      isHover.current = interactive;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%) scale(${interactive ? 1.8 : 1})`;
        ringRef.current.style.borderColor = interactive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.55)";
      }
    };

    const tick = () => {
      const ringLerp = 0.45;
      dot.current.x = target.current.x;
      dot.current.y = target.current.y;
      ring.current.x += (target.current.x - ring.current.x) * ringLerp;
      ring.current.y += (target.current.y - ring.current.y) * ringLerp;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.current.x}px, ${dot.current.y}px, 0)`;
      }
      if (ringRef.current) {
        const scale = isHover.current ? 1.8 : 1;
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  if (!enabled) return null;

  const baseStyle: React.CSSProperties = {
    pointerEvents: "none",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999,
    willChange: "transform",
    opacity: 0,
    transition: "opacity 200ms ease, border-color 220ms ease",
  };

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          ...baseStyle,
          width: 6,
          height: 6,
          marginTop: -3,
          marginLeft: -3,
          borderRadius: "50%",
          backgroundColor: "rgba(192,87,117,1)",
          boxShadow: "0 0 0 1.5px rgba(255,255,255,0.75), 0 0 6px rgba(0,0,0,0.45)",
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          ...baseStyle,
          width: 22,
          height: 22,
          borderRadius: "50%",
          border: "1.5px solid rgba(255,255,255,0.55)",
          boxShadow: "0 0 0 0.5px rgba(0,0,0,0.25)",
          transition: "opacity 200ms ease, border-color 220ms ease",
        }}
      />
    </>
  );
};

export default CustomCursor;
