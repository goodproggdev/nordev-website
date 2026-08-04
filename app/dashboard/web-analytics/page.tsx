import DashboardCard from '@/components/dashboard/DashboardCard';
import { Eye, Clock, Zap } from 'lucide-react';

export default function WebAnalyticsDashboard() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800">Campagne Web / Visite al Sito (Placeholder)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Tasso di Conversione vs. Fonte (Placeholder Grafico)</h3>
        <div className="h-64 bg-gray-100 flex items-center justify-center rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500">Qui andrebbe il grafico con le visualizzazioni delle campagne/visite</p>
        </div>
      </div>
    </div>
  );
}