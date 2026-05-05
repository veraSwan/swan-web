import type { Metadata } from "next";
import PolicyView from "@/views/PolicyView";

export const metadata: Metadata = {
  title: "Polityka Prywatności",
  description: "Informacje o przetwarzaniu danych osobowych w Swan Web Studio — Weronika Łabędź.",
};

export default function Page() {
  return <PolicyView type="privacy" />;
}
