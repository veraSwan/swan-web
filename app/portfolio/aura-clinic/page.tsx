import type { Metadata } from "next";
import AURAClinicCaseStudy from "@/pages/AURAClinicCaseStudy";

export const metadata: Metadata = {
  title: "AURA Clinic Case Study - Premium Web Design",
  description:
    "Projekt strony dla kliniki medycyny estetycznej. Spokojne, minimalistyczne doświadczenie.",
};

export default function Page() {
  return <AURAClinicCaseStudy />;
}
