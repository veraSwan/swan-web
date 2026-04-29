import type { Metadata } from "next";
import DanielKanzleiView from "@/views/DanielKanzleiView";

export const metadata: Metadata = {
  title: "Daniel Kanzlei — Swan Web Studio",
  description: "Case study berlińskiej kancelarii podatkowo-księgowej. Autorytet zamiast formularza.",
};

export default function Page() {
  return <DanielKanzleiView />;
}
