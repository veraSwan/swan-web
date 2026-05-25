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
  "https://www.ogrodzeniapila.com.pl/assets/2e8d44192a4c76896571c2b3fd0190418d1eed20.png";

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

const OgrodzeniaGallery: React.FC = () => (
  <div className="bg-[#111214] text-white" style={{ fontFamily: "Inter, sans-serif" }}>
    {/* Nav */}
    <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-white/10">
      <span className="text-sm tracking-[0.28em] uppercase font-semibold text-white" style={{ fontFamily: "DM Sans, sans-serif" }}>
        OGRODZENIA PIŁA
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
        — Ogrodzenia premium · Piła i okolice
      </span>
      <h3 className="text-3xl md:text-5xl font-light text-white leading-[1.1] tracking-tight mb-6 max-w-2xl">
        Precyzja wykonania.<br />
        Trwałość bez kompromisów.
      </h3>
      <p className="text-sm text-white/50 leading-relaxed max-w-md mb-10">
        Projektujemy i montujemy nowoczesne ogrodzenia panelowe, bramy oraz balustrady. Każda realizacja to synonim jakości i dbałości o detal.
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

    {/* Gallery strip */}
    <div className="grid grid-cols-3 gap-1 p-1">
      {[
        "https://www.ogrodzeniapila.com.pl/assets/0e7258048971ea498d36d18ad9c50011295cb506.png",
        "https://www.ogrodzeniapila.com.pl/assets/f57f4a028c4080a6f3b87ff9ad140f817065e2f7.png",
        "https://www.ogrodzeniapila.com.pl/assets/774bca6743eb58c96ff4a5f089b4da29e55fff81.png",
      ].map((src, i) => (
        <div key={i} className="aspect-[4/3] overflow-hidden rounded-sm">
          <img src={src} alt={`Realizacja ${i + 1}`} className="w-full h-full object-cover opacity-80" />
        </div>
      ))}
    </div>

    {/* Services strip */}
    <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10">
      {[
        { title: "Panelowe", desc: "Nowoczesne i trwałe" },
        { title: "Bramy & systemy", desc: "Automatyka i bezpieczeństwo" },
        { title: "Balustrady", desc: "Elegancja i charakter" },
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
    <CaseStudyTopBack label="Powrót do portfolio" />

    <CaseStudyHero
      category="Ogrodzenia / Metaloplastyka"
      title="Ogrodzenia Piła"
      subtitle="Strona firmowa dla producenta nowoczesnych ogrodzeń panelowych, bram i balustrad. Solidne wykonanie w każdym pikselu — tak jak w ich produktach."
      visual={<HeroBrowserFrame src={heroImage} alt="Ogrodzenia Piła — nowoczesne ogrodzenia i bramy" />}
    />

    <CaseStudyGoal
      label="Wyzwanie"
      heading="Firma z 10-letnim doświadczeniem i setkami realizacji — strona, która w końcu to oddaje."
      pillars={[
        {
          label: "Problem",
          body: "Ogrodzenia Piła to marka z ugruntowaną pozycją w regionie — ale stara strona nie przekazywała klasy ich realizacji ani skali działalności.",
        },
        {
          label: "Cel",
          body: "Zbudować wizerunek emanujący solidnością i nowoczesnością: przejrzysta galeria realizacji, szybki kontakt, layout mówiący: jesteśmy profesjonalistami.",
        },
        {
          label: "Efekt",
          body: "Nowa strona działa jak wizytówka premium — buduje zaufanie jeszcze przed pierwszym kontaktem z klientem i ułatwia zapytania o wycenę.",
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
        "Galeria realizacji",
        "Formularz zapytania o wycenę",
        "Responsywność (mobile-first)",
        "Optymalizacja SEO lokalne",
        "Wdrożenie na serwerze",
      ]}
    />

    <CaseStudyMiniMockup
      label="Podgląd projektu"
      heading="Jak wygląda strona Ogrodzenia Piła."
      url="ogrodzeniapila.com.pl"
      innerBg="bg-[#111214]"
    >
      <OgrodzeniaGallery />
    </CaseStudyMiniMockup>

    <CaseStudyProcess
      label="Proces"
      heading="Od rozmowy do gotowej strony."
      steps={[
        { number: "01", title: "Wywiad i analiza", description: "Rozmowa o kliencie docelowym, zakresie usług i potrzebach lokalnych klientów szukających ogrodzenia." },
        { number: "02", title: "Moodboard i kierunek", description: "Ciemna stylistyka premium z metalicznym akcentem — spójna z charakterem branży." },
        { number: "03", title: "Projekt i prototyp", description: "Pełny układ stron z widokiem desktop i mobile, galeria realizacji z prawdziwymi zdjęciami." },
        { number: "04", title: "Wdrożenie", description: "Szybka strona oparta na Next.js, wdrożona na serwerze, zoptymalizowana pod SEO lokalne." },
      ]}
    />

    <CaseStudyResult
      label="Efekt"
      body="Nowa strona Ogrodzenia Piła odwzorowuje jakość, którą firma dostarcza fizycznie. Klient zyskał narzędzie, które buduje zaufanie przed pierwszym kontaktem — estetyczna, szybka i przemyślana do ostatniego detalu. Strona dostępna na żywo pod adresem ogrodzeniapila.com.pl"
    />

    <CaseStudyBackNav backLabel="Wróć do portfolio" />
  </main>
);

export default StalMarView;
