"use client"
import ctaBg from "@/assets/CTASection.webp"
import { SectionTitle } from "../SectionTitle"
import { PrimaryLink } from "../PrimaryLink"
export const CTASection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${ctaBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="rr-section h-screen bg-transparent">
        <div className="flex h-full flex-col items-center justify-center"></div>
        <div className="flex h-full flex-col items-start justify-center gap-y-10">
          <SectionTitle
            title="Let’s Bring Your Vision to Life"
            description="Ready to create something extraordinary? I’m eager to craft an impactful, functional product—from UX vision to polished UI hand-off."
          />
          <PrimaryLink href="/" variant="default">
            Contact me
          </PrimaryLink>
        </div>
      </div>
    </section>
  )
}
