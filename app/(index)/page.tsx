import { CollaboratorsCarrusel } from "@/components/main-page/CollaboratorsCarrusel";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/main-page/Hero/Hero";
import { PresentationSection } from "@/components/main-page/PresentationSection.tsx/PresentationSection";
import { TechnologiesCarrusel } from "@/components/main-page/TechnologiesCarrusel";
import { TheHumanSection } from "@/components/main-page/PresentationSection.tsx/TheHumanSection";
import { FeaturedProjectsSection } from "@/components/main-page/FeaturedProjects/FeaturedProjectsSection";
import { CTASection } from "@/components/main-page/CTASection";
import { Footer } from "@/components/main-page/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen relative bg-[#1a1a1a] text-white overflow-x-hidden z-0">
        <Hero />
      </div>
      <div className="bg-basic-700">
        <CollaboratorsCarrusel />

        <PresentationSection />

        <TheHumanSection />

        <TechnologiesCarrusel />

        <FeaturedProjectsSection />
        <Footer />
      </div>
   
    </>
  );
}
