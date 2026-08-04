import React from 'react';
// CORREZIONE: Sostituito Tooth con Syringe (o altra icona medica generica, come Pill)
import { ExternalLink, Syringe, Heart, Stethoscope, Users } from 'lucide-react'; 

// --- 1. Dati delle Card ---
const DEMO_CARDS = [
    {
        title: "Dentista",
        description: "Professionista sanitario specializzato nella diagnosi, prevenzione e trattamento delle patologie orali, dei denti e delle gengive.",
        link: "https://enrico2399.github.io/Health/dentcare-1.0.0/dentcare-1.0.0/index.html",
        icon: Syringe // Icona corretta
    },
    {
        title: "Health Couch",
        description: "Un consulente motivazionale che guida i clienti nello sviluppo di abitudini sane e sostenibili per raggiungere obiettivi di benessere personalizzati.",
        link: "https://enrico2399.github.io/Health/healthcouch-master/healthcouch-master/index.html",
        icon: Heart 
    },
    {
        title: "Medic Care",
        description: "Fornitura di servizi medici completi per la cura, il mantenimento e il miglioramento della salute individuale.",
        link: "https://enrico2399.github.io/Health/medic-care/medic-care/index.html",
        icon: Stethoscope 
    },
    {
        title: "Health Partner",
        description: "Un collaboratore fidato che affianca e supporta il paziente o la struttura sanitaria nella gestione proattiva e personalizzata del percorso di salute.",
        link: "https://enrico2399.github.io/Health/novena/novena/index.html",
        icon: Users 
    }
];

// --- 2. Componente Card Singola (Nessuna modifica necessaria qui) ---
interface DemoCardProps {
    title: string;
    description: string;
    link: string;
    icon: React.ElementType;
}

const DemoCard: React.FC<DemoCardProps> = ({ title, description, link, icon: Icon }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-blue-600"
    >
        <div className="flex items-start mb-4">
            <Icon className="w-8 h-8 text-blue-600 flex-shrink-0 mr-4" />
            <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
                <span className="text-xs text-blue-500 uppercase font-semibold">Vedi Layout Demo</span>
            </div>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <span className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition duration-150">
            Esplora il Layout <ExternalLink className="w-4 h-4 ml-1" />
        </span>
    </a>
);


// --- 3. Componente Principale SanitaShowcase (Nessuna modifica necessaria qui) ---
const SanitaShowcase: React.FC = () => {
    return (
        <section className="relative py-12 md:py-20 bg-gray-50">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                
                {/* Intestazione */}
                <div className="text-center pb-12 md:pb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
                        Seleziona la tua Piattaforma Demo
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Questi sono i nostri <b>4 layout base</b>, completamente personalizzabili sul tuo brand e sulla tua specializzazione in sanità.
                    </p>
                </div>

                {/* Griglia delle 4 Card */}
                <div className="grid gap-8 md:grid-cols-4 md:gap-6">
                    {DEMO_CARDS.map((card, index) => (
                        <DemoCard
                            key={index}
                            title={card.title}
                            description={card.description}
                            link={card.link}
                            icon={card.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SanitaShowcase;