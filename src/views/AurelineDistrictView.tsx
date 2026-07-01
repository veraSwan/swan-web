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
  "/images/portfolio/aureline-district/joel-filipe-RFDP7_80v5A-unsplash.jpg";

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

/** Inline mock site — dark architectural with cream accents. */
const AurelineMockSite: React.FC = () => (
  <div
    className="bg-[#13141A] text-[#E8E5DD]"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    {/* Nav */}
    <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-white/8">
      <span
        className="text-sm tracking-[0.32em] uppercase font-medium"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        Aureline District
      </span>
      <div className="hidden md:flex items-center gap-7 text-[0.7rem] tracking-[0.22em] uppercase text-[#E8E5DD]/55">
        <span>Inwestycja</span>
        <span>Lokalizacja</span>
        <span>Mieszkania</span>
        <span>Kontakt</span>
      </div>
      <span className="text-[0.65rem] tracking-[0.22em] uppercase text-[#E8E5DD]/85 border border-[#C9B27A]/40 px-4 py-2 rounded-full">
        Prywatna prezentacja
      </span>
    </div>

    {/* Hero */}
    <div className="px-6 md:px-10 py-12 md:py-16">
      <span className="block text-[0.6rem] tracking-[0.32em] uppercase text-[#C9B27A] mb-5">
        — Warszawa · Mokotów
      </span>
      <h3
        className="text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em] max-w-2xl mb-5"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        Adres jako manifest.
      </h3>
      <p className="text-sm md:text-base text-[#E8E5DD]/70 leading-[1.7] max-w-xl">
        Inwestycja klasy premium na Mokotowie. 24 mieszkania, prywatna recepcja, ogród wewnętrzny.
      </p>
    </div>

    {/* Available units */}
    <div className="px-6 md:px-10 py-10 md:py-14 border-t border-white/8">
      <div className="flex items-baseline justify-between mb-7">
        <span
          className="text-base md:text-lg tracking-[-0.01em]"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Dostępne mieszkania
        </span>
        <span className="text-[0.65rem] tracking-[0.22em] uppercase text-[#E8E5DD]/45">
          6 z 24 wolnych
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {[
          { unit: "B 2.04", area: "78 m²", layout: "2 pokoje", floor: "II piętro" },
          { unit: "C 3.07", area: "112 m²", layout: "3 pokoje", floor: "III piętro" },
          { unit: "A 5.11", area: "165 m²", layout: "Penthouse", floor: "V piętro" },
        ].map((u, i) => (
          <div
            key={i}
            className="border border-white/10 rounded-md p-5 bg-white/[0.02] hover:border-[#C9B27A]/40 transition-colors"
          >
            <div className="flex items-baseline justify-between mb-3">
              <span
                className="text-base md:text-lg tracking-[-0.01em]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {u.unit}
              </span>
              <span className="text-[0.6rem] tracking-[0.22em] uppercase text-[#C9B27A]">
                Dostępne
              </span>
            </div>
            <div className="space-y-1.5 text-xs md:text-sm text-[#E8E5DD]/70">
              <div className="flex justify-between">
                <span>Powierzchnia</span>
                <span className="text-[#E8E5DD]">{u.area}</span>
              </div>
              <div className="flex justify-between">
                <span>Układ</span>
                <span className="text-[#E8E5DD]">{u.layout}</span>
              </div>
              <div className="flex justify-between">
                <span>Piętro</span>
                <span className="text-[#E8E5DD]">{u.floor}</span>
              </div>
            </div>
            <span className="block mt-4 text-[0.65rem] tracking-[0.22em] uppercase text-[#C9B27A] border-t border-white/8 pt-3">
              Zobacz plan piętra →
            </span>
          </div>
        ))}
      </div>
    </div>

    <div className="px-6 md:px-10 py-6 border-t border-white/8 text-[0.65rem] tracking-[0.22em] uppercase text-[#E8E5DD]/45">
      Aureline District · Warszawa · Mokotów
    </div>
  </div>
);

const AurelineDistrictView: React.FC = () => {
  return (
    <main className="bg-[#08090C] min-h-screen text-white selection:bg-[#C05775]/30">
      <CaseStudyTopBack label="Powrót do portfolio" />

      <CaseStudyHero
        category="Nieruchomości premium"
        title="Aureline District"
        subtitle="Inwestycja klasy premium, której strona przemawia majestatyczną typografią — nie wykrzyknikami w cenniku."
        visual={<HeroBrowserFrame src={heroImage} alt="Aureline District — strona główna" />}
        conceptual
      />

      <CaseStudyConcept
        label="Koncepcja"
        heading="Adres jako manifest, nie listing."
        body="Strona inwestycji premium musi pracować inaczej niż portal ogłoszeniowy. Aureline District prezentujemy jak architektoniczną monografię: duża fotografia bryły, plany piętra w skali, opis sąsiedztwa — bez ceny w hero, bez przycisku „rezerwuj online”. Decyzja o spotkaniu zapada po lekturze, nie po promocji."
      />

      <CaseStudyDeliverables
        label="Co zaprojektowaliśmy"
        heading="Inwestycja prezentowana jak architektoniczna monografia."
        items={[
          "Editorialowa narracja inwestycji",
          "Plany piętra w skali z hover-state",
          "Lista mieszkań z układem i metrażem",
          "Sekcja lokalizacji z mapą i kontekstem",
          "Formularz prywatnej prezentacji",
          "Headless CMS dla działu sprzedaży",
        ]}
      />

      <CaseStudyGoal
        label="Cel projektu"
        heading="Inwestycja z pozycji autorytetu."
        pillars={[
          {
            label: "Cel",
            body: "Pozycjonować Aureline District ponad rynkiem ogłoszeń — jako adres, do którego dochodzi się przez prywatną prezentację, nie przez filtr w portalu.",
          },
          {
            label: "Co poprawiliśmy",
            body: "Generic karty mieszkań z agresywną CTA „Zarezerwuj”, brak narracji wokół architektury, brakujący kontekst lokalizacji.",
          },
          {
            label: "Efekt dla użytkownika",
            body: "Klient rezerwuje prezentację z wizją gotową w głowie — wie, gdzie inwestycja stoi, jaki ma charakter i czy odpowiada jego stylowi życia.",
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
              "Rozmowa z deweloperem o pozycjonowaniu, profilu klienta i decyzjach, których nie negocjujemy (np. brak ceny w komunikacji ulicznej).",
          },
          {
            number: "02",
            title: "Struktura",
            description:
              "Mapa stron: bryła → lokalizacja → mieszkania → prywatna prezentacja. Bez wyszukiwarki ofert, bez filtrów cenowych.",
          },
          {
            number: "03",
            title: "Design",
            description:
              "Typografia majestatyczna jak na okładce magazynu architektonicznego, paleta off-white + grafit, fotografia w pełnej skali, animacje powściągliwe.",
          },
          {
            number: "04",
            title: "Wdrożenie",
            description:
              "Headless CMS dla działu sprzedaży, formularz rezerwacji prywatnej prezentacji, integracja z CRM, mobile-first bez kompromisów typograficznych.",
          },
        ]}
      />

      <CaseStudyResult
        label="Efekt"
        body="Strona, która buduje pozycję przed pierwszym kontaktem. Klient dzwoni już zdecydowany — pyta o termin spotkania, nie o zniżki."
      />

      <CaseStudyMiniMockup
        label="Sekcje strony"
        heading="Tak prowadzimy klienta od bryły do prezentacji."
        caption="Architektura przed cennikiem. Plany piętra w skali, lista dostępnych mieszkań, wszystko utrzymane w tonie magazynu architektonicznego."
        url="aureline-district.pl"
        innerBg="bg-[#13141A]"
      >
        <AurelineMockSite />
      </CaseStudyMiniMockup>

      <CaseStudyBackNav backLabel="Powrót do portfolio" />
    </main>
  );
};

export default AurelineDistrictView;
