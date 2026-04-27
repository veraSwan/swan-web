import type { Metadata } from "next";
import Portfolio from "@/pages/Portfolio";

export const metadata: Metadata = {
  title: "Portfolio - Swan Web Studio",
  description: "Ekskluzywne realizacje cyfrowe.",
};

export default function Page() {
  return <Portfolio />;
}
