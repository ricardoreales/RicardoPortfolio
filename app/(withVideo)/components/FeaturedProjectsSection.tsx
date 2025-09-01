"use client"
import { SectionTitle } from "@/components/SectionTitle"
import type { IFeaturedProjectsSection, IProject } from "@/types"
import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export const FeaturedProjectsSection = ({
  projects,
  featuredProjectsSection,
}: {
  projects: IProject[]
  featuredProjectsSection: IFeaturedProjectsSection
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return

      const container = containerRef.current
      const containerRect = container.getBoundingClientRect()
      const containerTop = containerRect.top
      const containerHeight = containerRect.height
      const windowHeight = window.innerHeight

      // Calculate when the gallery section is in view
      const startOffset = windowHeight * 0.1 // Start animation when 10% from top
      const endOffset = windowHeight * 0.9 // End animation when 90% from top

      if (
        containerTop <= startOffset &&
        containerTop >= -(containerHeight - endOffset)
      ) {
        // Simplified calculation - the gallery should complete its horizontal scroll
        // when we've scrolled through the entire container height minus one viewport
        const totalScrollDistance = containerHeight - windowHeight
        const currentScroll = Math.max(0, startOffset - containerTop)
        const progress = Math.max(
          0,
          Math.min(1, currentScroll / totalScrollDistance)
        )

        // Smooth easing function for natural movement
        const easeProgress = progress * progress * (3 - 2 * progress) // smoothstep

        // Calculate translation based on track width and image positioning
        // Each image takes (100 / images.length)% of the track width
        // To show all images, we need to translate (images.length - 1) * (100 / images.length)%
        const imageWidthPercentage = 100 / projects.length
        const maxTranslate = (projects.length - 1) * imageWidthPercentage
        const translateX = easeProgress * maxTranslate

        // Apply transformation with GPU acceleration
        trackRef.current.style.transform = `translate3d(-${translateX}%, 0, 0)`

        // Update current index for progress indicator - sync with actual image position
        // Calculate based on the actual translation percentage relative to image width
        const currentImageIndex = Math.round(translateX / imageWidthPercentage)
        setCurrentIndex(
          Math.max(0, Math.min(projects.length - 1, currentImageIndex))
        )
      }
    }

    // Use requestAnimationFrame for smooth scrolling
    let ticking = false
    const smoothScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", smoothScroll, { passive: true })
    return () => window.removeEventListener("scroll", smoothScroll)
  }, [projects.length])

  return (
    <section id="gallery" className="rr-section">
      <div className="col-span-2">
        <SectionTitle
          title={featuredProjectsSection.title}
          description={featuredProjectsSection.description}
        />
      </div>
      <div
        ref={containerRef}
        className="col-span-2"
        style={{
          height: `calc(${projects.length * 100}vh + 100px)`,
        }}
      >
        <div className="gallery-container sticky top-0 col-span-2 h-screen">
          <div className="relative flex h-full flex-col items-center pt-10">
            {/* Gallery content */}

            <div className="w-full overflow-hidden rounded-3xl">
              <div
                ref={trackRef}
                className="flex gap-6 transition-none will-change-transform"
                style={{
                  width: `${projects.length * 100}%`,
                  backfaceVisibility: "hidden",
                  // perspective: '1000px'
                }}
              >
                {projects.map(project => (
                  <div
                    key={project.slug}
                    className="flex flex-shrink-0 items-center justify-center"
                    style={{ width: `${100 / projects.length}%` }}
                  >
                    <div className="group relative w-full">
                      <div className="transform cursor-pointer overflow-hidden rounded-3xl transition-all duration-700 group-hover:scale-[1.02]">
                        <div className="relative overflow-hidden rounded-3xl">
                          <iframe
                            src={project.main.video}
                            width="100%"
                            height="100%"
                            allow="autoplay"
                            className="h-[80vh] w-full object-cover"
                          />

                          {/* Gradient overlay */}
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/10"></div>

                          {/* Content overlay */}
                          <div className="pointer-events-none absolute right-0 bottom-0 left-0 p-12">
                            <div className="space-y-4">
                              <div className="bg-gold/20 inline-block rounded-full px-4 py-2 backdrop-blur-sm">
                                <a href={`/project/${project.slug}`}>
                                  <Image
                                    src={project.logo}
                                    alt={project.name}
                                    className="pointer-events-auto h-[50px] w-auto object-contain"
                                    width={100}
                                    height={100}
                                  />
                                </a>
                              </div>
                              <a href={`/project/${project.slug}`}>
                                <h3 className="pointer-events-auto text-4xl leading-tight font-light text-white lg:text-5xl">
                                  {project.name}
                                </h3>
                              </a>
                              <p className="pointer-events-auto max-w-md text-xl text-white/80">
                                {project.main.description}
                              </p>
                              <div className="from-gold to-silver h-1 w-24 rounded-full bg-gradient-to-r"></div>
                            </div>
                          </div>
                        </div>
                        <Link
                          href={`/project/${project.slug}`}
                          className="group/role hover:text-primary-500 flex w-fit items-center justify-between gap-5 px-2 py-2 text-white hover:underline"
                        >
                          <span>{project.roles[0]}</span>{" "}
                          <div className="flex size-[40px] items-center justify-center rounded-full bg-white p-0">
                            <ArrowRightIcon className="text-basic-700 group-hover/role:text-primary-500 size-5" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced progress indicator */}
            <div className="transform">
              <div className="mt-4 flex items-center space-x-3 rounded-full bg-black/20 px-6 py-3 backdrop-blur-sm">
                {projects.map((_, index) => (
                  <div
                    key={index}
                    className={`rounded-full transition-all duration-500 ${
                      currentIndex === index
                        ? "bg-primary-500 h-2 w-8"
                        : "h-2 w-2 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
