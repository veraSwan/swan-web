"use client";
import React from "react";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyConcept from "@/components/case-study/CaseStudyConcept";
import CaseStudyDeliverables from "@/components/case-study/CaseStudyDeliverables";
import CaseStudyGoal from "@/components/case-study/CaseStudyGoal";
import CaseStudyProcess from "@/components/case-study/CaseStudyProcess";
import CaseStudyResult from "@/components/case-study/CaseStudyResult";
import CaseStudyMiniMockup from "@/components/case-study/CaseStudyMiniMockup";
import CaseStudyTopBack from "@/components/case-study/CaseStudyTopBack";
import CaseStudyBackNav from "@/components/case-study/CaseStudyBackNav";

const heroImage =
  "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1600&q=80";

const HeroBrowserFrame: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="relative w-full bg-[#1A1C20] rounded-t-[1.5rem] p-2 sm:p-3 pb-0 shadow-2xl border border-white/5 border-b-0">
    <div className="aspect-[16/10] bg-black rounded-t-xl overflow-hidden relative">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover object-center opacity-95 transition-transform duration-[2s] ease-[0.22,1,0.36,1] hover:scale-[1.02]"
      />
    </div>
    <div className="w-[110%] -ml-[5%] h-3 sm:h-4 bg-[#2A2B30] rounded-b-2xl mt-0 border-t border-white/5 shadow-xl relative z-10" />
  </div>
);

const StalMarMockSite: React.FC = () => (
  <div className="bg-[#111214] text-white" style={{ fontFamily: "Inter, sans-serif" }}>
    {/* Nav */}
    <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-white/10">
      <span className="text-sm tracking-[0.28em] uppercase font-semibold text-white" style={{ fontFamily: "DM Sans, sans-serif" }}>
        STAL MAR
      </span>
      <div className="hidden md:flex items-center gap-7 text-[0.7rem] tracking-[0.22em] uppercase text-white/50">
        <span>Realizacje</span>
        <span>Oferta</span>
        <span>O nas</span>
        <span>Kontakt</span>
      </div>
      <span className="text-[0.65rem] tracking-[0.22em] uppercase font-semibold border border-[#C8A96E] text-[#C8A96E] px-4 py-2 rounded-sm">
        Wycena
      </span>
    </div>

    {/* Hero */}
    <div className="px-6 md:px-10 py-14 md:py-20 border-b border-white/10">
      <span className="block text-[0.6rem] tracking-[0.32em] uppercase text-[#C8A96E] mb-6">
        — Ogrodzenia premium
      </span>
      <h3 className="text-3xl md:text-5xl font-light text-white leading-[1.1] tracking-tight mb-6 max-w-2xl">
        Precyzja wykonania.<br />
        Trwałość bez kompromisów.
      </h3>
      <p className="text-sm text-white/50 leading-relaxed max-w-md mb-10">
        Projektujemy i montujemy nowoczesne ogrodzenia panelowe, bramy oraz systemy ozdobne. Każda realizacja to synonim jakości i dbałości o detal.
      </p>
      <div className="flex gap-4">
        <span className="text-[0.65rem] tracking-[0.22em] uppercase font-semibold bg-[#C8A96E] text-[#111214] px-6 py-2.5 rounded-sm">
          Zobacz realizacje
        </span>
        <span className="text-[0.65rem] tracking-[0.22em] uppercase font-semibold border border-white/20 text-white/70 px-6 py-2.5 rounded-sm">
          Poproś o wycenę
        </span>
      </div>
    </div>

    {/* Services strip */}
    <div className="grid grid-cols-3 divide-x divide-white/10 border-b border-white/10">
      {[
        { title: "Panelowe", desc: "Nowoczesne i trwałe" },
        { title: "Ozdobne", desc: "Elegancja i charakter" },
        { title: "Bramy & systemy", desc: "Automatyka i bezpieczeństwo" },
      ].map((s) => (
        <div key={s.title} className="px-6 py-8">
          <span className="block text-[0.6rem] tracking-[0.28em] uppercase text-[#C8A96E] mb-2">{s.desc}</span>
          <span className="text-base font-light text-white">{s.title}</span>
        </div>
      ))}
    </div>
  </div>
);

const StalMarView: React.FC = () => (
  <main className="bg-[#08090C] min-h-screen">
    <CaseStudyTopBack />

    <CaseStudyHero
      category="Ogrodzenia / Metaloplastyka"
      title="Stal Mar"
      subtitle="Strona firmowa dla producenta nowoczesnych ogrodzeń panelowych i ozdobnych. Solidne wykonanie w każdym pikselu — tak jak w ich produktach."
      visual={<HeroBrowserFrame src={heroImage} alt="Stal Mar — nowoczesne ogrodzenia" />}
    />

    <CaseStudyGoal
      label="Wyzwanie"
      heading="Firma ze świetnym produktem, strona która nie oddawała jego jakości."
      pillars={[
        {
          label: "Problem",
          body: "Stal Mar to marka z ugruntowaną pozycją w branży ogrodzeń — ale stara strona nie przekazywała klasy ich realizacji.",
        },
        {
          label: "Cel",
          body: "Zbudować wizerunek emanujący solidnością i nowoczesnością: ciemna kolorystyka, stalowe akcenty, layout mówiący: jesteśmy profesjonalistami.",
        },
        {
          label: "Efekt",
          body: "Nowa strona działa jak wizytówka premium — buduje zaufanie jeszcze przed pierwszym kontaktem z klientem.",
        },
      ]}
    />

    <CaseStudyConcept
      label="Koncepcja"
      heading="Stal i precyzja jako fundament designu."
      body="Inspiracją była sama branża: surowe materiały, czyste linie, zero ozdobników. Ciemne tło z ciepłymi złoto-metalicznymi akcentami buduje poczucie premium bez patosu. Typografia — lekka, szeroka, pewna siebie. Każda sekcja ma oddech i rytm, który podkreśla solidność marki."
    />

    <CaseStudyDeliverables
      label="Zakres prac"
      heading="Co zostało dostarczone"
      items={[
        "Strona firmowa (multi-page)",
        "Galeria realizacji z filtrowaniem",
        "Formularz zapytania o wycenę",
        "Identyfikacja wizualna",
        "Responsywność (mobile-first)",
        "Optymalizacja SEO lokalne",
      ]}
    />

    <CaseStudyMiniMockup
      label="Podgląd projektu"
      heading="Jak wygląda strona Stal Mar."
      url="stalmar.pl"
      innerBg="bg-[#111214]"
    >
      <StalMarMockSite />
    </CaseStudyMiniMockup>

    <CaseStudyProcess
      label="Proces"
      heading="Od rozmowy do gotowej strony."
      steps={[
        { number: "01", title: "Wywiad i analiza", description: "Rozmowa o kliencie docelowym, konkurencji i celach sprzedażowych." },
        { number: "02", title: "Moodboard i kierunek", description: "Ciemna stylistyka premium z metalicznym akcentem zaakceptowana w pierwszej rundzie." },
        { number: "03", title: "Projekt i prototyp", description: "Pełny układ stron w Figmie, z widokiem desktop i mobile." },
        { number: "04", title: "Wdrożenie", description: "Szybka strona oparta na Next.js, zoptymalizowana pod SEO lokalne." },
      ]}
    />

    <CaseStudyResult
      label="Efekt"
      body="Nowa strona Stal Mar odwzorowuje jakość, którą firma dostarcza fizycznie. Klient zyskał narzędzie, które buduje zaufanie przed pierwszym kontaktem — estetyczna, szybka i przemyślana do ostatniego detalu."
    />

    <CaseStudyBackNav backLabel="Wróć do portfolio" />
  </main>
);

export default StalMarView;
