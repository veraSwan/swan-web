"use client";
import React, { useEffect, useRef, useState } from "react";

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: -100, y: -100 });
  const dot = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (hidden) setHidden(false);
    };

    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = !!t.closest("a, button, [role='button'], input, textarea, select, label");
      setHover(interactive);
    };

    const tick = () => {
      const dotLerp = 0.55;
      const ringLerp = 0.28;
      dot.current.x += (target.current.x - dot.current.x) * dotLerp;
      dot.current.y += (target.current.y - dot.current.y) * dotLerp;
      ring.current.x += (target.current.x - ring.current.x) * ringLerp;
      ring.current.y += (target.current.y - ring.current.y) * ringLerp;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.current.x}px, ${dot.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [hidden]);

  if (!enabled) return null;

  const baseStyle: React.CSSProperties = {
    pointerEvents: "none",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999,
    willChange: "transform, opacity, width, height",
    opacity: hidden ? 0 : 1,
    transition: "opacity 200ms ease, width 220ms cubic-bezier(0.22,1,0.36,1), height 220ms cubic-bezier(0.22,1,0.36,1), background-color 220ms ease, border-color 220ms ease",
  };

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          ...baseStyle,
          width: hover ? 0 : 5,
          height: hover ? 0 : 5,
          marginTop: -3,
          marginLeft: -3,
          borderRadius: "50%",
          backgroundColor: "#fff",
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          ...baseStyle,
          width: hover ? 40 : 22,
          height: hover ? 40 : 22,
          borderRadius: "50%",
          border: `1.25px solid ${hover ? "rgba(192,87,117,0.85)" : "rgba(255,255,255,0.5)"}`,
          backgroundColor: hover ? "rgba(192,87,117,0.08)" : "transparent",
          backdropFilter: hover ? "blur(2px)" : "none",
          WebkitBackdropFilter: hover ? "blur(2px)" : "none",
        }}
      />
    </>
  );
};

export default CustomCursor;
