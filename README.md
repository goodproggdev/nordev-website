# Nordev — Sito Web


Sito web di Nordev, sviluppato in **Next.js 15** (App Router) e **Tailwind CSS v4**.

## Stack

- [Next.js](https://nextjs.org/) 15 (React 19, App Router)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [nodemailer](https://nodemailer.com/) per l'invio email dal form di contatto
- [next-sitemap](https://github.com/iamvishnusankar/next-sitemap) per la generazione automatica di sitemap.xml / robots.txt
- Deploy su [Vercel](https://vercel.com/)

## Requisiti

- Node.js 20+
- npm (repository allineato su `package-lock.json`; evitare di mescolare pnpm/yarn)

## Setup locale

```bash
npm install
cp .env.example .env.local   # poi valorizza le variabili, vedi sotto
npm run dev
```

Il sito sarà disponibile su [http://localhost:3000](http://localhost:3000).

## Variabili d'ambiente

Il form di contatto (`app/api/send-email/route.ts`) invia email via SMTP e richiede queste variabili (vedi `.env.example`):

| Variabile | Descrizione |
| --- | --- |
| `SMTP_HOST` | Host del server SMTP |
| `SMTP_PORT` | Porta SMTP (587 per TLS, 465 per SSL) |
| `SMTP_USER` | Utente SMTP |
| `SMTP_PASS` | Password / app password SMTP |
| `CONTACT_RECEIVER` | Indirizzo email che riceve i messaggi dal form |

**Non committare mai `.env` o `.env.local`**: sono già esclusi da `.gitignore`. Su Vercel vanno impostate in *Project Settings → Environment Variables*.

## Script disponibili

```bash
npm run dev     # ambiente di sviluppo (Turbopack)
npm run build   # build di produzione + generazione sitemap (postbuild)
npm run start   # avvia la build di produzione
npm run lint    # lint del progetto
```

## Struttura principale

- `app/` — route dell'App Router (pagine pubbliche, dashboard, API routes)
- `components/` — componenti React riutilizzabili
- `public/` — asset statici (immagini, favicon, sitemap)
- `lib/` — utility condivise

## Deploy su Vercel

1. Collega il repository GitHub al tuo account Vercel ([vercel.com/new](https://vercel.com/new)).
2. Imposta le variabili d'ambiente elencate sopra in *Project Settings → Environment Variables* (sia per Production che per Preview).
3. Ogni push su `main` genera un deploy di produzione; i push su altri branch/PR generano deploy di preview.

## CI

Un workflow GitHub Actions (`.github/workflows/ci.yml`) esegue lint e build a ogni push/PR su `main`, per intercettare errori prima del deploy.

## Note e crediti

Il progetto parte dal template **Simple Light** di [Cruip](https://cruip.com/), poi personalizzato per Nordev. Il repository è privato: verificare i termini di licenza del template Cruip prima di qualsiasi pubblicazione o redistribuzione più ampia.
