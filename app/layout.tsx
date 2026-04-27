import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: {
    default: "Swan Web Studio - Strony premium",
    template: "%s",
  },
  description:
    "Projektujemy strony premium. Design z intencją, solidne rzemiosło i szczera komunikacja.",
  icons: {
    icon: "https://horizons-cdn.hostinger.com/cfa5146f-52ac-42eb-a177-ef9cb7c13f59/ccb4ebf22fc923ffd0529cf619c7ac26.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="dark">
      <body>
        <Providers>
          <ScrollToTop />
          <div className="min-h-screen bg-[#08090C] text-foreground selection:bg-accent/30 selection:text-foreground">
            <Header />
            {children}
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  );
}
