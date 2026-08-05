"use client"

import { useState } from "react"
import { ArrowRight, Loader2, Download } from "lucide-react"

// Sostituisce il vecchio link diretto a /docs/guida-nordev.pdf: prima di
// scaricare il PDF (ora fuori da public/, vedi app/api/lead-magnet/) chiede
// un'email, così ogni download diventa un lead qualificato invece di un
// click anonimo. La validazione server-side vera è in app/api/lead-magnet/route.ts.
export default function LeadMagnetGate() {
	const [open, setOpen] = useState(false)
	const [email, setEmail] = useState("")
	const [website, setWebsite] = useState("") // honeypot anti-spam
	const [error, setError] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [done, setDone] = useState(false)

	const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!validateEmail(email)) {
			setError("Inserisci un'email valida")
			return
		}
		setIsLoading(true)
		setError("")
		try {
			const res = await fetch("/api/lead-magnet", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, website }),
			})
			const data = await res.json()
			if (!res.ok) throw new Error(data.error || "Richiesta non riuscita")
			setDone(true)
			window.location.href = data.url
		} catch (err: any) {
			setError(err.message || "Qualcosa è andato storto. Riprova.")
		} finally {
			setIsLoading(false)
		}
	}

	if (!open) {
		return (
			<button
				type="button"
				onClick={() => setOpen(true)}
				className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-frost-white bg-white/5 border border-white/10 rounded-full backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-primary/30 hover:scale-105 overflow-hidden"
			>
				<span className="mr-3 p-1.5 rounded-full bg-primary/20 text-primary">
					<ArrowRight className="w-4 h-4" />
				</span>
				<span className="relative z-10 flex items-center tracking-wide">Scarica la Guida Nordev (PDF)</span>
			</button>
		)
	}

	return (
		<form
			noValidate
			onSubmit={handleSubmit}
			className="relative w-full max-w-md mx-auto bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
		>
			<p className="text-sm text-arctic-mist mb-4 font-light">
				Lasciaci la tua email: ti arriva subito il link per scaricare la guida.
			</p>

			{/* Honeypot: invisibile per un utente reale, un bot che compila tutto lo riempie */}
			<div className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
				<label htmlFor="lead-website">Non compilare questo campo</label>
				<input
					type="text"
					id="lead-website"
					tabIndex={-1}
					autoComplete="off"
					value={website}
					onChange={(e) => setWebsite(e.target.value)}
				/>
			</div>

			<div className="flex flex-col sm:flex-row gap-3">
				<input
					type="email"
					required
					placeholder="la-tua@email.it"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value)
						setError("")
					}}
					className="flex-1 rounded-xl border border-white/10 bg-white/5 py-3 px-4 text-text-primary placeholder:text-text-muted outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all duration-300"
				/>
				<button
					type="submit"
					disabled={isLoading}
					className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-background-dark font-bold transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
				>
					{isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
					{isLoading ? "Un attimo..." : "Scarica"}
				</button>
			</div>
			{error && <p className="mt-3 text-red-400 text-xs font-medium italic">{error}</p>}
			{done && <p className="mt-3 text-green-400 text-xs font-medium">Fatto! Il download è partito.</p>}
		</form>
	)
}
