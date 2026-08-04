import type { Metadata } from "next";

// app/demo/page.jsx è un Client Component (usa useState/useEffect) e quindi
// non può esportare metadata direttamente: questo layout server-side gli
// aggiunge un noindex senza toccarne il rendering. È una demo (sito
// ristorante) usata come materiale commerciale, non collegata da nessun link
// del sito e non pensata per essere trovata su Google cercando "Nordevit".
export const metadata: Metadata = {
  title: "Demo - Nordevit",
  robots: { index: false, follow: false },
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
