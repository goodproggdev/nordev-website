import type { Metadata } from "next";
import { CheckCircle, Zap, Shield } from "lucide-react";

// --- Importazione dei Componenti del Sito Principale (ASSUNZIONE) ---
// Devi assicurarti che questi percorsi e nomi siano corretti per il tuo progetto
import Hero from "@/components/hero-home"; // Componente Hero del sito principale
import ContactSection from "@/components/contact-section"; // Componente Contatti del sito principale
import SanitaShowcase from "@/components/sanita-showcase";
// -------------------------------------------------------------------

// Pagina Server Component: non usa hook client-side, quindi non serve "use
// client" (rimosso: permette di esportare metadata dedicati per questa
// pagina, che prima ricadevano sui default generici del sito).
export const metadata: Metadata = {
	title: "Soluzioni Web per Professionisti Sanitari - Nordevit",
	description: "Siti web professionali, veloci e attenti al GDPR per studi medici e professionisti del settore sanitario.",
	alternates: { canonical: "/sanita" },
};


// --- Contenuti Specifici della Pagina Sanità (Li manteniamo) ---
const SECTIONS = {
  // Rimuoviamo il contenuto Hero in quanto useremo il componente del sito principale
  // Lo manteniamo solo per i link e i testi, se il componente Hero principale è flessibile
  hero: {
    // I testi verranno passati come props al componente Hero principale, se supportato.
    // Se il componente Hero principale non supporta il passaggio di tutti i testi, 
    // allora dovresti adattare il componente Hero principale.
    ctaText: "Fissa una Consulenza Gratuita Ora",
    link: "#contatti-sanita", // Questo ID deve coincidere con l'ID della ContactSection principale
  },
  
  benefits: {
    title: "Perché i Professionisti Sanitari Sceglono Nordev?",
    items: [
      {
        icon: Zap,
        title: "Velocità & Performance ⚡",
        description: "Siti scritti su misura (non CMS lenti). Massima velocità di caricamento per un'esperienza paziente impeccabile e un miglior posizionamento SEO."
      },
      {
        icon: Shield,
        title: "Sicurezza & Privacy (GDPR) 🔒",
        description: "Massima attenzione al GDPR e alle normative sanitarie. Infrastruttura solida e aggiornamenti di sicurezza costanti, essenziali per il tuo settore."
      },
      {
        icon: CheckCircle,
        title: "Design Professionale e Credibile",
        description: "Un'immagine online che ispira fiducia. Design pulito, intuitivo e ottimizzato per la conversione da visitatore a paziente."
      },
    ],
  },
  
  // Rimuoviamo il modulo specifico e usiamo il componente ContactSection principale
  ctaForm: {
      title: "Pronto a Digitalizzare la Tua Attività Sanitaria?",
      subtitle: "Compila il modulo per richiedere una consulenza gratuita e senza impegno. Ti aiuteremo a definire la migliore strategia web per il tuo studio.",
      formSubmitText: "Richiedi la Consulenza",
  }
};

// --- Componenti Riutilizzabili (Mantieniamo BenefitCard, Rimuoviamo ContactFormSanita) ---

interface BenefitItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitItem> = ({ icon: Icon, title, description }) => (
    <div className="rounded-xl bg-white p-6 text-left shadow-lg transition-shadow duration-300 hover:shadow-2xl border border-gray-100">
        <div className="flex items-center mb-4">
            <Icon className="h-8 w-8 text-blue-600 mr-3 flex-shrink-0" />
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
    </div>
);

// Rimuoviamo il componente ContactFormSanita perché useremo ContactSection.
// Se il tuo ContactSection originale è troppo generico, potresti dover passare 
// i testi del ctaForm come prop.

// --- Pagina Principale (Aggiornata) ---

export default function LandingSanita() {
    return (
        <div className="min-h-screen bg-gray-50">

            {/* 1. SEZIONE HERO (Utilizza il Componente Principale) */}
            <Hero />
            
            <hr className="my-10 border-gray-200" />

            {/* 2. Sezione Benefici / Caratteristiche (Specifica Sanità) */}
            <section className="py-12 md:py-20">
                {/* ... (Contenuto della sezione Benefici) ... */}
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
                            {SECTIONS.benefits.title}
                        </h2>
                        <p className="text-lg text-gray-600">
                            La tua presenza online è la prima impressione che conta. Ti forniamo gli strumenti per eccellere.
                        </p>
                    </div>

                    {/* Griglia delle Card */}
                    <div className="grid gap-8 md:grid-cols-3 md:gap-6">
                        {SECTIONS.benefits.items.map((item, index) => (
                            <BenefitCard
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>

                </div>
            </section>
            
            <hr className="my-10 border-gray-200" />

            {/* 2.5. SEZIONE SHOWCASE (NUOVO COMPONENTE AGGIUNTO QUI) */}
            <SanitaShowcase /> 

            <hr className="my-10 border-gray-200" />

            {/* 3. SEZIONE CTA / Modulo di Contatto (Utilizza il Componente Principale) */}
            <ContactSection />
        </div>
    );
}