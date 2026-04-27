"use client";
import React from 'react';
import { motion } from 'framer-motion';

const SelectedProjectSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="layout-container section-spacing relative z-10 bg-[#0E0F12]">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="flex flex-col gap-16"
      >
        {/* Section Header */}
        <motion.header variants={fadeInUp} className="max-w-3xl">
          <span className="overline-label text-white/50 mb-4 block">Wybrane realizacje</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Aureline District
          </h2>
          <p className="text-lg md:text-xl text-[#E5E7EB] opacity-80 font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Strona internetowa dla dewelopera premium, zaprojektowana w oparciu o minimalizm, typografię i doświadczenie użytkownika.
          </p>
        </motion.header>

        {/* Two Column Layout (65% / 35%) */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_1fr] gap-8 lg:gap-12">
          
          {/* Left Side (65%) */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-5">
            <div className="overflow-hidden bg-[#131418] rounded-sm relative aspect-[4/5] md:aspect-[3/4] lg:aspect-auto lg:h-[800px] group">
              <img 
                src="https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/b4aeea701549a1179348240aa0919b1d.jpg" 
                alt="Aureline District - Main Building" 
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="text-sm font-light tracking-wide text-white/60 space-y-1" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p className="text-white/90 font-medium">Aureline District</p>
              <p>→ Strona dla dewelopera premium</p>
            </div>
          </motion.div>

          {/* Right Side (35%) */}
          <div className="flex flex-col gap-12 lg:gap-16">
            
            {/* Top Detail Image */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-5">
              <div className="overflow-hidden bg-[#131418] rounded-sm relative aspect-square group">
                <img 
                  src="https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/82cdce142c77c96e84d414dbb8909751.jpg" 
                  alt="Aureline District - Architectural Detail" 
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="text-sm font-light tracking-wide text-white/60 space-y-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                <p className="text-white/90 font-medium">Aureline District</p>
                <p>→ Architektura & detale</p>
              </div>
            </motion.div>

            {/* Bottom Interior Image */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-5 mt-auto">
              <div className="overflow-hidden bg-[#131418] rounded-sm relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] group">
                <img 
                  src="https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/6974b3acd3ed0a4a054afc9435448558.jpg" 
                  alt="Aureline District - Interior" 
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="text-sm font-light tracking-wide text-white/60 space-y-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                <p className="text-white/90 font-medium">Aureline District</p>
                <p>→ Wnętrze & doświadczenie</p>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SelectedProjectSection;