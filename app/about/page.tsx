import type { Metadata } from "next";
import About from "@/pages/About";

export const metadata: Metadata = {
  title: "O nas - Swan Web Studio",
  description:
    "Poznaj Swan Web Studio. Jesteśmy kameralnym zespołem, który wierzy w sensowne projekty i szczere rzemiosło.",
};

export default function Page() {
  return <About />;
}
