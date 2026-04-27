"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from "next/navigation";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CallToAction = () => {
  const router = useRouter();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`w-full text-center flex flex-col items-center py-16 md:py-24 scroll-animate ${isVisible ? 'is-visible' : ''}`}
    >
      <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight' style={{ fontFamily: 'DM Sans, sans-serif' }}>
        Gotowy stworzyć coś, co <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D37E8A] via-[#C05775] to-[#9D5B8B]">naprawdę działa</span>?
      </h2>
      <p className="text-[#E5E7EB] opacity-80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
        Przekształćmy Twoją wizję w bezkompromisowy projekt cyfrowy, który buduje pozycję lidera i skaluje Twój biznes.
      </p>
      
      <div className="relative group">
        {/* Soft elegant glow effect behind the button */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#C05775] to-[#9D5B8B] rounded-full blur-[25px] opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />
        
        <Button
          size="xl"
          onClick={() => router.push('/contact')}
          className="relative bg-gradient-to-r from-[#C05775] to-[#9D5B8B] text-white hover:text-white px-12 md:px-14 py-7 md:py-8 text-sm tracking-widest uppercase font-semibold rounded-full transition-all duration-500 ease-out hover:scale-[1.03] shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25)_inset,0_20px_40px_-10px_rgba(192,87,117,0.5)] border-0"
        >
          Porozmawiajmy o projekcie
        </Button>
      </div>
      
      <span className="mt-6 text-xs text-[#E5E7EB]/50 font-light tracking-widest uppercase">
        Odpisujemy w kilka godzin
      </span>
    </div>
  );
};

export default CallToAction;