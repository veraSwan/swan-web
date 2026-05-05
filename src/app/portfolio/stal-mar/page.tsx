import type { Metadata } from "next";
import StalMarView from "@/views/StalMarView";

export const metadata: Metadata = {
  title: "Stal Mar",
  description: "Nowoczesne ogrodzenia panelowe i ozdobne — projekt strony dla Stal Mar.",
};

export default function Page() {
  return <StalMarView />;
}
