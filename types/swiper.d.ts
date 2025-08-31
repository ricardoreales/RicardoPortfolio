declare namespace JSX {
  interface IntrinsicElements {
    "swiper-container": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        ref?: React.Ref<any>
        init?: boolean
        [key: string]: any
      },
      HTMLElement
    >
    "swiper-slide": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        lazy?: string
        [key: string]: any
      },
      HTMLElement
    >
  }
}

export interface SwiperRef {
  initialize: () => void
  addEventListener: (event: string, handler: (e: any) => void) => void
  removeEventListener: (event: string, handler: (e: any) => void) => void
  slideNext: () => void
  slidePrev: () => void
  slideTo: (index: number) => void
  activeIndex: number
  [key: string]: any
}
