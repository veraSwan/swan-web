import type { Metadata } from "next";
import PortfolioView from "@/views/PortfolioView";

export const metadata: Metadata = {
  title: "Portfolio — realizacje stron internetowych premium",
  description:
    "Realizacje Swan Web Studio: strony dla klinik medycyny estetycznej, sklepów luksusowych, nieruchomości premium, restauracji fine dining i marek modowych.",
  alternates: { canonical: "https://swanweb.pl/portfolio" },
  openGraph: {
    title: "Portfolio — realizacje stron internetowych premium | Swan Web Studio",
    description:
      "Strony dla klinik, sklepów luksusowych, nieruchomości premium i marek modowych.",
    url: "https://swanweb.pl/portfolio",
  },
};

export default function Page() {
  return <PortfolioView />;
}
