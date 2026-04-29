import type { Metadata } from "next";
import PolicyView from "@/views/PolicyView";

export const metadata: Metadata = {
  title: "Polityka Cookies — Swan Web Studio",
  description: "Informacje o plikach cookie stosowanych na stronie Swan Web Studio.",
};

export default function Page() {
  return <PolicyView type="cookies" />;
}
