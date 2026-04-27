import type { Metadata } from "next";
import ServicesView from "@/views/ServicesView";

export const metadata: Metadata = {
  title: "Usługi - Swan Web Studio",
  description:
    "Oferujemy profesjonalne strony i landing pages o najwyższym standardzie wizualnym.",
};

export default function Page() {
  return <ServicesView />;
}
