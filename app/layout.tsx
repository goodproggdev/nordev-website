import WhatsappIcon from "@/components/whatsapp-icon";
import "./css/style.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Nordevit | Sviluppo Siti Web e Marketing Digitale",
  description: "Nordevit: realizziamo siti web, e-commerce e strategie di marketing digitale per far crescere il tuo business. Contattaci per una consulenza gratuita.",
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
      </body>
    </html>
  );
}