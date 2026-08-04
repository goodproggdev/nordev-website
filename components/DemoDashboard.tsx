import Link from 'next/link'; 
import { BarChart, Server } from 'lucide-react';

export default function DemoDashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 py-32">

      {/* Contenitore principale del dashboard */}
      <div className="max-w-5xl w-full bg-surface/40 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-10 text-center transition-all duration-500 hover:shadow-3xl hover:border-primary/30">

        {/* Titolo */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-8">
          <span className="text-primary">Dashboard</span> Operativa
        </h1>

        {/* Messaggio di benvenuto */}
        <p className="text-xl text-text-secondary mb-16 leading-relaxed">
          Benvenuto nella tua area di gestione. Qui potrai accedere alle funzionalità chiave per monitorare e amministrare il tuo business digitale.
        </p>

        {/* Bottone per tornare alla Home del Sito */}
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-10 py-4 border border-white/10 rounded-full text-lg font-bold text-text-primary bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:scale-[1.02]"
        >
          Torna alla Home
        </Link>

        {/* Area per le Funzionalità Specifice (I Nuovi Box Cliccabili) */}
        <div className="mt-20 pt-16 border-t border-white/5 text-left">
          <h2 className="text-3xl font-bold text-text-primary tracking-tight mb-10 text-center">Funzionalità Principali</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Box 1: Visite al Sito */}
            <Link 
              href="/dashboard/web-analytics" 
              className="group block bg-surface/60 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl hover:shadow-primary/15 transition-all duration-500 hover:border-primary/40 flex flex-col items-center md:flex-row md:items-start space-y-4 md:space-x-6 cursor-pointer"
            >
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 flex-shrink-0">
                    <BarChart className="w-8 h-8 text-primary" />
                </div>
                <div className="text-center md:text-left"> 
                    <h3 className="text-2xl font-bold text-text-primary tracking-tight mb-2"> Visite e Analisi </h3>
                    <p className="text-text-secondary leading-relaxed">
                        Visualizza report dettagliati sulle performance del tuo sito, analisi di traffico e KPI delle campagne.
                    </p>
                </div>
            </Link>

            {/* Box 2: Gestionale: ERP/CRM */}
            <Link 
              href="/dashboard/gestionale" 
              className="group block bg-surface/60 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl hover:shadow-primary/15 transition-all duration-500 hover:border-primary/40 flex flex-col items-center md:flex-row md:items-start space-y-4 md:space-x-6 cursor-pointer"
            >
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 flex-shrink-0">
                    <Server className="w-8 h-8 text-primary" />
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-text-primary tracking-tight mb-2"> Sistemi Integrati </h3>
                    <p className="text-text-secondary leading-relaxed">
                        Monitora lo stato e le performance dei tuoi sistemi gestionali (ERP, CRM) e delle integrazioni custom.
                    </p>
                </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}