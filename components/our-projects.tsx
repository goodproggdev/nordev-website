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
import PreventivatoreScreenshot from "@/public/images/preventivatore.png"

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
            href: "https://www.orologiaiodasebastian.it/",
            type: "link"
        },
        {
            front: {
                src: PreventivatoreScreenshot,
                alt: "Preventivatore Nordev",
                title: "Preventivatore Smart",
                description: "Prodotto interno Nordev"
            },
            back: {
                title: "Preventivatore Smart",
                description: "Tool web che guida il visitatore in pochi passaggi verso una stima di massima del proprio progetto, qualificando il contatto prima ancora del primo appuntamento commerciale."
            },
            type: "card"
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
}