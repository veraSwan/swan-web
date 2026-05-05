"use client";
import React, { useEffect, useState } from "react";

type Props = {
  words: string[];
  intervalMs?: number;
  className?: string;
  accentColor?: string;
};

const MorphingWord: React.FC<Props> = ({
  words,
  intervalMs = 2400,
  className = "",
  accentColor = "#C05775",
}) => {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    if (words.length <= 1) return;
    let outTimer: number | null = null;

    const cycle = () => {
      setPhase("out");
      outTimer = window.setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setPhase("in");
      }, 500);
    };

    const inTimer = window.setInterval(cycle, intervalMs);

    return () => {
      window.clearInterval(inTimer);
      if (outTimer) window.clearTimeout(outTimer);
    };
  }, [words.length, intervalMs]);

  const current = words[index];

  return (
    <span
      className={`relative inline-block whitespace-nowrap ${className}`}
      aria-live="polite"
      style={{
        color: accentColor,
        opacity: phase === "in" ? 1 : 0,
        transform: phase === "in" ? "translateY(0)" : "translateY(0.25em)",
        filter: phase === "in" ? "blur(0)" : "blur(8px)",
        transition:
          "opacity 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.5s cubic-bezier(0.22,1,0.36,1), filter 0.5s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {current}
    </span>
  );
};

export default MorphingWord;
