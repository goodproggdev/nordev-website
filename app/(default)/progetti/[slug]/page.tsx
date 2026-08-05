import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { caseStudies, getCaseStudyBySlug } from "@/lib/projects"

export function generateStaticParams() {
	return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params
	const project = getCaseStudyBySlug(slug)
	if (!project) {
		return { robots: { index: false, follow: false } }
	}
	const title = `${project.client}: ${project.summary} - Nordevit`
	return {
		title,
		description: project.problem,
		alternates: { canonical: `/progetti/${project.slug}` },
		openGraph: { title, description: project.problem },
	}
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const project = getCaseStudyBySlug(slug)
	if (!project) notFound()

	return (
		<section className="relative py-32 px-4 overflow-hidden min-h-screen bg-background-dark">
			<div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

			<div className="max-w-3xl mx-auto relative z-10">
				<Link href="/#progetti" className="inline-flex items-center gap-2 text-sm text-arctic-mist hover:text-primary transition-colors mb-10">
					<ArrowLeft className="w-4 h-4" /> Tutti i progetti
				</Link>

				<span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">{project.category}</span>
				<h1 className="mt-3 mb-10 text-4xl md:text-5xl font-extralight tracking-tighter text-frost-white leading-tight">
					{project.client}
				</h1>

				<div className="grid gap-6 sm:grid-cols-2 mb-12">
					<div className="bg-surface/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
						<h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Il problema</h2>
						<p className="text-arctic-mist font-light leading-relaxed">{project.problem}</p>
					</div>
					<div className="bg-surface/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
						<h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">La soluzione tecnica</h2>
						<p className="text-arctic-mist font-light leading-relaxed">{project.solution}</p>
					</div>
				</div>

				<div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 text-center">
					<p className="text-frost-white font-light mb-6">Vuoi un risultato su misura per la tua azienda?</p>
					<Link
						href="/preventivo"
						className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-background-dark font-bold transition-all duration-300 hover:scale-[1.02]"
					>
						Richiedi un preventivo <ArrowRight className="w-4 h-4" />
					</Link>
				</div>
			</div>
		</section>
	)
}
