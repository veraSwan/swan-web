import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Start', path: '/' },
    { name: 'O nas', path: '/about' },
    { name: 'Usługi', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Kontakt', path: '/contact' }
  ];

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="nav-glass sticky top-0 z-50 transition-all duration-500 ease-[0.22,1,0.36,1]">
      <nav className="layout-container py-5 relative z-10">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center group z-10 whitespace-nowrap"
            onClick={handleNavClick}
          >
            <div className="flex flex-col items-center transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:scale-105">
              <span 
                className="text-2xl font-light tracking-[0.25em] uppercase text-white leading-none mb-1 transition-colors duration-500 group-hover:text-[#C05775] drop-shadow-sm" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                SWAN
              </span>
              <span 
                className="text-[0.55rem] font-medium text-[#E5E7EB] tracking-[0.4em] uppercase leading-none opacity-60 group-hover:text-white group-hover:opacity-90 transition-all duration-500 ml-1" 
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                WEB STUDIO
              </span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-2 relative z-20">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`relative px-5 py-2.5 rounded-full transition-all duration-500 ease-[0.22,1,0.36,1] flex items-center justify-center group ${
                    isActive
                      ? 'nav-pill-active font-medium'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.06] font-medium hover:scale-[1.02]'
                  }`}
                >
                  <span
                    className="text-xs uppercase tracking-widest relative z-10"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="md:hidden relative z-20">
            <button className="text-white/80 p-2.5 hover:text-white hover:bg-white/10 rounded-full transition-all duration-500 ease-[0.22,1,0.36,1] active:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;