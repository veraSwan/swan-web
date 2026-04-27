import type { Metadata } from "next";
import Home from "@/pages/Home";

export const metadata: Metadata = {
  title: "Swan Web Studio - Strony premium",
  description:
    "Projektujemy strony premium. Design z intencją, solidne rzemiosło i szczera komunikacja.",
};

export default function Page() {
  return <Home />;
}
