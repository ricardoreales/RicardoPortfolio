"use client"

import { useCallback, useEffect, useRef, useState, useMemo } from "react"
import { EmblaCarouselType } from "embla-carousel-react"
import {
  ScrollControlledCarouselConfig,
  ScrollControlledCarouselReturn,
} from "./types"

export const useScrollControlledCarousel = ({
  itemsCount,
  autoScrollDuration = 1000,
  threshold = 0.1,
}: ScrollControlledCarouselConfig): ScrollControlledCarouselReturn => {
  const sectionRef = useRef<HTMLElement>(null)
  const emblaApiRef = useRef<EmblaCarouselType | null>(null)
  const [isScrollLocked, setIsScrollLocked] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isCarouselActive, setIsCarouselActive] = useState(false)
  const lastScrollTime = useRef<number>(0)
  const isAnimatingRef = useRef(false)
  const wheelDeltaAccumulator = useRef<number>(0)

  // Function to set embla API reference
  const setEmblaApi = useCallback((emblaApi: EmblaCarouselType | null) => {
    emblaApiRef.current = emblaApi
  }, [])

  // Move to specific slide
  const moveToSlide = useCallback(
    (slideIndex: number) => {
      if (
        !emblaApiRef.current ||
        isAnimatingRef.current ||
        slideIndex < 0 ||
        slideIndex >= itemsCount
      )
        return

      isAnimatingRef.current = true
      emblaApiRef.current.scrollTo(slideIndex)
      setCurrentSlide(slideIndex)

      // Reset animation flag after transition
      setTimeout(() => {
        isAnimatingRef.current = false
      }, 600)
    },
    [itemsCount]
  )

  // Handle scroll events to control carousel
  const handleScrollEvent = useCallback(
    (event: WheelEvent) => {
      if (!isCarouselActive || !emblaApiRef.current) return

      event.preventDefault()
      event.stopPropagation()

      const now = Date.now()

      // Throttle scroll events
      if (now - lastScrollTime.current < 100) return

      // Accumulate wheel delta for better precision
      wheelDeltaAccumulator.current += event.deltaY

      // Threshold for slide change (adjust as needed)
      const scrollThreshold = 50

      if (Math.abs(wheelDeltaAccumulator.current) >= scrollThreshold) {
        if (wheelDeltaAccumulator.current > 0) {
          // Scrolling down - next slide
          if (currentSlide < itemsCount - 1) {
            moveToSlide(currentSlide + 1)
            lastScrollTime.current = now
            wheelDeltaAccumulator.current = 0
          } else {
            // Finished all slides, unlock scroll
            setIsScrollLocked(false)
            setIsCarouselActive(false)
            wheelDeltaAccumulator.current = 0

            // Small delay before allowing normal scroll to continue
            setTimeout(() => {
              const remainingScroll = window.innerHeight * 0.3
              window.scrollBy({
                top: remainingScroll,
                behavior: "smooth",
              })
            }, 200)
          }
        } else {
          // Scrolling up - previous slide
          if (currentSlide > 0) {
            moveToSlide(currentSlide - 1)
            lastScrollTime.current = now
            wheelDeltaAccumulator.current = 0
          }
        }
      }
    },
    [isCarouselActive, currentSlide, itemsCount, moveToSlide]
  )

  // Memoized event handlers for better performance
  const eventHandlers = useMemo(
    () => ({
      handleWheel: handleScrollEvent,
      handleTouchMove: (event: TouchEvent) => {
        if (isScrollLocked && isCarouselActive) {
          event.preventDefault()
          event.stopPropagation()
        }
      },
      handleKeyDown: (event: KeyboardEvent) => {
        if (isCarouselActive) {
          if (["ArrowUp", "ArrowLeft"].includes(event.key)) {
            event.preventDefault()
            if (currentSlide > 0) {
              moveToSlide(currentSlide - 1)
            }
          } else if (["ArrowDown", "ArrowRight", " "].includes(event.key)) {
            event.preventDefault()
            if (currentSlide < itemsCount - 1) {
              moveToSlide(currentSlide + 1)
            } else {
              setIsScrollLocked(false)
              setIsCarouselActive(false)
            }
          } else if (
            ["PageUp", "PageDown", "Home", "End"].includes(event.key)
          ) {
            event.preventDefault()
          }
        }
      },
    }),
    [
      handleScrollEvent,
      isScrollLocked,
      isCarouselActive,
      currentSlide,
      itemsCount,
      moveToSlide,
    ]
  )

  // Intersection Observer to detect when section enters viewport
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isCarouselActive && !isScrollLocked) {
            // Section entered viewport, activate carousel control
            setIsScrollLocked(true)
            setIsCarouselActive(true)
            setCurrentSlide(0)
            wheelDeltaAccumulator.current = 0 // Reset wheel accumulator

            // Reset carousel to first slide
            if (emblaApiRef.current) {
              emblaApiRef.current.scrollTo(0, true)
            }
          } else if (!entry.isIntersecting && isCarouselActive) {
            // Section left viewport, deactivate carousel control
            setIsScrollLocked(false)
            setIsCarouselActive(false)
            wheelDeltaAccumulator.current = 0
          }
        })
      },
      {
        threshold,
        rootMargin: "-5% 0px -5% 0px", // Only trigger when section is well within viewport
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [threshold, isCarouselActive, isScrollLocked])

  // Add/remove scroll event listeners with optimized handlers
  useEffect(() => {
    if (isScrollLocked) {
      const { handleWheel, handleTouchMove, handleKeyDown } = eventHandlers

      document.addEventListener("wheel", handleWheel, { passive: false })
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      })
      document.addEventListener("keydown", handleKeyDown)

      return () => {
        document.removeEventListener("wheel", handleWheel)
        document.removeEventListener("touchmove", handleTouchMove)
        document.removeEventListener("keydown", handleKeyDown)
      }
    }
  }, [isScrollLocked, eventHandlers])

  return {
    sectionRef,
    setEmblaApi,
    isScrollLocked,
    currentSlide,
    isCarouselActive,
  }
}
