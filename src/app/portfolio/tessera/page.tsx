import type { Metadata } from "next";
import TesseraView from "@/views/TesseraView";

export const metadata: Metadata = {
  title: "Tessera — Swan Web Studio",
  description: "Case study restauracji fine dining. Editorial zamiast wizytówki.",
};

export default function Page() {
  return <TesseraView />;
}
