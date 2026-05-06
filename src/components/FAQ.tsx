"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Item = { q: string; a: string };

const items: Item[] = [
  {
    q: "Ile kosztuje strona internetowa?",
    a: "Wycena zaczyna się od 2 500 zł za prostą landing page i sięga 9 000 zł+ za rozbudowane projekty firmowe lub e-commerce. Każda wycena jest indywidualna — bo każdy biznes ma inne potrzeby. Po krótkiej rozmowie dostaniesz konkret, nie cennik z wodą.",
  },
  {
    q: "Ile trwa realizacja?",
    a: "Standardowo 4–6 tygodni od podpisania umowy do publikacji. Landing page — 2–3 tygodnie. E-commerce lub bardziej złożone projekty — 6–10 tygodni. Pracujemy w spokojnym tempie, ale bez przeciągania.",
  },
  {
    q: "Czy zajmujesz się hostingiem i domeną?",
    a: "Tak. Mogę pomóc Ci wybrać i skonfigurować domenę oraz hosting (zwykle Vercel + dowolny rejestrator), albo wdrożyć stronę na Twoją obecną infrastrukturę. Domena i hosting to koszt po Twojej stronie (~150–400 zł/rok), nie ukrywam tego w pakiecie.",
  },
  {
    q: "Czy będę mogła sama edytować treści?",
    a: "Tak — w cenie szkolimy z edycji najczęściej zmienianych elementów. Standardowo używamy lekkich rozwiązań, które pozwalają zmieniać teksty i zdjęcia bez znajomości kodu. Jeśli wolisz, żebym zmieniała treści — to też mogę robić, w ramach abonamentu lub jednorazowo.",
  },
  {
    q: "Co po publikacji? Czy zostaję sama z problemem?",
    a: "W cenie projektu masz 30 dni wsparcia po wdrożeniu — drobne poprawki, monitoring, odpowiedzi na pytania. Potem możemy umówić się na abonament obsługi (od 200 zł/mies.) albo rozliczać poprawki ad hoc. Strony, które robię, nie wymagają regularnej obsługi — ale jeśli chcesz, jestem.",
  },
  {
    q: "Skąd wezmę zdjęcia i teksty na stronę?",
    a: "Zdjęcia: jeśli masz własne — super. Jeśli nie — proponuję sprawdzone banki (Unsplash Premium) albo polecam fotografa. Teksty: jeśli masz wstępny pomysł, dopracujemy razem. Mogę też napisać teksty od zera — to dodatkowa usługa, ale często ratuje cały projekt.",
  },
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { ref, isVisible, variants } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative bg-[#08090C] border-t border-white/[0.04] py-24 md:py-32 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C05775]/[0.03] blur-[160px] rounded-full pointer-events-none"
      />

      <div className="layout-container-wide relative z-10 max-w-4xl mx-auto">
        <motion.div
          variants={variants.staggerContainer(0.15, 0.05)}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-14 md:mb-16"
        >
          <motion.span
            variants={variants.fadeInUp}
            className="text-[#C05775] text-[0.7rem] font-medium tracking-[0.4em] uppercase mb-6 block"
          >
            — Najczęstsze pytania
          </motion.span>
          <motion.h2
            variants={variants.fadeInUp}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-white leading-[1.1] tracking-[-0.02em]"
          >
            Zanim napiszesz, sprawdź
          </motion.h2>
          <motion.p
            variants={variants.fadeInUp}
            className="mt-5 text-base md:text-lg text-white/55 font-light leading-[1.7] max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Najczęściej zadawane pytania — szczerze, bez sprzedażowego żargonu.
          </motion.p>
        </motion.div>

        <motion.div
          variants={variants.staggerContainer(0.08, 0.05)}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-3"
        >
          {items.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div
                key={item.q}
                variants={variants.fadeInUp}
                className={`group rounded-[1.4rem] border backdrop-blur-2xl transition-all duration-500 ease-[0.22,1,0.36,1] ${
                  isOpen
                    ? "bg-white/[0.045] border-[#C05775]/35 shadow-[0_22px_45px_-20px_rgba(192,87,117,0.25)]"
                    : "bg-white/[0.025] border-white/[0.07] hover:bg-white/[0.04] hover:border-white/[0.13]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 px-6 md:px-8 py-5 md:py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C05775]/60 rounded-[1.4rem]"
                >
                  <span
                    className={`text-[1.05rem] md:text-[1.15rem] font-medium tracking-tight transition-colors duration-500 ${
                      isOpen ? "text-white" : "text-white/85 group-hover:text-white"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500 ${
                      isOpen
                        ? "bg-[#C05775]/15 border-[#C05775]/55 text-[#C05775] rotate-45"
                        : "bg-white/[0.03] border-white/[0.10] text-white/55 group-hover:border-[#C05775]/40 group-hover:text-[#E889A1]"
                    }`}
                  >
                    <Plus className="w-4 h-4 stroke-[2]" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p
                        className="px-6 md:px-8 pb-6 md:pb-7 -mt-1 text-[0.95rem] md:text-[1rem] text-white/65 font-light leading-[1.75] max-w-2xl"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
