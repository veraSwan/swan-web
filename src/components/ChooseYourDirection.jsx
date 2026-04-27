import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, User, Building, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ChooseYourDirection = () => {
  const navigate = useNavigate();
  const { ref, isVisible, variants } = useScrollAnimation({ threshold: 0.1 });

  const directions = [
    {
      id: 1,
      title: "Strona usługowa",
      description: "Przejrzysta i elegancka obecność online, która buduje profesjonalny wizerunek.",
      icon: Briefcase
    },
    {
      id: 2,
      title: "Marka osobista",
      description: "Wysmakowany, editorialowy projekt wzmacniający Twój autorytet.",
      icon: User
    },
    {
      id: 3,
      title: "Nieruchomości",
      description: "Ekskluzywna przestrzeń cyfrowa eksponująca inwestycje premium.",
      icon: Building
    },
    {
      id: 4,
      title: "Sklep online",
      description: "Butikowe doświadczenie e-commerce nastawione na wysoką estetykę.",
      icon: ShoppingBag
    }
  ];

  return (
    <section ref={ref} className="section-spacing relative bg-[#08090C] py-24 md:py-32 border-t border-white/[0.02]">
      <div className="absolute inset-0 bg-[var(--page-glow)] z-0 opacity-60 pointer-events-none transition-opacity duration-1000" />
      
      <div className="layout-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <motion.div 
            variants={variants.staggerContainer(0.2)}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="w-full lg:w-5/12 flex flex-col items-start text-left z-20"
          >
            <div className="max-w-[450px]">
              <motion.h2 
                variants={variants.fadeInUp}
                className="text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] font-bold text-white mb-8 tracking-tight drop-shadow-sm" 
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Co tworzymy
              </motion.h2>
              
              <motion.p 
                variants={variants.fadeInUp}
                className="text-[#E5E7EB] opacity-70 text-lg font-light mb-10 leading-[1.7] tracking-wide" 
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Projektujemy dedykowane przestrzenie dla wybranych branż. Każda koncepcja łączy unikalną estetykę z bezkompromisową funkcjonalnością.
              </motion.p>

              <motion.div variants={variants.fadeInUp}>
                <Button
                  onClick={() => navigate('/portfolio')}
                  className="bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40 px-10 py-7 text-[0.8rem] tracking-[0.2em] uppercase font-semibold rounded-full transition-all duration-500 ease-[0.22,1,0.36,1] hover:-translate-y-1 group"
                >
                  Odkryj możliwości <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={variants.staggerContainer(0.15, 0.2)}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="w-full lg:w-7/12 z-20"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {directions.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div key={card.id} variants={variants.scaleIn} className="h-full">
                    <div 
                      className="h-full rounded-[2rem] p-8 bg-[#111216]/80 border border-white/5 transition-all duration-500 ease-[0.22,1,0.36,1] group hover-lift flex flex-col items-start text-left relative overflow-hidden animate-float-medium"
                    >
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/5 bg-white/[0.03] transition-all duration-500 ease-[0.22,1,0.36,1] mb-6 shrink-0 group-hover:border-[#C05775]/40 group-hover:bg-[#C05775]/10 group-hover:scale-105">
                        <Icon className="w-6 h-6 text-white/60 transition-colors duration-500 stroke-[1.5] group-hover:text-[#C05775]" />
                      </div>
                      <h3 className="font-medium text-xl mb-3 tracking-wide text-white/90 group-hover:text-white transition-colors duration-500" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {card.title}
                      </h3>
                      <p className="text-sm font-light leading-[1.7] text-[#E5E7EB] opacity-60 group-hover:opacity-80 transition-opacity duration-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ChooseYourDirection;