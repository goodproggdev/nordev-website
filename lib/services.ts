import { slugify } from "@/lib/utils"

export type PreviewType =
	| "website"
	| "ecommerce"
	| "maps"
	| "social"
	| "analytics"
	| "seo"
	| "design"
	| "app"

export interface Service {
	slug: string
	emoji: string
	title: string
	desc: string
	previewType: PreviewType
	highlights: string[]
}

const rawServices: Omit<Service, "slug">[] = [
	{
		emoji: "🚀",
		title: "Siti Web su Misura",
		desc: "Dimentica i CMS lenti. Creiamo siti web unici, veloci e sicuri, scritti su misura per te.",
		previewType: "website",
		highlights: [
			"Codice scritto su misura, senza plugin o CMS superflui",
			"Tempi di caricamento ottimizzati per utenti e motori di ricerca",
			"Design responsive curato su ogni dispositivo",
			"Struttura pensata per crescere insieme al tuo business",
		],
	},
	{
		emoji: "🔧",
		title: "Evoluzione Sito Esistente",
		desc: "Il tuo sito ha bisogno di una spinta? Aggiungiamo nuove pagine, form e integrazioni per farlo crescere con te.",
		previewType: "website",
		highlights: [
			"Analisi del sito attuale per individuare margini di miglioramento",
			"Nuove pagine e funzionalità integrate senza ripartire da zero",
			"Form, integrazioni e automazioni su misura",
			"Nessuna interruzione del sito durante l'aggiornamento",
		],
	},
	{
		emoji: "🛒",
		title: "E-commerce con Shopify",
		desc: "Vendi online in modo semplice e professionale. Creiamo il tuo negozio su Shopify, personalizzato per distinguerti.",
		previewType: "ecommerce",
		highlights: [
			"Negozio online pronto per vendere fin dal primo giorno",
			"Catalogo prodotti, pagamenti e spedizioni configurati",
			"Tema personalizzato coerente con il tuo brand",
			"Gestione autonoma di prodotti e ordini, senza competenze tecniche",
		],
	},
	{
		emoji: "📍",
		title: "Visibilità su Google Maps",
		desc: "Fatti trovare dai clienti vicino a te. Ottimizziamo il tuo profilo Google per essere la prima scelta a livello locale.",
		previewType: "maps",
		highlights: [
			"Scheda Google Business Profile creata o ottimizzata",
			"Categorie, orari e informazioni corrette per farti trovare",
			"Strategia per raccogliere recensioni autentiche",
			'Posizionamento migliorato nelle ricerche locali "vicino a me"',
		],
	},
	{
		emoji: "❤️",
		title: "Social Professionale",
		desc: "Creiamo le tue pagine Facebook e Instagram, pronte per essere gestite da te. La base perfetta per la tua community.",
		previewType: "social",
		highlights: [
			"Pagine Facebook e Instagram create e configurate correttamente",
			"Grafica coordinata con logo e identità del brand",
			"Impostazioni pensate per la gestione autonoma quotidiana",
			"Base solida per campagne pubblicitarie future",
		],
	},
	{
		emoji: "📊",
		title: "Analisi Dati Web",
		desc: "Scopri chi visita il tuo sito e cosa cerca. Trasformiamo i dati in decisioni strategiche per la tua crescita.",
		previewType: "analytics",
		highlights: [
			"Google Analytics e tracciamento configurati correttamente",
			"Report chiari su visitatori, comportamento e conversioni",
			"Individuazione dei punti di abbandono nel sito",
			"Consigli pratici basati sui dati raccolti, non su intuizioni",
		],
	},
	{
		emoji: "🏆",
		title: "SEO e Performance",
		desc: "Sali nelle ricerche di Google con un sito ultra-veloce. Attiriamo i clienti giusti, pronti a sceglierti.",
		previewType: "seo",
		highlights: [
			"Velocità di caricamento ottimizzata (Core Web Vitals)",
			"Struttura, meta tag e contenuti ottimizzati per Google",
			"Analisi delle parole chiave rilevanti per il tuo settore",
			"Monitoraggio del posizionamento nel tempo",
		],
	},
	{
		emoji: "🎨",
		title: "Design & Logo",
		desc: "Diamo un'identità visiva unica al tuo brand. Dal logo al materiale pubblicitario, curiamo la tua immagine.",
		previewType: "design",
		highlights: [
			"Logo originale, pensato per il tuo settore e i tuoi clienti",
			"Palette colori e tipografia coerenti su ogni materiale",
			"File pronti per web, stampa e social",
			"Linee guida per mantenere l'immagine coerente nel tempo",
		],
	},
	{
		emoji: "📱",
		title: "Sviluppo App Mobili",
		desc: "Porta il tuo business nelle tasche dei tuoi clienti. Sviluppiamo app per iOS e Android integrate con il tuo sito web.",
		previewType: "app",
		highlights: [
			"App nativa o cross-platform per iOS e Android",
			"Integrazione diretta con il tuo sito o gestionale esistente",
			"Notifiche push e funzionalità pensate per fidelizzare i clienti",
			"Pubblicazione su App Store e Google Play incluse nel progetto",
		],
	},
]

export const services: Service[] = rawServices.map((s) => ({
	...s,
	slug: slugify(s.title),
}))

export function getServiceBySlug(slug: string) {
	return services.find((s) => s.slug === slug)
}
