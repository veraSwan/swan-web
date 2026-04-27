"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const NoirElanPage = () => {
  const router = useRouter();
  const { variants } = useScrollAnimation({ threshold: 0.1 });

  return (
    <>      <main className="min-h-screen bg-[#08090C] text-white pt-32 pb-40 overflow-x-hidden">
        <div className="absolute inset-0 bg-[var(--page-glow)] z-0 opacity-80 pointer-events-none" />

        <article className="layout-container relative z-10 max-w-5xl mx-auto">
          <motion.header 
            initial="hidden"
            animate="visible"
            variants={variants.staggerContainer(0.2)}
            className="mb-24 text-center flex flex-col items-center"
          >
            <motion.div variants={variants.fadeInUp} className="w-full mb-6">
              <span className="text-[#A1A1AA] uppercase tracking-[0.3em] text-xs font-medium">E-commerce / Luksus</span>
            </motion.div>
            <motion.h1 
              variants={variants.fadeInUp}
              className="text-5xl md:text-7xl lg:text-[6rem] font-light text-white mb-8 leading-[1.1] tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Noir Élan
            </motion.h1>
            <motion.p variants={variants.fadeInUp} className="text-lg md:text-xl text-white/70 font-light leading-[1.8] tracking-wide max-w-2xl">
              Przełożenie głębi i aury luksusowych zapachów na cyfrowe płótno z zachowaniem minimalizmu.
            </motion.p>
          </motion.header>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants.scaleIn}
            className="w-full mb-32 md:mb-40 flex justify-center"
          >
            {/* Phone Mockup Frame */}
            <div className="relative w-[320px] sm:w-[380px] bg-[#1A1C20] rounded-[3rem] p-3 shadow-2xl border border-white/5 hover-lift transition-all duration-700">
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                 <div className="w-32 h-6 bg-[#1A1C20] rounded-b-[1rem]" />
              </div>
              <div className="aspect-[9/19] bg-[#121212] rounded-[2.25rem] overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1601193908723-7bd3d509224d" 
                  alt="Noir Elan Mobile" 
                  className="w-full h-full object-cover object-center transition-transform duration-[2s] ease-[0.22,1,0.36,1] hover:scale-[1.03] opacity-90 hover:opacity-100"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants.staggerContainer(0.2)}
            className="max-w-3xl mx-auto mb-32 md:mb-40 text-center"
          >
            <motion.h2 variants={variants.fadeInUp} className="text-3xl md:text-5xl font-light mb-8 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>Tajemnica w interfejsie</motion.h2>
            <motion.p variants={variants.fadeInUp} className="text-base md:text-lg font-light leading-[1.8] text-white/70 tracking-wide">
              Strona została zaprogramowana jako odczuwalne doświadczenie. Subtelne gradienty, powolne zanikanie elementów, przestrzeń wykreowana wyłącznie dla jednego produktu — budują luksus, którego nie trzeba tłumaczyć.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants.staggerContainer(0.2)}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-32"
          >
            {["https://images.unsplash.com/photo-1650432506678-d187258c0900", "https://images.unsplash.com/photo-1598532108985-5413981e30b7"].map((imgSrc, idx) => (
              <motion.div key={idx} variants={variants.scaleIn} className="w-full">
                <div className="rounded-[2rem] overflow-hidden aspect-[4/5] bg-[#121212] shadow-2xl group hover-lift border border-white/5">
                  <img 
                    src={imgSrc} 
                    alt="Perfume Detail" 
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-[0.22,1,0.36,1] group-hover:scale-[1.03] opacity-80 group-hover:opacity-100"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.nav 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pt-10 border-t border-white/10 flex justify-center"
          >
            <Button
              variant="outline"
              onClick={() => router.push('/portfolio')}
              className="bg-transparent border border-white/15 text-white hover:bg-white/5 px-10 py-7 uppercase tracking-[0.2em] text-xs font-medium rounded-full transition-all duration-500 group hover:-translate-y-1"
            >
              <ArrowLeft className="w-4 h-4 mr-3 group-hover:-translate-x-1 transition-transform" />
              Powrót do portfolio
            </Button>
          </motion.nav>

        </article>
      </main>
    </>
  );
};

export default NoirElanPage;