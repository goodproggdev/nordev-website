"use client"
import { useState, useRef, useEffect, useMemo } from "react"
import { cn } from "@/lib/utils"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Monitor, LayoutDashboard, ArrowRight } from "lucide-react"

const BentoCard = ({ f, idx, span }: { f: any, idx: number, span: string }) => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
	const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

	function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
		const rect = event.currentTarget.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		const mouseXRelative = event.clientX - rect.left;
		const mouseYRelative = event.clientY - rect.top;

		x.set(mouseXRelative / width - 0.5);
		y.set(mouseYRelative / height - 0.5);
	}

	function handleMouseLeave() {
		x.set(0);
		y.set(0);
	}

	return (
		<motion.article 
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{
				transformStyle: "preserve-3d",
			}}
			className={cn(
				"group relative flex flex-col justify-start overflow-hidden bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-2xl p-6 transition-colors duration-500 hover:bg-white/[0.04] hover:border-primary/30",
				span
			)}
		>
			<motion.div 
				className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none"
				style={{
					background: useMemo(() => `radial-gradient(300px circle at ${mouseX.get() * 100 + 50}% ${mouseY.get() * 100 + 50}%, rgba(125, 211, 252, 0.08), transparent 80%)`, [mouseX, mouseY])
				}}
			/>
			
			<div className="relative z-10 flex flex-col h-full pointer-events-none" style={{ transform: "translateZ(40px)" }}>
				<div className="flex items-center gap-3 mb-3">
					<span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-lg transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20">
						{f.title.split(' ')[0]}
					</span>
					<h3 className="text-sm font-bold text-frost-white tracking-tight">
						{f.title.split(' ').slice(1).join(' ')}
					</h3>
				</div>
				
				<p className="text-xs leading-relaxed text-arctic-mist font-light group-hover:text-frost-white transition-colors duration-500">
					{f.desc}
				</p>
			</div>

			<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />
		</motion.article>
	);
}

export default function FeaturesDescription() {
	const buttonRef = useRef<HTMLAnchorElement>(null)

	const features = [
		{ title: "🚀 Siti Web su Misura", desc: "Dimentica i CMS lenti. Creiamo siti web unici, veloci e sicuri, scritti su misura per te." },
		{ title: "🔧 Evoluzione Sito Esistente", desc: "Il tuo sito ha bisogno di una spinta? Aggiungiamo nuove pagine, form e integrazioni per farlo crescere con te." },
		{ title: "🛒 E-commerce con Shopify", desc: "Vendi online in modo semplice e professionale. Creiamo il tuo negozio su Shopify, personalizzato per distinguerti." },
		{ title: "📍 Visibilità su Google Maps", desc: "Fatti trovare dai clienti vicino a te. Ottimizziamo il tuo profilo Google per essere la prima scelta a livello locale." },
		{ title: "❤️ Social Professionale", desc: "Creiamo le tue pagine Facebook e Instagram, pronte per essere gestite da te. La base perfetta per la tua community." },
		{ title: "📊 Analisi Dati Web", desc: "Scopri chi visita il tuo sito e cosa cerca. Trasformiamo i dati in decisioni strategiche per la tua crescita." },
		{ title: "🏆 SEO e Performance", desc: "Sali nelle ricerche di Google con un sito ultra-veloce. Attiriamo i clienti giusti, pronti a sceglierti." },
		{ title: "🎨 Design & Logo", desc: "Diamo un'identità visiva unica al tuo brand. Dal logo al materiale pubblicitario, curiamo la tua immagine." },
		{ title: "📱 Sviluppo App Mobili", desc: "Porta il tuo business nelle tasche dei tuoi clienti. Sviluppiamo app per iOS e Android integrate con il tuo sito web." }
	]

	const spans = [
		"lg:col-span-4 lg:row-span-1", 
		"lg:col-span-4 lg:row-span-1", 
		"lg:col-span-4 lg:row-span-1", 
		"lg:col-span-4 lg:row-span-1", 
		"lg:col-span-4 lg:row-span-1", 
		"lg:col-span-4 lg:row-span-1", 
		"lg:col-span-4 lg:row-span-1", 
		"lg:col-span-4 lg:row-span-1", 
		"lg:col-span-4 lg:row-span-1", 
	];

	return (
		<section id="cosa-facciamo" className="relative py-24 px-6 overflow-hidden bg-background-dark">
         <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
         
         <div className="mx-auto max-w-7xl relative z-10">
            <div className="mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="group bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-500 hover:bg-white/[0.04] hover:border-primary/20">
                        <div className="flex items-center gap-4 mb-6">
                           <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                              <Monitor className="w-6 h-6" />
                           </div>
                           <h3 className="text-3xl font-light text-frost-white tracking-tight">Visibilità <span className="text-primary font-medium">WEB</span></h3>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-arctic-mist">
                            {[
                               "Sviluppo siti statici e CMS",
                               "E-commerce performanti",
                               "Webapp e PWA",
                               "Ottimizzazione UX/UI"
                            ].map((item, i) => (
                               <li key={i} className="flex items-center gap-3 text-sm font-light tracking-wide">
                                  <div className="w-1 h-1 rounded-full bg-primary/30" />
                                  {item}
                               </li>
                            ))}
                        </ul>
                    </div>

                    <div className="group bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-500 hover:bg-white/[0.04] hover:border-primary/20">
                        <div className="flex items-center gap-4 mb-6">
                           <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                              <LayoutDashboard className="w-6 h-6" />
                           </div>
                           <h3 className="text-3xl font-light text-frost-white tracking-tight">Integrazioni <span className="text-primary font-medium">Core</span></h3>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-arctic-mist">
                            {[
                               "Software Business Integrations",
                               "Sistemi ERP e Gestionali",
                               "Piattaforme CRM",
                               "Automazione Processi"
                            ].map((item, i) => (
                               <li key={i} className="flex items-center gap-3 text-sm font-light tracking-wide">
                                  <div className="w-1 h-1 rounded-full bg-primary/30" />
                                  {item}
                               </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

			<div className="relative">
				<h2 className="mb-12 text-center text-4xl md:text-5xl font-extralight tracking-tighter text-frost-white leading-tight">
					La nostra <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-aurora-cyan font-normal">offerta</span> completa
				</h2>
				
				<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-3 auto-rows-[120px]">
					{features.map((f, idx) => (
						<BentoCard key={idx} f={f} idx={idx} span={spans[idx] || "lg:col-span-4"} />
					))}
				</div>

				<div className="mt-20 flex justify-center">
					<a
						ref={buttonRef}
						href="/docs/guida-nordev.pdf"
						target="_blank"
						className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-frost-white bg-white/5 border border-white/10 rounded-full backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-primary/30 hover:scale-105 overflow-hidden"
					>
                        <span className="mr-3 p-1.5 rounded-full bg-primary/20 text-primary">
                            <ArrowRight className="w-4 h-4" />
                        </span>
						<span className="relative z-10 flex items-center tracking-wide">
                            Scarica la Guida Nordev (PDF)
                        </span>
					</a>
				</div>
			</div>
		</div>
		</section>
	)
}
