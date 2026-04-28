"use client";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import BrowserMockup from "@/components/mockups/BrowserMockup";
import PhoneMockup from "@/components/mockups/PhoneMockup";
import MockNav from "@/components/case-study/site-sections/MockNav";
import MockHero from "@/components/case-study/site-sections/MockHero";
import MockEditorial from "@/components/case-study/site-sections/MockEditorial";
import MockProducts from "@/components/case-study/site-sections/MockProducts";
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
    "radial-gradient(ellipse at 25% 15%, rgba(192,87,117,0.20), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(58,35,96,0.25), transparent 55%), linear-gradient(180deg, #0A0A0C 0%, #131015 100%)",
  displayFont: "DM Sans, sans-serif",
  bodyFont: "Inter, sans-serif",
};

/**
 * Editorial-quality photography from Unsplash. Each URL was verified working
 * — these are the same IDs used in the original Vite-era Noir Élan view, so
 * we know they resolve.
 */
const noirImages = {
  hero: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
  editorial:
    "https://images.unsplash.com/photo-1601193908723-7bd3d509224d?auto=format&fit=crop&w=900&q=80",
  // 4 verified perfume photos cycled across the product cards
  products: [
    "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1598532108985-5413981e30b7?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1650432506678-d187258c0900?auto=format&fit=crop&w=600&q=80",
  ],
};

/** Small inline pieces for the "Detale interfejsu" section. */
const InterfaceDetails: React.FC<{
  theme: MockTheme;
  ctaLabel: string;
  cardName: string;
  cardPrice: string;
  cardImage?: string;
  emailLabel: string;
  emailPlaceholder: string;
}> = ({ theme, ctaLabel, cardName, cardPrice, cardImage, emailLabel, emailPlaceholder }) => (
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
            {emailLabel}
          </span>
          <div className={`h-12 rounded-md ${theme.surface} border ${theme.border} flex items-center px-4`}>
            <span className="text-[0.75rem] text-white/50" style={{ fontFamily: theme.bodyFont }}>
              {emailPlaceholder}
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
            style={
              cardImage
                ? undefined
                : {
                    background:
                      "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.10), transparent 55%), linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.35) 100%)",
                  }
            }
          >
            {cardImage ? (
              <>
                <img src={cardImage} alt={cardName} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.45) 100%)",
                  }}
                />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="w-[35%] h-[60%] rounded-[0.3rem] opacity-55"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 30%, rgba(0,0,0,0.5) 100%)",
                    boxShadow:
                      "0 8px 18px -6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
                  }}
                />
              </div>
            )}
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
  const m = p.mock;

  // Product items enriched with brand imagery so each tile shows a real bottle.
  const productsWithImages = m.productItems.map((it, i) => ({
    name: it.name,
    price: it.price,
    image: noirImages.products[i % noirImages.products.length],
  }));

  /** Complete landing — used in the Visuals "Widok strony" section so users see all sections. */
  const FullPageMock = (
    <BrowserMockup url={m.url} innerBg={noirTheme.bg}>
      <MockNav theme={noirTheme} brand={m.brand} links={[...m.navLinks]} cta={m.navCta} />
      <MockHero
        theme={noirTheme}
        label={m.heroLabel}
        heading={m.heroHeading}
        subline={m.heroSubline}
        cta={m.heroCta}
        image={noirImages.hero}
      />
      <MockEditorial
        theme={noirTheme}
        label={m.editorialLabel}
        heading={m.editorialHeading}
        body={m.editorialBody}
        signature={m.editorialSignature}
        image={noirImages.editorial}
      />
      <MockProducts
        theme={noirTheme}
        label={m.productsLabel}
        heading={m.productsHeading}
        items={productsWithImages}
      />
      <MockNewsletter
        theme={noirTheme}
        label={m.newsletterLabel}
        heading={m.newsletterHeading}
        subline={m.newsletterSubline}
        placeholder={m.newsletterPlaceholder}
        cta={m.newsletterCta}
      />
      <MockCTA
        theme={noirTheme}
        heading={m.ctaHeading}
        subline={m.ctaSubline}
        cta={m.ctaButton}
      />
      <MockFooter
        theme={noirTheme}
        brand={m.brand}
        tagline={m.footerTagline}
        columns={m.footerColumns.map((c) => ({ title: c.title, links: [...c.links] }))}
        copyright={m.footerCopyright}
      />
    </BrowserMockup>
  );

  /** Compact mobile flow inside the PhoneMockup. */
  const MobileMock = (
    <PhoneMockup innerBg={noirTheme.bg}>
      <div className="flex flex-col h-full overflow-hidden">
        <MockNav theme={noirTheme} brand={m.brand} compact />
        <MockHero
          theme={noirTheme}
          label={m.heroLabel}
          heading={m.heroHeading}
          subline={m.heroSubline}
          cta={m.heroCta}
          compact
        />
        <MockProducts
          theme={noirTheme}
          label={m.productsLabel}
          heading={m.productsHeading}
          items={productsWithImages.slice(0, 2)}
          compact
        />
        <MockNewsletter
          theme={noirTheme}
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
          visual: FullPageMock,
        }}
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
              theme={noirTheme}
              ctaLabel={m.heroCta}
              cardName={m.productItems[0].name}
              cardPrice={m.productItems[0].price}
              cardImage={noirImages.products[0]}
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

export default NoirElanView;
