"use client";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import BrowserMockup from "@/components/mockups/BrowserMockup";
import PhoneMockup from "@/components/mockups/PhoneMockup";
import MockNav from "@/components/case-study/site-sections/MockNav";
import MockHero from "@/components/case-study/site-sections/MockHero";
import MockEditorial from "@/components/case-study/site-sections/MockEditorial";
import MockLookbook from "@/components/case-study/site-sections/MockLookbook";
import MockNewsletter from "@/components/case-study/site-sections/MockNewsletter";
import MockCTA from "@/components/case-study/site-sections/MockCTA";
import MockFooter from "@/components/case-study/site-sections/MockFooter";
import type { MockTheme } from "@/components/case-study/site-sections/types";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyConcept from "@/components/case-study/CaseStudyConcept";
import CaseStudyDeliverables from "@/components/case-study/CaseStudyDeliverables";
import CaseStudyGoal from "@/components/case-study/CaseStudyGoal";
import CaseStudyProcess from "@/components/case-study/CaseStudyProcess";
import CaseStudyResult from "@/components/case-study/CaseStudyResult";
import CaseStudyVisuals from "@/components/case-study/CaseStudyVisuals";
import CaseStudyBackNav from "@/components/case-study/CaseStudyBackNav";

/**
 * Maison Atelier — luxury fashion editorial.
 * Theme: cream background + graphite ink + antique gold accents.
 * Intentionally LIGHT, to differentiate from Noir Élan's dark + pink mood.
 */
const maisonTheme: MockTheme = {
  bg: "bg-[#F4EFE6]",
  text: "text-[#1A1814]",
  textMuted: "text-[#1A1814]/60",
  accentBg: "bg-[#1A1814]",
  accentText: "text-[#8B7755]",
  border: "border-[#1A1814]/12",
  surface: "bg-white/45",
  heroGradient:
    "radial-gradient(ellipse at 25% 20%, rgba(139,119,85,0.12), transparent 55%), linear-gradient(180deg, #F4EFE6 0%, #E8E1D3 100%)",
  displayFont: "DM Sans, sans-serif",
  bodyFont: "Inter, sans-serif",
};

/** Editorial fashion photography from Unsplash — all URLs verified working. */
const maisonImages = {
  hero: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80",
  editorial:
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
  lookbook: [
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80",
  ],
};

const InterfaceDetails: React.FC<{
  theme: MockTheme;
  ctaLabel: string;
  cardName: string;
  cardCaption: string;
  cardImage?: string;
  emailLabel: string;
  emailPlaceholder: string;
}> = ({ theme, ctaLabel, cardName, cardCaption, cardImage, emailLabel, emailPlaceholder }) => (
  <div className={`relative rounded-[1.5rem] ${theme.surface} border ${theme.border} p-8 md:p-12 overflow-hidden`}>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center">
      <div className="flex flex-col items-start gap-4">
        <span className="text-[0.55rem] tracking-[0.32em] uppercase text-[#1A1814]/40">Button</span>
        <span
          className={`${theme.accentBg} text-[#F4EFE6] text-[0.7rem] tracking-[0.28em] uppercase font-semibold rounded-full inline-flex items-center gap-2 px-7 py-3.5 shadow-[0_0_30px_-12px_rgba(0,0,0,0.4)]`}
          style={{ fontFamily: theme.bodyFont }}
        >
          {ctaLabel}
          <span className="text-[0.7em]">→</span>
        </span>
      </div>

      <div className="flex flex-col items-start gap-4 w-full">
        <span className="text-[0.55rem] tracking-[0.32em] uppercase text-[#1A1814]/40">Form field</span>
        <div className="w-full flex flex-col gap-1.5">
          <span
            className="text-[0.6rem] tracking-[0.2em] uppercase text-[#1A1814]/55"
            style={{ fontFamily: theme.bodyFont }}
          >
            {emailLabel}
          </span>
          <div className={`h-12 rounded-md ${theme.surface} border ${theme.border} flex items-center px-4`}>
            <span className="text-[0.75rem] text-[#1A1814]/45" style={{ fontFamily: theme.bodyFont }}>
              {emailPlaceholder}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-4 w-full">
        <span className="text-[0.55rem] tracking-[0.32em] uppercase text-[#1A1814]/40">Lookbook card</span>
        <div className="w-full flex flex-col gap-2">
          <div
            className={`relative aspect-[3/4] w-full max-w-[180px] rounded-[0.6rem] overflow-hidden border ${theme.border}`}
            style={
              cardImage
                ? undefined
                : {
                    background:
                      "radial-gradient(ellipse at 30% 20%, rgba(0,0,0,0.06), transparent 55%), linear-gradient(160deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.18) 100%)",
                  }
            }
          >
            {cardImage && (
              <>
                <img src={cardImage} alt={cardName} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.35) 100%)" }}
                />
              </>
            )}
          </div>
          <div className="flex items-baseline justify-between gap-2 px-1 max-w-[180px]">
            <span
              className="text-[0.8rem] text-[#1A1814] font-medium tracking-tight truncate"
              style={{ fontFamily: theme.displayFont }}
            >
              {cardName}
            </span>
            <span
              className="text-[0.65rem] text-[#1A1814]/55 font-light shrink-0 tracking-[0.15em] uppercase"
              style={{ fontFamily: theme.bodyFont }}
            >
              {cardCaption}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MaisonAtelierView: React.FC = () => {
  const tr = useTranslation();
  const p = tr.projects.maisonAtelier;
  const s = tr.projects.shared;
  const m = p.mock;

  const lookbookWithImages = m.lookbookItems.map((it, i) => ({
    name: it.name,
    caption: it.caption,
    image: maisonImages.lookbook[i % maisonImages.lookbook.length],
  }));

  /** Complete landing — used as the hero visual (same pattern as Noir Élan). */
  const FullPageMock = (
    <BrowserMockup url={m.url} innerBg={maisonTheme.bg}>
      <MockNav theme={maisonTheme} brand={m.brand} links={[...m.navLinks]} cta={m.navCta} />
      <MockHero
        theme={maisonTheme}
        label={m.heroLabel}
        heading={m.heroHeading}
        subline={m.heroSubline}
        cta={m.heroCta}
        image={maisonImages.hero}
      />
      <MockEditorial
        theme={maisonTheme}
        label={m.editorialLabel}
        heading={m.editorialHeading}
        body={m.editorialBody}
        signature={m.editorialSignature}
        image={maisonImages.editorial}
      />
      <MockLookbook
        theme={maisonTheme}
        label={m.lookbookLabel}
        heading={m.lookbookHeading}
        items={lookbookWithImages}
      />
      <MockNewsletter
        theme={maisonTheme}
        label={m.newsletterLabel}
        heading={m.newsletterHeading}
        subline={m.newsletterSubline}
        placeholder={m.newsletterPlaceholder}
        cta={m.newsletterCta}
      />
      <MockCTA
        theme={maisonTheme}
        heading={m.ctaHeading}
        subline={m.ctaSubline}
        cta={m.ctaButton}
      />
      <MockFooter
        theme={maisonTheme}
        brand={m.brand}
        tagline={m.footerTagline}
        columns={m.footerColumns.map((c) => ({ title: c.title, links: [...c.links] }))}
        copyright={m.footerCopyright}
      />
    </BrowserMockup>
  );

  const MobileMock = (
    <PhoneMockup innerBg={maisonTheme.bg} variant="silver">
      <div className="flex flex-col h-full overflow-hidden">
        <MockNav theme={maisonTheme} brand={m.brand} compact />
        <MockHero
          theme={maisonTheme}
          label={m.heroLabel}
          heading={m.heroHeading}
          subline={m.heroSubline}
          cta={m.heroCta}
          compact
        />
        <MockLookbook
          theme={maisonTheme}
          label={m.lookbookLabel}
          heading={m.lookbookHeading}
          items={lookbookWithImages.slice(0, 2)}
          compact
        />
        <MockNewsletter
          theme={maisonTheme}
          label={m.newsletterLabel}
          heading={m.newsletterHeading}
          subline={m.newsletterSubline}
          placeholder={m.newsletterPlaceholder}
          cta={m.newsletterCta}
          compact
        />
      </div>
    </PhoneMockup>
  );

  return (
    <main className="min-h-screen bg-[#08090C] text-white overflow-x-hidden">
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
              theme={maisonTheme}
              ctaLabel={m.heroCta}
              cardName={m.lookbookItems[0].name}
              cardCaption={m.lookbookItems[0].caption}
              cardImage={maisonImages.lookbook[0]}
              emailLabel="Email"
              emailPlaceholder={m.newsletterPlaceholder}
            />
          ),
        }}
      />

      <CaseStudyBackNav backLabel={s.backToPortfolio} />
    </main>
  );
};

export default MaisonAtelierView;
