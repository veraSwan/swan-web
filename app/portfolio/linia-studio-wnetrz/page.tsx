import type { Metadata } from "next";
import LINIAStudioPage from "@/pages/LINIAStudioPage";

export const metadata: Metadata = {
  title: "LINIA Studio Wnętrz - Portfolio",
  description: "Projektowanie wnętrz. Nowoczesne studio opierające się na harmonii.",
};

export default function Page() {
  return <LINIAStudioPage />;
}
