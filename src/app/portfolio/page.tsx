import type { Metadata } from "next";
import PortfolioView from "@/views/PortfolioView";

export const metadata: Metadata = {
  title: "Portfolio - Swan Web Studio",
  description: "Ekskluzywne realizacje cyfrowe.",
};

export default function Page() {
  return <PortfolioView />;
}
