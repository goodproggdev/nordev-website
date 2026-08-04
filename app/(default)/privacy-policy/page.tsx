import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Privacy Policy - Nordevit",
	description: "Consulta la nostra informativa sulla privacy e trattamento dati personali.",
	alternates: { canonical: "/privacy-policy" },
}

// Nota per Enrico: questa è una bozza riscritta in italiano, coerente con il
// dominio e il trattamento dati realmente effettuati da questo sito (form di
// contatto via SMTP, consenso GDPR raccolto in components/form.tsx). Prima
// del sostituire quella online, vale la pena farla rileggere da chi segue
// gli aspetti legali/privacy dell'azienda: non sostituisce un parere legale.
export default function PrivacyPolicyPage() {
	return (
		<div className="container mx-auto px-4 py-16">
			<h1 className="text-3xl font-bold mb-8 text-frost-white">Privacy Policy di Nordevit</h1>
			<div className="prose prose-invert max-w-none">
				<p><strong>Ultimo aggiornamento:</strong> 4 agosto 2026</p>

				<p>
					La presente informativa descrive come Nordevit (P.IVA 04316111204, con sede a Treviso,
					di seguito "Nordevit", "noi") tratta i dati personali raccolti tramite il sito{" "}
					<a href="https://www.nordevit.it">https://www.nordevit.it</a> (di seguito il "Sito"), in
					conformità al Regolamento (UE) 2016/679 ("GDPR") e alla normativa italiana applicabile in
					materia di protezione dei dati personali.
				</p>

				<h2>Titolare del trattamento</h2>
				<p>
					Il titolare del trattamento è Nordevit, P.IVA 04316111204, Treviso (Italia). Per qualsiasi
					richiesta relativa al trattamento dei tuoi dati personali puoi scrivere a{" "}
					<a href="mailto:info@nordevit.it">info@nordevit.it</a> o chiamare il numero{" "}
					<a href="tel:+393880764992">+39 388 076 4992</a>.
				</p>

				<h2>Quali dati raccogliamo e per quale finalità</h2>
				<h3>Dati forniti tramite il form di contatto</h3>
				<p>
					Quando compili il form di contatto presente sul Sito raccogliamo i dati che inserisci
					volontariamente: indirizzo email, oggetto della richiesta e il testo del messaggio. Questi
					dati vengono inviati tramite un server SMTP a un indirizzo email aziendale dedicato alla
					gestione delle richieste, al solo scopo di risponderti e valutare la tua richiesta
					(consulenza, preventivo, informazioni sui nostri servizi). Non utilizziamo questi dati per
					finalità di marketing senza un tuo consenso separato ed esplicito.
				</p>
				<p>
					Il trattamento di questi dati si basa sul tuo consenso esplicito, raccolto tramite
					apposita casella da spuntare prima dell'invio del form, e sulla necessità di rispondere a
					una richiesta che ci hai rivolto direttamente (esecuzione di misure precontrattuali, art.
					6.1.b GDPR).
				</p>

				<h3>Dati di navigazione</h3>
				<p>
					Come la maggior parte dei siti web, il Sito raccoglie automaticamente alcune informazioni
					tecniche generate dalla navigazione (es. indirizzo IP, tipo di browser e dispositivo,
					pagine visitate, data e ora di accesso), necessarie al funzionamento tecnico del Sito e
					alla sua sicurezza. Il Sito utilizza inoltre Vercel Speed Insights per misurare in forma
					aggregata le performance di caricamento delle pagine.
				</p>

				<h2>Conservazione dei dati</h2>
				<p>
					I dati raccolti tramite il form di contatto vengono conservati per il tempo necessario a
					gestire la tua richiesta e, successivamente, per il tempo previsto dagli obblighi di legge
					applicabili (es. conservazione della corrispondenza commerciale/contabile), dopodiché
					vengono cancellati o anonimizzati.
				</p>

				<h2>Comunicazione e trasferimento dei dati</h2>
				<p>
					I tuoi dati possono essere trattati da fornitori terzi che agiscono come responsabili del
					trattamento per nostro conto, in particolare: il fornitore del servizio SMTP utilizzato per
					l'invio delle email dal form di contatto, e Vercel Inc., che ospita il Sito e fornisce il
					servizio di hosting e le statistiche di performance sopra citate. Non vendiamo né
					condividiamo i tuoi dati personali con terzi per finalità di marketing.
				</p>

				<h2>I tuoi diritti</h2>
				<p>
					In qualità di interessato, hai diritto di chiedere in qualsiasi momento l'accesso ai tuoi
					dati personali, la rettifica o la cancellazione degli stessi, la limitazione del
					trattamento, la portabilità dei dati, e di opporti al trattamento, scrivendo a{" "}
					<a href="mailto:info@nordevit.it">info@nordevit.it</a>. Hai inoltre diritto di proporre
					reclamo all'Autorità Garante per la Protezione dei Dati Personali (
					<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">
						www.garanteprivacy.it
					</a>
					).
				</p>

				<h2>Sicurezza</h2>
				<p>
					Adottiamo misure tecniche e organizzative adeguate a proteggere i tuoi dati personali da
					accessi non autorizzati, perdita o divulgazione, pur non potendo garantire la sicurezza
					assoluta di alcuna trasmissione via Internet.
				</p>

				<h2>Modifiche a questa informativa</h2>
				<p>
					Questa informativa può essere aggiornata periodicamente per riflettere cambiamenti nelle
					modalità di trattamento dei dati o nella normativa applicabile. La data di ultimo
					aggiornamento è indicata in cima alla pagina.
				</p>

				<h2>Contatti</h2>
				<p>
					Per qualsiasi domanda su questa Privacy Policy o sul trattamento dei tuoi dati personali,
					scrivici a <a href="mailto:info@nordevit.it">info@nordevit.it</a>.
				</p>
			</div>
		</div>
	)
}
