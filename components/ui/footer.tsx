import React from 'react';
import Link from 'next/link';
import Logo from "./logo"

export default function Footer({ border = false }) {
  return (
    <footer className="bg-background-dark border-t border-white/5 relative overflow-hidden">
      {/* Arctic Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="py-12 md:py-16">
          <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-4">

            {/* Logo and Copyright */}
            <div className="flex items-center space-x-6">
              <Logo />
              <div className="flex flex-col">
                <span className="text-xl font-light text-frost-white tracking-tighter">Nordev</span>
                <span className="text-[10px] text-arctic-mist uppercase tracking-widest mt-1 opacity-60">
                  &copy; {new Date().getFullYear()} Nordevit.it
                </span>
              </div>
            </div>

            {/* Info Links */}
            <div className="flex flex-col items-center justify-center gap-6 text-sm text-arctic-mist md:flex-row md:justify-end md:gap-12">
              <div className="flex flex-col items-center md:items-start gap-1.5">
                <span className="text-primary text-[9px] uppercase font-bold tracking-[0.2em] opacity-80">Email</span>
                <a href="mailto:info@nordevit.it" className="text-frost-white hover:text-primary transition-colors font-light tracking-wide">info@nordevit.it</a>
              </div>
              <div className="flex flex-col items-center md:items-start gap-1.5">
                <span className="text-primary text-[9px] uppercase font-bold tracking-[0.2em] opacity-80">Telefono</span>
                <a href="tel:+393880764992" className="text-frost-white hover:text-primary transition-colors font-light tracking-wide">+39 388 076 4992</a>
              </div>
              <div className="flex flex-col items-center md:items-start gap-1.5">
                <span className="text-primary text-[9px] uppercase font-bold tracking-[0.2em] opacity-80">P.IVA</span>
                <span className="text-frost-white font-light tracking-wide">04316111204</span>
              </div>
              <div className="flex flex-col items-center md:items-start gap-1.5">
                <span className="text-primary text-[9px] uppercase font-bold tracking-[0.2em] opacity-80">Sede</span>
                <span className="text-frost-white font-light tracking-wide italic opacity-80">Treviso, Italia</span>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5 flex justify-center md:justify-start">
             <Link href="/privacy-policy" className="text-[10px] text-arctic-mist hover:text-frost-white transition-colors uppercase tracking-[0.1em] opacity-50">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
