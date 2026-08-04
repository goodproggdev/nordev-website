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
}

const rawServices: Omit<Service, "slug">[] = [
	{ emoji: "🚀", title: "Siti Web su Misura", desc: "Dimentica i CMS lenti. Creiamo siti web unici, veloci e sicuri, scritti su misura per te.", previewType: "website" },
	{ emoji: "🔧", title: "Evoluzione Sito Esistente", desc: "Il tuo sito ha bisogno di una spinta? Aggiungiamo nuove pagine, form e integrazioni per farlo crescere con te.", previewType: "website" },
	{ emoji: "🛒", title: "E-commerce con Shopify", desc: "Vendi online in modo semplice e professionale. Creiamo il tuo negozio su Shopify, personalizzato per distinguerti.", previewType: "ecommerce" },
	{ emoji: "📍", title: "Visibilità su Google Maps", desc: "Fatti trovare dai clienti vicino a te. Ottimizziamo il tuo profilo Google per essere la prima scelta a livello locale.", previewType: "maps" },
	{ emoji: "❤️", title: "Social Professionale", desc: "Creiamo le tue pagine Facebook e Instagram, pronte per essere gestite da te. La base perfetta per la tua community.", previewType: "social" },
	{ emoji: "📊", title: "Analisi Dati Web", desc: "Scopri chi visita il tuo sito e cosa cerca. Trasformiamo i dati in decisioni strategiche per la tua crescita.", previewType: "analytics" },
	{ emoji: "🏆", title: "SEO e Performance", desc: "Sali nelle ricerche di Google con un sito ultra-veloce. Attiriamo i clienti giusti, pronti a sceglierti.", previewType: "seo" },
	{ emoji: "🎨", title: "Design & Logo", desc: "Diamo un'identità visiva unica al tuo brand. Dal logo al materiale pubblicitario, curiamo la tua immagine.", previewType: "design" },
	{ emoji: "📱", title: "Sviluppo App Mobili", desc: "Porta il tuo business nelle tasche dei tuoi clienti. Sviluppiamo app per iOS e Android integrate con il tuo sito web.", previewType: "app" },
]

export const services: Service[] = rawServices.map((s) => ({
	...s,
	slug: slugify(s.title),
}))

export function getServiceBySlug(slug: string) {
	return services.find((s) => s.slug === slug)
}

// Punti generici mostrati nella pagina di anteprima di ogni servizio.
// Volutamente uguali per tutti: è una demo visiva, non una scheda tecnica reale.
export const genericHighlights = [
	"Design moderno e responsive",
	"Performance e velocità ottimizzate",
	"Facile da aggiornare nel tempo",
	"Pronto per crescere con il tuo business",
]
