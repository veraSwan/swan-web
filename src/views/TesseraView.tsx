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

const heroImage =
  "/images/portfolio/tessera/klara-kulikova-yjQDnOhGE34-unsplash.jpg";

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

/** Inline mock site — fine dining burgundy + cream + copper. */
const TesseraMockSite: React.FC = () => (
  <div
    className="bg-[#FAF5EE] text-[#1F1410]"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    {/* Nav */}
    <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-[#1F1410]/10">
      <span
        className="text-base tracking-[0.32em] uppercase font-medium"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        Tessera
      </span>
      <div className="hidden md:flex items-center gap-7 text-[0.7rem] tracking-[0.22em] uppercase text-[#1F1410]/55">
        <span>Filozofia</span>
        <span>Menu</span>
        <span>Sommelier</span>
        <span>Kontakt</span>
      </div>
      <span className="text-[0.65rem] tracking-[0.22em] uppercase font-semibold bg-[#7A2336] text-white px-4 py-2 rounded-full">
        Rezerwacja
      </span>
    </div>

    {/* Hero */}
    <div className="px-6 md:px-10 py-12 md:py-16">
      <span className="block text-[0.6rem] tracking-[0.32em] uppercase text-[#7A2336] mb-5">
        — Kuchnia autorska
      </span>
      <h3
        className="text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em] max-w-2xl mb-5"
        style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
      >
        Wieczór, który zaczyna się od pierwszego kęsu.
      </h3>
      <p className="text-sm md:text-base text-[#1F1410]/70 leading-[1.7] max-w-xl mb-7">
        Sezonowe menu degustacyjne komponowane przez szefa kuchni. Bez stałej karty — tylko bieżący rytm produktu.
      </p>
      <span className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.28em] uppercase font-semibold bg-[#7A2336] text-white px-6 py-3 rounded-full">
        Rezerwuj stolik
        <span className="text-[0.7em]">→</span>
      </span>
    </div>

    {/* Menu + reservation */}
    <div className="px-6 md:px-10 py-10 md:py-14 bg-white/55 border-t border-[#1F1410]/8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10">
        <div>
          <span className="block text-[0.6rem] tracking-[0.32em] uppercase text-[#7A2336] mb-4">
            — Menu degustacyjne · Hiver 2026
          </span>
          <h4
            className="text-xl md:text-2xl tracking-[-0.02em] mb-5"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Sześć odsłon sezonu.
          </h4>
          <div className="space-y-4">
            {[
              { name: "Topinambur, kawior i kawa", note: "Amuse-bouche" },
              { name: "Burak pieczony, kozi ser, miód gryczany", note: "Pierwsze danie" },
              { name: "Sandacz, masło z kwiatu chmielu", note: "Drugie danie" },
              { name: "Sarna, cykoria, jagody", note: "Główne danie" },
              { name: "Pre-dessert: gruszka i lawenda", note: "Pre-dessert" },
              { name: "Czekolada, kasztan, kardamon", note: "Deser" },
            ].map((d, i) => (
              <div
                key={i}
                className="flex items-baseline justify-between gap-4 border-b border-[#1F1410]/8 pb-3"
              >
                <div>
                  <span
                    className="block text-sm md:text-base tracking-[-0.01em]"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {d.name}
                  </span>
                  <span className="block text-[0.6rem] tracking-[0.22em] uppercase text-[#1F1410]/45 pt-1">
                    {d.note}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-baseline justify-between mt-5 pt-4 border-t border-[#1F1410]/15">
            <span className="text-[0.65rem] tracking-[0.22em] uppercase text-[#1F1410]/55">
              Sześć dań
            </span>
            <span
              className="text-base md:text-lg"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              420 zł
            </span>
          </div>
        </div>

        <div>
          <span className="block text-[0.6rem] tracking-[0.32em] uppercase text-[#7A2336] mb-4">
            — Rezerwacja stolika
          </span>
          <h4
            className="text-xl md:text-2xl tracking-[-0.02em] mb-5"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Wybierz spokojnie wieczór.
          </h4>

          <div className="space-y-3">
            <div>
              <span className="block text-[0.6rem] tracking-[0.22em] uppercase text-[#1F1410]/45 mb-1.5">
                Data
              </span>
              <div className="border border-[#1F1410]/15 rounded-md px-4 py-2.5 text-sm">
                Sobota, 21 listopada
              </div>
            </div>
            <div>
              <span className="block text-[0.6rem] tracking-[0.22em] uppercase text-[#1F1410]/45 mb-1.5">
                Liczba osób
              </span>
              <div className="border border-[#1F1410]/15 rounded-md px-4 py-2.5 text-sm">
                2 osoby
              </div>
            </div>
            <div>
              <span className="block text-[0.6rem] tracking-[0.22em] uppercase text-[#1F1410]/45 mb-1.5">
                Wolne godziny
              </span>
              <div className="grid grid-cols-3 gap-2">
                {["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"].map((t, i) => (
                  <span
                    key={i}
                    className={`text-xs md:text-sm py-2.5 rounded-md border text-center ${
                      i === 3
                        ? "bg-[#7A2336] text-white border-transparent"
                        : "border-[#1F1410]/15 text-[#1F1410]/75"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <span className="inline-flex items-center justify-center w-full mt-2 text-[0.7rem] tracking-[0.28em] uppercase font-semibold bg-[#1F1410] text-white px-4 py-3 rounded-md">
              Potwierdź rezerwację
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="px-6 md:px-10 py-6 border-t border-[#1F1410]/10 text-[0.65rem] tracking-[0.22em] uppercase text-[#1F1410]/45">
      Tessera · Restauracja autorska · Warszawa
    </div>
  </div>
);

const TesseraView: React.FC = () => {
  return (
    <main className="bg-[#08090C] min-h-screen text-white selection:bg-[#C05775]/30">
      <CaseStudyTopBack label="Powrót do portfolio" />

      <CaseStudyHero
        category="Fine dining"
        title="Tessera"
        subtitle="Restauracja autorska, której strona przedstawia menu degustacyjne tak samo starannie, jak szef układa talerz."
        visual={<HeroBrowserFrame src={heroImage} alt="Tessera — strona główna" />}
        conceptual
      />

      <CaseStudyConcept
        label="Koncepcja"
        heading="Strona jako pierwsza degustacja."
        body="Większość restauracji fine dining dostaje stronę-wizytówkę: zdjęcie wnętrza, mapa, formularz rezerwacji. Dla Tessery zaprojektowaliśmy doświadczenie editorial — menu degustacyjne czyta się jak liryczną notatkę kucharza, każdy danie ma swój moment, a rezerwacja prowadzi przez wybór profilu wieczoru, nie tylko stolika."
      />

      <CaseStudyDeliverables
        label="Co zaprojektowaliśmy"
        heading="Strona, która zaczyna kolację jeszcze przed rezerwacją."
        items={[
          "Editorial menu degustacyjne sezonowe",
          "Sekcja sommeliera i autorskich pairing'ów",
          "System rezerwacji z wyborem profilu wieczoru",
          "Krótkie noty od szefa kuchni",
          "Mobile-first dla rezerwacji last-minute",
          "CMS dla sezonowego menu",
        ]}
      />

      <CaseStudyGoal
        label="Cel projektu"
        heading="Restauracja, w której rezerwacja jest częścią rytuału."
        pillars={[
          {
            label: "Cel",
            body: "Pozycjonować Tesserę jako adres dla okazji świadomych — nie jako miejsce do szybkiej kolacji znalezione w Google Maps.",
          },
          {
            label: "Co poprawiliśmy",
            body: "Zlikwidowane długie menu PDF z cenami obok nazw, zlikwidowany formularz rezerwacji bez kontekstu. W zamian — narracja sezonowa, profil wieczoru i krótkie noty od szefa kuchni.",
          },
          {
            label: "Efekt dla użytkownika",
            body: "Gość rezerwuje stolik z oczekiwaniem konkretnej narracji — wie czy idzie na kolację towarzyską, czy na kameralną degustację z winem.",
          },
        ]}
      />

      <CaseStudyProcess
        label="Proces"
        heading="Od briefu kulinarnego po wdrożenie."
        steps={[
          {
            number: "01",
            title: "Strategia",
            description:
              "Rozmowa z szefem kuchni i sommelierem, definiowanie sezonowego rytmu, mapowanie ścieżki gościa od pierwszej myśli o rezerwacji do ostatniego deseru.",
          },
          {
            number: "02",
            title: "Struktura",
            description:
              "Architektura strony: filozofia → menu sezonowe → profile wieczoru → rezerwacja. Bez galerii ze stockowymi zdjęciami jedzenia.",
          },
          {
            number: "03",
            title: "Design",
            description:
              "Paleta winnego burgundu + kremu + ciepłej miedzi. Szeryfowa typografia kursywą do not kucharza, fotografia studyjna w naturalnym świetle.",
          },
          {
            number: "04",
            title: "Wdrożenie",
            description:
              "System rezerwacji z wyborem profilu wieczoru, integracja z OpenTable, sezonowy CMS dla menu, mobile-first dla rezerwacji w ostatniej chwili.",
          },
        ]}
      />

      <CaseStudyResult
        label="Efekt"
        body="Strona, która zaczyna kolację jeszcze przed rezerwacją. Gość przychodzi z oczekiwaniem precyzyjnym jak menu degustacyjne."
      />

      <CaseStudyPhotoGrid
        label="Klimat projektu"
        heading="Menu degustacyjne zaczyna się od scrolla."
        caption="Sezonowe noty kucharza, rezerwacja z wyborem profilu wieczoru. Każda sekcja oddaje tempo restauracji."
        images={[
          "/images/portfolio/tessera/anima-visual-pn7dIk2kiYw-unsplash.jpg",
          "/images/portfolio/tessera/jay-wennington-N_Y88TWmGwA-unsplash.jpg",
          "/images/portfolio/tessera/glenov-brankovic-e4B5AvA7Jqo-unsplash.jpg",
        ]}
      />

      <CaseStudyBackNav backLabel="Powrót do portfolio" />
    </main>
  );
};

export default TesseraView;
