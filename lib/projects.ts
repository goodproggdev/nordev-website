export interface CaseStudy {
	slug: string
	client: string
	category: string
	summary: string
	problem: string
	solution: string
}

// Contenuti derivati da quanto già pubblicato in components/our-projects.tsx
// (le descrizioni sul retro delle card), solo riorganizzati in formato
// "Problema / Soluzione". Deliberatamente NESSUNA sezione "Risultati" con
// numeri: il sito non pubblica metriche verificabili per questi clienti, e
// inventarle sarebbe scorretto. Se in futuro arrivano dati reali da mostrare,
// vanno aggiunti qui a mano.
export const caseStudies: CaseStudy[] = [
	{
		slug: "pircher",
		client: "Pircher",
		category: "Gestionale ERP",
		summary: "Progetto di un nuovo gestionale ERP",
		problem:
			"Pircher aveva bisogno di un gestionale costruito attorno ai propri processi reali, invece di doversi adattare a un software standard pensato per altri settori.",
		solution: "Abbiamo progettato e sviluppato da zero un gestionale ERP su misura per l'azienda.",
	},
	{
		slug: "abs-utensili",
		client: "ABS Utensili",
		category: "Integrazione E-commerce & Gestionale",
		summary: "Integrazione e-commerce & gestionale",
		problem:
			"Il gestionale ERP e il negozio e-commerce di ABS Utensili lavoravano separati: scorte e ordini andavano aggiornati a mano su entrambi i sistemi, con il rischio di vendere online prodotti in realtà esauriti.",
		solution:
			"Abbiamo costruito uno scambio dati bidirezionale tra gestionale ERP ed e-commerce: le scorte si aggiornano in tempo reale su entrambi i lati, e ogni ordine riporta automaticamente anche la posizione geografica di spedizione.",
	},
	{
		slug: "preventivatore-smart",
		client: "Nordevit (prodotto interno)",
		category: "Tool di lead generation",
		summary: "Preventivatore Smart",
		problem:
			"Molti visitatori del sito chiedevano un preventivo senza avere ancora le idee chiare su cosa gli servisse davvero, allungando i tempi della prima consulenza.",
		solution:
			"Abbiamo sviluppato un configuratore step-by-step (il Preventivatore, disponibile su /preventivo) che guida il visitatore nella scelta del tipo di progetto e delle funzionalità desiderate, qualificando il contatto prima ancora del primo appuntamento commerciale.",
	},
]

export function getCaseStudyBySlug(slug: string) {
	return caseStudies.find((c) => c.slug === slug)
}
