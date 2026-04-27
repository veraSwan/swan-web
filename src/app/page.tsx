import type { Metadata } from "next";
import HomeView from "@/views/HomeView";

export const metadata: Metadata = {
  title: "Swan Web Studio - Strony premium",
  description:
    "Projektujemy strony premium. Design z intencją, solidne rzemiosło i szczera komunikacja.",
};

export default function Page() {
  return <HomeView />;
}
