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
  "/images/portfolio/calma-studio/auroom-wellness-FrQ6kiZcBl4-unsplash.jpg";

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

/** Inline mock site — sage + cream slow-life palette. */
const CalmaMockSite: React.FC = () => (
  <div
    className="bg-[#F1EEE7] text-[#2D3A32]"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    {/* Nav */}
    <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-[#2D3A32]/10">
      <span
        className="text-base tracking-[0.32em] uppercase font-medium"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        Calma Studio
      </span>
      <div className="hidden md:flex items-center gap-7 text-[0.7rem] tracking-[0.22em] uppercase text-[#2D3A32]/55">
        <span>Filozofia</span>
        <span>Zabiegi</span>
        <span>Cennik</span>
        <span>Kontakt</span>
      </div>
      <span className="text-[0.65rem] tracking-[0.22em] uppercase font-semibold bg-[#7A9079] text-white px-4 py-2 rounded-full">
        Rezerwacja
      </span>
    </div>

    {/* Hero */}
    <div className="px-6 md:px-10 py-12 md:py-16">
      <span className="block text-[0.6rem] tracking-[0.32em] uppercase text-[#7A9079] mb-5">
        — Slow wellness
      </span>
      <h3
        className="text-3xl md:text-5xl font-medium leading-[1.05] tracking-[-0.025em] max-w-2xl mb-5"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        Cisza zaczyna się od scrolla.
      </h3>
      <p className="text-sm md:text-base text-[#2D3A32]/70 leading-[1.7] max-w-xl mb-7">
        Zabiegi prowadzone w naturalnym tempie. Konsultacja zawsze przed pierwszą wizytą.
      </p>
      <span className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.28em] uppercase font-semibold bg-[#7A9079] text-white px-6 py-3 rounded-full">
        Umów wizytę
        <span className="text-[0.7em]">→</span>
      </span>
    </div>

    {/* Treatments + slots */}
    <div className="px-6 md:px-10 py-10 md:py-14 bg-white/55 border-t border-[#2D3A32]/8">
      <span className="block text-[0.6rem] tracking-[0.32em] uppercase text-[#7A9079] mb-4">
        — Harmonogram
      </span>
      <h4
        className="text-xl md:text-2xl font-medium tracking-[-0.02em] mb-7"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        Wybierz spokojnie zabieg.
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10">
        <div className="space-y-3">
          <span className="block text-[0.6rem] tracking-[0.22em] uppercase text-[#2D3A32]/45 mb-2">
            Zabiegi
          </span>
          {[
            { name: "Masaż signature", duration: "90 min", price: "od 380 zł" },
            { name: "Rytuał aromaterapii", duration: "120 min", price: "od 520 zł" },
            { name: "Zabieg na twarz", duration: "75 min", price: "od 340 zł" },
            { name: "Sauna fińska", duration: "60 min", price: "od 180 zł" },
          ].map((t, i) => (
            <div
              key={i}
              className="flex items-baseline justify-between gap-4 border-b border-[#2D3A32]/8 pb-3"
            >
              <span className="text-sm md:text-base">{t.name}</span>
              <div className="flex items-center gap-3 text-xs md:text-sm text-[#2D3A32]/55 shrink-0">
                <span>{t.duration}</span>
                <span>·</span>
                <span>{t.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <span className="block text-[0.6rem] tracking-[0.22em] uppercase text-[#2D3A32]/45 mb-2">
            Wolne terminy — sobota, 21 listopada
          </span>
          <div className="grid grid-cols-3 gap-2">
            {["10:00", "12:30", "14:00", "16:00", "17:30", "19:00"].map((t, i) => (
              <span
                key={i}
                className={`text-xs md:text-sm py-2.5 rounded-md border text-center ${
                  i === 1
                    ? "bg-[#7A9079] text-white border-transparent"
                    : "border-[#2D3A32]/15 text-[#2D3A32]/75"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center justify-center w-full mt-2 text-[0.7rem] tracking-[0.28em] uppercase font-semibold bg-[#2D3A32] text-white px-4 py-3 rounded-md">
            Potwierdź rezerwację
          </span>
        </div>
      </div>
    </div>

    <div className="px-6 md:px-10 py-6 border-t border-[#2D3A32]/10 text-[0.65rem] tracking-[0.22em] uppercase text-[#2D3A32]/45">
      Calma Studio · Slow wellness · Warszawa
    </div>
  </div>
);

const CalmaStudioView: React.FC = () => {
  return (
    <main className="bg-[#08090C] min-h-screen text-white selection:bg-[#C05775]/30">
      <CaseStudyTopBack label="Powrót do portfolio" />

      <CaseStudyHero
        category="Wellness & SPA"
        title="Calma Studio"
        subtitle="Strona spa, na której tempo zwalnia wcześniej niż wejdziesz przez próg."
        visual={<HeroBrowserFrame src={heroImage} alt="Calma Studio — strona główna" />}
        conceptual
      />

      <CaseStudyConcept
        label="Koncepcja"
        heading="Cyfrowa cisza przed pierwszym oddechem."
        body="Większość stron spa krzyczy promocjami i pakietami. Calma robi inaczej. Strona wygląda jak okładka magazynu wellness — duże zdjęcia, jedna myśl na ekran, brak migających banerów. Klient zwalnia jeszcze przed rezerwacją, a sama wizyta zaczyna się od scrolla."
      />

      <CaseStudyDeliverables
        label="Co zaprojektowaliśmy"
        heading="Strona, która nie sprzedaje pakietów — sprzedaje rytuał."
        items={[
          "Spokojna komunikacja zabiegów — bez countdownów",
          "System rezerwacji w 3 krokach",
          "Profile terapeutek i opisy filozofii pracy",
          "Harmonogram wolnych terminów w czasie rzeczywistym",
          "Mobile-first dla wizyt umawianych w drodze",
          "CMS dla sezonowych rytuałów",
        ]}
      />

      <CaseStudyGoal
        label="Cel projektu"
        heading="Spa wybierane z uwagą — nie z impulsu."
        pillars={[
          {
            label: "Cel",
            body: "Pozycjonować Calma Studio jako miejsce slow life — alternatywę dla pakietów weekendowych i ofert ostatniej szansy.",
          },
          {
            label: "Co poprawiliśmy",
            body: "Zlikwidowane pop-upy z rabatem, zlikwidowane countdowny. W zamian — kalendarz wizyt z naturalnym tempem i opisami zabiegów bez marketingowego żargonu.",
          },
          {
            label: "Efekt dla użytkownika",
            body: "Klient rezerwuje wizytę spokojnie, czyta opisy zabiegów jak menu degustacyjne, a w studiu pojawia się już zrelaksowany.",
          },
        ]}
      />

      <CaseStudyProcess
        label="Proces"
        heading="Od briefu wellness po wdrożenie — w jednym oddechu."
        steps={[
          {
            number: "01",
            title: "Strategia",
            description:
              "Rozmowa z zespołem o filozofii pracy, definiowanie tonu komunikacji i typu klienta, którego chcemy przyciągnąć.",
          },
          {
            number: "02",
            title: "Struktura",
            description:
              "Architektura informacji: filozofia → zabiegi → rezerwacja. Bez bocznych odnóg, bez ofert pakietowych.",
          },
          {
            number: "03",
            title: "Design",
            description:
              "Paleta off-white + sage + ciepły kamień. Typografia szeryfowa do nagłówków, oddech między sekcjami jak w salonie SPA.",
          },
          {
            number: "04",
            title: "Wdrożenie",
            description:
              "Lekka strona nawet z dużymi zdjęciami, integracja systemu rezerwacji, mobile-first dla wizyt umawianych w drodze.",
          },
        ]}
      />

      <CaseStudyResult
        label="Efekt"
        body="Strona, która oddycha jak salon — i w której klient zaczyna swoją wizytę zanim wybierze termin."
      />

      <CaseStudyMiniMockup
        label="Sekcje strony"
        heading="Tak prowadzimy klienta od pierwszego scrolla do rezerwacji."
        caption="Spokojna nawigacja, harmonogram bez wibracji ofert ostatniej szansy, opisy zabiegów czytane jak menu degustacyjne."
        url="calmastudio.pl"
        innerBg="bg-[#F1EEE7]"
      >
        <CalmaMockSite />
      </CaseStudyMiniMockup>

      <CaseStudyBackNav backLabel="Powrót do portfolio" />
    </main>
  );
};

export default CalmaStudioView;
