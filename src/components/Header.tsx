"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLang, type Lang } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

const LANGS: Lang[] = ['pl', 'en', 'de'];

const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang } = useLang();
  const tr = useTranslation();

  const navItems = [
    { name: tr.nav.home, path: '/' },
    { name: tr.nav.about, path: '/about' },
    { name: tr.nav.services, path: '/services' },
    { name: tr.nav.portfolio, path: '/portfolio' },
    { name: tr.nav.contact, path: '/contact' },
  ];

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileOpen(false);
  };

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <header className="nav-glass sticky top-0 z-50 transition-all duration-500 ease-[0.22,1,0.36,1]">
        <nav className="layout-container-wide py-5 relative z-10">
          <div className="flex items-center justify-between gap-4">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group z-10 whitespace-nowrap shrink-0"
              onClick={handleNavClick}
            >
              <div className="flex flex-col items-center transition-transform duration-300 ease-[0.22,1,0.36,1] group-hover:scale-[1.03]">
                <span
                  className="logo-glow text-[1.65rem] md:text-[1.75rem] font-light uppercase text-white leading-none mb-1.5 transition-all duration-300 group-hover:text-[#E889A1]"
                  style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.34em', paddingLeft: '0.34em' }}
                >
                  SWAN
                </span>
                <span
                  className="text-[0.6rem] font-medium text-white/55 uppercase leading-none group-hover:text-white/85 transition-all duration-300"
                  style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.5em', paddingLeft: '0.5em' }}
                >
                  WEB STUDIO
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-2 relative z-20 flex-1 justify-center">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={handleNavClick}
                    className={`relative px-5 py-2.5 rounded-full transition-all duration-300 ease-[0.22,1,0.36,1] flex items-center justify-center group ${
                      isActive
                        ? 'nav-pill-active font-medium'
                        : 'text-white/70 hover:text-white hover:bg-white/[0.06] hover:scale-[1.04] hover:[text-shadow:0_0_18px_rgba(255,255,255,0.35)] font-medium'
                    }`}
                  >
                    <span
                      className="text-[0.78rem] uppercase tracking-[0.18em] relative z-10"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-2 shrink-0 relative z-20">
              {/* Language switcher */}
              <div className="hidden md:flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-1 py-1 gap-0.5">
                {LANGS.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-2.5 py-1 rounded-full text-[0.65rem] tracking-[0.18em] uppercase font-medium transition-all duration-300 ${
                      lang === l
                        ? 'bg-[#C05775]/20 text-white border border-[#C05775]/35 shadow-[0_0_12px_-4px_rgba(192,87,117,0.5)]'
                        : 'text-white/40 hover:text-white/70'
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="hidden md:flex w-9 h-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/55 hover:text-white hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 ease-[0.22,1,0.36,1]"
              >
                {theme === 'dark'
                  ? <Sun className="w-4 h-4 stroke-[1.5]" />
                  : <Moon className="w-4 h-4 stroke-[1.5]" />
                }
              </button>

              {/* Mobile — controls + hamburger */}
              <div className="md:hidden flex items-center gap-2">
                {/* Mobile lang */}
                <div className="flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-1 py-0.5 gap-0">
                  {LANGS.map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={`px-2 py-0.5 rounded-full text-[0.58rem] tracking-[0.15em] uppercase font-medium transition-all duration-300 ${
                        lang === l ? 'bg-[#C05775]/20 text-white border border-[#C05775]/35' : 'text-white/40'
                      }`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {l.toUpperCase()}
                    </button>
                  ))}
                </div>

                {/* Mobile theme toggle */}
                <button
                  onClick={toggleTheme}
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/55 hover:text-white transition-all duration-300"
                >
                  {theme === 'dark'
                    ? <Sun className="w-3.5 h-3.5 stroke-[1.5]" />
                    : <Moon className="w-3.5 h-3.5 stroke-[1.5]" />
                  }
                </button>

                {/* Hamburger */}
                <button
                  onClick={() => setMobileOpen((v) => !v)}
                  aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
                  aria-expanded={mobileOpen}
                  className="text-white/80 p-2 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 ease-[0.22,1,0.36,1] active:scale-95"
                >
                  {mobileOpen ? (
                    <X size={20} strokeWidth={1.5} />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="4" x2="20" y1="6" y2="6" />
                      <line x1="4" x2="20" y1="12" y2="12" />
                      <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-[#06070A]/90 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />

            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[76px] left-4 right-4 rounded-[1.6rem] bg-white/[0.04] backdrop-blur-2xl border border-white/[0.09] p-3 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.75)]"
            >
              {navItems.map((item, i) => {
                const isActive = pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.28, delay: i * 0.055, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.path}
                      onClick={handleNavClick}
                      className={`block w-full px-5 py-4 rounded-xl text-[0.8rem] uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                        isActive
                          ? 'text-[#E889A1] bg-[#C05775]/[0.08]'
                          : 'text-white/65 hover:text-white hover:bg-white/[0.06]'
                      }`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
