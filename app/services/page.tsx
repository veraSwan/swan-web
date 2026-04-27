import type { Metadata } from "next";
import Services from "@/pages/Services";

export const metadata: Metadata = {
  title: "Usługi - Swan Web Studio",
  description:
    "Oferujemy profesjonalne strony i landing pages o najwyższym standardzie wizualnym.",
};

export default function Page() {
  return <Services />;
}
