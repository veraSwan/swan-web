"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const COMPANY = {
  name: "Weronika Łabędź",
  brand: "Swan Web Studio",
  address: "Piła 64-920",
  nip: "7642674318",
  email: "hello@swanweb.pl",
  date: "29 kwietnia 2026",
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-medium text-white mb-4 tracking-tight">{title}</h2>
    <div className="text-[#A1A1AA] leading-[1.85] font-light space-y-3" style={{ fontFamily: "Inter, sans-serif" }}>
      {children}
    </div>
  </div>
);

const privacyContent = (
  <>
    <Section title="1. Administrator danych">
      <p>
        Administratorem Twoich danych osobowych jest <strong className="text-white/80">{COMPANY.name}</strong>, prowadząca
        działalność pod nazwą <strong className="text-white/80">{COMPANY.brand}</strong>, z siedzibą w{" "}
        {COMPANY.address}, NIP: {COMPANY.nip}.
      </p>
      <p>
        Kontakt w sprawach dotyczących danych osobowych:{" "}
        <a href={`mailto:${COMPANY.email}`} className="text-[#C05775] hover:text-[#E889A1] transition-colors">
          {COMPANY.email}
        </a>
      </p>
    </Section>

    <Section title="2. Jakie dane zbieramy">
      <p>W zależności od formy kontaktu możemy przetwarzać następujące dane:</p>
      <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
        <li>Imię i nazwisko</li>
        <li>Adres e-mail</li>
        <li>Treść wiadomości przesłanej przez formularz kontaktowy</li>
        <li>Dane techniczne (adres IP, typ przeglądarki) — zbierane automatycznie przez serwer</li>
      </ul>
    </Section>

    <Section title="3. Cel i podstawa przetwarzania">
      <p>Twoje dane przetwarzamy w celu:</p>
      <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
        <li>Odpowiedzi na zapytania i prowadzenia korespondencji (art. 6 ust. 1 lit. b lub f RODO)</li>
        <li>Zawarcia i realizacji umowy (art. 6 ust. 1 lit. b RODO)</li>
        <li>Wypełnienia obowiązków prawnych (art. 6 ust. 1 lit. c RODO)</li>
        <li>Realizacji prawnie uzasadnionych interesów administratora (art. 6 ust. 1 lit. f RODO)</li>
      </ul>
    </Section>

    <Section title="4. Okres przechowywania danych">
      <p>
        Dane przechowujemy przez czas niezbędny do realizacji celu, w jakim zostały zebrane, a po jego zakończeniu — przez
        okres wymagany przepisami prawa (np. podatkowego). W przypadku korespondencji — do momentu zakończenia sprawy i
        przedawnienia ewentualnych roszczeń.
      </p>
    </Section>

    <Section title="5. Twoje prawa">
      <p>Przysługuje Ci prawo do:</p>
      <ul className="list-disc list-inside space-y-1.5 mt-2 ml-2">
        <li>Dostępu do swoich danych</li>
        <li>Sprostowania danych nieprawidłowych</li>
        <li>Usunięcia danych (prawo do bycia zapomnianym)</li>
        <li>Ograniczenia przetwarzania</li>
        <li>Przenoszenia danych</li>
        <li>Wniesienia sprzeciwu wobec przetwarzania</li>
        <li>Wniesienia skargi do Prezesa UODO</li>
      </ul>
    </Section>

    <Section title="6. Odbiorcy danych">
      <p>
        Twoje dane możemy przekazać podmiotom wspierającym realizację usług (np. dostawcom hostingu, oprogramowania do
        obsługi poczty e-mail), wyłącznie w zakresie niezbędnym i na podstawie umów powierzenia przetwarzania danych.
        Nie sprzedajemy danych osobowych.
      </p>
    </Section>

    <Section title="7. Zmiany polityki">
      <p>
        Zastrzegamy prawo do aktualizacji niniejszej polityki. Aktualna wersja zawsze dostępna jest pod adresem{" "}
        <span className="text-white/60">/polityka-prywatnosci</span>. Data ostatniej aktualizacji: {COMPANY.date}.
      </p>
    </Section>
  </>
);

const cookiesContent = (
  <>
    <Section title="1. Czym są pliki cookie">
      <p>
        Pliki cookie to małe pliki tekstowe zapisywane na Twoim urządzeniu podczas odwiedzania strony. Służą do
        zapamiętywania preferencji, analizowania ruchu i poprawy działania serwisu.
      </p>
    </Section>

    <Section title="2. Jakich plików cookie używamy">
      <div className="space-y-4">
        <div className="pl-4 border-l border-white/[0.08]">
          <p className="text-white/70 font-medium mb-1">Niezbędne (sesyjne)</p>
          <p>
            Konieczne do prawidłowego działania strony. Nie wymagają zgody. Wygasają po zamknięciu przeglądarki.
          </p>
        </div>
        <div className="pl-4 border-l border-white/[0.08]">
          <p className="text-white/70 font-medium mb-1">Preferencje</p>
          <p>
            Zapamiętują ustawienia takie jak wybrany język interfejsu. Przechowywane lokalnie w Twojej przeglądarce.
          </p>
        </div>
        <div className="pl-4 border-l border-white/[0.08]">
          <p className="text-white/70 font-medium mb-1">Analityczne (opcjonalne)</p>
          <p>
            Pozwalają zrozumieć, w jaki sposób odwiedzający korzystają ze strony. Strona aktualnie nie korzysta z
            zewnętrznych narzędzi analitycznych zbierających dane osobowe.
          </p>
        </div>
      </div>
    </Section>

    <Section title="3. Jak zarządzać plikami cookie">
      <p>
        Możesz w dowolnym momencie zmienić ustawienia przeglądarki, aby zablokować lub usunąć pliki cookie. Pamiętaj,
        że wyłączenie niektórych plików cookie może wpłynąć na działanie strony.
      </p>
      <p className="mt-2">
        Instrukcje zarządzania cookies znajdziesz w ustawieniach przeglądarki (Chrome, Firefox, Safari, Edge).
      </p>
    </Section>

    <Section title="4. Zewnętrzne usługi">
      <p>
        Strona może korzystać z zasobów zewnętrznych (np. czcionek Google Fonts, CDN z obrazami), które mogą zapisywać
        własne pliki cookie lub zbierać adresy IP. Ich przetwarzanie podlega odpowiednim politykom prywatności tych
        dostawców.
      </p>
    </Section>

    <Section title="5. Kontakt">
      <p>
        Pytania dotyczące polityki cookies kieruj na:{" "}
        <a href={`mailto:${COMPANY.email}`} className="text-[#C05775] hover:text-[#E889A1] transition-colors">
          {COMPANY.email}
        </a>
      </p>
      <p className="mt-2 text-white/40 text-sm">Ostatnia aktualizacja: {COMPANY.date}</p>
    </Section>
  </>
);

interface PolicyViewProps {
  type: "privacy" | "cookies";
}

const PolicyView: React.FC<PolicyViewProps> = ({ type }) => {
  const isPrivacy = type === "privacy";
  const heading = isPrivacy ? "Polityka Prywatności" : "Polityka Cookies";
  const sub = isPrivacy
    ? "Informacje o przetwarzaniu danych osobowych."
    : "Informacje o plikach cookie stosowanych na tej stronie.";

  return (
    <main className="bg-[#08090C] min-h-screen">
      <div className="layout-container-wide max-w-3xl mx-auto pt-32 pb-24">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-[#A1A1AA] hover:text-white text-sm transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Swan Web Studio
        </Link>

        <div className="mb-14">
          <span className="text-[#C05775] text-[0.65rem] font-medium tracking-[0.4em] uppercase block mb-4">
            {COMPANY.brand}
          </span>
          <h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">{heading}</h1>
          <p className="text-[#A1A1AA] font-light" style={{ fontFamily: "Inter, sans-serif" }}>
            {sub}
          </p>
        </div>

        <div className="border-t border-white/[0.06] pt-12">
          {isPrivacy ? privacyContent : cookiesContent}
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/30" style={{ fontFamily: "Inter, sans-serif" }}>
          <span>{COMPANY.name} · NIP {COMPANY.nip} · {COMPANY.address}</span>
          <div className="flex gap-4">
            {isPrivacy ? (
              <Link href="/polityka-cookies" className="hover:text-white/60 transition-colors">Polityka Cookies →</Link>
            ) : (
              <Link href="/polityka-prywatnosci" className="hover:text-white/60 transition-colors">Polityka Prywatności →</Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PolicyView;
