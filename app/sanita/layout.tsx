import SiteChrome from "@/components/layout/site-chrome"

// Stesso layout condiviso usato dal route group (default): prima questo file
// era una copia quasi identica di app/(default)/layout.tsx, già divergente
// (puntava a /manifest.json e /og-image.png, inesistenti in public/, e a un
// theme-color diverso dal resto del sito). Ora c'è un'unica versione.
export default function SanitaLayout({ children }: { children: React.ReactNode }) {
	return <SiteChrome>{children}</SiteChrome>
}
