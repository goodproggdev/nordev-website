"use client"

import { useState } from "react"
import Pricing from "@/components/pricing"
import Form from "@/components/form"

export default function ContactSection() {
	const [subject, setSubject] = useState("")

	return (
		<>
			<Pricing setSubject={setSubject} />
			<Form subject={subject} setSubject={setSubject} />
		</>
	)
}
