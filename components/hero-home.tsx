"use client"
import { useState } from "react"
import Image from "next/image"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function HeroHome() {
   const [rotated, setRotated] = useState(false)

   return (
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-48 md:pb-32 bg-background-dark" id="home">
         
         <BackgroundBeams className="opacity-30" />

         {/* Aurora Glow Layer */}
         <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-aurora-cyan/5 blur-[120px] rounded-full pointer-events-none" />
         <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-aurora-purple/5 blur-[120px] rounded-full pointer-events-none" />

         <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
            <div className="text-center">
               <div className="mb-16 flex justify-center" data-aos="zoom-y-out">
                  <div className="relative group cursor-pointer" onClick={() => setRotated(!rotated)}>
                     {/* Light Platform (The "Floor") */}
                     <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[280px] h-[40px] bg-primary/20 blur-[40px] rounded-[100%] opacity-40 group-hover:opacity-80 group-hover:bg-primary/40 transition-all duration-1000"></div>
                     
                     {/* Subtle Ambient Backglow */}
                     <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full"></div>

                     <div className="relative z-10 flex items-center justify-center">
                        <Image
                           className={`relative transition-all duration-1000 ease-in-out ${rotated ? "rotate-[360deg]" : ""} group-hover:-translate-y-3`}
                           src="/logo_nordev.svg"
                           width={160}
                           height={160}
                           alt="Nordev"
                           priority
                        />
                     </div>
                  </div>
               </div>

               
               <h1
                  className="mb-8 text-6xl font-extralight tracking-tighter md:text-8xl lg:text-9xl text-frost-white leading-[1.1]"
                  data-aos="zoom-y-out"
                  data-aos-delay={150}
               >
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-frost-white to-arctic-mist">
                     Nordev
                  </span>
               </h1>
               
               <div className="mx-auto max-w-3xl">
                  <p
                     className="mb-12 text-lg text-arctic-mist md:text-xl font-light tracking-wide leading-relaxed"
                     data-aos="zoom-y-out"
                     data-aos-delay={300}
                  >
                     Progettiamo le fondamenta digitali del futuro. 
                     <span className="block mt-2 text-primary font-medium opacity-80">Sviluppo Tecnico. Integrazioni. Evoluzione.</span>
                  </p>
                  
                  <div 
                     className="flex flex-col sm:flex-row items-center justify-center gap-4"
                     data-aos="zoom-y-out"
                     data-aos-delay={450}
                  >
                     <a
                        className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-background-dark bg-primary rounded-full transition-all duration-500 hover:shadow-[0_0_40px_rgba(125,211,252,0.4)] hover:scale-105 w-full sm:w-auto overflow-hidden"
                        href="#listino"
                     >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <span className="relative flex items-center justify-center">
                           Le nostre soluzioni
                           <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                     </a>
                     
                     <a
                        className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-frost-white font-medium backdrop-blur-sm transition-all duration-500 hover:bg-white/10 w-full sm:w-auto"
                        href="#contatti" 
                     >
                        Parliamone
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
