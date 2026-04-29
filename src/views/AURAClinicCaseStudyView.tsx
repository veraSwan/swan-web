"use client";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import BrowserMockup from "@/components/mockups/BrowserMockup";
import PhoneMockup from "@/components/mockups/PhoneMockup";
import MockNav from "@/components/case-study/site-sections/MockNav";
import MockHero from "@/components/case-study/site-sections/MockHero";
import MockEditorial from "@/components/case-study/site-sections/MockEditorial";
import MockBooking from "@/components/case-study/site-sections/MockBooking";
import MockCTA from "@/components/case-study/site-sections/MockCTA";
import MockFooter from "@/components/case-study/site-sections/MockFooter";
import type { MockTheme } from "@/components/case-study/site-sections/types";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyTopBack from "@/components/case-study/CaseStudyTopBack";
import CaseStudyConcept from "@/components/case-study/CaseStudyConcept";
import CaseStudyDeliverables from "@/components/case-study/CaseStudyDeliverables";
import CaseStudyGoal from "@/components/case-study/CaseStudyGoal";
import CaseStudyProcess from "@/components/case-study/CaseStudyProcess";
import CaseStudyResult from "@/components/case-study/CaseStudyResult";
import CaseStudyVisuals from "@/components/case-study/CaseStudyVisuals";
import CaseStudyBackNav from "@/components/case-study/CaseStudyBackNav";

/**
 * AURA Clinic — aesthetic medicine. Calm pastels: off-white background,
 * dusty rose accent, sage hint. The opposite vibe of Noir Élan (dark+pink)
 * and Maison Atelier (cream+gold) — gentle, medical, breathable.
 */
const auraTheme: MockTheme = {
  bg: "bg-[#FAF7F4]",
  text: "text-[#2A2C36]",
  textMuted: "text-[#2A2C36]/55",
  accentBg: "bg-[#C28A8A]",
  accentText: "text-[#9B6B6B]",
  border: "border-[#2A2C36]/12",
  surface: "bg-white/55",
  heroGradient:
    "radial-gradient(ellipse at 25% 20%, rgba(194,138,138,0.18), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(167,193,176,0.20), transparent 55%), linear-gradient(180deg, #FAF7F4 0%, #F1ECE5 100%)",
  displayFont: "DM Sans, sans-serif",
  bodyFont: "Inter, sans-serif",
};

const auraImages = {
  hero: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
  editorial:
    "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=900&q=80",
};

const InterfaceDetails: React.FC<{
  theme: MockTheme;
  ctaLabel: string;
  treatmentName: string;
  treatmentDuration: string;
  treatmentPrice: string;
  emailLabel: string;
  emailPlaceholder: string;
}> = ({ theme, ctaLabel, treatmentName, treatmentDuration, treatmentPrice, emailLabel, emailPlaceholder }) => (
  <div className={`relative rounded-[1.5rem] ${theme.surface} border ${theme.border} p-8 md:p-12 overflow-hidden`}>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center">
      <div className="flex flex-col items-start gap-4">
        <span className="text-[0.55rem] tracking-[0.32em] uppercase text-[#2A2C36]/40">Button</span>
        <span
          className={`${theme.accentBg} text-white text-[0.7rem] tracking-[0.28em] uppercase font-semibold rounded-full inline-flex items-center gap-2 px-7 py-3.5 shadow-[0_0_30px_-12px_rgba(194,138,138,0.5)]`}
          style={{ fontFamily: theme.bodyFont }}
        >
          {ctaLabel}
          <span className="text-[0.7em]">→</span>
        </span>
      </div>

      <div className="flex flex-col items-start gap-4 w-full">
        <span className="text-[0.55rem] tracking-[0.32em] uppercase text-[#2A2C36]/40">Form field</span>
        <div className="w-full flex flex-col gap-1.5">
          <span
            className="text-[0.6rem] tracking-[0.2em] uppercase text-[#2A2C36]/55"
            style={{ fontFamily: theme.bodyFont }}
          >
            {emailLabel}
          </span>
          <div className={`h-12 rounded-md ${theme.surface} border ${theme.border} flex items-center px-4`}>
            <span className="text-[0.75rem] text-[#2A2C36]/45" style={{ fontFamily: theme.bodyFont }}>
              {emailPlaceholder}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-4 w-full">
        <span className="text-[0.55rem] tracking-[0.32em] uppercase text-[#2A2C36]/40">Treatment card</span>
        <div className={`w-full max-w-[220px] flex items-center justify-between gap-3 px-4 py-3 rounded-md border-2 ${theme.accentText.replace("text-", "border-")} ${theme.surface}`}>
          <div className="flex flex-col min-w-0">
            <span
              className="text-[0.85rem] text-[#2A2C36] font-medium tracking-tight truncate"
              style={{ fontFamily: theme.displayFont }}
            >
              {treatmentName}
            </span>
            <span
              className="text-[0.6rem] text-[#2A2C36]/55 font-light tracking-[0.1em] uppercase"
              style={{ fontFamily: theme.bodyFont }}
            >
              {treatmentDuration}
            </span>
          </div>
          <span
            className="text-[0.65rem] text-[#2A2C36] font-light shrink-0"
            style={{ fontFamily: theme.bodyFont }}
          >
            {treatmentPrice}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const AURAClinicCaseStudyView: React.FC = () => {
  const tr = useTranslation();
  const p = tr.projects.auraClinic;
  const s = tr.projects.shared;
  const m = p.mock;

  const FullPageMock = (
    <BrowserMockup url={m.url} innerBg={auraTheme.bg}>
      <MockNav theme={auraTheme} brand={m.brand} links={[...m.navLinks]} cta={m.navCta} />
      <MockHero
        theme={auraTheme}
        label={m.heroLabel}
        heading={m.heroHeading}
        subline={m.heroSubline}
        cta={m.heroCta}
        image={auraImages.hero}
      />
      <MockEditorial
        theme={auraTheme}
        label={m.editorialLabel}
        heading={m.editorialHeading}
        body={m.editorialBody}
        signature={m.editorialSignature}
        image={auraImages.editorial}
      />
      <MockBooking
        theme={auraTheme}
        label={m.bookingLabel}
        heading={m.bookingHeading}
        subline={m.bookingSubline}
        dateField={{ label: m.bookingDateLabel, value: m.bookingDateValue }}
        timeSlots={[...m.bookingTimeSlots]}
        treatments={m.bookingTreatments.map((t) => ({ name: t.name, duration: t.duration, price: t.price }))}
        cta={m.bookingCta}
      />
      <MockCTA
        theme={auraTheme}
        heading={m.ctaHeading}
        subline={m.ctaSubline}
        cta={m.ctaButton}
      />
      <MockFooter
        theme={auraTheme}
        brand={m.brand}
        tagline={m.footerTagline}
        columns={m.footerColumns.map((c) => ({ title: c.title, links: [...c.links] }))}
        copyright={m.footerCopyright}
      />
    </BrowserMockup>
  );

  const MobileMock = (
    <PhoneMockup innerBg={auraTheme.bg} variant="silver">
      <div className="flex flex-col h-full overflow-hidden">
        <MockNav theme={auraTheme} brand={m.brand} compact />
        <MockHero
          theme={auraTheme}
          label={m.heroLabel}
          heading={m.heroHeading}
          subline={m.heroSubline}
          cta={m.heroCta}
          compact
        />
        <MockBooking
          theme={auraTheme}
          label={m.bookingLabel}
          heading={m.bookingHeading}
          dateField={{ label: m.bookingDateLabel, value: m.bookingDateValue }}
          timeSlots={[...m.bookingTimeSlots].slice(0, 3)}
          treatments={m.bookingTreatments.slice(0, 2).map((t) => ({ name: t.name, duration: t.duration, price: t.price }))}
          cta={m.bookingCta}
          compact
        />
      </div>
    </PhoneMockup>
  );

  return (
    <main className="min-h-screen bg-[#08090C] text-white overflow-x-hidden">
      <CaseStudyTopBack label={s.backToPortfolio} />
      <CaseStudyHero
        category={p.category}
        title={p.title}
        subtitle={p.subtitle}
        visual={FullPageMock}
      />

      <CaseStudyConcept label={s.conceptLabel} heading={p.concept.heading} body={p.concept.body} />

      <CaseStudyDeliverables
        label={s.deliverablesLabel}
        heading={p.deliverables.heading}
        items={[...p.deliverables.items]}
      />

      <CaseStudyGoal
        label={s.goalLabel}
        heading={p.goal.heading}
        pillars={[
          { label: s.goalPillars[0], body: p.goal.pillarBodies[0] },
          { label: s.goalPillars[1], body: p.goal.pillarBodies[1] },
          { label: s.goalPillars[2], body: p.goal.pillarBodies[2] },
        ]}
      />

      <CaseStudyProcess
        label={s.processLabel}
        heading={p.process.heading}
        steps={s.processSteps.map((title, i) => ({
          number: String(i + 1).padStart(2, "0"),
          title,
          description: p.process.stepDescriptions[i],
        }))}
      />

      <CaseStudyResult label={s.resultLabel} body={p.result} />

      <CaseStudyVisuals
        label={s.visualsLabel}
        heading={p.visuals.heading}
        mobileView={{
          label: s.mobileLabel,
          heading: p.visuals.mobileHeading,
          caption: p.visuals.mobileCaption,
          visual: MobileMock,
        }}
        interfaceDetails={{
          label: s.interfaceDetailsLabel,
          heading: p.visuals.interfaceDetailsHeading,
          caption: p.visuals.interfaceDetailsCaption,
          visual: (
            <InterfaceDetails
              theme={auraTheme}
              ctaLabel={m.heroCta}
              treatmentName={m.bookingTreatments[1].name}
              treatmentDuration={m.bookingTreatments[1].duration}
              treatmentPrice={m.bookingTreatments[1].price}
              emailLabel="Email"
              emailPlaceholder="anna@email.com"
            />
          ),
        }}
      />

      <CaseStudyBackNav backLabel={s.backToPortfolio} />
    </main>
  );
};

export default AURAClinicCaseStudyView;
