import { NextRequest, NextResponse } from "next/server"
import { readFile } from "fs/promises"
import path from "path"
import { verifyLeadToken } from "@/lib/lead-magnet"

export async function GET(req: NextRequest) {
	const token = req.nextUrl.searchParams.get("token")
	const verified = token ? verifyLeadToken(token) : null

	if (!verified) {
		return NextResponse.json(
			{ error: "Link scaduto o non valido. Torna alla pagina e richiedi di nuovo il download." },
			{ status: 403 }
		)
	}

	try {
		// Il file vive in private-assets/ (fuori da public/), quindi non è
		// raggiungibile da un URL diretto indovinato: passa solo da qui, con un
		// token valido ottenuto lasciando l'email in POST /api/lead-magnet.
		const filePath = path.join(process.cwd(), "private-assets", "guida-nordev.pdf")
		const file = await readFile(filePath)
		return new NextResponse(file, {
			headers: {
				"Content-Type": "application/pdf",
				"Content-Disposition": 'attachment; filename="guida-nordev.pdf"',
			},
		})
	} catch (err) {
		console.error("Errore lettura Guida Nordev:", err)
		return NextResponse.json({ error: "File non disponibile al momento." }, { status: 500 })
	}
}
