"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslation } from '@/hooks/useTranslation';
import { useTheme } from '@/contexts/ThemeContext';
import BrowserMockup from '@/components/mockups/BrowserMockup';

interface ProjectData {
  name: string;
  image: string;
  category: string;
  link: string;
  phoneImage?: string;
  urlDisplay?: string;
}

const featuredProjects: ProjectData[] = [
  {
    name: 'Noir Élan',
    image: '/images/portfolio/noir-elan/noir-elan.jpg',
    category: 'E-commerce / Luksus',
    link: '/noir-elan',
    urlDisplay: 'noirelan.pl',
  },
  {
    name: 'Maison Atelier',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80',
    category: 'E-commerce / Fashion',
    link: '/maison-atelier',
    urlDisplay: 'maisonatelier.pl',
  },
  {
    name: 'AURA Clinic',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    category: 'Medycyna estetyczna',
    link: '/portfolio/aura-clinic',
    urlDisplay: 'auraclinic.pl',
  },
];

const gridProjects: ProjectData[] = [
  { name: 'Ogrodzenia Piła',   image: '/images/portfolio/ogrodzenia-pila/ogrodzenia-pila.png',                                                          category: 'Ogrodzenia / Metaloplastyka', link: '/portfolio/stal-mar' },
  { name: 'Daniel Kanzlei',    image: 'https://api.microlink.io/?url=https%3A%2F%2Fdaniel-kanzlei.de%2Fen&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1200&viewport.height=900', category: 'Biuro rachunkowe',            link: '/portfolio/daniel-kanzlei' },
  { name: 'LINIA Studio',      image: '/images/portfolio/linia-studio/collov-home-design-H-1j_s0dhCw-unsplash.jpg',                                     category: 'Projektowanie wnętrz',        link: '/portfolio/linia-studio-wnetrz' },
  { name: 'Calma Studio',      image: '/images/portfolio/calma-studio/auroom-wellness-FrQ6kiZcBl4-unsplash.jpg',                                         category: 'Wellness & SPA',              link: '/calma-studio' },
  { name: 'Aureline District', image: '/images/portfolio/aureline-district/joel-filipe-RFDP7_80v5A-unsplash.jpg',                                       category: 'Nieruchomości premium',       link: '/aureline-district' },
  { name: 'Smile Studio',      image: '/images/portfolio/smile-studio/katarzyna-zygnerska-YNvApgvL7UQ-unsplash.jpg',                                    category: 'Stomatologia premium',        link: '/portfolio/smile-studio' },
  { name: 'Tessera',           image: '/images/portfolio/tessera/klara-kulikova-yjQDnOhGE34-unsplash.jpg',                                              category: 'Fine dining',                 link: '/portfolio/tessera' },
];

interface FeaturedProjectProps {
  meta: ProjectData;
  description: string;
  viewProject: string;
  index: number;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ meta, description, viewProject, index }) => {
  const anim = useScrollAnimation({ threshold: 0.1 });
  const { theme } = useTheme();
  const isDark = theme === 'dark';
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
          className="relative transition-all duration-700 ease-[0.22,1,0.36,1] group-hover:drop-shadow-[0_40px_60px_rgba(192,87,117,0.18)]"
        >
          <BrowserMockup url={meta.urlDisplay ?? 'swanweb.pl'} rounded="xl">
            <div className="aspect-[16/10] bg-black overflow-hidden relative">
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
          </BrowserMockup>

          {/* Laptop base */}
          <div
            className="w-[108%] -ml-[4%] h-6 rounded-b-[0.65rem] relative"
            style={{
              background: isDark
                ? 'linear-gradient(180deg, #26282D 0%, #1E2024 100%)'
                : 'linear-gradient(180deg, #C0C3CA 0%, #B2B5BD 100%)',
              boxShadow: isDark
                ? '0 8px 28px -4px rgba(0,0,0,0.85)'
                : '0 6px 20px -4px rgba(0,0,0,0.22)',
            }}
          >
            <div
              className="absolute bottom-[5px] left-1/2 -translate-x-1/2 w-14 h-[7px] rounded-sm"
              style={{
                background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.07)',
                border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.09)',
              }}
            />
          </div>
          <div
            className="w-[114%] -ml-[7%] h-[5px] rounded-b-[0.4rem]"
            style={{
              background: isDark ? '#111316' : '#9EA2A9',
              boxShadow: isDark ? '0 12px 30px -4px rgba(0,0,0,0.95)' : '0 8px 24px -4px rgba(0,0,0,0.28)',
            }}
          />

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
        <span
          className="uppercase tracking-[0.2em] text-xs mb-6 font-medium"
          style={{ color: isDark ? '#A1A1AA' : 'rgba(17,17,17,0.48)' }}
        >
          {meta.category}
        </span>
        <h2
          className="text-4xl md:text-5xl font-light mb-6 tracking-tight"
          style={{ color: isDark ? '#ffffff' : '#111111' }}
        >
          <Link
            href={meta.link}
            className="transition-colors duration-500"
            style={{ color: 'inherit' }}
          >
            {meta.name}
          </Link>
        </h2>
        <p
          className="text-base font-light leading-[1.8] tracking-wide mb-10 max-w-sm"
          style={{ fontFamily: 'Inter, sans-serif', color: isDark ? '#D4D4D8' : 'rgba(17,17,17,0.68)' }}
        >
          {description}
        </p>
        <Link
          href={meta.link}
          className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-medium px-6 py-3 rounded-full transition-all duration-500"
          style={{
            color: isDark ? '#ffffff' : '#111111',
            background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
            border: isDark ? '1px solid rgba(255,255,255,0.10)' : '1px solid rgba(0,0,0,0.10)',
          }}
        >
          {viewProject}
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

interface GridProjectProps {
  meta: ProjectData;
  description: string;
  viewProject: string;
}

const GridProject: React.FC<GridProjectProps> = ({ meta, description, viewProject }) => {
  const anim = useScrollAnimation({ threshold: 0.15 });
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const py = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    el.style.setProperty('--px', String(px));
    el.style.setProperty('--py', String(py));
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty('--px', '0');
    el.style.setProperty('--py', '0');
  };

  return (
    <Link
      href={meta.link}
      ref={anim.ref}
      className={`group relative block scroll-animate ${anim.isVisible ? 'is-visible' : ''}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          ['--px' as string]: '0',
          ['--py' as string]: '0',
          ['--mx' as string]: '50%',
          ['--my' as string]: '50%',
          background: '#1A1C20',
        }}
        className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-white/[0.06] transition-all duration-700 ease-[0.22,1,0.36,1] group-hover:border-[#C05775]/25 group-hover:shadow-[0_40px_80px_-25px_rgba(192,87,117,0.18),0_30px_60px_-25px_rgba(0,0,0,0.6)]"
      >
        <div className="absolute inset-0 transition-[clip-path] duration-[1100ms] ease-[0.22,1,0.36,1] [clip-path:inset(8%_round_0.85rem)] group-hover:[clip-path:inset(0%_round_1.25rem)]">
          <img
            src={meta.image}
            alt={meta.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top opacity-60 transition-all duration-[1.4s] ease-[0.22,1,0.36,1] group-hover:opacity-[82%] group-hover:scale-[1.08] will-change-transform"
            style={{
              transform: 'translate3d(calc(var(--px) * 8px), calc(var(--py) * 8px), 0)',
            }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/55 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black via-black/95 to-transparent pointer-events-none" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              'radial-gradient(360px circle at var(--mx) var(--my), rgba(192,87,117,0.16), transparent 50%)',
          }}
        />

        <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 z-10">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8 z-10">
          <span className="block text-[#E5E7EB]/85 uppercase tracking-[0.22em] text-[0.65rem] mb-3 font-medium">
            {meta.category}
          </span>
          <h3
            className="text-2xl md:text-3xl font-light text-white mb-3 tracking-tight transition-colors duration-500 group-hover:text-[#E889A1]"
            style={{ fontFamily: 'DM Sans, sans-serif', textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}
          >
            {meta.name}
          </h3>
          <p
            className="text-sm text-[#D4D4D8]/90 font-light leading-[1.7] line-clamp-2 max-w-md"
            style={{ fontFamily: 'Inter, sans-serif', textShadow: '0 1px 6px rgba(0,0,0,0.85)' }}
          >
            {description}
          </p>
          <span
            className="mt-5 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.22em] uppercase text-white/80 font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {viewProject}
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );
};

const PortfolioView: React.FC = () => {
  const titleAnim = useScrollAnimation();
  const moreAnim = useScrollAnimation({ threshold: 0.2 });
  const tr = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const p = tr.portfolio;

  const featuredDescriptions = p.projects.slice(0, 3);
  const gridDescriptions = p.projects.slice(3);

  return (
    <main className="bg-[#08090C] min-h-screen selection:bg-[#C05775]/30">
      <section
        ref={titleAnim.ref}
        className={`layout-container relative overflow-hidden pb-24 pt-32 md:pt-40 scroll-animate ${titleAnim.isVisible ? 'is-visible' : ''}`}
      >
        <div className="absolute inset-0 bg-[var(--page-glow)] z-0 opacity-80 pointer-events-none" />
        <div className="w-full text-center relative z-10 flex flex-col items-center max-w-4xl mx-auto">
          <span
            className="uppercase tracking-[0.3em] text-sm mb-8 font-medium"
            style={{ color: isDark ? '#A1A1AA' : 'rgba(17,17,17,0.48)' }}
          >
            {p.label}
          </span>
          <h1
            className="text-5xl md:text-7xl lg:text-[6rem] font-light mb-10 tracking-tight leading-[1.1]"
            style={{ color: isDark ? '#ffffff' : '#111111' }}
          >
            {p.heading}
          </h1>
          <p
            className="text-lg md:text-xl font-light max-w-2xl leading-[1.8] tracking-wide"
            style={{ fontFamily: 'Inter, sans-serif', color: isDark ? 'rgba(229,231,235,0.70)' : 'rgba(17,17,17,0.60)' }}
          >
            {p.subheading}
          </p>
        </div>
      </section>

      <section className="layout-container py-10 relative z-10">
        <div className="flex flex-col w-full max-w-6xl mx-auto">
          {featuredProjects.map((meta, index) => (
            <FeaturedProject
              key={meta.name}
              meta={meta}
              description={featuredDescriptions[index]?.description ?? ''}
              viewProject={p.viewProject}
              index={index}
            />
          ))}
        </div>
      </section>

      <section
        ref={moreAnim.ref}
        className={`layout-container pt-12 md:pt-20 pb-32 md:pb-40 relative z-10 scroll-animate ${moreAnim.isVisible ? 'is-visible' : ''}`}
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 md:mb-20">
            <span
              className="uppercase tracking-[0.3em] text-xs mb-6 font-medium"
              style={{ color: isDark ? '#A1A1AA' : 'rgba(17,17,17,0.48)' }}
            >
              {p.moreLabel ?? '— Pozostałe realizacje'}
            </span>
            <h2
              className="text-3xl md:text-5xl font-light tracking-tight leading-[1.15] max-w-2xl"
              style={{ color: isDark ? '#ffffff' : '#111111' }}
            >
              {p.moreHeading ?? 'Mniejsze formaty, ten sam standard.'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {gridProjects.map((meta, index) => (
              <GridProject
                key={meta.name}
                meta={meta}
                description={gridDescriptions[index]?.description ?? ''}
                viewProject={p.viewProject}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioView;
