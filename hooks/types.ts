import { EmblaCarouselType } from "embla-carousel-react"

export interface ScrollControlledCarouselConfig {
  itemsCount: number
  autoScrollDuration?: number
  threshold?: number
}

export interface ScrollControlledCarouselReturn {
  sectionRef: React.RefObject<HTMLElement>
  setEmblaApi: (emblaApi: EmblaCarouselType | null) => void
  isScrollLocked: boolean
  currentSlide: number
  isCarouselActive: boolean
}

export interface ScrollEventHandlers {
  handleWheel: (event: WheelEvent) => void
  handleTouchMove: (event: TouchEvent) => void
  handleKeyDown: (event: KeyboardEvent) => void
}
