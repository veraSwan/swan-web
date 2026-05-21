"use client";
import React from 'react';
import Link from "next/link";
import { Linkedin } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const tr = useTranslation();
  const f = tr.footer;
  const nav = tr.nav;

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
                href="https://www.linkedin.com/in/weronika-labedz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-white/55 hover:text-white hover:bg-[#C05775]/10 hover:border-[#C05775]/40 hover:shadow-[0_0_18px_-4px_rgba(192,87,117,0.5)] transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 stroke-[1.5]" />
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
