"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import { usePathname } from "next/navigation"
import Head from "next/head"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		AOS.init({
			once: true,
			disable: "phone",
			duration: 700,
			easing: "ease-out-cubic"
		})
	}, [])

	const pathname = usePathname()
	const baseUrl = "https://www.nordevit.it"

	const pageTitle = (() => {
		switch (pathname) {
			case "/":
				return "Siti Web e App - Nordevit"
			case "/privacy-policy":
				return "Privacy Policy - Nordevit"
			default:
				return "Nordevit"
		}
	})()

	const pageDescription = (() => {
		switch (pathname) {
			case "/":
				return "Realizziamo siti web, e-commerce, web app e mobile app professionali su misura per te."
			case "/privacy-policy":
				return "Consulta la nostra informativa sulla privacy e trattamento dati personali."
			default:
				return "Nordevit - Web & App Development"
		}
	})()

	const canonical = `${baseUrl}${pathname}`

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
        <link rel="icon" type="image/svg+xml" href="/logo_nordev.svg" />
				<link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="sitemap" type="application/xml" href="/sitemap.xml" />
				<meta name="theme-color" content="#020617" />
				<meta name="author" content="Nordevit" />
				<meta name="keywords" content="sviluppo web, siti web, Treviso, web agency, web development, Nordev, sviluppatori, design, e-commerce, UX, UI" />
				<meta name="description" content={pageDescription} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="UTF-8" />
				<meta name="robots" content="index,follow" />
				<link rel="canonical" href={canonical} />

				<meta property="og:type" content="website" />
				<meta property="og:title" content={pageTitle} />
				<meta property="og:description" content={pageDescription} />
				<meta property="og:url" content={canonical} />
				<meta property="og:image" content={`${baseUrl}/images/logo-nordev.png`} />
				<meta property="og:site_name" content="Nordevit" />
				<meta property="og:locale" content="it_IT" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={pageTitle} />
				<meta name="twitter:description" content={pageDescription} />
				<meta name="twitter:image" content={`${baseUrl}/images/logo-nordev.png`} />
				<meta name="twitter:site" content="@nordevit" />

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							"name": "Nordevit",
							"url": baseUrl,
							"logo": `${baseUrl}/images/logo-nordev.png`,
							"sameAs": [
								"https://www.facebook.com/nordevit2",
								"https://www.linkedin.com/company/nordevit",
								"https://www.instagram.com/nordevit"
							],
							"contactPoint": [
								{
									"@type": "ContactPoint",
									"email": "info@nordevit.it",
									"contactType": "customer support"
								}
							]
						})
					}}
				/>
			</Head>
			<Header />
			<main className="grow">
				{children}
				<SpeedInsights />
			</main>
			<Footer border={true} />
		</>
	)
}