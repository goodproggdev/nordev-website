"use client";

import { useState } from "react";
import { CheckCircle, Zap, Shield, Phone, Mail } from "lucide-react";
import Image from "next/image"; 
import Form from "../form"
// Assicurati che 'next/image' e 'lucide-react' siano installati

// --- Contenuti della Pagina ---
const SECTIONS = {
  hero: {
    title: "Il Tuo Studio Medico Merita Un Sito Web Veloce e Professionale",
    subtitle: "Soluzioni digitali su misura per medici, dentisti, fisioterapisti e cliniche. Focalizzati sui pazienti, noi pensiamo al tuo posizionamento online.",
    ctaText: "Fissa una Consulenza Gratuita Ora",
    link: "#contatti-sanita",
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
  ctaForm: {
      title: "Pronto a Digitalizzare la Tua Attività Sanitaria?",
      subtitle: "Compila il modulo per richiedere una consulenza gratuita e senza impegno. Ti aiuteremo a definire la migliore strategia web per il tuo studio.",
      formSubmitText: "Richiedi la Consulenza",
  }
};

// --- Componenti Riutilizzabili ---

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


const ContactFormSanita: React.FC = () => {
    // Stato semplificato per la form (dovrai gestire l'invio dati a un backend reale)
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulazione di invio dati - Sostituisci con la logica reale di invio
        setTimeout(() => {
            alert("Richiesta inviata con successo! Sarai ricontattato a breve.");
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl w-full max-w-lg mx-auto border border-blue-200/50">
            <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Campo Nome e Cognome */}
                <div>
                    <label htmlFor="nome" className="mb-2 block text-sm font-medium text-gray-700">Nome e Cognome / Ragione Sociale</label>
                    <input
                        type="text"
                        id="nome"
                        required
                        className="w-full rounded-md border border-gray-300 p-3 text-gray-800 focus:border-blue-500 focus:ring-blue-500 transition duration-150"
                        placeholder="Es. Dott. Marco Rossi / Clinica Alfa"
                    />
                </div>
                
                {/* Campo Email */}
                <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">Email di Contatto Professionale</label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="w-full rounded-md border border-gray-300 p-3 text-gray-800 focus:border-blue-500 focus:ring-blue-500 transition duration-150"
                        placeholder="info@tuostudio.it"
                    />
                </div>
                
                {/* Campo Telefono */}
                <div>
                    <label htmlFor="telefono" className="mb-2 block text-sm font-medium text-gray-700">Numero di Telefono</label>
                    <input
                        type="tel"
                        id="telefono"
                        required
                        className="w-full rounded-md border border-gray-300 p-3 text-gray-800 focus:border-blue-500 focus:ring-blue-500 transition duration-150"
                        placeholder="333 123 4567"
                    />
                </div>
                
                {/* Campo Messaggio/Specializzazione */}
                <div>
                    <label htmlFor="messaggio" className="mb-2 block text-sm font-medium text-gray-700">La tua Professione/Specializzazione (Opzionale)</label>
                    <textarea
                        id="messaggio"
                        rows={3}
                        className="w-full rounded-md border border-gray-300 p-3 text-gray-800 focus:border-blue-500 focus:ring-blue-500 transition duration-150"
                        placeholder="Es. Dentista, Psicologo, Fisioterapista, Clinica Polispecialistica..."
                    ></textarea>
                </div>
                
                {/* Checkbox GDPR semplificato */}
                <div className="flex items-start">
                    <input type="checkbox" id="privacy" required className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <label htmlFor="privacy" className="ml-3 text-sm text-gray-600">
                        Accetto il trattamento dei dati personali e ho letto l'<a href="/privacy-policy" target="_blank" className="text-blue-600 hover:underline font-medium">informativa sulla privacy</a>.
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full rounded-full bg-blue-600 py-3 text-base font-semibold text-white shadow-xl hover:bg-blue-700 transition duration-150 ease-in-out disabled:opacity-50 inline-flex items-center justify-center"
                    disabled={isLoading}
                >
                    {isLoading ? "Invio in corso..." : (
                        <>
                            <Phone className="w-5 h-5 mr-2" />
                            {SECTIONS.ctaForm.formSubmitText}
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

// --- Pagina Principale ---

export default function LandingSanita() {
    const [subject, setSubject] = useState("");
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Sezione Hero */}
            <section className="relative bg-white pt-20 pb-12 md:pt-32 md:pb-20 overflow-hidden">
                {/* Sfondo/Illustrazione (Blur azzurro e grigio) */}
                <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-50/50 mix-blend-multiply opacity-70 filter blur-3xl"></div>
                </div>

                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="text-center pb-12 md:pb-16">
                        <h1
                            className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-gray-900"
                        >
                            {SECTIONS.hero.title}
                        </h1>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-xl text-gray-600 mb-8">
                                {SECTIONS.hero.subtitle}
                            </p>
                            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                                <a
                                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white shadow-lg py-3 px-8 rounded-full font-semibold transition duration-150 ease-in-out inline-flex items-center justify-center group"
                                    href={SECTIONS.hero.link}
                                >
                                    <Phone className="w-5 h-5 mr-2 transition-transform duration-150 group-hover:rotate-6" />
                                    {SECTIONS.hero.ctaText}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Placeholder per Immagine Hero (puoi sostituirlo con un'immagine reale) */}
                    <div className="relative flex justify-center mt-8">
                        <div className="w-full max-w-4xl h-72 bg-blue-50/80 rounded-xl shadow-2xl flex items-center justify-center text-blue-800 border-4 border-blue-500 border-opacity-50 p-6">
                           <p className="text-center font-semibold text-lg">
                               
                               <br/>**Placeholder: Anteprima del sito web o mockup professionale**
                           </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <hr className="my-10 border-gray-200" />

            {/* Sezione Benefici / Caratteristiche */}
            <section className="py-12 md:py-20">
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

            <Form subject={subject} setSubject={setSubject} />
            {/* Sezione CTA / Modulo di Contatto */}
            <section id="contatti-sanita" className="relative py-12 md:py-20 bg-blue-50">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="max-w-2xl mx-auto text-center pb-12 md:pb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
                            {SECTIONS.ctaForm.title}
                        </h2>
                        <p className="text-lg text-gray-600">
                            {SECTIONS.ctaForm.subtitle}
                        </p>
                    </div>
                    <ContactFormSanita />
                </div>
            </section>
        </div>
    );
}