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
    const [lastScroll, setLastScroll] = useState(0)
    const menuRef = useRef<HTMLDivElement>(null)

    // Definiamo se siamo sulla pagina /sanita (o su un percorso che inizia con /sanita)
    const isSanitaPage = pathname.includes('/sanita')
    
    // Definiamo i link che devono puntare alla Home Page (/) con il loro hash
    const rootLinkHashes = ['#home', '#chi-siamo', '#cosa-facciamo', '#progetti']

    // Funzione per determinare l'href corretto (modificata)
    const getAnchorUrl = (defaultHash: string) => {
        if (isSanitaPage && rootLinkHashes.includes(defaultHash)) {
            // Se siamo in /sanita E il link è uno di quelli da reindirizzare:
            // Restituisce il percorso root ('/') concatenato con l'hash desiderato (es. '/#progetti')
            return '/' + defaultHash; 
        }
        // Altrimenti, usa l'hash predefinito (per #listino, #contatti o altre pagine)
        return defaultHash;
    }


    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth >= 640) return

            const currentScroll = window.scrollY
            if (currentScroll > lastScroll && currentScroll > 50) {
                setHidden(true)
            } else {
                setHidden(false)
            }
            setLastScroll(currentScroll)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScroll])

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
                        <li><a href="#listino" className="hover:text-frost-white transition-colors duration-300">Soluzioni</a></li>
                        <li><a href="#contatti" className="hover:text-primary transition-colors duration-300 text-frost-white">Contatti</a></li>
                    </ul>

                    {/* Pulsante hamburger - solo mobile */}
                    <button
                        type="button"
                        className="sm:hidden flex items-center justify-center w-9 h-9 -mr-2 rounded-full text-frost-white hover:bg-white/10 transition-colors"
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
                            <li><a href={getAnchorUrl('#cosa-facciamo')} className="hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Cosa facciamo</a></li>
                            <li><a href={getAnchorUrl('#progetti')} className="hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Alcuni progetti</a></li>
                            <li><a href="#listino" className="hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Listino</a></li>
                            <li><a href="#contatti" className="hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Contatti</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    )
}