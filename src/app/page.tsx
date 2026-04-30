import type { Metadata } from "next";
import HomeView from "@/views/HomeView";

export const metadata: Metadata = {
  title: "Swan Web Studio — Strony internetowe premium",
  description:
    "Projektujemy strony internetowe premium dla firm i marek, które chcą wyglądać poważnie. Design z intencją, solidne rzemiosło, szczera komunikacja. Zapytaj o wycenę.",
  alternates: { canonical: "https://swanweb.pl" },
  openGraph: {
    title: "Swan Web Studio — Strony internetowe premium",
    description:
      "Projektujemy strony internetowe premium dla firm i marek, które chcą wyglądać poważnie. Zapytaj o wycenę.",
    url: "https://swanweb.pl",
  },
};

export default function Page() {
  return <HomeView />;
}
