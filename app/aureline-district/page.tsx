import type { Metadata } from "next";
import AurelineDistrictPage from "@/pages/AurelineDistrictPage";

export const metadata: Metadata = {
  title: "Aureline District - Luxury Real Estate Case Study",
  description: "Luksusowa strona dewelopera premium. Nieskazitelny design.",
};

export default function Page() {
  return <AurelineDistrictPage />;
}
