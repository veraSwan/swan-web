import type { Metadata } from "next";
import MaisonAtelierPage from "@/pages/MaisonAtelierPage";

export const metadata: Metadata = {
  title: "Maison Atelier - Premium Fashion Case Study",
  description: "Luksusowy sklep modowy inspirowany estetyką editorial.",
};

export default function Page() {
  return <MaisonAtelierPage />;
}
