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

// Live screenshot of daniel-kanzlei.de rendered through Microlink (free screenshot API).
const heroImage =
  "https://api.microlink.io/?url=https%3A%2F%2Fdaniel-kanzlei.de%2Fen&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1600&viewport.height=1000";

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

/**
 * Mini mockup faithful to the real daniel-kanzlei.de — same headline,
 * services and trust signals from the live English site, lightly re-styled
 * in our editorial palette.
 */
const DanielKanzleiMockSite: React.FC = () => (
  <div
    className="bg-[#F4F1EC] text-[#1B2030]"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    {/* Nav */}
    <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-[#1B2030]/10">
      <span
        className="text-base tracking-[0.32em] uppercase font-semibold"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        Daniel Kanzlei
      </span>
      <div className="hidden md:flex items-center gap-7 text-[0.7rem] tracking-[0.22em] uppercase text-[#1B2030]/55">
        <span>About us</span>
        <span>Our services</span>
        <span>Knowledge base</span>
        <span>Contact</span>
      </div>
      <span className="text-[0.65rem] tracking-[0.22em] uppercase font-semibold bg-[#1E3A5F] text-white px-4 py-2 rounded-full">
        Book a Consultation
      </span>
    </div>

    {/* Hero */}
    <div className="px-6 md:px-10 py-12 md:py-16">
      <span className="block text-[0.6rem] tracking-[0.32em] uppercase text-[#1E3A5F] mb-5">
        — Berlin · Tax &amp; Accounting
      </span>
      <h3
        className="text-3xl md:text-5xl font-semibold leading-[1.05] tracking-[-0.025em] max-w-3xl mb-5"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        Accounting and Tax Advisory in Germany for Businesses and Individuals.
      </h3>
      <p className="text-sm md:text-base text-[#1B2030]/70 leading-[1.7] max-w-xl mb-7">
        Over 16 years of experience in bookkeeping, tax returns, and legal consulting.
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.28em] uppercase font-semibold bg-[#1E3A5F] text-white px-6 py-3 rounded-full">
          Book a Consultation
          <span className="text-[0.7em]">→</span>
        </span>
        <span className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.28em] uppercase font-semibold border border-[#1B2030]/20 text-[#1B2030] px-6 py-3 rounded-full">
          Learn more
        </span>
      </div>
    </div>

    {/* Trust strip */}
    <div className="px-6 md:px-10 py-6 md:py-8 border-t border-[#1B2030]/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center bg-white/55">
      {[
        { value: "16+", label: "years on the market" },
        { value: "1500+", label: "satisfied clients" },
        { value: "24h", label: "response time" },
        { value: "5", label: "languages spoken" },
      ].map((t, i) => (
        <div key={i} className="border-r last:border-r-0 border-[#1B2030]/10 px-2">
          <span
            className="block text-base md:text-xl font-semibold tracking-[-0.02em]"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            {t.value}
          </span>
          <span className="block text-[0.6rem] tracking-[0.22em] uppercase text-[#1B2030]/50 mt-1">
            {t.label}
          </span>
        </div>
      ))}
    </div>

    {/* Services */}
    <div className="px-6 md:px-10 py-10 md:py-14 border-t border-[#1B2030]/8">
      <span className="block text-[0.6rem] tracking-[0.32em] uppercase text-[#1E3A5F] mb-4">
        — Our services
      </span>
      <h4
        className="text-xl md:text-2xl font-semibold tracking-[-0.02em] mb-7"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        Full coverage on the German tax landscape.
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {[
          {
            num: "01",
            title: "Accounting and bookkeeping",
            desc: "Comprehensive accounting and tax support for businesses operating in Germany.",
          },
          {
            num: "02",
            title: "Tax refund in Germany",
            desc: "Recover overpaid German taxes — claims handled up to four years back.",
          },
          {
            num: "03",
            title: "Construction tax exemption",
            desc: "Securing the Freistellungsbescheinigung that exempts you from the 15% withholding.",
          },
          {
            num: "04",
            title: "Kindergeld &amp; Family 800+",
            desc: "Coordinating Kindergeld and family benefits across the German and Polish systems.",
          },
          {
            num: "05",
            title: "Company formation in Germany",
            desc: "Choosing the legal form, registration and first-year compliance support.",
          },
          {
            num: "06",
            title: "Annual tax return (Steuererklärung)",
            desc: "Preparing and filing your German Steuererklärung end-to-end.",
          },
        ].map((s, i) => (
          <div
            key={i}
            className="border border-[#1B2030]/12 rounded-md p-5 bg-white hover:border-[#1E3A5F]/40 transition-colors"
          >
            <div className="flex items-start gap-4">
              <span className="text-[#1E3A5F] text-[0.6rem] tracking-[0.32em] uppercase font-semibold pt-1">
                {s.num}
              </span>
              <div>
                <span
                  className="block text-sm md:text-base font-semibold tracking-[-0.01em] mb-1.5"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <span
                  className="block text-xs md:text-[0.85rem] text-[#1B2030]/65 leading-[1.55]"
                  dangerouslySetInnerHTML={{ __html: s.desc }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Why us */}
    <div className="px-6 md:px-10 py-10 md:py-14 bg-white/55 border-t border-[#1B2030]/8">
      <span className="block text-[0.6rem] tracking-[0.32em] uppercase text-[#1E3A5F] mb-4">
        — Why us
      </span>
      <h4
        className="text-xl md:text-2xl font-semibold tracking-[-0.02em] mb-7"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        Trust built on results that can be counted.
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-2 text-sm md:text-[0.95rem]">
        {[
          "16 years of hands-on practice in German tax advisory",
          "1500+ businesses and individuals served end-to-end",
          "Multi-lingual support — English, German, Polish and more",
          "Direct line to the advisor — no junior hand-offs",
          "Transparent fees, fixed scope, no surprises in the invoice",
        ].map((w, i) => (
          <div
            key={i}
            className="flex items-start gap-3 py-2 border-b last:border-b-0 border-[#1B2030]/8"
          >
            <span className="text-[#1E3A5F] text-[0.7rem] pt-1">●</span>
            <span>{w}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Footer */}
    <div className="px-6 md:px-10 py-8 md:py-10 border-t border-[#1B2030]/10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
      <div>
        <span
          className="block text-[0.65rem] tracking-[0.32em] uppercase font-semibold text-[#1E3A5F] mb-2"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Office
        </span>
        <span className="block text-xs md:text-[0.85rem] text-[#1B2030]/70 leading-[1.55]">
          Berlin, Germany
        </span>
      </div>
      <div>
        <span
          className="block text-[0.65rem] tracking-[0.32em] uppercase font-semibold text-[#1E3A5F] mb-2"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          E-mail
        </span>
        <span className="block text-xs md:text-[0.85rem] text-[#1B2030]/70 leading-[1.55]">
          info@daniel-kanzlei.de
        </span>
      </div>
      <div>
        <span
          className="block text-[0.65rem] tracking-[0.32em] uppercase font-semibold text-[#1E3A5F] mb-2"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Phone
        </span>
        <span className="block text-xs md:text-[0.85rem] text-[#1B2030]/70 leading-[1.55]">
          +49 30 600 59 433
        </span>
      </div>
    </div>

    <div className="px-6 md:px-10 py-5 border-t border-[#1B2030]/10 text-[0.65rem] tracking-[0.22em] uppercase text-[#1B2030]/45">
      © Daniel Kanzlei · Berlin · info@daniel-kanzlei.de
    </div>
  </div>
);

const DanielKanzleiView: React.FC = () => {
  return (
    <main className="bg-[#08090C] min-h-screen text-white selection:bg-[#C05775]/30">
      <CaseStudyTopBack label="Powrót do portfolio" />

      <CaseStudyHero
        category="Biuro rachunkowe"
        title="Daniel Kanzlei"
        subtitle="Berlińska kancelaria podatkowo-księgowa z 16-letnim doświadczeniem — strona, która tłumaczy zawiłą tematykę niemieckiego prawa podatkowego w sposób spokojny i pewny."
        visual={<HeroBrowserFrame src={heroImage} alt="daniel-kanzlei.de — strona główna" />}
      />

      <CaseStudyConcept
        label="Koncepcja"
        heading="Autorytet zaczyna się przed pierwszym e-mailem."
        body="Strony kancelarii i biur rachunkowych zwykle wyglądają jak formularz w urzędzie — ścianka tekstu, lista usług w punktach, ikonki ze stocku. Daniel Kanzlei pokazujemy inaczej. Komunikacja jest jak rozmowa z dobrym doradcą: konkretna, spokojna, bez urzędniczego żargonu. Klient — przedsiębiorca lub osoba prywatna w Niemczech — rozumie, jaką usługę dostaje, jeszcze zanim zadzwoni do biura w Berlinie."
      />

      <CaseStudyDeliverables
        label="Co zaprojektowaliśmy"
        heading="Strona, która tłumaczy niemieckie prawo podatkowe bez skrótów."
        items={[
          "Hero z prawdziwym headlinem klienta i dwoma CTA",
          "Pasek zaufania: 16+ lat, 1500+ klientów, 24h, 5 języków",
          "Sekcja 6 usług — od księgowości po Steuererklärung",
          'Sekcja „Why us" z dowodami na liczbach',
          "Stopka z biurem w Berlinie i bezpośrednim kontaktem",
          "Mobile-first dla pytań zadawanych w trasie",
        ]}
      />

      <CaseStudyGoal
        label="Cel projektu"
        heading="Kancelaria pierwszego wyboru — nie awaryjna."
        pillars={[
          {
            label: "Cel",
            body: "Pozycjonować Daniel Kanzlei jako partnera długoterminowego dla przedsiębiorców i osób prywatnych w Niemczech — nie jako jednorazową usługę zwrotu podatku.",
          },
          {
            label: "Co poprawiliśmy",
            body: "Stara strona była statyczną listą usług bez kontekstu — brakowało wyjaśnienia procesu, profilu zespołu i jasnych liczb, które budują autorytet doradcy.",
          },
          {
            label: "Efekt dla użytkownika",
            body: "Klient czyta sekcje, rozumie ofertę i rezerwuje konsultację gotowy na rozmowę o konkretnym problemie — Freistellung, Kindergeld, rejestracja firmy w DE.",
          },
        ]}
      />

      <CaseStudyProcess
        label="Proces"
        heading="Od briefu po wdrożenie — bez urzędniczego żargonu."
        steps={[
          {
            number: "01",
            title: "Strategia",
            description:
              "Rozmowa z Danielem o profilu klienta i języku rynku berlińskiego — kiedy zwracamy się po angielsku, kiedy po niemiecku, kiedy po polsku.",
          },
          {
            number: "02",
            title: "Struktura",
            description:
              "Architektura strony: usługi → liczby zaufania → Steuererklärung → konsultacja. Bez kalkulatorów, bez szybkich wycen online.",
          },
          {
            number: "03",
            title: "Design",
            description:
              "Paleta granat + cream + delikatny gold. Typografia spokojna, sekcje ułożone jak dobrze przygotowana umowa — czytelne i bez niespodzianek.",
          },
          {
            number: "04",
            title: "Wdrożenie",
            description:
              "Wielojęzyczne wersje EN/DE/PL, RODO/DSGVO-zgodny formularz, mobile-first dla klientów odbierających mail z telefonu w Berlinie.",
          },
        ]}
      />

      <CaseStudyResult
        label="Efekt"
        body="Strona, która buduje autorytet zanim klient zadzwoni. Pierwsza rozmowa to konsultacja — nie kwestionariusz."
      />

      <CaseStudyMiniMockup
        label="Sekcje strony"
        heading="Tak prowadzimy klienta od pierwszego scrolla do telefonu do biura."
        caption={
          'Headline klienta i 6 prawdziwych usług w editorialowej oprawie. Pasek 16+ lat / 1500+ klientów, sekcja „Why us" i berlińska stopka — wszystko w jednym spokojnym rytmie.'
        }
        url="daniel-kanzlei.de"
        innerBg="bg-[#F4F1EC]"
      >
        <DanielKanzleiMockSite />
      </CaseStudyMiniMockup>

      <CaseStudyBackNav backLabel="Powrót do portfolio" />
    </main>
  );
};

export default DanielKanzleiView;
