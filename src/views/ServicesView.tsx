"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Layout, Globe, Palette, Check, ArrowRight } from 'lucide-react';
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

const serviceIcons = [Layout, Globe, Palette];
const serviceSlugs = [
  { caseStudyHref: '/portfolio/aura-clinic', contactHref: '/contact?service=projektowanie-stron' },
  { caseStudyHref: '/noir-elan',             contactHref: '/contact?service=landing-page', isPopular: true },
  { caseStudyHref: '/aureline-district',     contactHref: '/contact?service=strona-firmowa' },
];

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  priceFrom: string;
  description: string;
  features: readonly string[];
  caseStudyHref: string;
  contactHref: string;
  popular?: boolean;
  askPrice: string;
  seeExample: string;
  popularLabel: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon, title, priceFrom, description, features,
  caseStudyHref, contactHref, popular, askPrice, seeExample, popularLabel,
}) => {
  const router = useRouter();

  return (
    <motion.div
      variants={fadeInUp}
      className={`group relative h-full rounded-[1.6rem] flex flex-col overflow-hidden backdrop-blur-2xl border transition-all duration-700 ease-[0.22,1,0.36,1] ${
        popular
          ? 'bg-white/[0.055] border-[#C05775]/55 shadow-[0_60px_120px_-30px_rgba(192,87,117,0.65),0_0_0_1px_rgba(192,87,117,0.22)_inset] lg:scale-[1.07]'
          : 'bg-white/[0.025] border-white/[0.07] lg:opacity-[0.88] hover:lg:opacity-100 hover:-translate-y-1.5 hover:bg-white/[0.04] hover:border-[#C05775]/30 hover:shadow-[0_30px_60px_-20px_rgba(192,87,117,0.28)]'
      }`}
    >
      {popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px">
          <div className="px-5 py-1.5 rounded-b-xl bg-[#C05775] text-white text-[0.62rem] font-semibold tracking-[0.28em] uppercase shadow-[0_8px_24px_-6px_rgba(192,87,117,0.65)]">
            {popularLabel}
          </div>
        </div>
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[1.6rem] opacity-60"
        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 45%)' }}
      />
      {popular && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[1.6rem]"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(192,87,117,0.14) 0%, transparent 60%)' }}
        />
      )}

      <div className="relative z-10 p-9 md:p-11 pt-14 md:pt-16 flex flex-col flex-grow">
        <div
          className={`mb-8 w-12 h-12 flex items-center justify-center rounded-xl border transition-all duration-700 ease-[0.22,1,0.36,1] ${
            popular
              ? 'border-[#C05775]/55 bg-[#C05775]/15 shadow-[0_0_30px_-5px_rgba(192,87,117,0.65)]'
              : 'border-white/[0.06] bg-white/[0.04] group-hover:border-[#C05775]/40 group-hover:bg-[#C05775]/12 group-hover:shadow-[0_0_25px_-5px_rgba(192,87,117,0.45)]'
          }`}
        >
          <Icon
            className={`w-5 h-5 stroke-[1.5] transition-all duration-700 ease-[0.22,1,0.36,1] ${
              popular
                ? 'text-[#C05775]'
                : 'text-white/65 group-hover:text-[#C05775] group-hover:rotate-[8deg] group-hover:scale-110'
            }`}
          />
        </div>

        <h3 className="text-[1.5rem] md:text-[1.65rem] font-medium text-white mb-2 tracking-tight">
          {title}
        </h3>

        <div className={`text-[1.35rem] md:text-[1.5rem] mb-6 font-medium tracking-tight ${popular ? 'text-[#E889A1]' : 'text-white/80'}`}>
          {priceFrom}
        </div>

        <p className="text-[0.88rem] text-white/55 font-light leading-[1.7] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
          {description}
        </p>

        <ul className="space-y-3.5 mb-10">
          {features.map((feat) => (
            <li key={feat} className="flex items-start gap-3">
              <span
                className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                  popular ? 'border-[#C05775]/55 bg-[#C05775]/15' : 'border-white/15 bg-white/[0.03]'
                }`}
              >
                <Check className={`w-3 h-3 ${popular ? 'text-[#C05775]' : 'text-white/55'}`} strokeWidth={2.5} />
              </span>
              <span className="text-[0.88rem] text-white/75 font-light leading-[1.55]" style={{ fontFamily: 'Inter, sans-serif' }}>
                {feat}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-3">
          <button
            onClick={() => router.push(contactHref)}
            className={`group/btn relative overflow-hidden w-full inline-flex items-center justify-center gap-2 h-[54px] text-[0.7rem] tracking-[0.22em] uppercase font-semibold rounded-full transition-all duration-500 ease-[0.22,1,0.36,1] hover:-translate-y-0.5 ${
              popular
                ? 'bg-[#C05775] text-white hover:bg-[#CB6280] hover:shadow-[0_0_60px_-8px_rgba(192,87,117,0.9)] hover:scale-[1.01]'
                : 'bg-white/[0.05] text-white border border-white/15 hover:bg-white/[0.08] hover:border-[#C05775]/40 hover:shadow-[0_0_30px_-8px_rgba(192,87,117,0.5)]'
            }`}
          >
            {popular && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            )}
            <span className="relative z-10">{askPrice}</span>
            <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-500 group-hover/btn:translate-x-1" />
          </button>

          <Link
            href={caseStudyHref}
            className="group/link inline-flex items-center justify-center gap-1.5 py-2 text-[0.62rem] tracking-[0.2em] uppercase font-medium text-white/30 hover:text-white/60 transition-colors duration-300"
          >
            {seeExample}
            <ArrowRight className="w-3 h-3 transition-transform duration-400 group-hover/link:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesView: React.FC = () => {
  const tr = useTranslation();
  const s = tr.services;

  return (
    <main className="overflow-x-hidden">
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-24 md:pb-32">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(58, 35, 96, 0.10) 0%, transparent 60%)' }}
        />
        <div
          aria-hidden="true"
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#C05775]/[0.04] blur-[180px] rounded-full pointer-events-none z-0"
        />

        <div className="layout-container-wide relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger(0.18)}
            className="text-center max-w-3xl mx-auto mb-20 md:mb-24"
          >
            <motion.span variants={fadeInUp} className="text-[#C05775] text-[0.7rem] font-medium tracking-[0.4em] uppercase mb-6 block">
              {s.label}
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-[4.5rem] font-medium text-white mb-6 leading-[1.05] tracking-[-0.03em]"
            >
              {s.heading}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-white/55 font-light leading-[1.7]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {s.subheading}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger(0.15, 0.1)}
            className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch max-w-[1180px] mx-auto"
          >
            {s.cards.map((card, i) => (
              <ServiceCard
                key={card.title}
                icon={serviceIcons[i]}
                title={card.title}
                priceFrom={card.priceFrom}
                description={card.description}
                features={card.features}
                caseStudyHref={serviceSlugs[i].caseStudyHref}
                contactHref={serviceSlugs[i].contactHref}
                popular={serviceSlugs[i].isPopular}
                askPrice={s.askPrice}
                seeExample={s.seeExample}
                popularLabel={s.popular}
              />
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-center text-[0.78rem] text-white/35 font-light mt-14 max-w-xl mx-auto leading-[1.7]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {s.footnote}
          </motion.p>
        </div>
      </section>
    </main>
  );
};

export default ServicesView;
