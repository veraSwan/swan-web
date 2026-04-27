import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Portfolio = () => {
  const navigate = useNavigate();
  const titleAnim = useScrollAnimation();

  const projects = [
    {
      name: 'Noir Élan',
      image: 'https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/47b5652ee02da20ef7e0a2e8a2b19e94.png',
      description: 'Luksusowa marka perfum niszowych. Minimalizm, elegancja i tajemniczość w świecie e-commerce.',
      category: 'E-commerce / Luksus',
      link: '/noir-elan'
    },
    {
      name: 'Maison Atelier',
      image: 'https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/0071c8caf9b1e0c7eef64c7629390188.png',
      description: 'Luksusowy sklep modowy inspirowany estetyką editorial i czystą formą.',
      category: 'E-commerce / Fashion',
      link: '/maison-atelier'
    },
    {
      name: 'AURA Clinic',
      image: 'https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/62a1292f8cade28ede176ba9c66f5607.png',
      description: 'Nowoczesna przestrzeń dla kliniki medycyny estetycznej. Spokój i naturalny efekt.',
      category: 'Medycyna estetyczna',
      link: '/portfolio/aura-clinic'
    },
    {
      name: 'LINIA Studio',
      image: 'https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/c76ba9fd61e35ebe713826728483816e.png',
      description: 'Autorskie studio projektowania wnętrz oparte na idealnych proporcjach.',
      category: 'Projektowanie wnętrz',
      link: '/portfolio/linia-studio-wnetrz'
    },
    {
      name: 'Calma Studio',
      image: 'https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/729b57238098fd92f310dc04dcb1867f.png',
      description: 'SPA zaprojektowane w duchu slow life i dogłębnego, świadomego relaksu.',
      category: 'Wellness & SPA',
      link: '/calma-studio'
    },
    {
      name: 'Aureline District',
      image: 'https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/e7f12d1666d12ef5043f14e68faa15d5.png',
      description: 'Inwestycja klasy premium zaprezentowana poprzez majestatyczną typografię.',
      category: 'Nieruchomości',
      link: '/aureline-district'
    }
  ];

  const EditorialProject = ({ project, index }) => {
    const anim = useScrollAnimation({ threshold: 0.1 });
    const isEven = index % 2 === 0;

    return (
      <div
        ref={anim.ref}
        className={`w-full flex flex-col lg:flex-row gap-16 lg:gap-32 items-center justify-between mb-40 md:mb-56 scroll-animate ${anim.isVisible ? 'is-visible' : ''} ${isEven ? '' : 'lg:flex-row-reverse'}`}
      >
        <div 
          className="w-full lg:w-[65%] relative group cursor-pointer"
          onClick={() => navigate(project.link)}
        >
          {/* Laptop Mockup Wrapper */}
          <div className="relative w-full bg-[#1A1C20] rounded-t-[1.5rem] p-2 sm:p-3 pb-0 shadow-2xl border border-white/5 border-b-0 hover-lift transition-all duration-700 ease-[0.22,1,0.36,1]">
            <div className="aspect-[16/10] bg-black rounded-t-xl overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover object-top transition-transform duration-[2s] ease-[0.22,1,0.36,1] group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000" />
            </div>
            <div className="w-[110%] -ml-[5%] h-3 sm:h-4 bg-[#2A2B30] rounded-b-2xl mt-0 border-t border-white/5 shadow-xl relative z-10" />
          </div>
        </div>
        
        <div className="w-full lg:w-[35%] flex flex-col items-start text-left">
          <span className="text-[#A1A1AA] uppercase tracking-[0.2em] text-xs mb-6 font-medium">
            {project.category}
          </span>
          <h2 
            className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight cursor-pointer hover:text-[#C05775] transition-colors duration-500" 
            style={{ fontFamily: 'Playfair Display, serif' }}
            onClick={() => navigate(project.link)}
          >
            {project.name}
          </h2>
          <p className="text-base text-[#D4D4D8] font-light leading-[1.8] tracking-wide mb-10 max-w-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            {project.description}
          </p>
          <button 
            onClick={() => navigate(project.link)}
            className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-white font-medium hover:text-[#C05775] transition-colors duration-500 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full border border-white/10"
          >
            Prezentacja
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Portfolio - Swan Web Studio</title>
        <meta name="description" content="Ekskluzywne realizacje cyfrowe." />
      </Helmet>

      <main className="bg-[#08090C] min-h-screen selection:bg-[#C05775]/30">
        <section ref={titleAnim.ref} className={`layout-container relative overflow-hidden pb-32 pt-32 md:pt-40 scroll-animate ${titleAnim.isVisible ? 'is-visible' : ''}`}>
          <div className="absolute inset-0 bg-[var(--page-glow)] z-0 opacity-80 pointer-events-none" />
          
          <div className="w-full text-center relative z-10 flex flex-col items-center max-w-4xl mx-auto">
            <span className="text-[#A1A1AA] uppercase tracking-[0.3em] text-sm mb-8 font-medium">
              Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-light text-white mb-10 tracking-tight leading-[1.1]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Odkryj jakość.
            </h1>
            <p className="text-lg md:text-xl text-[#E5E7EB] opacity-70 font-light max-w-2xl leading-[1.8] tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
              Zbiór cyfrowych przestrzeni zaprojektowanych z myślą o bezkompromisowej estetyce i niezawodnym doświadczeniu użytkownika.
            </p>
          </div>
        </section>

        <section className="layout-container py-10 relative z-10">
          <div className="flex flex-col w-full max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <EditorialProject key={index} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;