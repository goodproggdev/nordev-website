"use client"

import { useState } from "react"
import { Monitor, LayoutDashboard, ShoppingBag, Smartphone, ArrowRight, ArrowLeft, Check, Loader2, Send } from "lucide-react"
import { cn } from "@/lib/utils"

// Preventivatore interattivo: raccoglie tipo di progetto + funzionalità
// desiderate e invia tutto come una richiesta strutturata all'endpoint
// esistente /api/send-email (stesso usato dal form di contatto), così non
// serve alcun servizio o credenziale aggiuntiva.
//
// Nota volontaria: nessuna cifra in € viene mostrata o stimata qui. Il sito
// non pubblica prezzi (vedi components/pricing.tsx), quindi lo strumento si
// limita a qualificare la richiesta e a promettere una risposta umana entro
// 24-48h, invece di inventare una stima che non rispecchierebbe un prezzo
// reale.

interface ProjectType {
    id: string
    title: string
    subtitle: string
    icon: typeof Monitor
    description: string
    features: string[]
}

const PROJECT_TYPES: ProjectType[] = [
    {
        id: "START",
        title: "Sito Vetrina",
        subtitle: "START",
        icon: Monitor,
        description: "Presenza online elegante e veloce per professionisti e aziende.",
        features: [
            "Fino a 5 pagine",
            "Design su misura, non un template",
            "Form di contatto",
            "SEO di base",
            "Ottimizzazione velocità",
            "Copywriting testi",
        ],
    },
    {
        id: "DYNAMIC",
        title: "Gestione Autonoma",
        subtitle: "DYNAMIC",
        icon: LayoutDashboard,
        description: "Controllo totale: aggiorna contenuti, news e documenti da solo.",
        features: [
            "Area riservata / pannello di gestione",
            "Blog o sezione news autogestita",
            "Caricamento documenti e file",
            "Formazione all'uso incluso",
            "Gestione utenti multipli",
            "Integrazione newsletter",
        ],
    },
    {
        id: "COMMERCE",
        title: "E-commerce",
        subtitle: "COMMERCE",
        icon: ShoppingBag,
        description: "Negozio online pronto a vendere, su Shopify o su misura.",
        features: [
            "Catalogo prodotti",
            "Pagamenti online (carta, PayPal, ecc.)",
            "Gestione spedizioni",
            "Sconti e codici promozionali",
            "Integrazione gestionale/magazzino",
            "Vendita multi-canale (social, marketplace)",
        ],
    },
    {
        id: "INNOVATE",
        title: "Web & Mobile App",
        subtitle: "INNOVATE",
        icon: Smartphone,
        description: "La tua idea trasformata in un'app o in una web app performante.",
        features: [
            "App per iOS e Android",
            "Notifiche push",
            "Login e profili utente",
            "Integrazione con sito o gestionale esistente",
            "Funzionalità offline",
            "Pubblicazione su App Store / Google Play",
        ],
    },
]

type Step = 1 | 2 | 3

export default function PreventivoWizard() {
    const [step, setStep] = useState<Step>(1)
    const [selectedType, setSelectedType] = useState<string | null>(null)
    const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(new Set())
    const [formData, setFormData] = useState({ name: "", email: "", message: "", website: "" })
    const [gdprAccepted, setGdprAccepted] = useState(false)
    const [errors, setErrors] = useState<{ [key: string]: string }>({})
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const plan = PROJECT_TYPES.find((p) => p.id === selectedType) ?? null

    const toggleFeature = (feature: string) => {
        setSelectedFeatures((prev) => {
            const next = new Set(prev)
            if (next.has(feature)) next.delete(feature)
            else next.add(feature)
            return next
        })
    }

    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    const goToStep2 = () => {
        if (!selectedType) return
        setStep(2)
    }

    const goToStep3 = () => {
        setStep(3)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        setErrors((prev) => ({ ...prev, [name]: "" }))
    }

    const validateStep3 = () => {
        const newErrors: { [key: string]: string } = {}
        if (!formData.name) newErrors.name = "Il nome è obbligatorio"
        if (!formData.email) newErrors.email = "L'email è obbligatoria"
        else if (!validateEmail(formData.email)) newErrors.email = "L'email non è valida"
        if (!gdprAccepted) newErrors.gdpr = "Devi accettare il trattamento dei dati."
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validateStep3() || !plan) return

        setIsLoading(true)
        const featureList = Array.from(selectedFeatures)
        const subject = `Richiesta Preventivo: ${plan.title} (${plan.subtitle})`
        const bodyLines = [
            `Nome: ${formData.name}`,
            `Tipo di progetto: ${plan.title} (${plan.subtitle})`,
            "",
            "Funzionalità richieste:",
            featureList.length > 0 ? featureList.map((f) => `- ${f}`).join("\n") : "- Nessuna selezionata",
        ]
        if (formData.message) {
            bodyLines.push("", "Note aggiuntive:", formData.message)
        }

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: formData.email,
                    subject,
                    body: bodyLines.join("\n"),
                    website: formData.website,
                }),
            })
            if (!res.ok) throw new Error(await res.text())
            await res.json()
            setSuccess(true)
        } catch (error: any) {
            setErrors({ form: error.message || "Invio fallito. Riprova più tardi." })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="relative py-32 px-4 overflow-hidden min-h-screen bg-background-dark">
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-extralight tracking-tighter text-frost-white mb-6 leading-tight">
                        Il tuo <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-aurora-cyan font-normal">preventivo</span> in 3 passaggi
                    </h1>
                    <p className="text-arctic-mist max-w-2xl mx-auto text-lg font-light tracking-wide">
                        Raccontaci cosa ti serve: ti risponderemo con una proposta su misura entro 24-48h.
                    </p>
                </div>

                {/* Indicatore avanzamento */}
                <div className="flex items-center justify-center gap-3 mb-12">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center gap-3">
                            <div
                                className={cn(
                                    "w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border transition-all duration-300",
                                    step === s
                                        ? "bg-primary text-background-dark border-primary"
                                        : step > s
                                          ? "bg-primary/20 text-primary border-primary/40"
                                          : "bg-white/5 text-text-muted border-white/10"
                                )}
                            >
                                {step > s ? <Check className="w-4 h-4" /> : s}
                            </div>
                            {s < 3 && <div className={cn("w-10 h-px", step > s ? "bg-primary/40" : "bg-white/10")} />}
                        </div>
                    ))}
                </div>

                <div className="bg-surface/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
                    {success ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
                                <Check className="w-8 h-8 text-green-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-frost-white mb-3">Richiesta inviata!</h2>
                            <p className="text-arctic-mist max-w-md mx-auto">
                                Grazie {formData.name || ""}, abbiamo ricevuto i dettagli del tuo progetto. Ti contatteremo entro 24-48h con una proposta su misura.
                            </p>
                        </div>
                    ) : (
                        <>
                            {step === 1 && (
                                <div>
                                    <h2 className="text-xl font-bold text-frost-white mb-1">Che tipo di progetto hai in mente?</h2>
                                    <p className="text-text-secondary text-sm mb-8">Scegli la categoria più vicina alla tua idea.</p>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {PROJECT_TYPES.map((p) => (
                                            <button
                                                type="button"
                                                key={p.id}
                                                onClick={() => setSelectedType(p.id)}
                                                className={cn(
                                                    "text-left rounded-2xl p-6 border transition-all duration-300",
                                                    selectedType === p.id
                                                        ? "border-primary/50 bg-primary/5 scale-[1.02]"
                                                        : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                                                )}
                                            >
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                                                        <p.icon className="w-5 h-5 text-primary" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">{p.subtitle}</h3>
                                                        <h4 className="text-base font-bold text-frost-white">{p.title}</h4>
                                                    </div>
                                                </div>
                                                <p className="text-arctic-mist text-sm font-light leading-relaxed">{p.description}</p>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="mt-10 flex justify-end">
                                        <button
                                            type="button"
                                            onClick={goToStep2}
                                            disabled={!selectedType}
                                            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-background-dark font-bold transition-all duration-300 hover:scale-[1.02] disabled:opacity-40 disabled:hover:scale-100"
                                        >
                                            Continua <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 2 && plan && (
                                <div>
                                    <h2 className="text-xl font-bold text-frost-white mb-1">Quali funzionalità ti servono?</h2>
                                    <p className="text-text-secondary text-sm mb-8">Seleziona tutte quelle che ti interessano, anche più di una.</p>
                                    <div className="grid gap-3 sm:grid-cols-2">
                                        {plan.features.map((feature) => (
                                            <label
                                                key={feature}
                                                className={cn(
                                                    "flex items-center gap-3 rounded-2xl border p-4 cursor-pointer transition-all duration-300",
                                                    selectedFeatures.has(feature)
                                                        ? "border-primary/50 bg-primary/5"
                                                        : "border-white/10 bg-white/[0.02] hover:border-white/20"
                                                )}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectedFeatures.has(feature)}
                                                    onChange={() => toggleFeature(feature)}
                                                    className="h-5 w-5 shrink-0 rounded-md border-white/20 bg-white/5 text-primary focus:ring-primary/50 focus:ring-offset-background-dark"
                                                />
                                                <span className="text-sm text-arctic-mist font-light">{feature}</span>
                                            </label>
                                        ))}
                                    </div>
                                    <div className="mt-10 flex justify-between">
                                        <button
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-text-primary font-medium transition-all duration-300 hover:bg-white/10"
                                        >
                                            <ArrowLeft className="w-4 h-4" /> Indietro
                                        </button>
                                        <button
                                            type="button"
                                            onClick={goToStep3}
                                            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-background-dark font-bold transition-all duration-300 hover:scale-[1.02]"
                                        >
                                            Continua <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 3 && plan && (
                                <form noValidate onSubmit={handleSubmit}>
                                    <h2 className="text-xl font-bold text-frost-white mb-1">Ultimo passo: i tuoi contatti</h2>
                                    <p className="text-text-secondary text-sm mb-8">
                                        Riepilogo: <span className="text-frost-white font-medium">{plan.title}</span>
                                        {selectedFeatures.size > 0 && ` · ${selectedFeatures.size} funzionalità selezionate`}
                                    </p>

                                    {/* Honeypot anti-spam, invisibile per un utente reale (vedi components/form.tsx) */}
                                    <div className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
                                        <label htmlFor="website">Non compilare questo campo</label>
                                        <input
                                            type="text"
                                            id="website"
                                            name="website"
                                            tabIndex={-1}
                                            autoComplete="off"
                                            value={formData.website}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-bold text-text-secondary mb-2 ml-1">Nome</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Il tuo nome"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`w-full rounded-2xl border bg-white/5 py-4 px-6 text-text-primary placeholder:text-text-muted outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all duration-300 ${errors.name ? "border-red-500/50" : "border-white/10"}`}
                                            />
                                            {errors.name && <p className="mt-2 text-red-400 text-xs ml-1 font-medium italic">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-bold text-text-secondary mb-2 ml-1">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="la-tua@email.it"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full rounded-2xl border bg-white/5 py-4 px-6 text-text-primary placeholder:text-text-muted outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all duration-300 ${errors.email ? "border-red-500/50" : "border-white/10"}`}
                                            />
                                            {errors.email && <p className="mt-2 text-red-400 text-xs ml-1 font-medium italic">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="message" className="block text-sm font-bold text-text-secondary mb-2 ml-1">Note aggiuntive (facoltativo)</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            placeholder="Vuoi aggiungere altri dettagli sul tuo progetto?"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 px-6 text-text-primary placeholder:text-text-muted outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all duration-300"
                                        />
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 transition-all duration-300 hover:bg-white/[0.08]">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5 mt-1">
                                                <input
                                                    id="gdpr-consent"
                                                    name="gdpr-consent"
                                                    type="checkbox"
                                                    checked={gdprAccepted}
                                                    onChange={(e) => {
                                                        setGdprAccepted(e.target.checked)
                                                        setErrors((prev) => ({ ...prev, gdpr: "" }))
                                                    }}
                                                    className="h-5 w-5 rounded-lg border-white/20 bg-white/5 text-primary focus:ring-primary/50 focus:ring-offset-background-dark"
                                                />
                                            </div>
                                            <div className="ml-4 text-sm">
                                                <label htmlFor="gdpr-consent" className="text-text-secondary leading-snug">
                                                    Accetto il trattamento dei dati personali secondo l'
                                                    <a href="/privacy-policy" className="text-primary hover:text-cyan-400 transition-colors font-semibold" target="_blank" rel="noopener noreferrer">informativa sulla privacy</a>.
                                                </label>
                                            </div>
                                        </div>
                                        {errors.gdpr && <p className="mt-2 text-red-400 text-xs ml-1 font-medium italic">{errors.gdpr}</p>}
                                    </div>

                                    <div className="flex justify-between items-center gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setStep(2)}
                                            className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-text-primary font-medium transition-all duration-300 hover:bg-white/10"
                                        >
                                            <ArrowLeft className="w-4 h-4" /> Indietro
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="relative group flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-primary text-background-dark font-extrabold transition-all duration-300 hover:scale-[1.01] disabled:opacity-50 disabled:hover:scale-100 overflow-hidden"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" /> Invio in corso...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" /> Invia richiesta
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    {errors.form && <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-center font-bold tracking-tight">{errors.form}</div>}
                                </form>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
