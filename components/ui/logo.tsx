"use client"
import Link from "next/link"
import Image from "next/image"
import LogoNordev from "@/public/logo_nordev.svg"

export default function Logo() {
	return (
		<Link href="/" className="inline-flex group relative p-1" aria-label="Nordev">
			{/* Light Platform (Subtle Floor Glow) */}
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-primary/40 blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
			
			<div className="relative z-10 flex items-center justify-center">
				<Image
					className="relative transition-all duration-500 group-hover:-translate-y-0.5"
					src="/logo_nordev.svg"
					width={24}
					height={24}
					alt="Nordev"
				/>
			</div>
		</Link>
	)
}