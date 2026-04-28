"use client";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import BrowserMockup from "@/components/mockups/BrowserMockup";
import PhoneMockup from "@/components/mockups/PhoneMockup";
import MockNav from "@/components/case-study/site-sections/MockNav";
import MockHero from "@/components/case-study/site-sections/MockHero";
import MockProducts from "@/components/case-study/site-sections/MockProducts";
import MockCTA from "@/components/case-study/site-sections/MockCTA";
import type { MockTheme } from "@/components/case-study/site-sections/types";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyConcept from "@/components/case-study/CaseStudyConcept";
import CaseStudyDeliverables from "@/components/case-study/CaseStudyDeliverables";
import CaseStudyGoal from "@/components/case-study/CaseStudyGoal";
import CaseStudyProcess from "@/components/case-study/CaseStudyProcess";
import CaseStudyResult from "@/components/case-study/CaseStudyResult";
import CaseStudyVisuals from "@/components/case-study/CaseStudyVisuals";
import CaseStudyBackNav from "@/components/case-study/CaseStudyBackNav";

/** Brand-specific mock theme for Noir Élan. Dark, editorial, pink-rose accent. */
const noirTheme: MockTheme = {
  bg: "bg-[#0A0A0C]",
  text: "text-white",
  textMuted: "text-white/55",
  accentBg: "bg-[#C05775]",
  accentText: "text-[#E889A1]",
  border: "border-white/[0.07]",
  surface: "bg-white/[0.03]",
  heroGradient:
    "radial-gradient(ellipse at 25% 15%, rgba(192,87,117,0.18), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(58,35,96,0.22), transparent 55%), linear-gradient(180deg, #0A0A0C 0%, #131015 100%)",
  displayFont: "DM Sans, sans-serif",
  bodyFont: "Inter, sans-serif",
};

/** Small inline pieces for the "Detale interfejsu" section. */
const InterfaceDetails: React.FC<{ theme: MockTheme; ctaLabel: string; cardName: string; cardPrice: string }> = ({
  theme,
  ctaLabel,
  cardName,
  cardPrice,
}) => (
  <div className={`relative rounded-[1.5rem] ${theme.surface} border ${theme.border} p-8 md:p-12 overflow-hidden`}>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center">
      {/* Button detail */}
      <div className="flex flex-col items-start gap-4">
        <span className="text-[0.55rem] tracking-[0.32em] uppercase text-white/40">Button</span>
        <span
          className={`${theme.accentBg} text-white text-[0.7rem] tracking-[0.22em] uppercase font-semibold rounded-full inline-flex items-center gap-2 px-7 py-3.5 shadow-[0_0_30px_-8px_rgba(192,87,117,0.6)]`}
          style={{ fontFamily: theme.bodyFont }}
        >
          {ctaLabel}
          <span className="text-[0.7em]">→</span>
        </span>
      </div>

      {/* Form field detail */}
      <div className="flex flex-col items-start gap-4 w-full">
        <span className="text-[0.55rem] tracking-[0.32em] uppercase text-white/40">Form field</span>
        <div className="w-full flex flex-col gap-1.5">
          <span
            className="text-[0.6rem] tracking-[0.2em] uppercase text-white/55"
            style={{ fontFamily: theme.bodyFont }}
          >
            Email
          </span>
          <div className={`h-12 rounded-md ${theme.surface} border ${theme.border} flex items-center px-4`}>
            <span
              className="text-[0.75rem] text-white/50"
              style={{ fontFamily: theme.bodyFont }}
            >
              you@noirelan.com
            </span>
          </div>
        </div>
      </div>

      {/* Product card detail */}
      <div className="flex flex-col items-start gap-4 w-full">
        <span className="text-[0.55rem] tracking-[0.32em] uppercase text-white/40">Product card</span>
        <div className="w-full flex flex-col gap-2">
          <div
            className={`relative aspect-[3/4] w-full max-w-[180px] rounded-[0.6rem] overflow-hidden border ${theme.border}`}
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(0,0,0,0.3))",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse at 35% 30%, rgba(255,255,255,0.08), transparent 60%)",
              }}
            />
          </div>
          <div className="flex items-baseline justify-between gap-2 px-1 max-w-[180px]">
            <span
              className="text-[0.8rem] text-white font-medium tracking-tight truncate"
              style={{ fontFamily: theme.displayFont }}
            >
              {cardName}
            </span>
            <span
              className="text-[0.7rem] text-white/55 font-light shrink-0"
              style={{ fontFamily: theme.bodyFont }}
            >
              {cardPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const NoirElanView: React.FC = () => {
  const tr = useTranslation();
  const p = tr.projects.noirElan;
  const s = tr.projects.shared;

  // Build the full homepage mock that's used both in hero and in the desktop visual section.
  const HomepageMock = (
    <BrowserMockup url={p.mock.url} innerBg={noirTheme.bg}>
      <MockNav
        theme={noirTheme}
        brand={p.mock.brand}
        links={[...p.mock.navLinks]}
        cta={p.mock.navCta}
      />
      <MockHero
        theme={noirTheme}
        label={p.mock.heroLabel}
        heading={p.mock.heroHeading}
        subline={p.mock.heroSubline}
        cta={p.mock.heroCta}
      />
      <MockProducts
        theme={noirTheme}
        label={p.mock.productsLabel}
        heading={p.mock.productsHeading}
        items={[...p.mock.productItems]}
      />
      <MockCTA
        theme={noirTheme}
        heading={p.mock.ctaHeading}
        subline={p.mock.ctaSubline}
        cta={p.mock.ctaButton}
      />
    </BrowserMockup>
  );

  return (
    <main className="min-h-screen bg-[#08090C] text-white overflow-x-hidden">
      <CaseStudyHero
        category={p.category}
        title={p.title}
        subtitle={p.subtitle}
        visual={HomepageMock}
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
        desktopView={{
          label: s.desktopLabel,
          heading: p.visuals.desktopHeading,
          caption: p.visuals.desktopCaption,
          visual: HomepageMock,
        }}
        mobileView={{
          label: s.mobileLabel,
          heading: p.visuals.mobileHeading,
          caption: p.visuals.mobileCaption,
          visual: (
            <PhoneMockup innerBg={noirTheme.bg}>
              <div className="flex flex-col h-full overflow-hidden">
                <MockNav theme={noirTheme} brand={p.mock.brand} compact />
                <MockHero
                  theme={noirTheme}
                  label={p.mock.heroLabel}
                  heading={p.mock.heroHeading}
                  subline={p.mock.heroSubline}
                  cta={p.mock.heroCta}
                  compact
                />
                <MockProducts
                  theme={noirTheme}
                  label={p.mock.productsLabel}
                  heading={p.mock.productsHeading}
                  items={[...p.mock.productItems].slice(0, 2)}
                  compact
                />
              </div>
            </PhoneMockup>
          ),
        }}
        keySections={{
          label: s.keySectionsLabel,
          heading: p.visuals.keySectionsHeading,
          caption: p.visuals.keySectionsCaption,
          visual: (
            <div className="flex flex-col gap-6 md:gap-8">
              <BrowserMockup url={`${p.mock.url}#hero`} innerBg={noirTheme.bg} rounded="lg">
                <MockHero
                  theme={noirTheme}
                  label={p.mock.heroLabel}
                  heading={p.mock.heroHeading}
                  subline={p.mock.heroSubline}
                  cta={p.mock.heroCta}
                />
              </BrowserMockup>
              <BrowserMockup url={`${p.mock.url}/collection`} innerBg={noirTheme.bg} rounded="lg">
                <MockProducts
                  theme={noirTheme}
                  label={p.mock.productsLabel}
                  heading={p.mock.productsHeading}
                  items={[...p.mock.productItems]}
                />
              </BrowserMockup>
              <BrowserMockup url={`${p.mock.url}/subscribe`} innerBg={noirTheme.bg} rounded="lg">
                <MockCTA
                  theme={noirTheme}
                  heading={p.mock.ctaHeading}
                  subline={p.mock.ctaSubline}
                  cta={p.mock.ctaButton}
                />
              </BrowserMockup>
            </div>
          ),
        }}
        interfaceDetails={{
          label: s.interfaceDetailsLabel,
          heading: p.visuals.interfaceDetailsHeading,
          caption: p.visuals.interfaceDetailsCaption,
          visual: (
            <InterfaceDetails
              theme={noirTheme}
              ctaLabel={p.mock.heroCta}
              cardName={p.mock.productItems[0].name}
              cardPrice={p.mock.productItems[0].price}
            />
          ),
        }}
      />

      <CaseStudyBackNav backLabel={s.backToPortfolio} />
    </main>
  );
};

export default NoirElanView;
