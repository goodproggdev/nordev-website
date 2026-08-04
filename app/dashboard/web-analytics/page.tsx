import DashboardCard from '@/components/dashboard/DashboardCard';
import { Eye, Clock, Zap } from 'lucide-react';

export default function WebAnalyticsDashboard() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">
        <span className="text-primary">Campagne</span> Web / Visite al Sito
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <DashboardCard
          title="Visite Totali (Fake GA)"
          value="8.730"
          description="Dati aggiornati a ieri"
          icon={<Eye className="w-6 h-6" />}
        />
        <DashboardCard
          title="Tempo Medio (Fake GA)"
          value="1:45 min"
          description="Leggero calo di 5 secondi"
          icon={<Clock className="w-6 h-6" />}
        />
        <DashboardCard
          title="Pagine/Sessione (Fake GA)"
          value="2.8"
          description="Ottimo Engagement"
          icon={<Zap className="w-6 h-6" />}
        />
      </div>

      <div className="bg-surface/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
        <h3 className="text-2xl font-bold text-text-primary tracking-tight mb-6">Tasso di Conversione vs. Fonte (Placeholder Grafico)</h3>
        <div className="h-64 bg-surface/20 border border-white/5 flex items-center justify-center rounded-xl">
          <p className="text-text-secondary text-lg">Qui andrebbe il grafico con le visualizzazioni delle campagne/visite</p>
        </div>
      </div>
    </div>
  );
}