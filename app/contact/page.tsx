import type { Metadata } from "next";
import Contact from "@/pages/Contact";

export const metadata: Metadata = {
  title: "Kontakt - Swan Web Studio",
  description:
    "Skontaktuj się z nami. Porozmawiajmy o Twoim projekcie i wspólnie znajdźmy najlepsze rozwiązanie dla Twojego biznesu.",
};

export default function Page() {
  return <Contact />;
}
