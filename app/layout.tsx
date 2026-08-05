import WhatsappIcon from "@/components/whatsapp-icon";
import "./css/style.css";
import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const baseUrl = "https://www.nordevit.it";

// Metadata condivisi da tutto il sito. Title/description/canonical
// specifici di pagina si impostano nei singoli page.tsx (es.
// app/(default)/page.tsx, privacy-policy/page.tsx, servizi/[slug]/page.tsx):
// Next.js li unisce automaticamente a questi default (vale anche per
// openGraph/twitter, che ereditano title/description della pagina se non
// specificati altrove). Prima questi tag (OG, Twitter, canonical, JSON-LD)
// erano scritti solo con next/head in un Client Component annidato: nell'App
// Router quell'API non ha effetto sull'HTML servito ai crawler (in
// particolare i bot di anteprima di WhatsApp/Facebook/LinkedIn, che non
// eseguono JavaScript).
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Nordevit | Sviluppo Siti Web e Marketing Digitale",
  description: "Nordevit: realizziamo siti web, e-commerce e strategie di marketing digitale per far crescere il tuo business. Contattaci per una consulenza gratuita.",
  keywords: ["sviluppo web", "siti web", "Treviso", "web agency", "web development", "Nordev", "sviluppatori", "design", "e-commerce", "UX", "UI"],
  authors: [{ name: "Nordevit" }],
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/logo_nordev.svg", type: "image/svg+xml" }],
    apple: "/images/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "Nordevit",
    locale: "it_IT",
    url: baseUrl,
    images: [{ url: "/images/logo-nordev.png" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nordevit",
    images: ["/images/logo-nordev.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="scroll-smooth dark">
      <body
        className={`${inter.variable} bg-background-dark font-inter tracking-tight text-text-primary antialiased selection:bg-primary/30 selection:text-white`}
      >
        <WhatsappIcon />
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
        {/* Vercel Analytics: privacy-first, nessun cookie, incluso gratis nel
            piano Vercel già in uso (come @vercel/speed-insights). Zero
            configurazione aggiuntiva richiesta lato progetto. */}
        <Analytics />
      </body>
    </html>
  );
}
