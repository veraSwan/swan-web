import type { Metadata } from "next";
import ContactView from "@/views/ContactView";

export const metadata: Metadata = {
  title: "Kontakt — zapytaj o wycenę strony",
  description:
    "Napisz do Swan Web Studio — odpowiemy w ciągu 24h. Porozmawiajmy o Twojej stronie internetowej bez zobowiązań i sprzedażowej presji.",
  alternates: { canonical: "https://swanweb.pl/contact" },
  openGraph: {
    title: "Kontakt — zapytaj o wycenę strony | Swan Web Studio",
    description:
      "Napisz do nas — odpowiemy w ciągu 24h. Bez zobowiązań i sprzedażowej presji.",
    url: "https://swanweb.pl/contact",
  },
};

export default function Page() {
  return <ContactView />;
}
