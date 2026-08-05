"use client"

import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Phone, MessageCircle, Send, Loader2 } from "lucide-react"

interface ContactFormProps {
	subject: string
	setSubject: (subject: string) => void
}

// Zod è la stessa validazione che prima viveva a mano in `validate()`, solo
// dichiarativa e condivisa tra client (qui, via React Hook Form) ed eventuali
// usi futuri dello stesso schema. `website` è l'honeypot anti-spam invisibile
// (vedi app/api/send-email/route.ts): nessun vincolo, un bot lo riempie da solo.
const contactSchema = z.object({
	email: z
		.string()
		.min(1, "L'email è obbligatoria")
		.email("L'email non è valida"),
	subject: z
		.string()
		.min(1, "L'oggetto è obbligatorio")
		.max(200, "Oggetto troppo lungo"),
	body: z
		.string()
		.min(1, "Il messaggio è obbligatorio")
		.max(5000, "Messaggio troppo lungo"),
	gdpr: z.literal(true, {
		errorMap: () => ({ message: "Devi accettare il trattamento dei dati." }),
	}),
	website: z.string().optional(),
})

type ContactFormValues = z.infer<typeof contactSchema>

export default function ContactForm({ subject, setSubject }: ContactFormProps) {
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		formState: { errors, isSubmitting, isSubmitSuccessful },
		setError,
	} = useForm<ContactFormValues>({
		resolver: zodResolver(contactSchema),
		mode: "onTouched",
		defaultValues: { email: "", subject, body: "", website: "", gdpr: false as unknown as true },
	})

	// Quando l'utente clicca un pacchetto in Pricing, `subject` cambia dal
	// genitore: lo riflettiamo nel campo del form anche se l'utente non lo ha
	// ancora toccato.
	useEffect(() => {
		setValue("subject", subject)
	}, [subject, setValue])

	const onSubmit = async (data: ContactFormValues) => {
		try {
			const res = await fetch("/api/send-email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			})
			if (!res.ok) throw new Error(await res.text())
			await res.json()
			reset({ email: "", subject, body: "", website: "", gdpr: false as unknown as true })
		} catch (error: any) {
			setError("root", { message: error.message || "Invio fallito. Riprova più tardi." })
		}
	}

	return (
		<section id="contatti" className="relative py-24 px-4 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

			<div className="container mx-auto px-4 relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary">
                        <span className="text-primary">Mettiamoci</span> in contatto
                    </h2>
                    <div className="mt-4 text-text-secondary max-w-2xl mx-auto">
                        Hai un progetto in mente? Parliamone. Siamo pronti ad aiutarti.
                    </div>
                </div>

				<div className="flex justify-center">
					<div className="w-full max-w-2xl">
						<div className="bg-surface/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl transition-all duration-300">
							<div className="flex flex-col sm:flex-row gap-4 mb-12">
								<a href="tel:+393880764992" className="flex-1 flex items-center justify-center gap-3 rounded-2xl bg-white/5 border border-white/10 py-4 px-6 text-text-primary font-bold hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
									<Phone className="w-5 h-5 text-primary" /> 388 076 4992
								</a>
								<a href="https://wa.me/393880764992" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 rounded-2xl bg-green-500/10 border border-green-500/20 py-4 px-6 text-green-400 font-bold hover:bg-green-500/20 transition-all duration-300 hover:scale-[1.02]">
									<MessageCircle className="w-5 h-5" /> WhatsApp
								</a>
							</div>

							<div className="relative mb-10">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-white/5"></div>
                                </div>
                                <div className="relative flex justify-center">
                                    <span className="px-6 bg-surface-bright/50 backdrop-blur-sm rounded-full text-sm font-semibold text-text-muted uppercase tracking-widest border border-white/5">Oppure scrivici</span>
                                </div>
                            </div>

							<form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-6">
								{/* Honeypot anti-spam: invisibile e non raggiungibile da tastiera per un
								    utente reale. Un bot che compila tutti i campi automaticamente lo
								    riempie, un visitatore umano non lo vede mai. */}
								<div className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
									<label htmlFor="website">Non compilare questo campo</label>
									<input
										type="text"
										id="website"
										tabIndex={-1}
										autoComplete="off"
										{...register("website")}
									/>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-text-secondary mb-2 ml-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="la-tua@email.it"
                                            {...register("email")}
                                            className={`w-full rounded-2xl border bg-white/5 py-4 px-6 text-text-primary placeholder:text-text-muted outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all duration-300 ${errors.email ? "border-red-500/50" : "border-white/10"}`}
                                        />
                                        {errors.email && <p className="mt-2 text-red-400 text-xs ml-1 font-medium italic">{errors.email.message}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-bold text-text-secondary mb-2 ml-1">Oggetto</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            placeholder="Di cosa hai bisogno?"
                                            {...register("subject")}
                                            onChange={(e) => {
                                                setValue("subject", e.target.value)
                                                setSubject(e.target.value)
                                            }}
                                            className={`w-full rounded-2xl border bg-white/5 py-4 px-6 text-text-primary placeholder:text-text-muted outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all duration-300 ${errors.subject ? "border-red-500/50" : "border-white/10"}`}
                                        />
                                        {errors.subject && <p className="mt-2 text-red-400 text-xs ml-1 font-medium italic">{errors.subject.message}</p>}
                                    </div>
                                </div>

								<div>
									<label htmlFor="body" className="block text-sm font-bold text-text-secondary mb-2 ml-1">Messaggio</label>
									<textarea
										id="body"
										rows={5}
										placeholder="Raccontaci brevemente la tua idea..."
										{...register("body")}
										className={`w-full rounded-2xl border bg-white/5 py-4 px-6 text-text-primary placeholder:text-text-muted outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all duration-300 ${errors.body ? "border-red-500/50" : "border-white/10"}`}
									/>
									{errors.body && <p className="mt-2 text-red-400 text-xs ml-1 font-medium italic">{errors.body.message}</p>}
								</div>

								<div className="bg-white/5 border border-white/10 rounded-2xl p-4 transition-all duration-300 hover:bg-white/[0.08]">
									<div className="flex items-start">
										<div className="flex items-center h-5 mt-1">
											<input
												id="gdpr-consent"
												type="checkbox"
												{...register("gdpr")}
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
									{errors.gdpr && <p className="mt-2 text-red-400 text-xs ml-1 font-medium italic">{errors.gdpr.message}</p>}
								</div>

								<div>
									<button
										type="submit"
										className="relative group w-full px-8 py-5 rounded-2xl bg-primary text-white font-extrabold text-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(23,147,208,0.4)] disabled:opacity-50 disabled:hover:scale-100 overflow-hidden"
										disabled={isSubmitting}
									>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
										<span className="relative flex items-center justify-center gap-3">
											{isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-6 h-6 animate-spin" />
                                                    Invio in corso...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    Invia Messaggio
                                                </>
                                            )}
										</span>
									</button>
								</div>
								{errors.root && <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-center font-bold tracking-tight">{errors.root.message}</div>}
								{isSubmitSuccessful && !errors.root && <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-center font-bold tracking-tight animate-pulse">Richiesta inviata! Ti risponderemo prestissimo.</div>}
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
