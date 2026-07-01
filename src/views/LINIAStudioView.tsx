"use client";
import React from "react";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyConcept from "@/components/case-study/CaseStudyConcept";
import CaseStudyDeliverables from "@/components/case-study/CaseStudyDeliverables";
import CaseStudyGoal from "@/components/case-study/CaseStudyGoal";
import CaseStudyProcess from "@/components/case-study/CaseStudyProcess";
import CaseStudyResult from "@/components/case-study/CaseStudyResult";
import CaseStudyPhotoGrid from "@/components/case-study/CaseStudyPhotoGrid";
import CaseStudyTopBack from "@/components/case-study/CaseStudyTopBack";
import CaseStudyBackNav from "@/components/case-study/CaseStudyBackNav";

const heroImage = "/images/portfolio/linia-studio/collov-home-design-H-1j_s0dhCw-unsplash.jpg";
const projectImages = [
  "/images/portfolio/linia-studio/julia-aX1TTOuq83M-unsplash.jpg",
  "/images/portfolio/linia-studio/kam-idris-AUOuawx5B0M-unsplash.jpg",
];

const HeroBrowserFrame: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="relative w-full bg-[#1A1C20] rounded-t-[1.5rem] p-2 sm:p-3 pb-0 shadow-2xl border border-white/5 border-b-0">
    <div className="aspect-[16/10] bg-black rounded-t-xl overflow-hidden relative">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover object-top opacity-95 transition-transform duration-[2s] ease-[0.22,1,0.36,1] hover:scale-[1.02]"
      />
    </div>
    <div className="w-[110%] -ml-[5%] h-3 sm:h-4 bg-[#2A2B30] rounded-b-2xl mt-0 border-t border-white/5 shadow-xl relative z-10" />
  </div>
);

/** Inline mock site — minimal off-white with serif + portfolio grid. */
const LINIAMockSite: React.FC = () => (
  <div
    className="bg-[#F4F1EC] text-[#22231F]"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    {/* Nav */}
    <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-[#22231F]/10">
      <span
        className="text-base tracking-[0.32em] uppercase font-medium"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        LINIA Studio
      </span>
      <div className="hidden md:flex items-center gap-7 text-[0.7rem] tracking-[0.22em] uppercase text-[#22231F]/55">
        <span>Projekty</span>
        <span>Studio</span>
        <span>Proces</span>
        <span>Kontakt</span>
      </div>
      <span className="text-[0.65rem] tracking-[0.22em] uppercase text-[#22231F]/70 border-b border-[#22231F]/40 pb-0.5">
        Zarezerwuj rozmowę
      </span>
    </div>

    {/* Hero */}
    <div className="px-6 md:px-10 py-12 md:py-16">
      <span className="block text-[0.6rem] tracking-[0.32em] uppercase text-[#22231F]/55 mb-5">
        — Pracownia autorska
      </span>
      <h3
        className="text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em] max-w-2xl mb-5"
        style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
      >
        Wnętrze, które oddycha między ścianami.
      </h3>
      <p className="text-sm md:text-base text-[#22231F]/65 leading-[1.7] max-w-xl">
        Projekty mieszkaniowe i komercyjne prowadzone przez jedną osobę — od briefu po nadzór autorski.
      </p>
    </div>

    {/* Portfolio grid */}
    <div className="px-6 md:px-10 pb-12 md:pb-16">
      <div className="flex items-baseline justify-between mb-7">
        <span
          className="text-base md:text-lg tracking-[-0.01em]"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Wybrane realizacje
        </span>
        <span className="text-[0.65rem] tracking-[0.22em] uppercase text-[#22231F]/45">
          2024 — 2026
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {[
          { name: "Apartament Mokotów", year: "2026" },
          { name: "Dom Konstancin", year: "2025" },
          { name: "Atelier Praga", year: "2025" },
          { name: "Penthouse Powiśle", year: "2024" },
        ].map((p, i) => (
          <div key={i} className="group">
            <div className="relative aspect-[4/5] bg-[#22231F]/8 overflow-hidden rounded-sm">
              <img
                src={projectImages[i % projectImages.length]}
                alt={p.name}
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
              />
            </div>
            <div className="pt-3">
              <span
                className="block text-sm md:text-[0.95rem] tracking-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {p.name}
              </span>
              <span className="block text-[0.65rem] tracking-[0.22em] uppercase text-[#22231F]/45 pt-1">
                {p.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Footer band */}
    <div className="px-6 md:px-10 py-6 border-t border-[#22231F]/10 text-[0.65rem] tracking-[0.22em] uppercase text-[#22231F]/45">
      LINIA Studio · Pracownia autorska · Warszawa
    </div>
  </div>
);

const LINIAStudioView: React.FC = () => {
  return (
    <main className="bg-[#08090C] min-h-screen text-white selection:bg-[#C05775]/30">
      <CaseStudyTopBack label="Powrót do portfolio" />

      <CaseStudyHero
        category="Projektowanie wnętrz"
        title="LINIA Studio"
        subtitle="Cyfrowe portfolio architekta wnętrz, w którym pustka jest tak samo zaprojektowana jak materiał."
        visual={<HeroBrowserFrame src={heroImage} alt="LINIA Studio — strona główna" />}
        conceptual
      />

      <CaseStudyConcept
        label="Koncepcja"
        heading="Przestrzeń, która oddycha między projektami."
        body="Strona miała być przedłużeniem warsztatu — bez ozdobników, bez pop-upów, bez agresywnej narracji sprzedażowej. Każde projektowane wnętrze dostaje pełen oddech: dużo białego marginesu, fotografia w pełnej skali, opis krótki i konkretny. Klient czyta projekty jak album architektoniczny, nie jak ofertę."
      />

      <CaseStudyDeliverables
        label="Co zaprojektowaliśmy"
        heading="Strona, która eksponuje pracę — nie ofertę."
        items={[
          "Editorialowa struktura portfolio",
          "Karta projektu z fotografią w pełnej skali",
          "Sekcja procesu współpracy bez sprzedażowego tonu",
          "Atelier visit — formularz prywatnej konsultacji",
          "Mobile-first dla przeglądania w drodze",
          "Headless CMS dla pracowni",
        ]}
      />

      <CaseStudyGoal
        label="Cel projektu"
        heading="Studio wybierane z kolekcjonerską uwagą."
        pillars={[
          {
            label: "Cel",
            body: "Pozycjonować LINIA Studio jako pracownię autorską — dla klientów, którzy szukają jednej osoby z pełną odpowiedzialnością projektową, nie zespołu generycznego.",
          },
          {
            label: "Co poprawiliśmy",
            body: "Stara strona była galerią mieszanego portfolio bez hierarchii. Brakowało narracji, kontekstu projektu i informacji o procesie współpracy.",
          },
          {
            label: "Efekt dla użytkownika",
            body: "Klient ogląda dzieła w spokoju, rozumie metodę pracy i wybiera kontakt świadomie — z gotowością do długiej rozmowy, nie szybkiej wyceny.",
          },
        ]}
      />

      <CaseStudyProcess
        label="Proces"
        heading="Od briefu architektonicznego po wdrożenie."
        steps={[
          {
            number: "01",
            title: "Strategia",
            description:
              "Rozmowa o klientach docelowych, archetypie pracowni i decyzjach projektowych, których nie negocjujemy.",
          },
          {
            number: "02",
            title: "Struktura",
            description:
              "Mapa stron: portfolio jako rdzeń, proces współpracy, atelier visit, krótka biografia. Bez kategorii, bez filtrów.",
          },
          {
            number: "03",
            title: "Design",
            description:
              "System wizualny: szeryfowa typografia, paleta off-white + grafit, fotografia w pełnej skali — bez crop'owania pod siatkę.",
          },
          {
            number: "04",
            title: "Wdrożenie",
            description:
              "Headless CMS dla pracowni, lazy loading dużej fotografii, Core Web Vitals w zielonym pasku.",
          },
        ]}
      />

      <CaseStudyResult
        label="Efekt"
        body="Studio, które ogląda się jak monografię. Klient kontaktuje się gotowy na rozmowę — nie szuka wyceny, szuka autora."
      />

      <CaseStudyPhotoGrid
        label="Klimat projektu"
        heading="Editorial layout, fotografia w pełnej skali."
        caption="Projekty bez filtrów i kategorii. Klient ogląda monografię, nie sklep."
        images={[
          "/images/portfolio/linia-studio/julia-aX1TTOuq83M-unsplash.jpg",
          "/images/portfolio/linia-studio/kam-idris-hYb7kbu4x7E-unsplash.jpg",
          "/images/portfolio/linia-studio/bilal-mansuri-UUnxaJyzqb4-unsplash.jpg",
        ]}
      />

      <CaseStudyBackNav backLabel="Powrót do portfolio" />
    </main>
  );
};

export default LINIAStudioView;
