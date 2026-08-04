export const metadata = {
  title: "Nordev | Sviluppo Siti Web e App a Treviso",
  description: "Nordev realizza siti web, e-commerce, web app e mobile app su misura. Siamo un team di sviluppatori di Treviso specializzati in soluzioni digitali professionali.",
};

import Hero from "@/components/hero-home";
import { HeroScroll } from "@/components/hero-scroll";
import We from "@/components/we";
import OurProjects from "@/components/our-projects";
import FeaturesDescription from "@/components/features-description";
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