import { CollaboratorsCarrusel } from "@/app/(withVideo)/components/CollaboratorsCarrusel"
import { Header } from "@/components/Header/Header"
import { Hero } from "@/app/(withVideo)/components/Hero/Hero"
import { PresentationSection } from "@/app/(withVideo)/components/PresentationSection.tsx/PresentationSection"
import { TechnologiesCarrusel } from "@/app/(withVideo)/components/TechnologiesCarrusel"
import { TheHumanSection } from "@/app/(withVideo)/components/PresentationSection.tsx/TheHumanSection"
import { FeaturedProjectsSection } from "@/app/(withVideo)/components/FeaturedProjectsSection"
import { CTASection } from "@/app/(withVideo)/components/CTASection"
import { Footer } from "@/components/Footer"
import { mainService } from "@/services/main.service"
import { projectService } from "@/services/projectService"

export default function Home() {
  const main = mainService.getMain()
  const projects = projectService.getProjects()
  return (
    <>
      <Header />
      <div className="relative z-0 min-h-[100dvh] overflow-x-hidden bg-[#1a1a1a] text-white">
        <Hero />
      </div>
      <div className="hidden-without-video">
        <CollaboratorsCarrusel />

        <PresentationSection {...main.presentationSection} />

        <TheHumanSection />

        <TechnologiesCarrusel />

        <FeaturedProjectsSection
          projects={projects}
          featuredProjectsSection={main.featuredProjectsSection}
        />
        <CTASection />
        <Footer />
      </div>
    </>
  )
}
