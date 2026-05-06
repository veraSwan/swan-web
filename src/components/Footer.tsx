"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { ArrowRight, Linkedin, Instagram } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER ?? process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const tr = useTranslation();
  const f = tr.footer;
  const nav = tr.nav;

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      setStatus('error');
      return;
    }

    if (FORMSPREE_ENDPOINT) {
      setStatus('sending');
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            email,
            _subject: 'Newsletter — nowy zapis',
            source: 'footer-newsletter',
          }),
        });
        if (!res.ok) throw new Error('failed');
        setStatus('ok');
        setEmail('');
      } catch {
        setStatus('error');
      }
      return;
    }

    // Fallback: open mail client
    window.location.href = `mailto:hello@swanweb.pl?subject=${encodeURIComponent('Newsletter — chcę się zapisać')}&body=${encodeURIComponent(`Email: ${email}`)}`;
    setStatus('ok');
    setEmail('');
  };

  return (
    <footer className="bg-[#0E0F12] border-t border-[#5A4B81]/20 pt-16 pb-8 relative z-10 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-px left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[#C05775]/40 to-transparent pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#C05775]/[0.04] blur-[120px] rounded-full pointer-events-none"
      />
      <div className="layout-container">
        {/* Newsletter row */}
        <div className="mb-14 md:mb-16 pb-12 md:pb-14 border-b border-white/[0.06] grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-14 items-start lg:items-center">
          <div className="text-center lg:text-left">
            <span className="text-[#C05775] text-[0.65rem] font-medium tracking-[0.4em] uppercase mb-3 block">
              — Newsletter
            </span>
            <h3
              className="text-2xl md:text-[1.75rem] font-medium text-white tracking-tight leading-[1.2] max-w-md mx-auto lg:mx-0"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Jedna inspiracja w miesiącu — zero spamu.
            </h3>
            <p
              className="mt-2.5 text-[0.88rem] text-white/45 font-light leading-[1.65] max-w-md mx-auto lg:mx-0"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Krótki list o web designie, brandingu i tym, co się sprawdza w sieci.
            </p>
          </div>

          <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 w-full lg:max-w-md lg:ml-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (status !== 'idle') setStatus('idle'); }}
                placeholder="twoj@email.pl"
                disabled={status === 'sending' || status === 'ok'}
                className="w-full h-[50px] px-5 rounded-full bg-white/[0.04] border border-white/[0.10] text-white placeholder-white/25 font-light text-[0.92rem] focus:outline-none focus:border-[#C05775]/55 focus:bg-white/[0.06] focus:shadow-[0_0_22px_-6px_rgba(192,87,117,0.4)] transition-all duration-300 disabled:opacity-60"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending' || status === 'ok'}
              className="group inline-flex items-center justify-center gap-2 bg-[#C05775] text-white hover:bg-[#CB6280] h-[50px] px-7 text-[0.65rem] tracking-[0.22em] uppercase font-semibold rounded-full transition-all duration-500 ease-[0.22,1,0.36,1] hover:shadow-[0_0_35px_-8px_rgba(192,87,117,0.65)] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none whitespace-nowrap"
            >
              {status === 'sending' ? 'Wysyłanie...' : status === 'ok' ? 'Zapisano!' : 'Zapisz mnie'}
              {status !== 'sending' && status !== 'ok' && (
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" />
              )}
            </button>
          </form>

          {status === 'error' && (
            <p className="lg:col-span-2 text-[0.78rem] text-red-400/80 font-light text-center lg:text-right" style={{ fontFamily: 'Inter, sans-serif' }}>
              Sprawdź adres email i spróbuj ponownie.
            </p>
          )}
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-spacing mb-12">
          <div className="md:col-span-2 flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center gap-3 group w-fit mx-auto md:mx-0">
              <span
                className="text-white font-medium text-xl tracking-[0.05em] transition-colors duration-300 group-hover:text-[#C05775]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Swan Web Studio
              </span>
            </Link>
            <p suppressHydrationWarning className="text-[#E5E7EB]/80 text-sm leading-relaxed max-w-sm transition-opacity hover:opacity-100" style={{ fontFamily: 'Inter, sans-serif' }}>
              {f.description}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-white/55 hover:text-white hover:bg-[#C05775]/10 hover:border-[#C05775]/40 hover:shadow-[0_0_18px_-4px_rgba(192,87,117,0.5)] transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 stroke-[1.5]" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-white/55 hover:text-white hover:bg-[#C05775]/10 hover:border-[#C05775]/40 hover:shadow-[0_0_18px_-4px_rgba(192,87,117,0.5)] transition-all duration-300"
              >
                <Instagram className="w-4 h-4 stroke-[1.5]" />
              </a>
              <a
                href="https://www.behance.net/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                className="group w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-white/55 hover:text-white hover:bg-[#C05775]/10 hover:border-[#C05775]/40 hover:shadow-[0_0_18px_-4px_rgba(192,87,117,0.5)] transition-all duration-300"
              >
                <span className="text-[0.65rem] font-bold tracking-wide" style={{ fontFamily: 'DM Sans, sans-serif' }}>Bē</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-white font-semibold text-sm uppercase tracking-wider mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              {f.navLabel}
            </span>
            <Link href="/" className="text-[#E5E7EB]/70 hover:text-[#C05775] hover:translate-x-1 text-sm transition-all w-fit">{nav.home}</Link>
            <Link href="/about" className="text-[#E5E7EB]/70 hover:text-[#C05775] hover:translate-x-1 text-sm transition-all w-fit">{nav.about}</Link>
            <Link href="/services" className="text-[#E5E7EB]/70 hover:text-[#C05775] hover:translate-x-1 text-sm transition-all w-fit">{nav.services}</Link>
            <Link href="/portfolio" className="text-[#E5E7EB]/70 hover:text-[#C05775] hover:translate-x-1 text-sm transition-all w-fit">{nav.portfolio}</Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-white font-semibold text-sm uppercase tracking-wider mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              {f.contactLabel}
            </span>
            <a href="mailto:hello@swanweb.pl" className="text-[#E5E7EB]/70 hover:text-[#C05775] hover:translate-x-1 text-sm transition-all w-fit">
              hello@swanweb.pl
            </a>
            <Link href="/contact" className="text-[#E5E7EB]/70 hover:text-[#C05775] hover:translate-x-1 text-sm transition-all w-fit">
              {f.writeToUs}
            </Link>
            <div className="mt-2 pt-4 border-t border-white/[0.06] flex flex-col gap-1.5">
              <span className="text-[#E5E7EB]/45 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>Weronika Łabędź</span>
              <span className="text-[#E5E7EB]/45 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>Piła 64-920</span>
              <span className="text-[#E5E7EB]/45 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>NIP: 7642674318</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#5A4B81]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#E5E7EB]/50 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
            &copy; {currentYear} Swan Web Studio — Weronika Łabędź. {f.rights}
          </p>
          <div className="flex gap-6">
            <Link href="/polityka-prywatnosci" className="text-[#E5E7EB]/50 hover:text-white text-xs transition-colors">Polityka Prywatności</Link>
            <Link href="/polityka-cookies" className="text-[#E5E7EB]/50 hover:text-white text-xs transition-colors">Polityka Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
