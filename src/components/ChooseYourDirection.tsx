"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  User,
  Building,
  ShoppingBag,
  ArrowRight,
  Check,
  Plus,
  X,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslation } from '@/hooks/useTranslation';

// ============================================================
//  Project screenshot mockups — real screenshots in browser frame
// ============================================================

interface ImageMockupProps {
  src: string;
  alt: string;
  label: string;
}

const ImageMockup: React.FC<ImageMockupProps> = ({ src, alt, label }) => (
  <div className="relative w-full rounded-[1.1rem] overflow-hidden border border-white/[0.08] bg-[#0F1116] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.75)] group">
    {/* Browser chrome */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05]">
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full bg-white/15" />
        ))}
      </div>
      <div className="flex-1 h-3 mx-3 rounded-md bg-white/[0.05]" />
    </div>
    {/* Screenshot */}
    <div className="relative overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full object-cover object-top aspect-[16/10] transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-[1.03]"
        loading="lazy"
      />
      {/* Bottom fade + label */}
      <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-[#0F1116]/90 to-transparent pointer-events-none" />
      <div className="absolute bottom-2.5 left-4">
        <span className="text-[0.52rem] tracking-[0.28em] uppercase text-white/45 font-medium">
          {label}
        </span>
      </div>
    </div>
  </div>
);

const ServiceMockup = () => (
  <ImageMockup
    src="https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/62a1292f8cade28ede176ba9c66f5607.png"
    alt="AURA Clinic — strona usługowa"
    label="AURA Clinic"
  />
);

const PersonalMockup = () => (
  <ImageMockup
    src="https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/c76ba9fd61e35ebe713826728483816e.png"
    alt="LINIA Studio — marka osobista"
    label="LINIA Studio"
  />
);

const RealEstateMockup = () => (
  <ImageMockup
    src="https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/e7f12d1666d12ef5043f14e68faa15d5.png"
    alt="Aureline District — nieruchomości premium"
    label="Aureline District"
  />
);

const ShopMockup = () => (
  <ImageMockup
    src="https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/47b5652ee02da20ef7e0a2e8a2b19e94.png"
    alt="Noir Élan — sklep online"
    label="Noir Élan"
  />
);

// ============================================================

interface DirectionMeta {
  id: string;
  caseStudyHref: string;
  caseStudyName: string;
  icon: LucideIcon;
  Mockup: React.ComponentType;
}

const directionsMeta: DirectionMeta[] = [
  { id: 'service',    caseStudyHref: '/portfolio/aura-clinic',          caseStudyName: 'AURA Clinic',       icon: Briefcase,   Mockup: ServiceMockup },
  { id: 'personal',   caseStudyHref: '/portfolio/linia-studio-wnetrz',  caseStudyName: 'LINIA Studio',      icon: User,        Mockup: PersonalMockup },
  { id: 'realestate', caseStudyHref: '/aureline-district',              caseStudyName: 'Aureline District', icon: Building,    Mockup: RealEstateMockup },
  { id: 'shop',       caseStudyHref: '/noir-elan',                      caseStudyName: 'Noir Élan',         icon: ShoppingBag, Mockup: ShopMockup },
];

const ChooseYourDirection: React.FC = () => {
  const { variants } = useScrollAnimation({ threshold: 0.1 });
  const tr = useTranslation();
  const cyd = tr.cyd;
  // Merge static meta with translated text
  const directions = directionsMeta.map((meta, i) => ({ ...meta, ...cyd.directions[i] }));

  // Closed by default — user must click a tile to reveal panel
  const [activeId, setActiveId] = useState<string | null>(null);
  const [previewId, setPreviewId] = useState<string | null>(null);

  const active = activeId ? directions.find((d) => d.id === activeId) ?? null : null;
  const preview = previewId ? directions.find((d) => d.id === previewId) ?? null : null;

  const handleTileClick = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const scrollToContact = () => {
    const el = document.getElementById('kontakt');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // ESC + body scroll lock for the preview modal
  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPreviewId(null);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [preview]);

  return (
    <section className="section-spacing relative bg-[#08090C] border-t border-white/[0.02]">
      <div className="absolute inset-0 bg-[var(--page-glow)] z-0 opacity-60 pointer-events-none" />

      <div className="layout-container relative z-10">
        {/* Top row: intro text (left) + 2x2 selector tiles (right) */}
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start mb-16 md:mb-20">
          <motion.div
            variants={variants.staggerContainer(0.18)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="w-full lg:w-5/12 flex flex-col items-start text-left z-20"
          >
            <motion.span
              variants={variants.fadeInUp}
              className="text-[#C05775] text-[0.7rem] font-medium tracking-[0.4em] uppercase mb-6 block"
            >
              {cyd.label}
            </motion.span>
            <motion.h2
              variants={variants.fadeInUp}
              className="text-4xl md:text-5xl lg:text-[4.5rem] font-medium text-white mb-6 leading-[1.05] tracking-[-0.03em]"
            >
              {cyd.heading}
            </motion.h2>
            <motion.p
              variants={variants.fadeInUp}
              className="text-base md:text-lg text-white/55 font-light leading-[1.7] mb-10 max-w-md"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {cyd.subheading}
            </motion.p>
            <motion.div variants={variants.fadeInUp}>
              <Button
                onClick={scrollToContact}
                className="group bg-[#C05775] text-white hover:bg-[#CB6280] px-8 py-6 text-[0.7rem] tracking-[0.22em] uppercase font-semibold rounded-full transition-all duration-500 ease-[0.22,1,0.36,1] hover:shadow-[0_0_45px_-8px_rgba(192,87,117,0.65)] hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                {cyd.cta}
              </Button>
            </motion.div>
          </motion.div>

          {/* Selector tiles 2x2 */}
          <motion.div
            variants={variants.staggerContainer(0.12, 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="w-full lg:w-7/12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {directions.map((d) => {
                const Icon = d.icon;
                const isActive = d.id === activeId;
                return (
                  <motion.button
                    key={d.id}
                    variants={variants.scaleIn}
                    type="button"
                    onClick={() => handleTileClick(d.id)}
                    aria-pressed={isActive}
                    className={`group relative text-left h-full rounded-[1.4rem] p-6 md:p-7 backdrop-blur-2xl border transition-all duration-500 ease-[0.22,1,0.36,1] flex flex-col items-start overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C05775]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090C] ${
                      isActive
                        ? 'bg-[#C05775]/[0.06] border-[#C05775]/45 shadow-[0_0_45px_-10px_rgba(192,87,117,0.4),0_0_0_1px_rgba(192,87,117,0.18)_inset]'
                        : 'bg-white/[0.025] border-white/[0.07] hover:-translate-y-1 hover:bg-white/[0.04] hover:border-[#C05775]/25 hover:shadow-[0_22px_42px_-18px_rgba(192,87,117,0.25)]'
                    }`}
                  >
                    {/* Plus icon (closed) / minus indicator (active) */}
                    <span
                      aria-hidden="true"
                      className={`absolute top-5 right-5 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-500 ${
                        isActive
                          ? 'bg-[#C05775]/15 border-[#C05775]/50 text-[#C05775] rotate-45'
                          : 'bg-white/[0.03] border-white/[0.08] text-white/45 group-hover:border-[#C05775]/40 group-hover:text-[#E889A1]'
                      }`}
                    >
                      <Plus className="w-3.5 h-3.5 stroke-[2]" />
                    </span>

                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 shrink-0 transition-all duration-500 ease-[0.22,1,0.36,1] ${
                        isActive
                          ? 'border-[#C05775]/55 bg-[#C05775]/15 shadow-[0_0_22px_-4px_rgba(192,87,117,0.55)]'
                          : 'border-white/[0.06] bg-white/[0.04] group-hover:border-[#C05775]/40 group-hover:bg-[#C05775]/12'
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 stroke-[1.5] transition-all duration-500 ease-[0.22,1,0.36,1] ${
                          isActive
                            ? 'text-[#C05775]'
                            : 'text-white/65 group-hover:text-[#C05775] group-hover:rotate-[8deg] group-hover:scale-110'
                        }`}
                      />
                    </div>
                    <h3
                      className={`text-[1.1rem] md:text-[1.2rem] font-medium mb-2 tracking-tight pr-8 transition-colors duration-500 ${
                        isActive ? 'text-white' : 'text-white/90 group-hover:text-white'
                      }`}
                    >
                      {d.title}
                    </h3>
                    <p
                      className="text-[0.85rem] text-white/55 font-light leading-[1.65]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {d.shortDescription}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Active category detail panel — only when a tile is active */}
        <AnimatePresence mode="wait" initial={false}>
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 28, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                height: { duration: 0.6 },
              }}
              className="overflow-hidden"
            >
              <div className="rounded-[1.8rem] md:rounded-[2.2rem] p-8 md:p-12 lg:p-14 bg-white/[0.025] backdrop-blur-2xl border border-white/[0.08] shadow-[0_40px_100px_-40px_rgba(0,0,0,0.7),0_0_0_1px_rgba(192,87,117,0.06)_inset]">
                <div className="grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center">
                  {/* LEFT: copy */}
                  <div className="flex flex-col items-start min-w-0">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[0.62rem] tracking-[0.28em] uppercase text-white/70 mb-7">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C05775]" />
                      {active.badge}
                    </span>
                    <h3 className="text-3xl md:text-4xl lg:text-[3rem] font-medium text-white mb-5 tracking-[-0.025em] leading-[1.05]">
                      {active.title}
                    </h3>
                    <p
                      className="text-base md:text-[1.05rem] text-white/60 font-light leading-[1.75] mb-8"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {active.longDescription}
                    </p>
                    <ul className="space-y-3.5 mb-10 w-full">
                      {active.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-0.5 w-5 h-5 rounded-full border border-[#C05775]/45 bg-[#C05775]/10 flex items-center justify-center shrink-0">
                            <Check
                              className="w-3 h-3 text-[#C05775]"
                              strokeWidth={2.5}
                            />
                          </span>
                          <span
                            className="text-[0.95rem] text-white/80"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {p}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row sm:items-stretch gap-3 w-full sm:w-auto">
                      <Button
                        onClick={scrollToContact}
                        className="group inline-flex items-center justify-center gap-2 bg-[#C05775] text-white hover:bg-[#CB6280] h-[52px] px-7 text-[0.7rem] tracking-[0.22em] uppercase font-semibold rounded-full transition-all duration-500 ease-[0.22,1,0.36,1] hover:shadow-[0_0_45px_-8px_rgba(192,87,117,0.65)] hover:-translate-y-0.5"
                      >
                        {cyd.startProject}
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                      </Button>
                      <button
                        type="button"
                        onClick={() => setPreviewId(active.id)}
                        className="group inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-full bg-transparent border border-white/15 text-white/85 text-[0.7rem] tracking-[0.22em] uppercase font-medium transition-all duration-500 ease-[0.22,1,0.36,1] hover:border-[#C05775]/40 hover:text-white hover:bg-white/[0.03] hover:shadow-[0_0_25px_-8px_rgba(192,87,117,0.3)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C05775]/60"
                      >
                        {cyd.seeExample}
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>

                  {/* RIGHT: mockup */}
                  <div className="relative min-w-0">
                    <div
                      aria-hidden="true"
                      className="absolute -inset-12 bg-[radial-gradient(circle_at_60%_40%,rgba(192,87,117,0.18),transparent_60%)] blur-2xl pointer-events-none"
                    />
                    <div className="relative">
                      <active.Mockup />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Preview modal — bigger mockup + context */}
      <AnimatePresence>
        {preview && (
          <motion.div
            key="preview-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={() => setPreviewId(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Podgląd projektu — ${preview.title}`}
          >
            {/* backdrop */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[#04050A]/82 backdrop-blur-md"
            />

            <motion.div
              key="preview-panel"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[1200px] max-h-[92vh] overflow-y-auto rounded-[1.6rem] md:rounded-[2rem] bg-[#0E1016] border border-white/[0.09] shadow-[0_60px_140px_-40px_rgba(0,0,0,0.8),0_0_0_1px_rgba(192,87,117,0.08)_inset]"
            >
              {/* close */}
              <button
                type="button"
                onClick={() => setPreviewId(null)}
                aria-label="Zamknij podgląd"
                className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/75 hover:text-white hover:border-[#C05775]/45 hover:bg-white/[0.08] transition-all duration-300"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 p-6 md:p-10 lg:p-12">
                {/* LEFT: bigger mockup */}
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute -inset-10 bg-[radial-gradient(circle_at_50%_40%,rgba(192,87,117,0.18),transparent_60%)] blur-2xl pointer-events-none"
                  />
                  <div className="relative scale-100 md:scale-[1.04] origin-center">
                    <preview.Mockup />
                  </div>
                </div>

                {/* RIGHT: context */}
                <div className="flex flex-col items-start min-w-0">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[0.62rem] tracking-[0.28em] uppercase text-white/70 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C05775]" />
                    {cyd.miniPreview}
                  </span>
                  <h3 className="text-3xl md:text-4xl lg:text-[2.6rem] font-medium text-white mb-4 tracking-[-0.025em] leading-[1.05]">
                    {preview.title}
                  </h3>
                  <p
                    className="text-base text-white/60 font-light leading-[1.75] mb-8"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {preview.longDescription}
                  </p>

                  <div className="space-y-5 mb-9 w-full">
                    <div>
                      <span className="text-[#C05775] text-[0.62rem] font-medium tracking-[0.28em] uppercase mb-2 block">
                        {cyd.forWhomLabel}
                      </span>
                      <p
                        className="text-[0.92rem] text-white/75 font-light leading-[1.7]"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {preview.forWhom}
                      </p>
                    </div>
                    <div>
                      <span className="text-[#C05775] text-[0.62rem] font-medium tracking-[0.28em] uppercase mb-2 block">
                        {cyd.solvesLabel}
                      </span>
                      <p
                        className="text-[0.92rem] text-white/75 font-light leading-[1.7]"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {preview.solves}
                      </p>
                    </div>
                    <div>
                      <span className="text-[#C05775] text-[0.62rem] font-medium tracking-[0.28em] uppercase mb-2 block">
                        {cyd.effectLabel}
                      </span>
                      <p
                        className="text-[0.92rem] text-white/75 font-light leading-[1.7]"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {preview.effect}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-auto">
                    <Button
                      onClick={() => {
                        setPreviewId(null);
                        scrollToContact();
                      }}
                      className="group inline-flex items-center justify-center gap-2 bg-[#C05775] text-white hover:bg-[#CB6280] h-[50px] px-7 text-[0.7rem] tracking-[0.22em] uppercase font-semibold rounded-full transition-all duration-500 ease-[0.22,1,0.36,1] hover:shadow-[0_0_45px_-8px_rgba(192,87,117,0.65)] hover:-translate-y-0.5"
                    >
                      {cyd.startProject}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                    </Button>
                    <Link
                      href={preview.caseStudyHref}
                      onClick={() => setPreviewId(null)}
                      className="group inline-flex items-center justify-center gap-2 h-[50px] px-7 rounded-full bg-transparent border border-white/15 text-white/85 text-[0.7rem] tracking-[0.22em] uppercase font-medium transition-all duration-500 ease-[0.22,1,0.36,1] hover:border-[#C05775]/40 hover:text-white hover:bg-white/[0.03] hover:-translate-y-0.5"
                    >
                      {cyd.fullRealization} {preview.caseStudyName}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ChooseYourDirection;
