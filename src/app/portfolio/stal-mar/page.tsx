import type { Metadata } from "next";
import StalMarView from "@/views/StalMarView";

export const metadata: Metadata = {
  title: "Ogrodzenia Piła",
  description: "Strona firmowa dla producenta nowoczesnych ogrodzeń panelowych, bram i balustrad z Piły.",
};

export default function Page() {
  return <StalMarView />;
}
