import type { Metadata } from "next";
import AboutView from "@/views/AboutView";

export const metadata: Metadata = {
  title: "O mnie — Weronika Łabędź, web designer",
  description:
    "Weronika Łabędź — web designer i developer, założycielka Swan Web Studio. Projektuję strony internetowe premium dla firm i marek, które chcą wyglądać poważnie.",
  alternates: { canonical: "https://swanweb.pl/about" },
  openGraph: {
    title: "O mnie — Weronika Łabędź, web designer | Swan Web Studio",
    description:
      "Projektuję strony internetowe premium dla firm i marek, które chcą wyglądać poważnie.",
    url: "https://swanweb.pl/about",
  },
};

export default function Page() {
  return <AboutView />;
}
