import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Palette, Code, Sparkles, Heart, MessageCircle, Zap, User, ArrowRight } from 'lucide-react';
import AboutSection from '@/components/AboutSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import AnimatedStatistics from '@/components/AnimatedStatistics';
import ChooseYourDirection from '@/components/ChooseYourDirection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Home = () => {
  const navigate = useNavigate();
  
  const { ref: heroRef, isVisible: heroVisible, variants: heroVariants } = useScrollAnimation({ threshold: 0.1 });
  const { ref: servicesRef, isVisible: servicesVisible, variants: servicesVariants } = useScrollAnimation({ threshold: 0.1 });
  const { ref: processRef, isVisible: processVisible, variants: processVariants } = useScrollAnimation({ threshold: 0.1 });
  const { ref: ctaRef, isVisible: ctaVisible, variants: ctaVariants } = useScrollAnimation({ threshold: 0.2 });

  const services = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Design z intencją',
      description: 'Tworzymy tożsamość, która zapada w pamięć. Dbamy o każdy detal, kolor i przestrzeń, łącząc estetykę z celowością.'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Solidne rzemiosło',
      description: 'Budujemy stabilne strony. Zero kompromisów w wydajności i architekturze kodu.'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Spójna marka',
      description: 'Budujemy zaufanie od pierwszych sekund kontaktu z Twoją cyfrową obecnością, projektując niezapomniane emocje.'
    }
  ];

  const processSteps = [
    {
      title: 'Fundament',
      description: 'Słuchamy, pytamy i definiujemy priorytety Twojego projektu.'
    },
    {
      title: 'Koncepcja',
      description: 'Przekładamy strategię na spójną wizję łączącą estetykę z użytecznością.'
    },
    {
      title: 'Budowa',
      description: 'Zmieniamy projekt w sprawne narzędzie, dbając o aspekty techniczne.'
    },
    {
      title: 'Start',
      description: 'Wypuszczamy stronę w świat i wspieramy jej dalszy bezproblemowy rozwój.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Swan Web Studio - Strony premium</title>
        <meta name="description" content="Projektujemy strony premium. Design z intencją, solidne rzemiosło i szczera komunikacja." />
      </Helmet>

      <main className="bg-[#08090C] overflow-x-hidden min-h-screen selection:bg-[#C05775]/30">
        <section ref={heroRef} className="relative overflow-hidden min-h-[90vh] flex items-center bg-[#08090C] border-b border-white/[0.02]">
          <div className="absolute inset-0 bg-[var(--ambient-gradient)] z-0 opacity-80 pointer-events-none" />

          <motion.div 
            animate={{ scale: [1, 1.02, 1], opacity: [0.06, 0.1, 0.06] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] right-[0%] w-[800px] h-[800px] bg-gradient-to-bl from-[#2A1B4B] to-transparent rounded-full blur-[140px] pointer-events-none z-0" 
          />
          
          <div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-t from-[#08090C] to-transparent z-0 pointer-events-none" />
          <div className="bg-noise" />
          
          <div className="layout-container relative z-10 w-full pt-20 pb-24 flex flex-col justify-center items-center text-center">
            <motion.div 
              variants={heroVariants.staggerContainer(0.2, 0.1)}
              initial="hidden"
              animate={heroVisible ? "visible" : "hidden"}
              className="flex flex-col items-center z-20 max-w-4xl"
            >
              <motion.div variants={heroVariants.fadeInUp} className="mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/70 text-xs tracking-[0.2em] uppercase backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C05775]" /> Studio Kreatywne
                </span>
              </motion.div>

              <motion.div variants={heroVariants.fadeInUp} className="mb-10 w-full">
                <h1 className="text-white drop-shadow-sm flex flex-col items-center leading-[1.15]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <span className="text-[3.5rem] sm:text-6xl md:text-7xl font-light text-white/90 block mb-2 tracking-tight">
                    Cyfrowe doświadczenia
                  </span>
                  <span className="text-[3.75rem] sm:text-6xl md:text-7xl text-white block font-medium tracking-tight">
                    klasy premium<span className="text-[#C05775] font-light">.</span>
                  </span>
                </h1>
              </motion.div>
              
              <motion.div variants={heroVariants.fadeInUp} className="w-full max-w-2xl mb-12">
                <p className="text-lg md:text-xl text-white/70 font-light leading-[1.7] tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Tworzymy eleganckie strony internetowe, w których świadomy design i dbałość o detale spotykają się z perfekcyjnym wykonaniem technologicznym.
                </p>
              </motion.div>
              
              <motion.div variants={heroVariants.fadeInUp} className="flex flex-col sm:flex-row gap-5 justify-center w-full relative z-20">
                <Button
                  onClick={() => navigate('/contact')}
                  className="w-full sm:w-auto bg-[#C05775] text-white hover:bg-[#A84560] px-10 py-7 text-[0.8rem] tracking-[0.2em] uppercase font-semibold rounded-full transition-all duration-500 ease-[0.22,1,0.36,1] hover:shadow-[0_10px_25px_rgba(192,87,117,0.2)] hover:-translate-y-1"
                >
                  Rozpocznij projekt
                </Button>
                
                <Button
                  onClick={() => navigate('/portfolio')}
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent text-white border border-white/15 hover:bg-white/[0.04] hover:border-white/30 px-10 py-7 text-[0.8rem] tracking-[0.2em] uppercase font-semibold rounded-full transition-all duration-500 ease-[0.22,1,0.36,1] hover:-translate-y-1"
                >
                  Nasze realizacje
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section ref={servicesRef} className="scroll-mt-24 section-spacing relative overflow-hidden bg-[#08090C]">
          <div className="absolute inset-0 bg-[var(--page-glow)] z-0 opacity-50 pointer-events-none" />
          <div className="layout-container relative z-10">
            <motion.div 
              variants={servicesVariants.staggerContainer(0.2, 0.1)}
              initial="hidden"
              animate={servicesVisible ? "visible" : "hidden"}
              className="grid md:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl mx-auto"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={servicesVariants.scaleIn}
                  className="group bg-[#111216]/80 rounded-[2rem] p-10 border border-white/5 hover-lift relative flex flex-col items-start transition-all duration-500 ease-[0.22,1,0.36,1] animate-float-medium"
                >
                  <div className="mb-8 bg-white/[0.03] group-hover:bg-[#C05775]/10 w-14 h-14 flex items-center justify-center rounded-xl border border-white/5 group-hover:border-[#C05775]/40 group-hover:scale-[1.05] transition-all duration-500 ease-[0.22,1,0.36,1]">
                    {React.cloneElement(service.icon, { className: "text-white/60 group-hover:text-[#C05775] transition-colors duration-500 stroke-[1.5]" })}
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-4 transition-colors duration-500 tracking-wide group-hover:text-white/90" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {service.title}
                  </h3>
                  <div className="text-block">
                    <p className="text-[#E5E7EB] opacity-60 group-hover:opacity-80 font-light text-base leading-[1.7] transition-opacity duration-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <AboutSection />
        
        <ChooseYourDirection />

        <section ref={processRef} className="section-spacing relative bg-[#08090C] border-t border-white/[0.02]">
          <div className="absolute inset-0 bg-[var(--ambient-gradient)] z-0 opacity-40 pointer-events-none" />
          <div className="layout-container relative z-10 max-w-5xl mx-auto">
            <motion.div 
              variants={processVariants.staggerContainer(0.2, 0.1)}
              initial="hidden"
              animate={processVisible ? "visible" : "hidden"}
              className="text-center mb-20"
            >
              <motion.h2 variants={processVariants.fadeInUp} className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Jak pracujemy
              </motion.h2>
              <motion.p variants={processVariants.fadeInUp} className="mt-6 text-lg text-white/60 font-light max-w-2xl mx-auto">
                Sprawdzony i transparentny proces, który gwarantuje doskonały rezultat końcowy.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={processVariants.staggerContainer(0.2, 0.1)}
              initial="hidden"
              animate={processVisible ? "visible" : "hidden"}
              className="grid md:grid-cols-2 gap-8"
            >
              {processSteps.map((item, index) => (
                <motion.div
                  key={index}
                  variants={processVariants.scaleIn}
                  className="flex gap-6 items-start p-10 rounded-[2rem] bg-[#111216]/80 border border-white/5 hover-lift group transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute top-6 right-8 text-4xl font-serif italic text-white/[0.04] group-hover:text-[#C05775]/10 transition-colors duration-500 select-none">
                    0{index + 1}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-medium text-white mb-3 tracking-wide group-hover:text-white/90 transition-colors duration-500" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-[#E5E7EB] opacity-60 group-hover:opacity-80 font-light text-base leading-[1.7] transition-opacity duration-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="section-spacing relative bg-[#08090C] border-t border-white/[0.02]">
          <div className="absolute inset-0 bg-[var(--page-glow)] z-0 opacity-40 pointer-events-none" />
          <div className="layout-container relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Zaufanie klientów
            </h2>
            <TestimonialCarousel />
          </div>
        </section>

        <section ref={ctaRef} className="scroll-mt-24 layout-container section-spacing relative overflow-hidden bg-[#08090C]">
          <motion.div
            variants={ctaVariants.scaleIn}
            initial="hidden"
            animate={ctaVisible ? "visible" : "hidden"}
            className="w-full bg-[#111216] rounded-[3rem] p-12 md:p-24 text-center border border-white/5 relative overflow-hidden group transition-all duration-700 ease-[0.22,1,0.36,1] shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#C05775]/5 via-transparent to-transparent pointer-events-none rounded-[3rem] opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative z-10 text-block mx-auto max-w-3xl flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white mb-8 leading-[1.1] tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Zbudujmy coś <span className="text-[#C05775] font-serif italic">wyjątkowego</span>
              </h2>
              <p className="text-[#E5E7EB] text-lg mb-10 opacity-70 font-light leading-[1.7] tracking-wide max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                Szczera rozmowa o Twoim biznesie w sieci. Bez zbędnego żargonu, w atmosferze partnerstwa.
              </p>
              
              <div className="flex flex-col items-center gap-6">
                <Button
                  onClick={() => navigate('/contact')}
                  className="bg-white text-black hover:bg-[#E5E7EB] px-10 py-7 text-[0.8rem] tracking-[0.2em] uppercase font-bold rounded-full shadow-xl transition-all duration-500 ease-[0.22,1,0.36,1] hover:-translate-y-1"
                >
                  Napisz do nas
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default Home;