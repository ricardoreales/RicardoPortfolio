"use client"
import { ContactBtn } from "@/components/ContactBtn"
import { SectionLayout } from "@/components/layouts/SectionLayout"
import { OutlineButton } from "@/components/OutlendButton"
import type { IProject } from "@/types/project"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { PiBehanceLogo } from "react-icons/pi"

export const ProjectImageCarrusel = ({
  images,
  alt,
  links,
}: {
  images: string[]
  alt: string
  links: IProject["links"]
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
        const imageWidthPercentage = 100 / images.length
        const maxTranslate = (images.length - 1) * imageWidthPercentage
        const translateX = easeProgress * maxTranslate

        // Apply transformation with GPU acceleration
        trackRef.current.style.transform = `translate3d(-${translateX}%, 0, 0)`

        // Update current index for progress indicator - sync with actual image position
        // Calculate based on the actual translation percentage relative to image width
        const currentImageIndex = Math.round(translateX / imageWidthPercentage)
        setCurrentIndex(
          Math.max(0, Math.min(images.length - 1, currentImageIndex))
        )
      }
    }
    console.log(trackRef.current?.clientWidth)

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
  }, [images.length])

  return (
    <section>
      <div
        ref={containerRef}
        className="col-span-2"
        style={{
          height: `calc(${images.length * 100}vh)`,
        }}
      >
        <div className="gallery-container sticky top-0 col-span-2">
          <SectionLayout className="flex w-full flex-col gap-5 !pt-[100px]">
            <div className="relative flex h-full flex-col items-center gap-5">
              {/* Gallery content */}

              <div className="flex w-full flex-col overflow-hidden rounded-3xl">
                <div
                  ref={trackRef}
                  className="flex transition-none will-change-transform [&>div]:px-6"
                  style={{
                    width: `${images.length * 100}%`,
                    backfaceVisibility: "hidden",
                    // perspective: '1000px'
                  }}
                >
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="flex flex-shrink-0 items-center justify-center"
                      style={{ width: `${100 / images.length}%` }}
                    >
                      <div className="group relative w-full">
                        <div className="transform overflow-hidden rounded-3xl transition-all duration-700 group-hover:scale-[1.02]">
                          <div className="relative">
                            <Image
                              src={image}
                              alt={`${alt}-${index + 1}`}
                              className="w-full lg:max-h-[80dvh]"
                              width={100}
                              height={100}
                              unoptimized
                            />

                            {/* Content overlay */}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="transform">
                <div className="flex items-center space-x-3 rounded-full bg-black/20 px-6 py-3 backdrop-blur-sm">
                  {images.map((_, index) => (
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
              <div className="flex w-full flex-wrap gap-5">
                {links.project && (
                  <OutlineButton
                    component="a"
                    href={links.project}
                    Icon={<ArrowRight className="size-5" />}
                  >
                    Project Links
                  </OutlineButton>
                )}
                {links.behance && (
                  <OutlineButton
                    component="a"
                    href={links.behance}
                    Icon={<PiBehanceLogo className="size-6" />}
                  >
                    View Executive Summary on Behance
                  </OutlineButton>
                )}
                <div className="flex-1"></div>
                <ContactBtn />
              </div>
              {/* Enhanced progress indicator */}
            </div>
          </SectionLayout>
        </div>
      </div>
    </section>
  )
}
