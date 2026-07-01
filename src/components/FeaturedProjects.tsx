"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/hooks/useTranslation";
import { useTheme } from "@/contexts/ThemeContext";

const featuredMeta = [
  { name: "Ogrodzenia Piła",   category: "Ogrodzenia / Metaloplastyka", image: "/images/portfolio/ogrodzenia-pila/ogrodzenia-pila.png",                                                                                                            link: "/portfolio/stal-mar",            descIndex: 3 },
  { name: "Noir Élan",         category: "E-commerce / Luksus",         image: "/images/portfolio/noir-elan/noir-elan.jpg",                                                                                                                        link: "/noir-elan",                     descIndex: 0 },
  { name: "Maison Atelier",    category: "E-commerce / Fashion",        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80",                                                                    link: "/maison-atelier",                descIndex: 1 },
  { name: "AURA Clinic",       category: "Medycyna estetyczna",         image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=1200&q=80",                                                                    link: "/portfolio/aura-clinic",         descIndex: 2 },
  { name: "LINIA Studio",      category: "Projektowanie wnętrz",        image: "/images/portfolio/linia-studio/collov-home-design-H-1j_s0dhCw-unsplash.jpg",                                                                                       link: "/portfolio/linia-studio-wnetrz", descIndex: 5 },
  { name: "Aureline District", category: "Nieruchomości premium",       image: "/images/portfolio/aureline-district/joel-filipe-RFDP7_80v5A-unsplash.jpg",                                                                                        link: "/aureline-district",             descIndex: 7 },
];

const AUTOPLAY_INTERVAL = 5500;

const FeaturedProjects: React.FC = () => {
  const { variants } = useScrollAnimation({ threshold: 0.1 });
  const tr = useTranslation();
  const fp = tr.featuredProjects;
  const portfolioProjects = tr.portfolio.projects;
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", dragFree: false, skipSnaps: false, containScroll: "trimSnaps" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); emblaApi.off("reInit", onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || isPaused) return;
    intervalRef.current = setInterval(() => emblaApi.scrollNext(), AUTOPLAY_INTERVAL);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [emblaApi, isPaused]);

  return (
    <section className="section-spacing relative border-t border-white/[0.02]">
      <div className="absolute inset-0 bg-[var(--page-glow)] z-0 opacity-50 pointer-events-none" />
      <div className="layout-container relative z-10">
        <motion.div
          variants={variants.staggerContainer(0.18, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <motion.span variants={variants.fadeInUp} className="text-[#C05775] text-[0.7rem] font-medium tracking-[0.4em] uppercase mb-6 block">
            {fp.label}
          </motion.span>
          <motion.h2 variants={variants.fadeInUp} className="text-4xl md:text-5xl lg:text-[4.5rem] font-medium text-white mb-6 leading-[1.05] tracking-[-0.03em]">
            {fp.heading}
          </motion.h2>
          <motion.p variants={variants.fadeInUp} className="text-base md:text-lg text-white/55 font-light leading-[1.7]" style={{ fontFamily: "Inter, sans-serif" }}>
            {fp.subheading}
          </motion.p>
        </motion.div>

        <motion.div
          variants={variants.fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {(!mounted || theme === 'dark') ? (
            <>
              <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-6 md:w-10 z-10 bg-gradient-to-r from-[#08090C]/85 via-[#08090C]/30 to-transparent" />
              <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-6 md:w-10 z-10 bg-gradient-to-l from-[#08090C]/85 via-[#08090C]/30 to-transparent" />
            </>
          ) : (
            <>
              <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-6 md:w-10 z-10 bg-gradient-to-r from-[#F3F0E6]/90 to-transparent" />
              <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-6 md:w-10 z-10 bg-gradient-to-l from-[#F3F0E6]/90 to-transparent" />
            </>
          )}

          <div className="overflow-hidden -mx-3 md:-mx-4" ref={emblaRef}>
            <div className="flex">
              {featuredMeta.map((p) => (
                <div key={p.name} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-3 md:px-4">
                  <Link href={p.link} className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C05775]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090C] rounded-[1.5rem]">
                    <article className="relative h-full overflow-hidden rounded-[1.5rem] bg-white/[0.025] backdrop-blur-2xl border border-white/[0.07] transition-all duration-700 ease-[0.22,1,0.36,1] group-hover:-translate-y-1.5 group-hover:bg-white/[0.04] group-hover:border-[#C05775]/30 group-hover:shadow-[0_30px_60px_-20px_rgba(192,87,117,0.32),0_0_0_1px_rgba(192,87,117,0.08)_inset]">
                      <div suppressHydrationWarning className="relative aspect-[4/5] overflow-hidden" style={{ backgroundColor: theme === 'dark' ? '#0E0F14' : '#EDE9E0' }}>
                        <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]" loading="lazy" draggable={false} />
                        <div suppressHydrationWarning className="pointer-events-none absolute inset-0 opacity-70 group-hover:opacity-40 transition-opacity duration-700" style={{ background: theme === 'dark' ? "linear-gradient(180deg, rgba(8,9,12,0) 35%, rgba(8,9,12,0.85) 100%)" : "linear-gradient(180deg, rgba(243,240,230,0) 35%, rgba(243,240,230,0.7) 100%)" }} />
                      </div>
                      <div className="p-6 md:p-7">
                        <span className="text-[#C05775] text-[0.65rem] font-medium tracking-[0.3em] uppercase mb-3 block">{p.category}</span>
                        <h3 className="text-xl md:text-[1.3rem] text-white/95 mb-3 tracking-tight">{p.name}</h3>
                        <p className="text-[0.86rem] text-white/55 font-light leading-[1.65] mb-5" style={{ fontFamily: "Inter, sans-serif" }}>
                          {portfolioProjects[p.descIndex]?.description ?? ''}
                        </p>
                        <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-white/85 group-hover:text-[#E889A1] transition-colors duration-500">
                          {fp.details}
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-x-1.5" />
                        </span>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center sm:justify-between gap-6">
            <div className="flex items-center gap-3">
              {scrollSnaps.map((_, i) => (
                <button key={i} type="button" onClick={() => scrollTo(i)} aria-label={`Slajd ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 ease-[0.22,1,0.36,1] ${i === selectedIndex ? 'w-12 bg-[#C05775] shadow-[0_0_18px_-2px_rgba(192,87,117,0.7)]' : 'w-4 bg-white/30 hover:bg-white/55'}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button type="button" onClick={scrollPrev} aria-label="Poprzedni" className="w-12 h-12 flex items-center justify-center rounded-full border border-white/30 bg-white/[0.04] text-white/85 hover:text-white hover:border-[#C05775]/55 hover:bg-white/[0.08] hover:shadow-[0_0_28px_-8px_rgba(192,87,117,0.55)] transition-all duration-500 ease-[0.22,1,0.36,1]">
                <ArrowLeft className="w-[18px] h-[18px]" />
              </button>
              <button type="button" onClick={scrollNext} aria-label="Następny" className="w-12 h-12 flex items-center justify-center rounded-full border border-white/30 bg-white/[0.04] text-white/85 hover:text-white hover:border-[#C05775]/55 hover:bg-white/[0.08] hover:shadow-[0_0_28px_-8px_rgba(192,87,117,0.55)] transition-all duration-500 ease-[0.22,1,0.36,1]">
                <ArrowRight className="w-[18px] h-[18px]" />
              </button>
            </div>
          </div>
        </motion.div>

        <div className="mt-14 md:mt-16 text-center">
          <Link href="/portfolio" className="group inline-flex items-center gap-3 px-9 py-5 rounded-full bg-transparent border border-white/15 text-white/85 text-[0.72rem] tracking-[0.22em] uppercase font-medium transition-all duration-500 ease-[0.22,1,0.36,1] hover:bg-white/[0.04] hover:border-[#C05775]/40 hover:text-white hover:-translate-y-0.5 hover:shadow-[0_0_28px_-8px_rgba(192,87,117,0.4)]">
            {fp.viewAll}
            <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
