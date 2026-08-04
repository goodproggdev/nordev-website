"use client"

import { useEffect, useState } from "react"
import { Phone, Mail, MessageCircle } from "lucide-react"

export default function WhatsappIcon() {
    const [collapsed, setCollapsed] = useState(false)

    useEffect(() => {
        // Keeps it available but compact after 3 seconds
        const timer = setTimeout(() => setCollapsed(true), 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div
            className={`fixed bottom-8 right-8 z-50 flex items-center gap-1.5 p-1.5
			rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] bg-white/[0.05] backdrop-blur-2xl border border-white/10
			transition-all duration-500 ease-in-out overflow-hidden hover:bg-white/[0.1] hover:border-primary/30`}
            onMouseEnter={() => setCollapsed(false)}
            onMouseLeave={() => setCollapsed(true)}
            style={{
                width: collapsed ? "60px" : "190px",
            }}
        >
            <a
                href="https://wa.me/393880764992"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contattaci su WhatsApp"
                className="flex items-center justify-center w-11 h-11 flex-shrink-0 rounded-full bg-primary/20 text-primary transition-transform hover:scale-110"
            >
                <MessageCircle className="w-5 h-5" />
            </a>

            {/* Contacts container with same gap */}
            <div className={`flex gap-1.5 items-center transition-opacity duration-500 ${collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"}`}>
                <a href="tel:+393880764992" aria-label="Chiama" className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 text-frost-white transition-transform hover:scale-110 hover:bg-white/10">
                    <Phone className="w-5 h-5" />
                </a>
                <a href="mailto:info@nordevit.it" aria-label="Invia Email" className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 text-frost-white transition-transform hover:scale-110 hover:bg-white/10">
                    <Mail className="w-5 h-5" />
                </a>
            </div>
        </div>
    )
}