import type { Metadata } from "next";

const title = "Nordev | Sviluppo Siti Web e App a Treviso";
const description =
  "Nordev realizza siti web, e-commerce, web app e mobile app su misura. Siamo un team di sviluppatori di Treviso specializzati in soluzioni digitali professionali.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
  },
  // Senza questo override l'anteprima social della home mostrava titolo e
  // descrizione generici presi dal default di app/layout.tsx.
  openGraph: {
    title,
    description,
    url: "/",
  },
  twitter: {
    title,
    description,
  },
};

import Hero from "@/components/hero-home";
import { HeroScroll } from "@/components/hero-scroll";
import We from "@/components/we";
import FeaturesDescription from "@/components/features-description";
import OurProjects from "@/components/our-projects";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroScroll />
      <We />
      <FeaturesDescription />
      <OurProjects />
      <ContactSection />
    </>
  );
}
