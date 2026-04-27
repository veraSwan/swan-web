import type { Metadata } from "next";
import CalmaStudioPage from "@/pages/CalmaStudioPage";

export const metadata: Metadata = {
  title: "Calma Studio - Premium SPA Case Study",
  description: "Projekt nowoczesnego SPA. Koncepcja oparta na wyciszeniu.",
};

export default function Page() {
  return <CalmaStudioPage />;
}
