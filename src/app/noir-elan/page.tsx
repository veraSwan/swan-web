import type { Metadata } from "next";
import NoirElanView from "@/views/NoirElanView";

export const metadata: Metadata = {
  title: "Noir Élan - Premium Perfume Case Study",
  description: "Luksusowa marka perfum niszowych w cyfrowym wydaniu.",
};

export default function Page() {
  return <NoirElanView />;
}
