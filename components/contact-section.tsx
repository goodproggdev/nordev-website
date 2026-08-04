"use client"

import { useState } from "react"
import Pricing from "@/components/pricing"
import Form from "@/components/form"

interface ContactSectionProps {
	subject?: string
	setSubject?: (subject: string) => void
}

export default function ContactSection({ subject: externalSubject, setSubject: externalSetSubject }: ContactSectionProps) {
	// Stato interno di fallback, usato quando il componente è montato da solo
	// (es. pagina /sanita) senza un genitore che gestisca l'oggetto condiviso.
	const [internalSubject, setInternalSubject] = useState("")

	const subject = externalSubject !== undefined ? externalSubject : internalSubject
	const setSubject = externalSetSubject ?? setInternalSubject

	return (
		<>
			<Pricing setSubject={setSubject} />
			<Form subject={subject} setSubject={setSubject} />
		</>
	)
}
