import crypto from "crypto"

// Firma/verifica di un token "usa e getta" per il download della Guida
// Nordev: il PDF vive fuori da `public/` (in `private-assets/`), quindi non è
// raggiungibile da un URL diretto. L'unico modo per scaricarlo è passare da
// POST /api/lead-magnet con un'email valida, che genera uno di questi token
// (valido 15 minuti) da usare su GET /api/lead-magnet/download.
//
// Nessun servizio esterno o account da creare: solo una chiave segreta
// generata da voi e messa in LEAD_MAGNET_SECRET (vedi .env.example).

const TOKEN_TTL_MS = 15 * 60 * 1000

function getSecret(): string | null {
	return process.env.LEAD_MAGNET_SECRET || null
}

export function signLeadToken(email: string): string {
	const secret = getSecret()
	if (!secret) throw new Error("LEAD_MAGNET_SECRET non configurato")

	const expires = Date.now() + TOKEN_TTL_MS
	const payload = `${Buffer.from(email, "utf-8").toString("base64url")}.${expires}`
	const signature = crypto.createHmac("sha256", secret).update(payload).digest("base64url")
	return `${payload}.${signature}`
}

export function verifyLeadToken(token: string): { email: string } | null {
	const secret = getSecret()
	if (!secret) return null

	const parts = token.split(".")
	if (parts.length !== 3) return null
	const [emailPart, expiresPart, signature] = parts

	const payload = `${emailPart}.${expiresPart}`
	const expected = crypto.createHmac("sha256", secret).update(payload).digest("base64url")

	const signatureBuf = Buffer.from(signature)
	const expectedBuf = Buffer.from(expected)
	// Confronto a tempo costante: evita che un attaccante deduca la firma
	// corretta misurando quanto impiega il confronto a fallire.
	if (signatureBuf.length !== expectedBuf.length || !crypto.timingSafeEqual(signatureBuf, expectedBuf)) {
		return null
	}

	const expires = Number(expiresPart)
	if (!Number.isFinite(expires) || Date.now() > expires) return null

	try {
		const email = Buffer.from(emailPart, "base64url").toString("utf-8")
		return { email }
	} catch {
		return null
	}
}
