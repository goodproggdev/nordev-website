import { BackgroundBeams } from "@/components/ui/background-beams";
import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-3xl text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 bg-white/[0.02] backdrop-blur-3xl"
          data-aos="zoom-y-out"
        >
          <BackgroundBeams className="opacity-30" />
          
          <div className="relative z-10 px-4 py-12 md:px-16 md:py-20">
            <h2 className="mb-6 text-4xl md:text-5xl font-extralight tracking-tighter text-frost-white leading-tight">
              Pronto a costruire il tuo <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-aurora-cyan font-normal">futuro digitale</span>?
            </h2>
            <p className="mb-10 text-arctic-mist text-lg font-light tracking-wide max-w-2xl mx-auto">
              Analizziamo insieme le tue esigenze tecniche per progettare una soluzione solida, scalabile e performante.
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <a
                className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-background-dark bg-primary rounded-full transition-all duration-500 hover:shadow-[0_0_40px_rgba(125,211,252,0.4)] hover:scale-105 overflow-hidden"
                href="#contatti"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative flex items-center">
                  Inizia ora
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </div>
          </div>

          {/* Decorative Corner Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-aurora-cyan/5 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-aurora-purple/5 blur-[100px] rounded-full" />
        </div>
      </div>
    </section>
  );
}
