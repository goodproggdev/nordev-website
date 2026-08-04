import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
	try {
		const { email, subject, body } = await req.json()
		if (!email || !subject || !body) return NextResponse.json({ error: "Dati mancanti" }, { status: 400 })

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
			html: `<p>${body}</p><p>Mittente: ${email}</p>`
		})

		return NextResponse.json({ message: "Email inviata" })
	} catch (err: any) {
		console.error("Errore invio email:", err)
		return NextResponse.json({ error: err.message || "Errore interno" }, { status: 500 })
	}
}