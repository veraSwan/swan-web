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
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80";

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

/** Inline mock website preview — soft off-white clinic vibe. */
const SmileMockSite: React.FC = () => (
  <div
    className="bg-[#FAF7F4] text-[#2A2C36]"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    {/* Nav */}
    <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-[#2A2C36]/10">
      <span
        className="text-sm tracking-[0.32em] uppercase font-medium"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        Smile Studio
      </span>
      <div className="hidden md:flex items-center gap-7 text-[0.7rem] tracking-[0.22em] uppercase text-[#2A2C36]/60">
        <span>Zabiegi</span>
        <span>Specjaliści</span>
        <span>Cennik</span>
        <span>Kontakt</span>
      </div>
      <span className="text-[0.65rem] tracking-[0.22em] uppercase font-semibold bg-[#9B6B6B] text-white px-4 py-2 rounded-full">
        Umów wizytę
      </span>
    </div>

    {/* Hero band */}
    <div className="px-6 md:px-10 py-12 md:py-16">
      <span className="block text-[0.6rem] tracking-[0.32em] uppercase text-[#9B6B6B] mb-5">
        — Stomatologia
      </span>
      <h3
        className="text-3xl md:text-5xl font-medium leading-[1.05] tracking-[-0.025em] max-w-2xl mb-5"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        Wizyta zaczyna się od rozmowy.
      </h3>
      <p className="text-sm md:text-base text-[#2A2C36]/70 leading-[1.7] max-w-xl mb-7">
        Konsultacje i zabiegi prowadzone z uwagą. Bez presji, bez krzykliwych
        promocji — tylko rozmowa o leczeniu.
      </p>
      <span className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.28em] uppercase font-semibold bg-[#9B6B6B] text-white px-6 py-3 rounded-full">
        Umów konsultację
        <span className="text-[0.7em]">→</span>
      </span>
    </div>

    {/* Booking band */}
    <div className="px-6 md:px-10 py-10 md:py-14 bg-white/55 border-t border-[#2A2C36]/8">
      <span className="block text-[0.6rem] tracking-[0.32em] uppercase text-[#9B6B6B] mb-4">
        — Rezerwacja wizyty
      </span>
      <h4
        className="text-xl md:text-2xl font-medium tracking-[-0.02em] mb-7"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        Wybierz spokojnie termin.
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10">
        <div className="space-y-3">
          <span className="block text-[0.6rem] tracking-[0.22em] uppercase text-[#2A2C36]/45 mb-2">
            Zabiegi
          </span>
          {[
            { name: "Konsultacja", price: "bezpłatna" },
            { name: "Higienizacja", price: "od 280 zł" },
            { name: "Wybielanie", price: "od 1 200 zł" },
            { name: "Implant", price: "konsultacja" },
          ].map((t, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b border-[#2A2C36]/8 pb-3"
            >
              <span className="text-sm md:text-base">{t.name}</span>
              <span className="text-xs md:text-sm text-[#2A2C36]/55">{t.price}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <span className="block text-[0.6rem] tracking-[0.22em] uppercase text-[#2A2C36]/45 mb-2">
            Wolne terminy — 16 listopada
          </span>
          <div className="grid grid-cols-3 gap-2">
            {["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"].map((t, i) => (
              <span
                key={i}
                className={`text-xs md:text-sm py-2.5 rounded-md border text-center ${
                  i === 2
                    ? "bg-[#9B6B6B] text-white border-transparent"
                    : "border-[#2A2C36]/15 text-[#2A2C36]/75"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center justify-center w-full mt-2 text-[0.7rem] tracking-[0.28em] uppercase font-semibold bg-[#2A2C36] text-white px-4 py-3 rounded-md">
            Potwierdź rezerwację
          </span>
        </div>
      </div>
    </div>

    {/* Footer band */}
    <div className="px-6 md:px-10 py-6 border-t border-[#2A2C36]/10 text-[0.65rem] tracking-[0.22em] uppercase text-[#2A2C36]/45">
      Smile Studio · Warszawa · ul. Mokotowska 21
    </div>
  </div>
);

const SmileStudioView: React.FC = () => {
  return (
    <main className="bg-[#08090C] min-h-screen text-white selection:bg-[#C05775]/30">
      <CaseStudyTopBack label="Powrót do portfolio" />

      <CaseStudyHero
        category="Stomatologia premium"
        title="Smile Studio"
        subtitle="Klinika dentystyczna, która komunikuje pewność siebie ciszą — bez krzyczących promocji i bez „pakietów weekendowych”."
        visual={<HeroBrowserFrame src={heroImage} alt="Smile Studio — strona główna" />}
      />

      <CaseStudyConcept
        label="Koncepcja"
        heading="Spokój zaczyna się przed fotelem."
        body="Strony klinik dentystycznych zazwyczaj sprzedają obawą — „nie odkładaj”, „przyjdź dziś”. Smile Studio robi inaczej. Komunikacja jest spokojna, gabinet pokazujemy bez sprzętu na pierwszym planie, a zabiegi opisujemy precyzyjnie i bez sloganu. Pacjent przychodzi przygotowany — wie kogo spotka, ile to potrwa i czego się spodziewać."
      />

      <CaseStudyDeliverables
        label="Co zaprojektowaliśmy"
        heading="Strona, na której rezerwacja czuje się jak konsultacja."
        items={[
          "Spokojna komunikacja zabiegów — bez clickbaitu",
          "System rezerwacji wizyt z wyborem specjalisty",
          "Profile lekarzy i transparentne certyfikaty",
          "Cennik bez ukrytych pozycji i gwiazdek",
          "Mobile-first dla wizyt umawianych w drodze",
          "CMS dla harmonogramu i nowych zabiegów",
        ]}
      />

      <CaseStudyGoal
        label="Cel projektu"
        heading="Klinika wybierana świadomie — nie z bólu."
        pillars={[
          {
            label: "Cel",
            body: "Pozycjonować Smile Studio jako gabinet pierwszego wyboru dla pacjentów, którzy traktują zdrowie jamy ustnej długoterminowo — nie awaryjnie.",
          },
          {
            label: "Co poprawiliśmy",
            body: "Generic szablon kliniki z agresywnymi promocjami i licznikiem „ostatnie wolne terminy”. W zamian — transparentne ceny, opisy zabiegów krok po kroku i profile lekarzy z certyfikatami.",
          },
          {
            label: "Efekt dla użytkownika",
            body: "Pacjent rezerwuje wizytę spokojnie, czyta opis zabiegu z wyprzedzeniem i wchodzi do gabinetu bez napięcia z poczekalni.",
          },
        ]}
      />

      <CaseStudyProcess
        label="Proces"
        heading="Od briefu medycznego po wdrożenie."
        steps={[
          {
            number: "01",
            title: "Strategia",
            description:
              "Rozmowa z lekarzami, definiowanie tonu komunikacji, mapowanie ścieżki pacjenta od pierwszego niepokoju do kontroli po zabiegu.",
          },
          {
            number: "02",
            title: "Struktura",
            description:
              "Architektura informacji: zabieg → specjalista → cena → rezerwacja. Bez ślepych uliczek, bez ukrywania kosztów.",
          },
          {
            number: "03",
            title: "Design",
            description:
              "Paleta off-white + ciepły piasek + delikatny róż. Typografia spokojna, fotografia natural light, gabinet pokazany w pełnej skali.",
          },
          {
            number: "04",
            title: "Wdrożenie",
            description:
              "System rezerwacji wizyt z wyborem specjalisty, RODO-zgodny formularz konsultacji, mobile-first dla wizyt umawianych w drodze.",
          },
        ]}
      />

      <CaseStudyResult
        label="Efekt"
        body="Strona, która rozbraja niepokój zanim pacjent zadzwoni. Pierwszy kontakt to rozmowa o leczeniu — nie o promocji."
      />

      <CaseStudyMiniMockup
        label="Sekcje strony"
        heading="Tak prowadzimy pacjenta od pierwszego ekranu do rezerwacji."
        caption="Spokojna nawigacja, transparentny cennik, kalendarz bez wibracji ofert ostatniej szansy. Każda sekcja ma jeden cel — ułatwić decyzję."
        url="smilestudio.pl"
        innerBg="bg-[#FAF7F4]"
      >
        <SmileMockSite />
      </CaseStudyMiniMockup>

      <CaseStudyBackNav backLabel="Powrót do portfolio" />
    </main>
  );
};

export default SmileStudioView;
