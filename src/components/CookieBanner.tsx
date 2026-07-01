"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const STORAGE_KEY = "swan-cookie-consent";

const CookieBanner: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const choice = localStorage.getItem(STORAGE_KEY);
      if (!choice) {
        const t = window.setTimeout(() => setOpen(true), 1200);
        return () => window.clearTimeout(t);
      }
    } catch {
      // localStorage blocked — show anyway
      setOpen(true);
    }
  }, []);

  const persist = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* no-op */
    }
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="cookie-banner"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label="Informacja o cookies"
          className="fixed bottom-4 left-4 right-4 md:right-auto md:max-w-[440px] z-[70] rounded-2xl backdrop-blur-xl p-5 md:p-6"
          style={{
            background: isDark ? "rgba(14,16,22,0.95)" : "rgba(248,245,239,0.97)",
            border: isDark ? "1px solid rgba(255,255,255,0.10)" : "1px solid rgba(0,0,0,0.08)",
            boxShadow: isDark ? "0 30px 70px -20px rgba(0,0,0,0.8)" : "0 16px 48px -16px rgba(0,0,0,0.14)",
          }}
        >
          <button
            type="button"
            onClick={() => persist("declined")}
            aria-label="Zamknij"
            className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300"
            style={{ color: isDark ? "rgba(255,255,255,0.4)" : "rgba(17,17,17,0.4)" }}
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <h3
            className="text-[0.95rem] font-medium mb-2 pr-6 tracking-tight"
            style={{ fontFamily: "DM Sans, sans-serif", color: isDark ? "#ffffff" : "#111111" }}
          >
            Pliki cookies
          </h3>
          <p
            className="text-[0.82rem] font-light leading-[1.6] mb-4"
            style={{ fontFamily: "Inter, sans-serif", color: isDark ? "rgba(255,255,255,0.55)" : "rgba(17,17,17,0.60)" }}
          >
            Używamy niezbędnych plików cookies, by strona działała poprawnie. Opcjonalnie analityka pomaga nam ją ulepszać.{" "}
            <Link
              href="/polityka-cookies"
              className="text-[#C05775] hover:underline"
            >
              Czytaj więcej
            </Link>
            .
          </p>

          <div className="flex gap-2.5">
            <button
              type="button"
              onClick={() => persist("accepted")}
              className="flex-1 bg-[#C05775] text-white hover:bg-[#CB6280] h-[42px] text-[0.68rem] tracking-[0.18em] uppercase font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_25px_-6px_rgba(192,87,117,0.55)]"
            >
              Akceptuję
            </button>
            <button
              type="button"
              onClick={() => persist("declined")}
              className="flex-1 bg-transparent h-[42px] text-[0.68rem] tracking-[0.18em] uppercase font-medium rounded-full transition-all duration-300"
              style={{
                color: isDark ? "rgba(255,255,255,0.75)" : "rgba(17,17,17,0.65)",
                border: isDark ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(0,0,0,0.12)",
              }}
            >
              Tylko niezbędne
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
