import type { Metadata } from "next";
import MaisonAtelierView from "@/views/MaisonAtelierView";

export const metadata: Metadata = {
  title: "Maison Atelier - Premium Fashion Case Study",
  description: "Luksusowy sklep modowy inspirowany estetyką editorial.",
};

export default function Page() {
  return <MaisonAtelierView />;
}
