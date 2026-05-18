import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Providers from "@/components/Providers";
import ScrollProgress from "@/components/ScrollProgress";
import CookieBanner from "@/components/CookieBanner";

const BASE_URL = "https://swanweb.pl";
const OG_IMAGE = "https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/ccb4ebf22fc923ffd0529cf619c7ac26.png";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Swan Web Studio — Strony internetowe premium",
    template: "%s | Swan Web Studio",
  },
  description:
    "Swan Web Studio — projektowanie stron internetowych premium. Design z intencją, solidne rzemiosło, szczera komunikacja. Tworzymy witryny, które budują markę i konwertują.",
  keywords: [
    "strony internetowe premium",
    "projektowanie stron www",
    "web design Polska",
    "tworzenie stron internetowych",
    "strona internetowa dla firmy",
    "landing page",
    "Swan Web Studio",
    "Weronika Łabędź",
  ],
  authors: [{ name: "Weronika Łabędź", url: BASE_URL }],
  creator: "Swan Web Studio",
  publisher: "Swan Web Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: BASE_URL,
    siteName: "Swan Web Studio",
    title: "Swan Web Studio — Strony internetowe premium",
    description:
      "Projektujemy strony premium — design z intencją, solidne rzemiosło i szczera komunikacja. Tworzymy witryny, które pracują na Twój cel.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Swan Web Studio — Strony internetowe premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swan Web Studio — Strony internetowe premium",
    description:
      "Projektujemy strony premium — design z intencją, solidne rzemiosło i szczera komunikacja.",
    images: [OG_IMAGE],
  },
  other: {
    google: "notranslate",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Swan Web Studio",
  alternateName: "Swan Web",
  url: BASE_URL,
  logo: OG_IMAGE,
  image: OG_IMAGE,
  description:
    "Studio projektowania stron internetowych premium. Tworzymy witryny łączące świadomy design z perfekcyjnym wykonaniem.",
  founder: {
    "@type": "Person",
    name: "Weronika Łabędź",
    jobTitle: "Web Designer & Developer",
    url: `${BASE_URL}/about`,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Piła",
    postalCode: "64-920",
    addressCountry: "PL",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@swanweb.pl",
    contactType: "customer service",
    availableLanguage: ["Polish", "English", "German"],
  },
  areaServed: {
    "@type": "Country",
    name: "Poland",
  },
  serviceType: [
    "Web Design",
    "Web Development",
    "Landing Page Design",
    "E-commerce Design",
    "Corporate Website",
  ],
  priceRange: "PLN 2000–9000+",
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="dark notranslate" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <ScrollToTop />
          <ScrollProgress />
          <div className="min-h-screen bg-[#08090C] text-foreground selection:bg-accent/30 selection:text-foreground">
            <Header />
            {children}
          </div>
          <CookieBanner />
          <div className="grain-overlay" aria-hidden="true" />
        </Providers>
      </body>
    </html>
  );
}
