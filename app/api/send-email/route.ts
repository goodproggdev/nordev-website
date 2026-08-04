import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

function isValidEmail(email: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Il corpo del messaggio veniva prima inserito nell'HTML dell'email senza
// escaping: chi scrive nel form potrebbe iniettare markup arbitrario
// nell'email vista dal destinatario. Semplice escaping dei caratteri HTML.
function escapeHtml(value: string) {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;")
}

export async function POST(req: NextRequest) {
	try {
		const { email, subject, body, website } = await req.json()

		// Honeypot: campo nascosto che un utente reale non compila mai (vedi
		// components/form.tsx). Se arriva valorizzato è quasi certamente un bot:
		// rispondiamo "con successo" senza inviare nulla, così il bot non capisce
		// di essere stato bloccato e non insiste con altre tecniche.
		if (website) {
			return NextResponse.json({ message: "Email inviata" })
		}

		if (!email || !subject || !body) {
			return NextResponse.json({ error: "Dati mancanti" }, { status: 400 })
		}
		if (typeof email !== "string" || typeof subject !== "string" || typeof body !== "string") {
			return NextResponse.json({ error: "Dati non validi" }, { status: 400 })
		}
		if (!isValidEmail(email)) {
			return NextResponse.json({ error: "Email non valida" }, { status: 400 })
		}
		// Limiti di lunghezza: la validazione lato client c'era già, ma chi
		// chiama questo endpoint direttamente (bypassando il form) non la vede.
		if (subject.length > 200 || body.length > 5000) {
			return NextResponse.json({ error: "Messaggio troppo lungo" }, { status: 400 })
		}

		if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.CONTACT_RECEIVER) {
			return NextResponse.json({ error: "Variabili d'ambiente mancanti" }, { status: 500 })
		}

		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT),
			secure: Number(process.env.SMTP_PORT) === 465,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS
			}
		})

		await transporter.sendMail({
			from: `"Sito Contatti" <${process.env.SMTP_USER}>`,
			to: process.env.CONTACT_RECEIVER,
			replyTo: email,
			subject,
			text: body,
			html: `<p>${escapeHtml(body)}</p><p>Mittente: ${escapeHtml(email)}</p>`
		})

		return NextResponse.json({ message: "Email inviata" })
	} catch (err: any) {
		console.error("Errore invio email:", err)
		return NextResponse.json({ error: err.message || "Errore interno" }, { status: 500 })
	}
}
