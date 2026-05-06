"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Clock, ShieldCheck, MessageCircle, Loader2 } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import FAQ from '@/components/FAQ';

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT ?? process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

const trustIcons = [Clock, ShieldCheck, MessageCircle];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = (s = 0.18, d = 0.05) => ({
  hidden: {},
  visible: { transition: { staggerChildren: s, delayChildren: d } },
});

const ContactView: React.FC = () => {
  const tr = useTranslation();
  const c = tr.contact;

  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get('service');
    if (service) setFormData((prev) => ({ ...prev, service }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      message: !formData.message.trim(),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setSubmitError(null);
    const serviceLabel = c.serviceOptions.find((o) => o.value === formData.service)?.label ?? 'Nowy projekt';

    if (FORMSPREE_ENDPOINT) {
      setSubmitting(true);
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            service: serviceLabel,
            message: formData.message,
            _subject: `Zapytanie: ${serviceLabel}`,
          }),
        });
        if (!res.ok) {
          const data = await res.json().catch(() => null);
          throw new Error(data?.error ?? `HTTP ${res.status}`);
        }
        setSubmitted(true);
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Unknown error';
        setSubmitError(msg);
      } finally {
        setSubmitting(false);
      }
      return;
    }

    // Fallback: open user's mail client
    const subject = encodeURIComponent(`Zapytanie: ${serviceLabel}`);
    const body = encodeURIComponent(`Od: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:hello@swanweb.pl?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main className="overflow-x-hidden">
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="absolute inset-0 z-0 pointer-events-none bg-[#08090C]" />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(58, 35, 96, 0.09) 0%, transparent 60%)' }}
        />
        <div
          aria-hidden="true"
          className="absolute top-[15%] left-[60%] w-[700px] h-[500px] bg-[#C05775]/[0.05] blur-[200px] rounded-full pointer-events-none z-0"
        />

        <div className="layout-container-wide relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-16 lg:gap-20 xl:gap-28 items-start">

            {/* LEFT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger(0.18)}
              className="lg:sticky lg:top-32"
            >
              <motion.span variants={fadeInUp} className="text-[#C05775] text-[0.7rem] font-medium tracking-[0.4em] uppercase mb-6 block">
                {c.label}
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-[4rem] font-medium text-white leading-[1.05] tracking-[-0.03em] mb-8"
              >
                {c.heading1}<br />
                {c.heading2}<br />
                <span className="text-[#C05775]">{c.heading3}</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-base md:text-lg text-white/55 font-light leading-[1.75] mb-12 max-w-[22rem]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {c.paragraph}
              </motion.p>

              <motion.div variants={stagger(0.1, 0.05)} className="space-y-4 mb-14">
                {c.trustSignals.map((text, i) => {
                  const Icon = trustIcons[i];
                  return (
                    <motion.div key={i} variants={fadeInUp} className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-full bg-[#C05775]/[0.07] border border-[#C05775]/[0.22] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#C05775] stroke-[1.5]" />
                      </div>
                      <span className="text-[0.9rem] text-white/65 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {text}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.a
                variants={fadeInUp}
                href="mailto:hello@swanweb.pl"
                className="group inline-flex items-center gap-3 text-white/65 hover:text-white transition-colors duration-300"
              >
                <div className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.09] group-hover:border-[#C05775]/45 group-hover:bg-[#C05775]/[0.07] flex items-center justify-center transition-all duration-300 shrink-0">
                  <Mail className="w-4 h-4 stroke-[1.5]" />
                </div>
                <span className="text-[0.88rem] font-light tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                  hello@swanweb.pl
                </span>
              </motion.a>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            >
              {submitted ? (
                <div className="rounded-[2rem] bg-white/[0.025] backdrop-blur-2xl border border-[#C05775]/25 p-12 md:p-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#C05775]/[0.10] border border-[#C05775]/35 flex items-center justify-center mx-auto mb-8">
                    <svg className="w-7 h-7 text-[#C05775]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium text-white mb-5 tracking-tight">
                    {FORMSPREE_ENDPOINT ? 'Wiadomość wysłana' : c.successHeading}
                  </h2>
                  <p className="text-white/55 font-light leading-[1.75] max-w-sm mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {FORMSPREE_ENDPOINT ? (
                      <>Dziękuję! Odezwę się do Ciebie w ciągu 24 godzin. Jeśli pilne — napisz na{' '}
                        <a href="mailto:hello@swanweb.pl" className="text-[#C05775] hover:underline">hello@swanweb.pl</a>.
                      </>
                    ) : (
                      <>{c.successText}{' '}
                        <a href="mailto:hello@swanweb.pl" className="text-[#C05775] hover:underline">hello@swanweb.pl</a>
                      </>
                    )}
                  </p>
                </div>
              ) : (
                <div className="relative overflow-hidden rounded-[2rem] p-8 md:p-12 bg-white/[0.025] backdrop-blur-2xl border border-white/[0.07] shadow-[0_40px_100px_-40px_rgba(0,0,0,0.6),0_0_0_1px_rgba(192,87,117,0.04)_inset]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-[2rem]"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0) 50%)' }}
                  />

                  <form onSubmit={handleSubmit} noValidate className="relative z-10 space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-[0.68rem] font-semibold text-white/50 uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {c.nameLbl}
                      </label>
                      <input
                        id="name" type="text" name="name" value={formData.name} onChange={handleChange}
                        placeholder={c.namePlaceholder}
                        className={`w-full px-5 py-4 rounded-xl bg-white/[0.04] border text-white placeholder-white/20 font-light text-[0.95rem] focus:outline-none focus:bg-white/[0.06] transition-all duration-300 ${errors.name ? 'border-red-500/60 focus:border-red-500/80' : 'border-white/[0.09] focus:border-[#C05775]/65 focus:shadow-[0_0_22px_-6px_rgba(192,87,117,0.4)]'}`}
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                      {errors.name && <p className="text-[0.72rem] text-red-400/80 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{c.required}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-[0.68rem] font-semibold text-white/50 uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {c.emailLbl}
                      </label>
                      <input
                        id="email" type="email" name="email" value={formData.email} onChange={handleChange}
                        placeholder={c.emailPlaceholder}
                        className={`w-full px-5 py-4 rounded-xl bg-white/[0.04] border text-white placeholder-white/20 font-light text-[0.95rem] focus:outline-none focus:bg-white/[0.06] transition-all duration-300 ${errors.email ? 'border-red-500/60 focus:border-red-500/80' : 'border-white/[0.09] focus:border-[#C05775]/65 focus:shadow-[0_0_22px_-6px_rgba(192,87,117,0.4)]'}`}
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                      {errors.email && <p className="text-[0.72rem] text-red-400/80 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{c.required}</p>}
                    </div>

                    {/* Service */}
                    <div className="space-y-2">
                      <label htmlFor="service" className="block text-[0.68rem] font-semibold text-white/50 uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {c.serviceLbl}
                      </label>
                      <div className="relative">
                        <select
                          id="service" name="service" value={formData.service} onChange={handleChange}
                          className="w-full px-5 py-4 pr-11 rounded-xl bg-white/[0.04] border border-white/[0.09] text-white font-light text-[0.95rem] focus:outline-none focus:border-[#C05775]/65 focus:bg-white/[0.06] focus:shadow-[0_0_22px_-6px_rgba(192,87,117,0.4)] transition-all duration-300 appearance-none cursor-pointer"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {c.serviceOptions.map((opt) => (
                            <option key={opt.value} value={opt.value} className="bg-[#0E1016] text-white">
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/35 pointer-events-none stroke-[1.5]" />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-[0.68rem] font-semibold text-white/50 uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {c.messageLbl}
                      </label>
                      <textarea
                        id="message" name="message" value={formData.message} onChange={handleChange}
                        rows={5} placeholder={c.messagePlaceholder}
                        className={`w-full px-5 py-4 rounded-xl bg-white/[0.04] border text-white placeholder-white/20 font-light text-[0.95rem] focus:outline-none focus:bg-white/[0.06] transition-all duration-300 resize-none ${errors.message ? 'border-red-500/60 focus:border-red-500/80' : 'border-white/[0.09] focus:border-[#C05775]/65 focus:shadow-[0_0_22px_-6px_rgba(192,87,117,0.4)]'}`}
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                      {errors.message && <p className="text-[0.72rem] text-red-400/80 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{c.required}</p>}
                    </div>

                    {submitError && (
                      <div className="rounded-xl border border-red-500/40 bg-red-500/[0.05] px-5 py-3.5 text-[0.82rem] text-red-300/90 font-light leading-[1.55]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz bezpośrednio na{' '}
                        <a href="mailto:hello@swanweb.pl" className="underline hover:text-red-200">hello@swanweb.pl</a>.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      aria-busy={submitting}
                      className="group w-full flex items-center justify-center gap-2.5 bg-[#C05775] text-white hover:bg-[#CB6280] h-[58px] text-[0.7rem] tracking-[0.22em] uppercase font-semibold rounded-full transition-all duration-500 ease-[0.22,1,0.36,1] hover:shadow-[0_0_55px_-8px_rgba(192,87,117,0.7)] hover:-translate-y-0.5 hover:scale-[1.01] mt-2 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:scale-100 disabled:hover:shadow-none"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Wysyłanie...
                        </>
                      ) : (
                        <>
                          {c.submit}
                          <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-[0.72rem] text-white/30 font-light pt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {c.helper}
                    </p>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <FAQ />
    </main>
  );
};

export default ContactView;
