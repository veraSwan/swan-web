"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type CaseStudyBackNavProps = {
  backLabel: string;
};

/** Bottom-of-page back navigation. Calm and centered. */
const CaseStudyBackNav: React.FC<CaseStudyBackNavProps> = ({ backLabel }) => {
  const { variants } = useScrollAnimation();

  return (
    <section className="relative pb-32 md:pb-40">
      <div className="layout-container-wide relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={variants.fadeInUp}
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-transparent border border-white/15 text-white/85 text-[0.7rem] tracking-[0.22em] uppercase font-medium transition-all duration-500 ease-[0.22,1,0.36,1] hover:border-[#C05775]/40 hover:text-white hover:bg-white/[0.03] hover:-translate-y-0.5"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-500 group-hover:-translate-x-1" />
            {backLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyBackNav;
