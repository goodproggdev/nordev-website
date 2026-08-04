import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import AOSProvider from "@/components/providers/AOSProvider"
import { SpeedInsights } from "@vercel/speed-insights/next"

// Struttura comune condivisa da tutte le route "pubbliche" del sito
// (route group (default) e /sanita): Header, Footer, AOS e il JSON-LD
// dell'organizzazione. Prima era duplicata in due layout separati, già
// divergenti tra loro (asset diversi, theme-color diverso) — ora c'è una
// sola versione da mantenere.
const organizationJsonLd = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "Nordevit",
	url: "https://www.nordevit.it",
	logo: "https://www.nordevit.it/images/logo-nordev.png",
	sameAs: [
		"https://www.facebook.com/nordevit2",
		"https://www.linkedin.com/company/nordevit",
		"https://www.instagram.com/nordevit",
	],
	contactPoint: [
		{
			"@type": "ContactPoint",
			email: "info@nordevit.it",
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
