"use client"
import { motion } from "framer-motion"

export default function Cta() {
    return (
        <section id="chi-siamo" className="relative py-24 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="mx-auto max-w-7xl px-4 relative">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Chi siamo */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] group hover:bg-white/[0.05] transition-colors duration-500"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-text-primary tracking-tight">Chi siamo</h3>
                        <div className="w-16 h-1 bg-primary mb-8 rounded-full shadow-[0_0_15px_rgba(23,147,208,0.4)] transition-all duration-500 group-hover:w-24" />
                        <div className="space-y-4 text-text-secondary leading-relaxed text-lg">
                            <p>
                                Siamo specialisti informatici con sede a <span className="text-primary font-semibold">Treviso</span>: un team esperto di sviluppo web e integrazioni digitali. Progettiamo e realizziamo soluzioni <span className="text-text-primary font-medium">solide, scalabili e personalizzate</span>, dalla creazione di siti web ad alte prestazioni fino a dashboard evolute e integrazioni con sistemi aziendali (ERP, CRM, gestionali).
                            </p>
                            <p>
                                Non siamo freelance né agenzie generaliste: mettiamo la <span className="text-text-primary font-medium">tecnica e la qualità al centro</span> di ogni progetto, offrendo le fondamenta digitali essenziali per ogni attività.
                            </p>
                        </div>
                    </motion.div>

                    {/* Perché sceglierci */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] group hover:bg-white/[0.05] transition-colors duration-500"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-text-primary tracking-tight">Perché sceglierci</h3>
                        <div className="w-16 h-1 bg-primary mb-8 rounded-full shadow-[0_0_15px_rgba(23,147,208,0.4)] transition-all duration-500 group-hover:w-24" />
                        <div className="space-y-4 text-text-secondary leading-relaxed text-lg">
                            <p>
                                Non siamo una agenzia marketing e non gestiamo campagne pubblicitarie. Il nostro lavoro è sviluppare <span className="text-text-primary font-medium">prodotti tecnici affidabili e performanti</span>, la base imprescindibile per chi vuole crescere online.
                            </p>
                            <p>
                                <span className="text-text-primary font-medium">Visibilità garantita</span>, senza promesse da marketer: ottimizziamo il sito per i motori di ricerca (<span className="text-primary font-semibold">SEO tecnica</span>), configuriamo e ti supportiamo nell’attivazione di profili Google Business, social network, e ti aiutiamo nel miglior posizionamento di base.
                            </p>
                            <p>
                                La differenza sta nella <span className="text-text-primary font-medium">qualità del prodotto</span>: i nostri siti sono pensati per essere trovati, facili da integrare con campagne pubblicitarie future e pronti per la gestione dati, reporting e automazioni. Siamo il <span className="text-primary font-semibold">partner tech</span> di agenzie, freelance e aziende.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}