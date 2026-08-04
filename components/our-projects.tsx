"use client"
import { useState, useRef, useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import PircherLogo from "@/public/images/Pircher.jpg"
import MaddalenaLogo from "@/public/images/Maddalena.jpg"
import IBMLogo from "@/public/images/IBM.jpg"
import AccentureLogo from "@/public/images/Accenture.jpg"
import ABSLogo from "@/public/images/ABS.jpg"
import OrologiaioLogo from "@/public/images/Orologiaio.jpg"

import { BackgroundBeams } from "@/components/ui/background-beams";

interface ProjectCardProps {
    frontContent: {
        src: StaticImageData;
        alt: string;
        title: string;
        description: string;
    };
    backContent?: {
        title: string;
        description: string;
    };
}

const ProjectCard = ({ frontContent, backContent }: ProjectCardProps) => {
    const [isRotated, setIsRotated] = useState(false);
    const handleRotate = () => setIsRotated(!isRotated);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-[400px] rounded-[32px] overflow-hidden [perspective:1000px] cursor-pointer"
            onClick={handleRotate}
        >
            <div className={`absolute inset-0 w-full h-full transition-transform duration-1000 [transform-style:preserve-3d] ${isRotated ? '[transform:rotateY(180deg)]' : ''}`}>
                
                {/* Fronte della Card */}
                <div className="absolute inset-0 w-full h-full bg-white/[0.05] backdrop-blur-3xl border border-white/20 [backface-visibility:hidden] rounded-[32px] overflow-hidden group-hover:border-primary/50 transition-all duration-700 shadow-2xl">
                    {/* Glass Shine */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.1] via-transparent to-transparent pointer-events-none z-10" />
                    
                    <Image
                        src={frontContent.src}
                        alt={frontContent.alt}
                        className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/10 to-transparent flex flex-col justify-end p-8 z-20">
                        <h6 className="text-2xl font-bold text-frost-white mb-2 tracking-tight">{frontContent.title}</h6>
                        <p className="text-arctic-mist text-sm font-light tracking-wide">{frontContent.description}</p>
                    </div>
                </div>

                {/* Retro della Card */}
                {backContent && (
                    <div className="absolute inset-0 w-full h-full bg-white/[0.08] backdrop-blur-3xl flex flex-col items-center justify-center p-8 rounded-[32px] border border-primary/30 [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-[0_0_50px_rgba(125,211,252,0.15)]">
                        <h6 className="text-2xl font-bold mb-4 text-primary tracking-tight">{backContent.title}</h6>
                        <p className="text-frost-white/90 text-center leading-relaxed text-sm font-light tracking-wide">{backContent.description}</p>
                        <div className="mt-8 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                            Clicca per tornare
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default function Cta() {
    const projects = [
        {
            front: {
                src: PircherLogo,
                alt: "Pircher",
                title: "Pircher",
                description: "Cliente Gestionale"
            },
            back: {
                title: "Pircher",
                description: "Progetto di un nuovo gestionale ERP"
            },
            type: "card"
        },
        {
            front: {
                src: ABSLogo,
                alt: "ABS Utensili",
                title: "ABS Utensili",
                description: "Integrazione e-commerce & gestionale"
            },
            back: {
                title: "ABS Utensili",
                description: "L’integrazione prevede uno scambio bidirezionale di dati tra Gestionale ERP ed E-Commerce. Il risultato consiste nella gestione in tempo reale di scorte presenti e posizione geografica degli ordini."
            },
            type: "card"
        },
        {
            front: {
                src: OrologiaioLogo,
                alt: "Orologiaio da Sebastian",
                title: "Orologiaio da Sebastian",
                description: "Sviluppo eCommerce"
            },
            href: "https://orologiaiodasebastian.com/",
            type: "link"
        }
    ];

    return (
        <section id="progetti" className="relative py-24 overflow-hidden bg-background-dark">
            <BackgroundBeams className="opacity-30" />
            
            <div className="mx-auto max-w-7xl px-4 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-extralight tracking-tighter text-frost-white mb-6 leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-aurora-cyan font-normal">Sviluppo</span> d'impatto
                    </h2>
                    <p className="text-arctic-mist max-w-2xl mx-auto text-lg font-light tracking-wide">
                        Progetti tecnici realizzati con precisione sartoriale e tecnologie d'avanguardia.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => {
                        if (project.type === "card") {
                            return (
                                <ProjectCard
                                    key={index}
                                    frontContent={project.front}
                                    backContent={project.back}
                                />
                            );
                        } else {
                            return (
                                <motion.a
                                    key={index}
                                    href={project.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group block relative h-[400px] rounded-[32px] overflow-hidden border border-white/20 bg-white/[0.05] backdrop-blur-3xl transition-all duration-700 hover:border-primary/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                >
                                    {/* Glass Shine */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] via-transparent to-transparent pointer-events-none z-10" />
                                    
                                    <Image
                                        src={project.front.src}
                                        alt={project.front.alt}
                                        className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent flex flex-col justify-end p-8 z-20">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h6 className="text-2xl font-bold text-frost-white mb-2 tracking-tight">{project.front.title}</h6>
                                                <p className="text-arctic-mist text-sm font-light tracking-wide">{project.front.description}</p>
                                            </div>
                                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-background-dark transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_20px_rgba(125,211,252,0.4)]">
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.a>
                            );
                        }
                    })}
                </div>
            </div>
        </section>
    );
}                /*{
                <div className="mt-20 rounded-xl bg-gray-100 p-8 shadow-lg md:p-12">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-gray-900 md:text-4xl">
                            Scegli il tuo <span className="text-cyan-600">Template</span>
                        </h3>
                        <p className="mt-3 text-lg text-gray-700">
                            Esplora i nostri layout base e scopri il potenziale del tuo prossimo sito web.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        <a
                            href="https://enrico2399.github.io/lawyer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full rounded-full bg-blue-600 px-8 py-3 text-center text-lg font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-700 sm:w-auto"
                        >
                            Template Avvocati
                        </a>
                        
                        <a
                            href="https://enrico2399.github.io/Health/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full rounded-full border-2 border-blue-600 bg-transparent px-8 py-3 text-center text-lg font-semibold text-blue-600 transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white sm:w-auto"
                        >
                            Template Sanità
                        </a>
                    </div>
                </div>
            
            </div>
        </section>
    );
}          /*   </li>
                            <li className="flex items-center gap-3">
                               <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                               Piattaforme CRM e automazione
                            </li>
                        </ul>
                        <div className="mt-10 pt-6 border-t border-white/5 text-sm text-text-muted italic">
                            Partner tech per agenzie, freelance e imprese
                        </div>
                    </div>
                </div>
            </div>

			<div className="sm:hidden relative text-white">
				<h2 className="mb-10 text-center text-4xl font-extrabold tracking-tight">
					<span className="text-primary">Cosa</span> facciamo
				</h2>
				<div
					ref={mobileCarouselRef}
					className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-proximity pb-8 px-4 -mx-4"
					style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
				>
					{features.map((f, idx) => (
						<article key={idx} className="flex-none w-full bg-surface/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg flex flex-col snap-center">
							<h3 className="mb-4 flex items-center space-x-3 font-bold text-primary text-xl">{f.title}</h3>
							<p className="text-base leading-relaxed text-text-secondary flex-grow">{f.desc}</p>
						</article>
					))}
				</div>
				<div className="flex justify-center mt-4 space-x-2">
					{features.map((_, index) => (
						<button
							key={index}
							onClick={() => handleDotClick(index)}
							className={`h-2 w-2 rounded-full transition-colors duration-300 ${activeIndex === index ? "bg-cyan-400" : "bg-gray-500"}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
				<div className={`mt-4 flex justify-center transition-all duration-500 ${showButton ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>
					<a
						ref={buttonRef}
						href="/docs/guida-nordev.pdf"
						target="_blank"
						className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 hover:from-blue-600 hover:via-cyan-500 hover:to-blue-600 transition-all group w-full max-w-xs"
					>
						<span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white opacity-10 rounded-full group-hover:w-40 group-hover:h-40"></span>
						<span className="relative z-10 drop-shadow-lg text-center">Guarda la nostra presentazione!</span>
						<svg className="w-4 h-4 ml-2 relative z-10 animate-bounce text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</a>
				</div>
			</div>
			<div className="hidden sm:flex relative mx-auto max-w-6xl text-white">
				<div
					ref={desktopCarouselRef}
					className="flex gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-4 -mr-4"
					style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
					onMouseDown={handleMouseDown}
					onMouseMove={handleMouseMove}
					onMouseUp={handleMouseUp}
					onMouseLeave={handleMouseUp}
				>
					{webpSlides.map((src, index) => (
						<div key={index} className="flex-none w-full snap-center rounded-lg overflow-hidden shadow-lg">
							<Image src={src} alt={`Slide ${index + 1}`} width={1200} height={675} className="object-contain w-full" />
						</div>
					))}
				</div>
				{isLeftArrowVisible && (
					<button onClick={() => scrollDesktopCarousel("left")} className="absolute z-10 top-1/2 -translate-y-1/2 left-0 sm:left-4 p-2 bg-cyan-400/50 rounded-full transition-opacity duration-300" aria-label="Previous slide">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white">
							<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
						</svg>
					</button>
				)}
				{isRightArrowVisible && (
					<button onClick={() => scrollDesktopCarousel("right")} className="absolute z-10 top-1/2 -translate-y-1/2 right-0 sm:right-4 p-2 bg-cyan-400/50 rounded-full transition-opacity duration-300" aria-label="Next slide">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white">
							<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
						</svg>
					</button>
				)}
			</div>
		</div>
		</section>
	)
}                {/*
                <div className="mt-20 rounded-xl bg-gray-100 p-8 shadow-lg md:p-12">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-gray-900 md:text-4xl">
                            Scegli il tuo <span className="text-cyan-600">Template</span>
                        </h3>
                        <p className="mt-3 text-lg text-gray-700">
                            Esplora i nostri layout base e scopri il potenziale del tuo prossimo sito web.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        <a
                            href="https://enrico2399.github.io/lawyer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full rounded-full bg-blue-600 px-8 py-3 text-center text-lg font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-700 sm:w-auto"
                        >
                            Template Avvocati
                        </a>
                        
                        <a
                            href="https://enrico2399.github.io/Health/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full rounded-full border-2 border-blue-600 bg-transparent px-8 py-3 text-center text-lg font-semibold text-blue-600 transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white sm:w-auto"
                        >
                            Template Sanità
                        </a>
                    </div>
                </div>
            
            </div>
        </section>
    );
}*/