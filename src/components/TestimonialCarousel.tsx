"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Współpraca była bardzo uporządkowana, a efekt końcowy naprawdę profesjonalny. Wszystkie cele zostały płynnie zrealizowane.",
    author: "Joanna",
    industry: "marka osobista",
    accent: "from-[#D37E8A] via-[#C05775] to-[#9D5B8B]"
  },
  {
    text: "Strona wygląda świetnie i od razu lepiej pokazuje moją markę. Kontakt był jasny na każdym etapie projektowania.",
    author: "Karolina",
    industry: "branża beauty",
    accent: "from-[#E8B4B8] via-[#C99DA3] to-[#8E6D8A]"
  },
  {
    text: "Najbardziej doceniam estetykę, stały kontakt i bezkompromisową dbałość o każdy najmniejszy szczegół wizualny.",
    author: "Michał",
    industry: "firma usługowa",
    accent: "from-[#5C7E8F] via-[#3F5B6E] to-[#2A3F4F]"
  },
  {
    text: "Cały proces przebiegł bardzo sprawnie, a ostateczny projekt był rzetelnie dopracowany w każdym możliwym detalu.",
    author: "Natalia",
    industry: "projektantka wnętrz",
    accent: "from-[#C8A96E] via-[#A8865A] to-[#6E5638]"
  },
  {
    text: "Nowa strona od razu wygląda obłędnie i nowocześnie. Działa w pełni płynnie na każdym urządzeniu i budzi szerokie zaufanie.",
    author: "Tomasz",
    industry: "mały biznes",
    accent: "from-[#7A9079] via-[#566B58] to-[#2D3A32]"
  }
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 50 : -50,
    opacity: 0
  })
};

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-8">
      <div className="relative overflow-hidden min-h-[350px] flex items-center justify-center px-12 md:px-20">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 }
            }}
            className="w-full absolute flex justify-center"
          >
            <div className="w-full max-w-3xl bg-[#1A1C20]/40 rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-white/5 relative backdrop-blur-md group hover-premium-card overflow-hidden">
              {/* Decorative Quote Icon - Moved to corner, reduced opacity */}
              <Quote className="w-32 h-32 text-white/[0.02] absolute -top-4 -right-4 md:-top-6 md:-right-6 rotate-12 pointer-events-none group-hover:text-[#C05775]/5 transition-colors duration-500" />
              
              <div className="relative z-10 max-w-xl mx-auto md:mx-0">
                <div className="text-block mb-10">
                  <p className="text-[#E5E7EB] opacity-90 text-lg md:text-2xl font-light italic leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    "{testimonials[currentIndex].text}"
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <div className="relative w-14 h-14 shrink-0">
                    <div className={`absolute -inset-[2px] rounded-full bg-gradient-to-br ${testimonials[currentIndex].accent} opacity-90 blur-[1px]`} />
                    <div className={`relative w-full h-full rounded-full bg-gradient-to-br ${testimonials[currentIndex].accent} flex items-center justify-center text-white font-medium text-xl shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.18)]`}
                         style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {testimonials[currentIndex].author.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-medium text-lg tracking-wide group-hover:text-[#C05775] transition-colors duration-300" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-[#E5E7EB] opacity-50 text-sm font-light uppercase tracking-wider mt-0.5">
                      {testimonials[currentIndex].industry}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-transparent text-white/50 hover:text-white hover:bg-white/10 hover:border-[#C05775]/50 hover:glow-pink-purple transition-all duration-300 backdrop-blur-md z-10"
        aria-label="Poprzednia opinia"
      >
        <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-transparent text-white/50 hover:text-white hover:bg-white/10 hover:border-[#C05775]/50 hover:glow-pink-purple transition-all duration-300 backdrop-blur-md z-10"
        aria-label="Następna opinia"
      >
        <ChevronRight className="w-6 h-6 stroke-[1.5]" />
      </button>

      {/* Dots Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentIndex ? 'bg-[#C05775] shadow-[0_0_10px_rgba(192,87,117,0.6)] w-8' : 'bg-white/20 hover:bg-[#C05775]/50 w-2'
            }`}
            aria-label={`Przejdź do opinii ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;