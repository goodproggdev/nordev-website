import SiteChrome from "@/components/layout/site-chrome"

// Server Component: i meta tag SEO (title/description per pagina, Open Graph,
// canonical, JSON-LD) sono gestiti tramite l'API Metadata di Next.js nei
// singoli page.tsx (vedi app/(default)/page.tsx e privacy-policy/page.tsx) e
// nei default condivisi in app/layout.tsx — non più con next/head, che
// nell'App Router di Next.js non ha effetto sull'HTML servito ai crawler.
export default function DefaultLayout({ children }: { children: React.ReactNode }) {
	return <SiteChrome>{children}</SiteChrome>
}
