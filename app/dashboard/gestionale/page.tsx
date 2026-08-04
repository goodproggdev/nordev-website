import DashboardCard from '@/components/dashboard/DashboardCard';
import { Warehouse, ScrollText, User } from 'lucide-react';

export default function GestionaleDashboard() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">
        <span className="text-primary">Stato</span> Gestionale (ERP/CRM)
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <DashboardCard 
          title="Giacenza Media Magazzino"
          value="450 Unità"
          description="Totale articoli a stock"
          icon={<Warehouse className="w-6 h-6" />}
        />
        <DashboardCard 
          title="Fatture Aperte"
          value="21"
          description="Valore totale: € 8.500"
          icon={<ScrollText className="w-6 h-6" />}
        />
        <DashboardCard 
          title="Clienti Attivi"
          value="245"
          description="Ultimo inserimento: 2 giorni fa"
          icon={<User className="w-6 h-6" />}
        />
      </div>

      <div className="bg-surface/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
        <h3 className="text-2xl font-bold text-text-primary tracking-tight mb-6">Log e Dati (Placeholder)</h3>
        <div className="h-64 bg-surface/20 border border-white/5 flex items-center justify-center rounded-xl">
          <p className="text-text-secondary text-lg">Placeholder per una Tabella/Lista dati (e.g. ultime 10 fatture o transazioni)</p>
        </div>
      </div>
    </div>
  );
}