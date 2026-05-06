"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRouter } from "next/navigation";
import { Palette, Code, Sparkles, MessageCircle, Wand2, Target } from 'lucide-react';
import AboutSection from '@/components/AboutSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ChooseYourDirection from '@/components/ChooseYourDirection';
import AnimatedStatistics from '@/components/AnimatedStatistics';
import FeaturedProjects from '@/components/FeaturedProjects';
import HeroCard from '@/components/HeroCard';
import MouseSpotlight from '@/components/MouseSpotlight';
import MorphingWord from '@/components/MorphingWord';
import MarqueeBand from '@/components/MarqueeBand';
import ParticleField from '@/components/ParticleField';
import ServiceCard from '@/components/ServiceCard';
import ProcessTimeline from '@/components/ProcessTimeline';
import ClientStrip from '@/components/ClientStrip';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslation } from '@/hooks/useTranslation';
import { useTheme } from '@/contexts/ThemeContext';

const HomeView = () => {
  const router = useRouter();
  const tr = useTranslation();
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => { setMounted(true); }, []);

  const { ref: heroRef, isVisible: heroVisible, variants: heroVariants } = useScrollAnimation({ threshold: 0.1 });
  const { ref: servicesRef, isVisible: servicesVisible, variants: servicesVariants } = useScrollAnimation({ threshold: 0.1 });
  const { ref: ctaRef, isVisible: ctaVisible, variants: ctaVariants } = useScrollAnimation({ threshold: 0.2 });

  const serviceIcons = [
    <Palette className="w-6 h-6" />,
    <Code className="w-6 h-6" />,
    <Sparkles className="w-6 h-6" />,
  ];

  return (
    <main className="bg-[#08090C] overflow-x-hidden min-h-screen selection:bg-[#C05775]/30">
      <section ref={heroRef} className="relative overflow-hidden min-h-[100svh] flex items-center border-b border-white/[0.02]">
        {(!mounted || theme === 'dark') && (
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 90% 70% at 50% 0%, #11131C 0%, #0A0B12 35%, #07080B 75%, #08090C 100%)",
            }}
          />
        )}
        <div className="absolute inset-0 bg-[var(--ambient-gradient)] z-0 opacity-90 pointer-events-none" />

        <div
          className="absolute top-[-15%] right-[-10%] w-[900px] h-[900px] bg-gradient-to-bl from-[#3A2360] via-[#2A1B4B] to-transparent rounded-full blur-[160px] pointer-events-none z-0 opacity-[0.13]"
          style={{ willChange: 'auto' }}
        />
        <div
          className="absolute bottom-[-25%] left-[-15%] w-[800px] h-[800px] bg-gradient-to-tr from-[#C05775]/30 to-transparent rounded-full blur-[180px] pointer-events-none z-0 opacity-[0.09]"
          style={{ willChange: 'auto' }}
        />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="lg:-translate-x-[12vw] xl:-translate-x-[14vw] -mt-4 md:-mt-8">
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              animate={heroVisible ? { opacity: 1, scale: 1 } : { opacity: 0 }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className="swan-watermark block select-none whitespace-nowrap opacity-30 sm:opacity-50 md:opacity-80 lg:opacity-100"
                style={{ fontSize: "clamp(6rem, 26vw, 34rem)" }}
                aria-hidden="true"
              >
                SWAN
              </span>
            </motion.div>
          </div>
        </div>

        {(!mounted || theme === 'dark') && (
          <div className="absolute bottom-0 inset-x-0 h-[35%] bg-gradient-to-t from-[#08090C] via-[#08090C]/80 to-transparent z-0 pointer-events-none" />
        )}
        <ParticleField className="opacity-[0.55]" density={0.00007} linkDistance={140} />
        <MouseSpotlight size={620} color="rgba(192,87,117,0.14)" />
        <div className="bg-noise" />

        <div className="layout-container-wide relative z-10 w-full pt-28 md:pt-36 pb-24 md:pb-32">
          <motion.div
            variants={heroVariants.staggerContainer(0.18, 0.05)}
            initial="hidden"
            animate={heroVisible ? "visible" : "hidden"}
            className="grid lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-28 items-center"
          >
            <div className="lg:col-span-7 flex flex-col items-start">
              <motion.div variants={heroVariants.fadeInUp} className="mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.09] text-white/70 text-[0.65rem] tracking-[0.25em] uppercase backdrop-blur-md">
                  <span className="relative flex w-1.5 h-1.5">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-[#C05775] opacity-60 animate-ping" />
                    <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#C05775]" />
                  </span>
                  {tr.hero.badge}
                </span>
              </motion.div>

              <motion.h1
                variants={heroVariants.fadeInUp}
                className="text-white leading-[0.98] mb-10 tracking-[-0.035em]"
              >
                <span className="block text-[3.25rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-light text-white/95">
                  {tr.hero.line1}
                </span>
                <span className="block text-[3.25rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-light text-white/95">
                  <MorphingWord
                    words={tr.hero.morphWords}
                    intervalMs={3400}
                    accentColor="#E889A1"
                  />
                </span>
                <span className="block text-[3.25rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-medium text-white mt-2">
                  {tr.hero.line3}<span className="text-[#C05775]">.</span>
                </span>
              </motion.h1>

              <motion.p
                variants={heroVariants.fadeInUp}
                className="text-base md:text-lg text-white/55 font-light leading-[1.75] tracking-wide max-w-xl mb-12"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {tr.hero.subtitle}
              </motion.p>

              <motion.div
                variants={heroVariants.fadeInUp}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-20"
              >
                <Button
                  onClick={() => router.push('/contact')}
                  className="group relative overflow-hidden w-full sm:w-auto bg-[#C05775] text-white hover:bg-[#CB6280] px-9 py-6 text-[0.72rem] tracking-[0.22em] uppercase font-semibold rounded-full transition-all duration-500 ease-[0.22,1,0.36,1] hover:shadow-[0_0_45px_-8px_rgba(192,87,117,0.65)] hover:-translate-y-0.5 hover:scale-[1.02]"
                >
                  <span className="relative z-10">{tr.hero.cta1}</span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                </Button>

                <Button
                  onClick={() => router.push('/portfolio')}
                  variant="outline"
                  className="group w-full sm:w-auto bg-transparent text-white/85 border border-white/15 hover:bg-white/[0.03] hover:border-[#C05775]/40 hover:text-white px-9 py-6 text-[0.72rem] tracking-[0.22em] uppercase font-medium rounded-full transition-all duration-500 ease-[0.22,1,0.36,1] hover:-translate-y-0.5 hover:shadow-[0_0_25px_-8px_rgba(192,87,117,0.3)]"
                >
                  {tr.hero.cta2}
                </Button>
              </motion.div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              <HeroCard
                className="sm:col-span-2"
                icon={MessageCircle}
                title={tr.heroCards[0].title}
                description={tr.heroCards[0].description}
                entranceDelay={0.45}
                floatDelay={0}
              />
              <HeroCard
                icon={Wand2}
                title={tr.heroCards[1].title}
                description={tr.heroCards[1].description}
                entranceDelay={0.6}
                floatDelay={0.8}
              />
              <HeroCard
                icon={Target}
                title={tr.heroCards[2].title}
                description={tr.heroCards[2].description}
                entranceDelay={0.75}
                floatDelay={1.6}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <MarqueeBand
        items={['Estetyka', 'Strategia', 'Rzemiosło', 'Detal', 'Charakter', 'Finezja', 'Tempo', 'Spokój']}
        speedSec={42}
      />

      <section ref={servicesRef} className="scroll-mt-24 section-spacing relative overflow-hidden bg-[#08090C]">
        <div className="absolute inset-0 bg-[var(--page-glow)] z-0 opacity-50 pointer-events-none" />
        <div className="layout-container relative z-10">
          <motion.div
            variants={servicesVariants.staggerContainer(0.2, 0.1)}
            initial="hidden"
            animate={servicesVisible ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl mx-auto"
          >
            {tr.homeServices.map((service, index) => (
              <motion.div key={index} variants={servicesVariants.scaleIn}>
                <ServiceCard
                  icon={serviceIcons[index]}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatedStatistics />
      <ClientStrip />
      <AboutSection />
      <ChooseYourDirection />
      <FeaturedProjects />

      <ProcessTimeline />

      <section className="section-spacing relative bg-[#08090C] border-t border-white/[0.02]">
        <div className="absolute inset-0 bg-[var(--page-glow)] z-0 opacity-40 pointer-events-none" />
        <div className="layout-container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight">
            {tr.testimonials.heading}
          </h2>
          <TestimonialCarousel />
        </div>
      </section>

      <section id="kontakt" ref={ctaRef} className="scroll-mt-24 layout-container section-spacing relative overflow-hidden bg-[#08090C]">
        <motion.div
          variants={ctaVariants.scaleIn}
          initial="hidden"
          animate={ctaVisible ? "visible" : "hidden"}
          className="relative w-full bg-[#0E1016] rounded-[3rem] p-12 md:p-24 text-center border border-white/[0.07] overflow-hidden group transition-all duration-700 ease-[0.22,1,0.36,1] shadow-[0_60px_140px_-40px_rgba(0,0,0,0.7),0_0_0_1px_rgba(192,87,117,0.06)_inset]"
        >
          <ParticleField className="opacity-[0.45]" density={0.00005} linkDistance={120} interactive={false} />

          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[3rem] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 10%, rgba(192,87,117,0.16) 0%, transparent 60%)",
            }}
          />

          <motion.div
            aria-hidden="true"
            animate={{ opacity: [0.4, 0.85, 0.4] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-[3rem] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 45% at 50% 100%, rgba(157,91,139,0.12) 0%, transparent 65%)",
            }}
          />

          <div className="relative z-10 text-block mx-auto max-w-3xl flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white mb-8 leading-[1.1] tracking-tight">
              {tr.cta.heading1} <span className="text-[#C05775] italic font-light">{tr.cta.heading2}</span>
            </h2>
            <p className="text-[#E5E7EB] text-lg mb-10 opacity-70 font-light leading-[1.7] tracking-wide max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              {tr.cta.paragraph}
            </p>

            <div className="relative flex flex-col items-center gap-6">
              <motion.div
                aria-hidden="true"
                animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.04, 1] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C05775]/40 via-[#E889A1]/35 to-[#9D5B8B]/40 blur-[28px] -z-10 pointer-events-none"
              />
              <Button
                onClick={() => router.push('/contact')}
                className="relative bg-white text-black hover:bg-[#E5E7EB] px-10 py-7 text-[0.8rem] tracking-[0.2em] uppercase font-bold rounded-full shadow-[0_18px_60px_-12px_rgba(0,0,0,0.7),0_0_0_1px_rgba(192,87,117,0.18)_inset] transition-all duration-500 ease-[0.22,1,0.36,1] hover:-translate-y-1 hover:scale-[1.02]"
              >
                {tr.cta.button}
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default HomeView;
