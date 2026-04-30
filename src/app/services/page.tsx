import type { Metadata } from "next";
import ServicesView from "@/views/ServicesView";

export const metadata: Metadata = {
  title: "Usługi i cennik — tworzenie stron www",
  description:
    "Tworzenie stron internetowych premium: strony firmowe, landing page, sklepy online. Sprawdź zakres usług i orientacyjne ceny. Swan Web Studio — Polska.",
  alternates: { canonical: "https://swanweb.pl/services" },
  openGraph: {
    title: "Usługi i cennik — tworzenie stron www | Swan Web Studio",
    description:
      "Strony firmowe, landing page, sklepy online. Sprawdź zakres usług i orientacyjne ceny.",
    url: "https://swanweb.pl/services",
  },
};

export default function Page() {
  return <ServicesView />;
}
