import { CollaboratorsCarrusel } from "@/app/(withVideo)/components/CollaboratorsCarrusel"
import { Header } from "@/components/Header/Header"
import { Hero } from "@/app/(withVideo)/components/Hero/Hero"
import { PresentationSection } from "@/app/(withVideo)/components/PresentationSection.tsx/PresentationSection"
import { TechnologiesCarrusel } from "@/app/(withVideo)/components/TechnologiesCarrusel"
import { TheHumanSection } from "@/app/(withVideo)/components/PresentationSection.tsx/TheHumanSection"
import { FeaturedProjectsSection } from "@/app/(withVideo)/components/FeaturedProjectsSection"
import { CTASection } from "@/app/(withVideo)/components/CTASection"
import { Footer } from "@/components/Footer"

export function getStaticParams() {
  return { withVideo: true }
}
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
