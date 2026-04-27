import type { Metadata } from "next";
import AURAClinicCaseStudyView from "@/views/AURAClinicCaseStudyView";

export const metadata: Metadata = {
  title: "AURA Clinic Case Study - Premium Web Design",
  description:
    "Projekt strony dla kliniki medycyny estetycznej. Spokojne, minimalistyczne doświadczenie.",
};

export default function Page() {
  return <AURAClinicCaseStudyView />;
}
