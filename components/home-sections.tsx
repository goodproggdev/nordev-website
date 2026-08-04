"use client"

import { useState } from "react"
import FeaturesDescription from "@/components/features-description"
import OurProjects from "@/components/our-projects"
import ContactSection from "@/components/contact-section"

// Tiene in comune l'oggetto del form contatti tra le card dell'offerta
// (features-description) e il form vero e proprio (contact-section),
// così cliccare una card porta al listino/contatti con l'oggetto già compilato.
export default function HomeSections() {
	const [subject, setSubject] = useState("")

	return (
		<>
			<FeaturesDescription onSelectService={setSubject} />
			<OurProjects />
			<ContactSection subject={subject} setSubject={setSubject} />
		</>
	)
}
