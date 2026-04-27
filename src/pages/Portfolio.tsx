"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslation } from '@/hooks/useTranslation';

interface ProjectData {
  name: string;
  image: string;
  category: string;
  link: string;
  phoneImage?: string;
}

const projectsMeta: ProjectData[] = [
  { name: 'Noir Élan',        image: 'https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/47b5652ee02da20ef7e0a2e8a2b19e94.png', category: 'E-commerce / Luksus',        link: '/noir-elan',                      phoneImage: 'https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/47b5652ee02da20ef7e0a2e8a2b19e94.png' },
  { name: 'Maison Atelier',   image: 'https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/0071c8caf9b1e0c7eef64c7629390188.png', category: 'E-commerce / Fashion',        link: '/maison-atelier' },
  { name: 'AURA Clinic',      image: 'https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/62a1292f8cade28ede176ba9c66f5607.png', category: 'Medycyna estetyczna',         link: '/portfolio/aura-clinic',          phoneImage: 'https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/62a1292f8cade28ede176ba9c66f5607.png' },
  { name: 'LINIA Studio',     image: 'https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/c76ba9fd61e35ebe713826728483816e.png', category: 'Projektowanie wnętrz',        link: '/portfolio/linia-studio-wnetrz' },
  { name: 'Calma Studio',     image: 'https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/729b57238098fd92f310dc04dcb1867f.png', category: 'Wellness & SPA',             link: '/calma-studio' },
  { name: 'Aureline District', image: 'https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/e7f12d1666d12ef5043f14e68faa15d5.png', category: 'Nieruchomości',              link: '/aureline-district',              phoneImage: 'https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/e7f12d1666d12ef5043f14e68faa15d5.png' },
];

interface EditorialProjectProps {
  meta: ProjectData;
  description: string;
  viewProject: string;
  index: number;
}

const EditorialProject: React.FC<EditorialProjectProps> = ({ meta, description, viewProject, index }) => {
  const anim = useScrollAnimation({ threshold: 0.1 });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={anim.ref}
      className={`w-full flex flex-col lg:flex-row gap-16 lg:gap-32 items-center justify-between mb-40 md:mb-56 scroll-animate ${anim.isVisible ? 'is-visible' : ''} ${isEven ? '' : 'lg:flex-row-reverse'}`}
    >
      <Link href={meta.link} className="w-full lg:w-[65%] relative group cursor-pointer block">
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          <div className="relative w-full bg-[#1A1C20] rounded-t-[1.5rem] p-2 sm:p-3 pb-0 shadow-2xl border border-white/5 border-b-0 transition-all duration-700 ease-[0.22,1,0.36,1] group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7),0_0_0_1px_rgba(192,87,117,0.12)]">
            <div className="aspect-[16/10] bg-black rounded-t-xl overflow-hidden relative">
              <motion.img
                src={meta.image}
                alt={meta.name}
                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100"
                loading="lazy"
                whileHover={{ y: '-10%', scale: 1.025 }}
                transition={{ duration: 3.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'top center' }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000" />
            </div>
            <div className="w-[110%] -ml-[5%] h-3 sm:h-4 bg-[#2A2B30] rounded-b-2xl mt-0 border-t border-white/5 shadow-xl relative z-10" />
          </div>

          {meta.phoneImage && (
            <div className="absolute -bottom-6 -right-4 sm:-right-8 w-[72px] sm:w-[88px] z-20 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
              <div className="relative rounded-[16px] overflow-hidden border border-white/[0.12] bg-[#1A1C20]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[28%] h-[3px] bg-[#0A0B0E] rounded-b-full z-10" />
                <div className="aspect-[9/19.5] overflow-hidden">
                  <img src={meta.phoneImage} alt={`${meta.name} mobile`} className="w-full h-full object-cover object-top" loading="lazy" />
                </div>
                <div className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-[35%] h-[2.5px] bg-white/30 rounded-full" />
              </div>
            </div>
          )}
        </motion.div>
      </Link>

      <div className="w-full lg:w-[35%] flex flex-col items-start text-left">
        <span className="text-[#A1A1AA] uppercase tracking-[0.2em] text-xs mb-6 font-medium">
          {meta.category}
        </span>
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
          <Link href={meta.link} className="hover:text-[#C05775] transition-colors duration-500">
            {meta.name}
          </Link>
        </h2>
        <p className="text-base text-[#D4D4D8] font-light leading-[1.8] tracking-wide mb-10 max-w-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
          {description}
        </p>
        <Link
          href={meta.link}
          className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-white font-medium hover:text-[#C05775] transition-colors duration-500 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full border border-white/10 hover:border-[#C05775]/30"
        >
          {viewProject}
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const titleAnim = useScrollAnimation();
  const tr = useTranslation();
  const p = tr.portfolio;

  return (
    <main className="bg-[#08090C] min-h-screen selection:bg-[#C05775]/30">
      <section
        ref={titleAnim.ref}
        className={`layout-container relative overflow-hidden pb-32 pt-32 md:pt-40 scroll-animate ${titleAnim.isVisible ? 'is-visible' : ''}`}
      >
        <div className="absolute inset-0 bg-[var(--page-glow)] z-0 opacity-80 pointer-events-none" />
        <div className="w-full text-center relative z-10 flex flex-col items-center max-w-4xl mx-auto">
          <span className="text-[#A1A1AA] uppercase tracking-[0.3em] text-sm mb-8 font-medium">
            {p.label}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-light text-white mb-10 tracking-tight leading-[1.1]">
            {p.heading}
          </h1>
          <p className="text-lg md:text-xl text-[#E5E7EB] opacity-70 font-light max-w-2xl leading-[1.8] tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
            {p.subheading}
          </p>
        </div>
      </section>

      <section className="layout-container py-10 relative z-10">
        <div className="flex flex-col w-full max-w-6xl mx-auto">
          {projectsMeta.map((meta, index) => (
            <EditorialProject
              key={meta.name}
              meta={meta}
              description={p.projects[index]?.description ?? ''}
              viewProject={p.viewProject}
              index={index}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
