import type { Metadata } from "next"
import PreventivoWizard from "@/components/preventivo-wizard"

export const metadata: Metadata = {
	title: "Richiedi un Preventivo Gratuito - Nordevit",
	description: "Raccontaci il tuo progetto in 3 passaggi: tipo di sito, funzionalità che ti servono e i tuoi contatti. Ti rispondiamo entro 24-48h con una proposta su misura.",
	alternates: { canonical: "/preventivo" },
	openGraph: {
		title: "Richiedi un Preventivo Gratuito - Nordevit",
		description: "Raccontaci il tuo progetto in 3 passaggi e ricevi una proposta su misura entro 24-48h.",
	},
}

export default function PreventivoPage() {
	return <PreventivoWizard />
}
