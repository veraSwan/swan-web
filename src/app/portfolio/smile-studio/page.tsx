import type { Metadata } from "next";
import SmileStudioView from "@/views/SmileStudioView";

export const metadata: Metadata = {
  title: "Smile Studio — Swan Web Studio",
  description: "Case study kliniki dentystycznej premium. Spokojna komunikacja zamiast presji.",
};

export default function Page() {
  return <SmileStudioView />;
}
