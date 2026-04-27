"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref, isVisible, variants } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section ref={ref} className="bg-[#08090C] relative overflow-hidden py-24 md:py-32 border-t border-white/[0.02]">
        <div className="absolute inset-0 bg-[var(--page-glow)] z-0 opacity-60 pointer-events-none" />
        
        <div className="layout-container relative z-10 max-w-5xl mx-auto">
            <motion.div 
                variants={variants.staggerContainer(0.2, 0.1)}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="flex flex-col items-center text-center space-y-10"
            >
                <motion.span variants={variants.fadeInUp} className="text-[#A1A1AA] uppercase tracking-[0.3em] text-xs font-medium">
                  Nasza intencja
                </motion.span>
                <motion.h2 
                  variants={variants.fadeInUp}
                  className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight drop-shadow-sm max-w-3xl" 
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                    Nie interesuje nas wtórna produkcja. Projektujemy rzadkie doświadczenia.
                </motion.h2>
                
                <motion.div 
                  variants={variants.fadeInUp}
                  className="text-block mx-auto max-w-2xl" 
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    <p className="text-lg md:text-xl text-[#E5E7EB] opacity-75 font-light leading-[1.8] tracking-wide mb-12">
                      Jesteśmy studiem, w którym nieszablonowe rzemiosło spotyka się ze świadomą strategią. Szukamy autentyczności i trwałej jakości w każdym projekcie, bez ulegania chwilowym trendom.
                    </p>
                </motion.div>

                <motion.div variants={variants.staggerContainer(0.2, 0.2)} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
                  <motion.div variants={variants.fadeInUp} className="bg-[#111216]/60 p-8 rounded-[2rem] border border-white/5 hover-lift text-left">
                    <span className="text-[#C05775] font-serif italic text-2xl mb-4 block">01</span>
                    <h3 className="text-xl text-white font-medium mb-3 tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>Kontekst</h3>
                    <p className="text-sm font-light text-white/60 leading-[1.7]">Forma musi wynikać z treści. Projektujemy zawsze w oparciu o unikalny charakter Twojej marki.</p>
                  </motion.div>
                  <motion.div variants={variants.fadeInUp} className="bg-[#111216]/60 p-8 rounded-[2rem] border border-white/5 hover-lift text-left">
                    <span className="text-[#C05775] font-serif italic text-2xl mb-4 block">02</span>
                    <h3 className="text-xl text-white font-medium mb-3 tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>Dialog</h3>
                    <p className="text-sm font-light text-white/60 leading-[1.7]">Stawiamy na jasną komunikację bez pośredników. Jesteśmy partnerami w procesie twórczym.</p>
                  </motion.div>
                  <motion.div variants={variants.fadeInUp} className="bg-[#111216]/60 p-8 rounded-[2rem] border border-white/5 hover-lift text-left">
                    <span className="text-[#C05775] font-serif italic text-2xl mb-4 block">03</span>
                    <h3 className="text-xl text-white font-medium mb-3 tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>Jakość</h3>
                    <p className="text-sm font-light text-white/60 leading-[1.7]">Tworzymy długowieczne rozwiązania technologiczne. Mniej, ale zdecydowanie lepiej.</p>
                  </motion.div>
                </motion.div>
            </motion.div>
        </div>
    </section>
  );
};

export default AboutSection;