"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, Monitor, LayoutDashboard, ShoppingBag, Smartphone, ArrowRight } from "lucide-react"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { cn } from "@/lib/utils"

interface PricingProps {
    setSubject: (subject: string) => void
}

export default function Pricing({ setSubject }: PricingProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const handleClick = (pack: string) => {
        setSubject(pack)
        document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" })
    }

    const plans = [
        {
            title: "START",
            subtitle: "Sito Vetrina",
            icon: Monitor,
            color: "from-primary/10 to-aurora-cyan/10",
            features: ["Consulenza Iniziale", "Sviluppo Web", "SEO Base", "Assistenza"],
            description: "L'ideale per professionisti e aziende che desiderano una presenza online elegante e veloce."
        },
        {
            title: "DYNAMIC",
            subtitle: "Gestione Autonoma",
            icon: LayoutDashboard,
            color: "from-aurora-cyan/10 to-primary/10",
            features: ["Strategia CMS", "Gestione Autonoma", "Formazione", "Manutenzione"],
            description: "Per chi vuole il controllo totale: aggiorna news, blog e documenti in autonomia."
        },
        {
            title: "COMMERCE",
            subtitle: "E-commerce",
            icon: ShoppingBag,
            color: "from-aurora-purple/10 to-primary/10",
            features: ["Strategia Shop", "Sistemi Pagamento", "Shopify Setup", "Gestione Ordini"],
            description: "La via rapida per vendere online. Negozio professionale pronto ad accogliere i tuoi clienti."
        },
        {
            title: "INNOVATE",
            subtitle: "Web & Mobile App",
            icon: Smartphone,
            color: "from-primary/10 to-aurora-purple/10",
            features: ["Analisi Flussi", "Progettazione UI", "Sviluppo Completo", "Notifiche Push"],
            description: "Trasforma la tua idea in un'app per smartphone o una web app performante."
        }
    ]

    return (
        <section id="listino" className="relative py-24 px-4 overflow-hidden bg-background-dark">
            <BackgroundBeams className="opacity-20" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-extralight tracking-tighter text-frost-white mb-6 leading-tight">
                        Soluzioni <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-aurora-cyan font-normal">tecniche</span>
                    </h2>
                    <p className="text-arctic-mist max-w-2xl mx-auto text-lg font-light tracking-wide">
                        Architetture digitali solide per scalare il tuo business.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => handleClick(plan.title)}
                            className={cn(
                                "relative group cursor-pointer flex flex-col h-full rounded-3xl p-8 border border-white/5 bg-white/[0.02] backdrop-blur-3xl transition-all duration-500",
                                hoveredIndex === idx ? "scale-[1.02] border-primary/20 bg-white/[0.04] shadow-[0_20px_50px_rgba(0,0,0,0.4)]" : "hover:border-white/10"
                            )}
                        >
                            {/* Accent Glow */}
                            <div className={cn(
                                "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-700 rounded-3xl -z-10 blur-2xl",
                                plan.color,
                                hoveredIndex === idx ? "opacity-100" : ""
                            )} />

                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-500">
                                    <plan.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-1">{plan.title}</h3>
                                    <h4 className="text-lg font-bold text-frost-white tracking-tight">{plan.subtitle}</h4>
                                </div>
                            </div>

                            <p className="text-arctic-mist text-sm leading-relaxed mb-8 grow font-light">
                                {plan.description}
                            </p>

                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-3 text-xs text-arctic-mist/80 font-light tracking-wide">
                                        <div className="w-1 h-1 rounded-full bg-primary/30" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center gap-2 text-sm font-medium text-frost-white group-hover:text-primary transition-colors tracking-wide">
                                Analisi progetto
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex flex-col items-center gap-4">
                    <Link
                        href="/preventivo"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-background-dark font-bold transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(23,147,208,0.4)]"
                    >
                        Non sai da dove partire? Prova il Preventivatore
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-text-secondary">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Hai un progetto personalizzato? <button onClick={() => handleClick("CUSTOM")} className="text-text-primary font-bold hover:text-primary transition-colors">Parliamone insieme</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
