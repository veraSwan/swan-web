"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Hammer, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/hooks/useTranslation';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = (staggerChildren = 0.18, delayChildren = 0.05) => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

const valueIcons = [MessageSquare, Hammer, Target];

const AboutView: React.FC = () => {
  const router = useRouter();
  const tr = useTranslation();
  const a = tr.about;

  return (
    <main className="overflow-x-hidden bg-[#08090C]">
      {/* HERO */}
      <section className="relative overflow-hidden pt-20 md:pt-28 pb-24 md:pb-32">
        <div className="absolute inset-0 z-0 pointer-events-none bg-[#08090C]" />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 45% at 50% 0%, rgba(58, 35, 96, 0.08) 0%, transparent 65%)' }}
        />
        <div
          aria-hidden="true"
          className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-bl from-[#3A2360] via-[#2A1B4B] to-transparent rounded-full blur-[180px] pointer-events-none z-0 opacity-[0.06]"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[-25%] left-[-15%] w-[600px] h-[600px] bg-gradient-to-tr from-[#C05775]/25 to-transparent rounded-full blur-[200px] pointer-events-none z-0 opacity-[0.045]"
        />

        <div className="layout-container-wide relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger(0.18)}
            className="max-w-4xl"
          >
            <motion.span variants={fadeInUp} className="text-[#C05775] text-[0.7rem] font-medium tracking-[0.4em] uppercase mb-6 block">
              {a.label}
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-[5.5rem] font-medium text-white leading-[1.02] tracking-[-0.035em] mb-10"
            >
              {a.headingMain}{' '}
              <span className="text-white/95">{a.headingBrand}</span>
              <span className="text-[#C05775]">.</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/65 font-light leading-[1.75] max-w-2xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {a.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="layout-container-wide relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger(0.15)}
            className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="lg:col-span-4 flex flex-col gap-6">
              <div className="relative w-full max-w-[340px] mx-auto lg:mx-0">
                {/* outer decorative frame */}
                <div className="absolute -inset-3 rounded-[2.25rem] border border-[#C05775]/15 pointer-events-none" />
                <div className="absolute -inset-6 rounded-[2.75rem] border border-[#C05775]/06 pointer-events-none" />
                <div className="aspect-[3/4] rounded-[1.75rem] overflow-hidden bg-white/[0.03] border border-white/[0.10] relative shadow-2xl">
                  <img
                    src="/weronika.jpg"
                    alt="Weronika Łabędź — Swan Web Studio"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-white/60 text-[0.65rem] tracking-[0.25em] uppercase font-medium">
                      Swan Web Studio
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-8 flex flex-col gap-6">
              <span className="text-[#C05775] text-[0.7rem] font-medium tracking-[0.4em] uppercase block">
                {a.founderLabel}
              </span>
              <div>
                <h2 className="text-3xl md:text-4xl font-medium text-white leading-[1.1] tracking-tight mb-1">
                  {a.founderName}
                </h2>
                <span className="text-[#A1A1AA] text-sm font-light tracking-[0.15em] uppercase">{a.founderRole}</span>
              </div>
              <p className="text-base md:text-lg text-white/65 font-light leading-[1.8] max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                {a.founderBio}
              </p>
              <div className="flex gap-8 pt-2">
                {a.founderStats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl md:text-3xl font-medium text-white tracking-tight">{s.value}</div>
                    <div className="text-xs text-[#A1A1AA] font-light mt-1 tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MOTTO */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="layout-container-wide relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger(0.18)}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span variants={fadeInUp} className="text-[#C05775] text-[0.7rem] font-medium tracking-[0.4em] uppercase mb-6 block">
              {a.mottoLabel}
            </motion.span>
            <motion.blockquote
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-[2.75rem] text-white/95 font-light leading-[1.3] tracking-[-0.02em]"
            >
              {a.mottoText[0]}
              <span className="text-white">{a.mottoText[1]}</span>
              {a.mottoText[2]}
              <span className="text-white">{a.mottoText[3]}</span>
              {a.mottoText[4]}
              <span className="text-[#E889A1]">{a.mottoText[5]}</span>
              {a.mottoText[6]}
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#C05775]/[0.04] blur-[160px] rounded-full pointer-events-none z-0"
        />

        <div className="layout-container-wide relative z-10">
          <motion.div
            key={a.valuesHeading}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger(0.18)}
            className="text-center mb-16 md:mb-20"
          >
            <motion.span variants={fadeInUp} className="text-[#C05775] text-[0.7rem] font-medium tracking-[0.4em] uppercase mb-6 block">
              {a.valuesLabel}
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-[4rem] font-medium text-white leading-[1.05] tracking-[-0.03em]"
            >
              {a.valuesHeading}
            </motion.h2>
          </motion.div>

          <motion.div
            key={a.valuesLabel}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger(0.15, 0.1)}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {a.values.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <motion.div
                  key={v.title}
                  variants={fadeInUp}
                  className="group relative h-full overflow-hidden rounded-[1.5rem] p-8 md:p-9 backdrop-blur-2xl bg-white/[0.025] border border-white/[0.07] transition-all duration-700 ease-[0.22,1,0.36,1] hover:-translate-y-1.5 hover:bg-white/[0.045] hover:border-[#C05775]/30 hover:shadow-[0_30px_60px_-20px_rgba(192,87,117,0.28),0_0_0_1px_rgba(192,87,117,0.08)_inset]"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-[1.5rem] opacity-60"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0) 45%)' }}
                  />
                  <div className="relative z-10">
                    <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] group-hover:border-[#C05775]/40 group-hover:bg-[#C05775]/12 group-hover:shadow-[0_0_25px_-5px_rgba(192,87,117,0.45)] transition-all duration-700 ease-[0.22,1,0.36,1]">
                      <Icon className="w-5 h-5 text-white/65 group-hover:text-[#C05775] transition-all duration-700 ease-[0.22,1,0.36,1] stroke-[1.5] group-hover:rotate-[8deg] group-hover:scale-110" />
                    </div>
                    <h3 className="text-[1.3rem] md:text-[1.4rem] font-medium text-white/95 mb-3 tracking-tight">
                      {v.title}
                    </h3>
                    <p className="text-[0.95rem] text-white/55 font-light leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {v.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="layout-container-wide relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger(0.18)}
            className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start"
          >
            <motion.div variants={fadeInUp} className="lg:col-span-5">
              <span className="text-[#C05775] text-[0.7rem] font-medium tracking-[0.4em] uppercase mb-6 block">
                {a.partnershipLabel}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-white leading-[1.05] tracking-[-0.03em]">
                {a.partnershipHeading}
              </h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="lg:col-span-7 space-y-6">
              <p className="text-lg md:text-xl text-white/75 font-light leading-[1.75]" style={{ fontFamily: 'Inter, sans-serif' }}>
                {a.partnershipText1}
              </p>
              <p className="text-base md:text-lg text-white/55 font-light leading-[1.8]" style={{ fontFamily: 'Inter, sans-serif' }}>
                {a.partnershipText2}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(192, 87, 117, 0.06) 0%, transparent 70%)' }}
        />

        <div className="layout-container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-10 md:p-20 lg:p-24 text-center bg-white/[0.025] backdrop-blur-2xl border border-white/[0.08] shadow-[0_40px_100px_-40px_rgba(0,0,0,0.7),0_0_0_1px_rgba(192,87,117,0.06)_inset]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[2rem] md:rounded-[2.5rem] opacity-90 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 0%, rgba(192,87,117,0.10) 0%, transparent 60%)' }}
            />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-medium text-white mb-6 leading-[1.05] tracking-[-0.03em]">
                {a.ctaHeading}
              </h2>
              <p className="text-base md:text-lg text-white/60 font-light leading-[1.75] mb-10 max-w-xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                {a.ctaText}
              </p>
              <Button
                onClick={() => router.push('/contact')}
                className="group max-w-full whitespace-normal h-auto bg-[#C05775] text-white hover:bg-[#CB6280] px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 text-[0.62rem] sm:text-[0.68rem] md:text-[0.72rem] tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.22em] leading-snug uppercase font-semibold rounded-full transition-all duration-500 ease-[0.22,1,0.36,1] hover:shadow-[0_0_55px_-8px_rgba(192,87,117,0.7)] hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                {a.ctaButton}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutView;
