"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const MaisonAtelierPage = () => {
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
              Maison Atelier
            </motion.h1>
            <motion.p variants={variants.fadeInUp} className="text-lg md:text-xl text-white/70 font-light leading-[1.8] tracking-wide max-w-2xl">
              Butikowe doświadczenie e-commerce łączące wysmakowaną kompozycję kampanii modowej z płynnością sprzedaży.
            </motion.p>
          </motion.header>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants.scaleIn}
            className="w-full mb-32 md:mb-40"
          >
            <div className="relative w-full bg-[#1A1C20] rounded-t-[1.5rem] p-3 pb-0 shadow-2xl border border-white/5 border-b-0 hover-lift">
              <div className="aspect-[16/10] bg-[#121212] rounded-t-xl overflow-hidden relative">
                <img 
                  src="https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/0071c8caf9b1e0c7eef64c7629390188.png" 
                  alt="Maison Atelier Hero" 
                  className="w-full h-full object-cover object-top transition-transform duration-[2s] ease-[0.22,1,0.36,1] hover:scale-[1.03] opacity-90 hover:opacity-100"
                />
              </div>
              <div className="w-[106%] -ml-[3%] h-4 bg-[#2A2B30] rounded-b-2xl mt-0 border-t border-white/5 shadow-xl" />
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants.staggerContainer(0.2)}
            className="max-w-3xl mx-auto mb-32 md:mb-40 text-center"
          >
            <motion.h2 variants={variants.fadeInUp} className="text-3xl md:text-5xl font-light mb-8 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>Czystość narracji wizualnej</motion.h2>
            <motion.p variants={variants.fadeInUp} className="text-base md:text-lg font-light leading-[1.8] text-white/70 tracking-wide">
              Struktura całkowicie podporządkowana estetyce. Skupia uwagę na luksusowym produkcie poprzez ogromną dozę światła, precyzyjną ekspozycję detalu oraz cichą nawigację, która nie zakłóca doświadczenia.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants.staggerContainer(0.2)}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-32"
          >
            {["https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/dedb5039e79fe6bacddd266d138f1f29.png", "https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/a1d0b44980698ebe0047b1680a5bdcb2.png"].map((imgSrc, idx) => (
              <motion.div key={idx} variants={variants.scaleIn} className="w-full">
                <div className="rounded-[2rem] overflow-hidden aspect-[4/5] bg-[#121212] shadow-2xl group hover-lift border border-white/5">
                  <img 
                    src={imgSrc} 
                    alt="Fashion Piece Detail" 
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

export default MaisonAtelierPage;