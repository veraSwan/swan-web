"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from "next/navigation";
import { Layout, Globe, Palette } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Services = () => {
  const router = useRouter();
  const heroAnim = useScrollAnimation();

  const mainServices = [
    {
      icon: <Layout className="w-6 h-6 text-white/80 group-hover:text-white" />,
      title: 'Projektowanie stron',
      price: 'od 700 PLN',
      description: [
        'Nowoczesna i zoptymalizowana przestrzeń cyfrowa.',
        'Skupiamy się na czytelności i designie.'
      ],
      features: [
        'Projekt graficzny',
        'Pełna responsywność',
        'Wysoka wydajność'
      ]
    },
    {
      icon: <Globe className="w-6 h-6 text-[#C05775]" />,
      title: 'Landing page',
      price: 'od 900 PLN',
      description: [
        'Jedna strona, jeden konkretny cel.',
        'Projektujemy lekkie strony nastawione na konwersję.'
      ],
      features: [
        'Struktura sprzedażowa',
        'Zwiększona szybkość',
        'Optymalizacja treści'
      ],
      isPopular: true
    },
    {
      icon: <Palette className="w-6 h-6 text-white/80 group-hover:text-white" />,
      title: 'Strony firmowe',
      price: 'od 1500 PLN',
      description: [
        'Rozbudowana wizytówka Twojego biznesu.',
        'Prezentacja pełnego spektrum oferty w sieci.'
      ],
      features: [
        'Wielostronicowość',
        'Podstawowe SEO',
        'Integracje zewnętrzne'
      ]
    },
  ];

  const ServiceCard = ({ service, index }) => {
    const anim = useScrollAnimation();
    return (
      <div
        ref={anim.ref}
        className={`rounded-[2rem] p-10 border transition-all duration-500 flex flex-col group relative overflow-hidden scroll-animate ${anim.isVisible ? 'is-visible' : ''} ${
          service.isPopular 
            ? 'border-[#C05775]/40 shadow-[0_10px_40px_-10px_rgba(192,87,117,0.15)] z-10 bg-[#14151A]' 
            : 'border-white/5 hover:border-white/15 hover:-translate-y-2 bg-[#111216]/60 hover-lift'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        {service.isPopular && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#C05775] text-white text-[0.65rem] font-bold px-4 py-1.5 rounded-b-lg uppercase tracking-widest shadow-lg z-20">
            Polecany wybór
          </div>
        )}
        
        <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 inline-flex mb-8 w-fit group-hover:scale-[1.05] transition-transform duration-500 animate-float-medium">
          {service.icon}
        </div>
        <div className="text-block flex-grow mb-8">
          <h2 className="text-2xl font-medium text-white mb-2 tracking-wide transition-colors group-hover:text-white/90" style={{ fontFamily: 'Playfair Display, serif' }}>
            {service.title}
          </h2>
          <div className="text-xl font-light text-[#E5E7EB] mb-6 tracking-wide" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            {service.price}
          </div>
          
          <div className="space-y-2">
            {service.description.map((desc, idx) => (
              <p key={idx} className="text-[#E5E7EB] opacity-60 font-light text-sm leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>
                {desc}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-auto border-t border-white/5 pt-6">
          <ul className="space-y-4 mb-10">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className={`w-1.5 h-1.5 rounded-full ${service.isPopular ? 'bg-[#C05775]' : 'bg-white/30'}`} />
                <span className="text-[#E5E7EB] text-sm opacity-70 font-light tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          <Button
            onClick={() => router.push('/contact')}
            className={`w-full transition-transform duration-500 uppercase tracking-widest text-xs py-6 rounded-full hover:-translate-y-1 ${service.isPopular ? 'bg-[#C05775] text-white hover:bg-[#A84560]' : 'bg-transparent border border-white/15 text-white hover:bg-white/5'}`}
          >
            Zapytaj o projekt
          </Button>
        </div>
      </div>
    );
  };

  return (
    <>      <main className="bg-[#08090C] overflow-x-hidden min-h-screen selection:bg-[#C05775]/30">
        <section ref={heroAnim.ref} className={`layout-container section-spacing relative overflow-hidden pb-32 pt-32 scroll-animate ${heroAnim.isVisible ? 'is-visible' : ''}`}>
          <div className="absolute inset-0 bg-[var(--page-glow)] z-0 opacity-80 pointer-events-none" />
          
          <div className="text-center mb-24 relative z-10 flex flex-col items-center">
            <span className="text-[#A1A1AA] uppercase tracking-[0.3em] text-sm mb-6 font-medium">Usługi</span>
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-light text-white mb-8 tracking-tight leading-[1.1]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Przemyślane rozwiązania
            </h1>
            <p className="text-lg md:text-xl text-[#E5E7EB] opacity-70 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Kompaktowe i dopracowane środowiska cyfrowe, idealnie dostrojone do Twojej strategii.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 w-full max-w-[1100px] mx-auto relative z-10">
            {mainServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;