import { PresentationText } from "./PresentationText"
import { VideoIntro } from "../VideoIntro"
import { HeroSkills } from "./HeroSkills"
import { SectionLayout } from "@/components/layouts/SectionLayout"

export function Hero() {
  return (
    <main className="relative flex min-h-screen justify-between">
      <VideoIntro />
      <div className="hero-content absolute top-0 right-0 bottom-0 left-0 z-20 flex min-h-screen w-full items-center justify-between overflow-hidden">
        <SectionLayout>
          <div className="container mx-auto flex w-full flex-col items-center md:justify-between md:max-lg:gap-y-8 lg:flex-row">
            <div className="animation-entrance-left">
              <PresentationText />
              <div className="h-20"></div>
            </div>
            <div className=" ">
              <HeroSkills />
            </div>
          </div>
        </SectionLayout>
      </div>
    </main>
  )
}
