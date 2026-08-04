// File: app/dashboard/layout.tsx (o dove si trova il tuo layout principale)

// Importa il wrapper che contiene la logica del menu (DashboardLayout.tsx)
import DashboardLayout from '@/components/dashboard/DashboardLayout'; 

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