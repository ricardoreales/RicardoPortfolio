"use client"
import Cima from "@/assets/images/Cima.svg"
import EZ from "@/assets/images/EZ.svg"
import Gema from "@/assets/images/Gema.svg"
import HR from "@/assets/images/HR.svg"
import Impulsa from "@/assets/images/Impulsa.svg"
import Mobilifarma from "@/assets/images/Mobilifarma.svg"
import AutoScroll from "embla-carousel-auto-scroll"
import useEmblaCarousel, { EmblaViewportRefType } from "embla-carousel-react"
import Image from "next/image"
import { Fragment } from "react"

import { cn } from "@/lib/utils"
const collaborators = [
  {
    name: "Mobilifarma",
    image: Mobilifarma,
  },
  {
    name: "Cima",
    image: Cima,
  },
  {
    name: "EZ Script",
    image: EZ,
  },
  {
    name: "Impulsa",
    image: Impulsa,
  },
  {
    name: "Heyscar Recode",
    image: HR,
  },
  {
    name: "Gema",
    image: Gema,
  },
]

export const CollaboratorsCarrusel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({
      active: true,
      stopOnInteraction: false,
      startDelay: 0,
      stopOnMouseEnter: true,
    }),
  ])

  return (
    <div className="hidden-without-video mx-auto flex max-w-[96rem] items-center justify-center">
      <div
        className={cn(
          "bg-basic-700 relative mx-auto w-full",
          "mx-auto max-w-[96rem] cursor-grab"
        )}
      >
        <div className="to-basic-700 pointer-events-none absolute top-0 right-0 bottom-0 left-0 z-10 w-full bg-radial from-transparent to-65% lg:to-60%" />

        <CarruselContainer ref={emblaRef}>
          {Array.from({ length: 3 }).map((_, index1) => (
            <Fragment key={index1}>
              {collaborators.map((collaborator, index) => (
                <CarruselItem key={index}>
                  <Image
                    src={collaborator.image}
                    alt={collaborator.name}
                    width={100}
                    height={100}
                    className="h-[80px] w-auto object-contain opacity-40"
                    unoptimized
                  />
                </CarruselItem>
              ))}
            </Fragment>
          ))}
        </CarruselContainer>
      </div>
    </div>
  )
}
const CarruselContainer = ({
  ref,
  children,
}: {
  ref: EmblaViewportRefType
  children: React.ReactNode
}) => {
  return (
    <div ref={ref} className="overflow-hidden">
      <div
        className="pinch-zoom flex touch-pan-y"
        style={{
          marginLeft: "calc(max(2.5dvw, 40px) * -1)",
        }}
      >
        {children}
      </div>
    </div>
  )
}
const CarruselItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        transform: "translate3d(0, 0, 0)",
        flex: "0 0 auto",
        minWidth: "0px",
        paddingLeft: "max(2.5dvw, 40px)",
      }}
      className="py-[50px]"
    >
      {children}
    </div>
  )
}
