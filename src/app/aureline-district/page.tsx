import type { Metadata } from "next";
import AurelineDistrictView from "@/views/AurelineDistrictView";

export const metadata: Metadata = {
  title: "Aureline District - Luxury Real Estate Case Study",
  description: "Luksusowa strona dewelopera premium. Nieskazitelny design.",
};

export default function Page() {
  return <AurelineDistrictView />;
}
