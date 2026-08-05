import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { signLeadToken } from "@/lib/lead-magnet"

function isValidEmail(email: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
	try {
		const { email, website } = await req.json()

		// Honeypot anti-spam, stesso meccanismo di app/api/send-email/route.ts.
		if (website) {
			return NextResponse.json({ error: "Richiesta non valida" }, { status: 400 })
		}

		if (!email || typeof email !== "string" || !isValidEmail(email)) {
			return NextResponse.json({ error: "Email non valida" }, { status: 400 })
		}
		if (email.length > 200) {
			return NextResponse.json({ error: "Email non valida" }, { status: 400 })
		}

		if (!process.env.LEAD_MAGNET_SECRET) {
			return NextResponse.json({ error: "Funzionalità non ancora configurata" }, { status: 500 })
		}

		// Notifica via email al team: riusa la stessa configurazione SMTP già
		// usata dal form di contatto (app/api/send-email/route.ts), nessuna
		// nuova credenziale richiesta. Se l'invio fallisce non blocchiamo il
		// download: chi ha lasciato l'email ha comunque diritto al file.
		if (process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.CONTACT_RECEIVER) {
			try {
				const transporter = nodemailer.createTransport({
					host: process.env.SMTP_HOST,
					port: Number(process.env.SMTP_PORT),
					secure: Number(process.env.SMTP_PORT) === 465,
					auth: {
						user: process.env.SMTP_USER,
						pass: process.env.SMTP_PASS,
					},
				})
				await transporter.sendMail({
					from: `"Lead Magnet Nordev" <${process.env.SMTP_USER}>`,
					to: process.env.CONTACT_RECEIVER,
					subject: "Nuovo download: Guida Nordev",
					text: `Nuovo lead dal download della Guida Nordev.\nEmail: ${email}`,
				})
			} catch (mailErr) {
				console.error("Errore invio notifica lead magnet:", mailErr)
			}
		}

		const token = signLeadToken(email)
		return NextResponse.json({ url: `/api/lead-magnet/download?token=${encodeURIComponent(token)}` })
	} catch (err: any) {
		console.error("Errore lead magnet:", err)
		return NextResponse.json({ error: err.message || "Errore interno" }, { status: 500 })
	}
}
