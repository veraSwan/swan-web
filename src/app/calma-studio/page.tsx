import type { Metadata } from "next";
import CalmaStudioView from "@/views/CalmaStudioView";

export const metadata: Metadata = {
  title: "Calma Studio - Premium SPA Case Study",
  description: "Projekt nowoczesnego SPA. Koncepcja oparta na wyciszeniu.",
};

export default function Page() {
  return <CalmaStudioView />;
}
