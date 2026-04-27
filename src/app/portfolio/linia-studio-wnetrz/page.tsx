import type { Metadata } from "next";
import LINIAStudioView from "@/views/LINIAStudioView";

export const metadata: Metadata = {
  title: "LINIA Studio Wnętrz - Portfolio",
  description: "Projektowanie wnętrz. Nowoczesne studio opierające się na harmonii.",
};

export default function Page() {
  return <LINIAStudioView />;
}
