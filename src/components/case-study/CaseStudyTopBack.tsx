"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

type CaseStudyTopBackProps = {
  label: string;
};

/** Top-of-page back link, sits above the hero. Subtle, scrolls with content. */
const CaseStudyTopBack: React.FC<CaseStudyTopBackProps> = ({ label }) => (
  <div className="layout-container-wide relative z-20 max-w-6xl mx-auto pt-28 md:pt-32">
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href="/portfolio"
        className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md text-white/70 text-[0.65rem] tracking-[0.22em] uppercase font-medium transition-all duration-500 ease-[0.22,1,0.36,1] hover:border-[#C05775]/35 hover:text-white hover:bg-white/[0.07]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-500 group-hover:-translate-x-1" />
        {label}
      </Link>
    </motion.div>
  </div>
);

export default CaseStudyTopBack;
