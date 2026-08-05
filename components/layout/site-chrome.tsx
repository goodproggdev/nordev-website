import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import AOSProvider from "@/components/providers/AOSProvider"
import { SpeedInsights } from "@vercel/speed-insights/next"

// Struttura comune condivisa da tutte le route "pubbliche" del sito
// (route group (default) e /sanita): Header, Footer, AOS e il JSON-LD
// dell'organizzazione. Prima era duplicata in due layout separati, già
// divergenti tra loro (asset diversi, theme-color diverso) — ora c'è una
// sola versione da mantenere.
//
// "ProfessionalService" (che in schema.org estende Organization/LocalBusiness)
// invece del solo "Organization": aiuta Google a capire che si tratta di
// un'attività di servizi con una sede fisica a Treviso, utile per il
// posizionamento nelle ricerche locali e su Google Maps. Indirizzo dato solo
// a livello di città: sul sito non è pubblicato un indirizzo civico preciso.
const organizationJsonLd = {
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	name: "Nordevit",
	url: "https://www.nordevit.it",
	logo: "https://www.nordevit.it/images/logo-nordev.png",
	image: "https://www.nordevit.it/images/logo-nordev.png",
	telephone: "+39-388-076-4992",
	email: "info@nordevit.it",
	address: {
		"@type": "PostalAddress",
		addressLocality: "Treviso",
		addressRegion: "Veneto",
		addressCountry: "IT",
	},
	areaServed: "IT",
	sameAs: [
		"https://www.facebook.com/nordevit2",
		"https://www.linkedin.com/company/nordevit",
		"https://www.instagram.com/nordevit",
	],
	contactPoint: [
		{
			"@type": "ContactPoint",
			email: "info@nordevit.it",
			telephone: "+39-388-076-4992",
			contactType: "customer support",
		},
	],
}

export default function SiteChrome({ children }: { children: React.ReactNode }) {
	return (
		<AOSProvider>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
			/>
			<Header />
			<main className="grow">
				{children}
				<SpeedInsights />
			</main>
			<Footer border={true} />
		</AOSProvider>
	)
}
