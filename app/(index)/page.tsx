import { CollaboratorsCarrusel } from "@/app/(index)/components/CollaboratorsCarrusel"
import { Header } from "@/components/Header/Header"
import { Hero } from "@/app/(index)/components/Hero/Hero"
import { PresentationSection } from "@/app/(index)/components/PresentationSection.tsx/PresentationSection"
import { TechnologiesCarrusel } from "@/app/(index)/components/TechnologiesCarrusel"
import { TheHumanSection } from "@/app/(index)/components/PresentationSection.tsx/TheHumanSection"
import { FeaturedProjectsSection } from "@/app/(index)/components/FeaturedProjectsSection"
import { CTASection } from "@/app/(index)/components/CTASection"
import { Footer } from "@/app/(index)/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative z-0 min-h-screen overflow-x-hidden bg-[#1a1a1a] text-white">
        <Hero />
      </div>
      <div className="bg-basic-700">
        <CollaboratorsCarrusel />

        <PresentationSection />

        <TheHumanSection />

        <TechnologiesCarrusel />

        <FeaturedProjectsSection />
        <CTASection />
        <Footer />
      </div>
    </>
  )
}
