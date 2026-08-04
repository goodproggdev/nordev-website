// File: app/dashboard/layout.tsx (o dove si trova il tuo layout principale)

// Importa il wrapper che contiene la logica del menu (DashboardLayout.tsx)
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import type { Metadata } from "next";

// Questo pannello è una demo statica senza autenticazione: non deve essere
// indicizzato da Google (è anche escluso dalla sitemap, vedi
// next-sitemap.config.js). Resta comunque raggiungibile da chi conosce
// l'URL: se deve restare online, valutare una vera protezione con login.
export const metadata: Metadata = {
  title: "Dashboard (demo interna) - Nordevit",
  robots: { index: false, follow: false },
};

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout>
      {/* Manteniamo l'intestazione e il children come richiesto dal tuo vecchio layout */}
      <div className="p-8 lg:p-12 min-h-[calc(100vh-theme(spacing.32))] bg-background-dark"> 
        <h1 className="text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight mb-10">
          <span className="text-primary">Dashboard</span> Operativa
        </h1>
        {children}
      </div>
    </DashboardLayout>
  );
}