import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"
import { services, getServiceBySlug } from "@/lib/services"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { ServicePreviewMock } from "@/components/service-preview-mock"

export function generateStaticParams() {
	return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const service = getServiceBySlug(slug)

	if (!service) {
		return { title: "Servizio non trovato - Nordevit", robots: { index: false, follow: false } }
	}

	return {
		title: `${service.title} - Anteprima servizio - Nordevit`,
		description: service.desc,
		alternates: { canonical: `/servizi/${slug}` },
	}
}

export default async function ServicePreviewPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const service = getServiceBySlug(slug)

	if (!service) {
		notFound()
	}

	const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3)

	return (
		<section className="relative overflow-hidden bg-background-dark pt-40 pb-24 px-4">
			<BackgroundBeams className="opacity-20" />

			<div className="mx-auto max-w-3xl relative z-10">
				<Link
					href="/#cosa-facciamo"
					className="inline-flex items-center gap-2 text-sm font-medium text-arctic-mist hover:text-frost-white transition-colors mb-10"
				>
					<ArrowLeft className="w-4 h-4" />
					Torna alla home
				</Link>

				{/* Intestazione */}
				<div className="text-center mb-10">
					<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-3xl">
						{service.emoji}
					</div>
					<h1 className="text-3xl md:text-5xl font-extralight tracking-tighter text-frost-white leading-tight mb-4">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-aurora-cyan font-normal">
							{service.title}
						</span>
					</h1>
					<p className="text-arctic-mist text-base md:text-lg font-light tracking-wide max-w-xl mx-auto">
						{service.desc}
					</p>

					<div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold uppercase tracking-widest text-primary/80">
						<Sparkles className="w-3.5 h-3.5" />
						Anteprima illustrativa — solo a scopo dimostrativo
					</div>
				</div>

				{/* Mockup su misura per la categoria di servizio */}
				<div className="mb-14">
					<ServicePreviewMock type={service.previewType} />
				</div>

				{/* Cosa potrebbe includere — punti specifici per questo servizio
				    (prima erano gli stessi 4 punti generici per tutti i 9 servizi) */}
				<div className="bg-surface/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-14">
					<h2 className="text-xl font-bold text-frost-white tracking-tight mb-6">Cosa potrebbe includere</h2>
					<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{service.highlights.map((item) => (
							<li key={item} className="flex items-center gap-3 text-sm text-arctic-mist font-light">
								<CheckCircle2 className="w-4 h-4 text-primary/70 flex-shrink-0" />
								{item}
							</li>
						))}
					</ul>
				</div>

				{/* CTA */}
				<div className="text-center mb-16">
					<Link
						href="/#contatti"
						className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-background-dark bg-primary rounded-full transition-all duration-500 hover:shadow-[0_0_40px_rgba(125,211,252,0.4)] hover:scale-105"
					>
						<span className="relative flex items-center justify-center">
							Ti piace l'idea? Parliamone
							<ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
						</span>
					</Link>
				</div>

				{/* Altri servizi */}
				{otherServices.length > 0 && (
					<div>
						<h2 className="text-center text-sm font-bold uppercase tracking-widest text-text-muted mb-6">
							Altri servizi
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
							{otherServices.map((s) => (
								<Link
									key={s.slug}
									href={`/servizi/${s.slug}`}
									className="flex flex-col items-center text-center gap-2 rounded-2xl bg-white/[0.02] border border-white/5 p-5 hover:bg-white/[0.05] hover:border-primary/30 transition-all duration-300"
								>
									<span className="text-2xl">{s.emoji}</span>
									<span className="text-sm font-medium text-frost-white">{s.title}</span>
								</Link>
							))}
						</div>
					</div>
				)}
			</div>
		</section>
	)
}
