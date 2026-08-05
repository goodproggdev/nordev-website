import { ImageResponse } from "next/og"
import { getServiceBySlug } from "@/lib/services"

// Immagine Open Graph generata al volo per ogni pagina servizio, invece di
// riusare l'immagine generica del sito per tutte e 9 le pagine: quando un
// link a un servizio specifico viene condiviso su WhatsApp/LinkedIn/Facebook,
// l'anteprima mostra il titolo del servizio invece del logo generico.
// Nessun servizio esterno richiesto: `next/og` è incluso in Next.js.
//
// Niente emoji: il renderer di next/og (Satori) non include font emoji a
// colori di default. Per mostrarle servirebbe configurare un fetch esterno
// (es. verso una CDN twemoji) ad ogni generazione dell'immagine — un costo e
// una dipendenza di rete in più solo per un dettaglio decorativo. Meglio
// ometterla.

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const service = getServiceBySlug(slug)
	const title = service?.title ?? "Nordevit"

	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					background: "linear-gradient(135deg, #020617 0%, #0b1120 60%, #020617 100%)",
					position: "relative",
				}}
			>
				<div
					style={{
						position: "absolute",
						top: -120,
						right: -80,
						width: 480,
						height: 480,
						borderRadius: "50%",
						background: "radial-gradient(circle, rgba(125,211,252,0.35) 0%, rgba(125,211,252,0) 70%)",
					}}
				/>
				<div
					style={{
						position: "absolute",
						bottom: -140,
						left: -100,
						width: 480,
						height: 480,
						borderRadius: "50%",
						background: "radial-gradient(circle, rgba(34,211,238,0.25) 0%, rgba(34,211,238,0) 70%)",
					}}
				/>
				<div
					style={{
						fontSize: 64,
						fontWeight: 600,
						color: "#f8fafc",
						textAlign: "center",
						padding: "0 80px",
						display: "flex",
						letterSpacing: -1,
					}}
				>
					{title}
				</div>
				<div
					style={{
						marginTop: 28,
						fontSize: 28,
						color: "#7dd3fc",
						letterSpacing: 4,
						textTransform: "uppercase",
						display: "flex",
					}}
				>
					Nordevit
				</div>
			</div>
		),
		{ ...size }
	)
}
