'use client'

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Logo from "./logo"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Header() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [hidden, setHidden] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    // Tutti i link del menu puntano a sezioni ancora della Home Page.
    // Se non siamo già sulla Home ('/'), l'href deve includere il percorso
    // root ('/#sezione'), altrimenti il browser aggiunge solo l'hash alla
    // pagina corrente (es. /servizi/xxx#home) senza navigare alla Home.
    const isHomePage = pathname === '/'

    // Funzione per determinare l'href corretto: se siamo su qualsiasi pagina
    // diversa dalla Home (Sanità, dettaglio servizio, ecc.) antepone '/'
    // all'hash, così il link naviga sempre alla sezione corretta della Home.
    const getAnchorUrl = (defaultHash: string) => {
        return isHomePage ? defaultHash : '/' + defaultHash;
    }


    useEffect(() => {
        // Throttlato con requestAnimationFrame + listener passivo: stesso
        // comportamento di prima (nasconde l'header scrollando giù da mobile),
        // ma senza forzare un aggiornamento di stato ad ogni singolo evento di
        // scroll (che su mobile può scattare decine di volte al secondo).
        let lastScrollY = window.scrollY
        let ticking = false

        const updateHeader = () => {
            ticking = false

            if (window.innerWidth >= 640) return

            const currentScroll = window.scrollY
            setHidden(currentScroll > lastScrollY && currentScroll > 50)
            lastScrollY = currentScroll
        }

        const handleScroll = () => {
            if (ticking) return
            ticking = true
            window.requestAnimationFrame(updateHeader)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMobileMenuOpen(false)
            }
        }

        if (mobileMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        } else {
            document.removeEventListener("mousedown", handleClickOutside)
        }

        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [mobileMenuOpen])

    return (
        <header className={`fixed z-50 w-full transition-transform duration-300
            ${hidden ? "-translate-y-full" : "translate-y-0"}
            top-0 md:top-8`}>
            <div className="mx-auto max-w-6xl sm:max-w-2xl px-4 sm:px-6">
                <div className="relative flex h-14 items-center justify-between gap-3 rounded-full bg-white/[0.02] px-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] backdrop-blur-2xl border border-white/10">

                    <div className="sm:hidden flex items-center">
                        <Logo />
                    </div>

                    {/* Menu Desktop */}
                    <ul className="hidden sm:flex justify-around text-xs font-medium text-arctic-mist w-full max-w-2xl mx-auto items-center uppercase tracking-widest">
                        <li><a href={getAnchorUrl('#home')} className="hover:text-frost-white transition-colors duration-300">Home</a></li>
                        <li><a href={getAnchorUrl('#chi-siamo')} className="hover:text-frost-white transition-colors duration-300">Chi siamo</a></li>
                        <li><a href={getAnchorUrl('#cosa-facciamo')} className="hover:text-frost-white transition-colors duration-300">Offerta</a></li>
                        <li><a href={getAnchorUrl('#progetti')} className="hover:text-frost-white transition-colors duration-300">Progetti</a></li>
                        <li><a href={getAnchorUrl('#listino')} className="hover:text-frost-white transition-colors duration-300">Soluzioni</a></li>
                        <li><a href={getAnchorUrl('#contatti')} className="hover:text-primary transition-colors duration-300 text-frost-white">Contatti</a></li>
                    </ul>

                    {/* Pulsante hamburger - solo mobile */}
                    <button
                        type="button"
                        className="sm:hidden flex items-center justify-center w-9 h-9 -mr-2 rounded-full bg-white/5 border border-white/10 text-frost-white hover:bg-white/10 hover:border-primary/30 transition-colors"
                        onClick={() => setMobileMenuOpen((open) => !open)}
                        aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Menu mobile */}
                {mobileMenuOpen && (
                    <div ref={menuRef} id="mobile-menu" className="sm:hidden mt-2 rounded-xl bg-surface/90 p-4 shadow-xl border border-white/10 backdrop-blur-xl">
                        <ul className="flex flex-col items-center gap-4 text-sm font-medium text-text-secondary">
                            <li><a href={getAnchorUrl('#home')} className="hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
                            <li><a href={getAnchorUrl('#chi-siamo')} className="hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Chi siamo</a></li>
                            <li><a href={getAnchorUrl('#cosa-facciamo')} className="hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Offerta</a></li>
                            <li><a href={getAnchorUrl('#progetti')} className="hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Progetti</a></li>
                            <li><a href={getAnchorUrl('#listino')} className="hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Soluzioni</a></li>
                            <li><a href={getAnchorUrl('#contatti')} className="hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Contatti</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    )
}