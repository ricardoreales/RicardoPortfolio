"use client"
import Adobe from "@/assets/images/technologies/LogoAdobe.svg"
import CSS from "@/assets/images/technologies/LogoCSS.svg"
import Figma from "@/assets/images/technologies/LogoFigma.svg"
import GitHub from "@/assets/images/technologies/LogoGitHub.svg"
import Illustrator from "@/assets/images/technologies/LogoIllustrator.svg"
import HTML from "@/assets/images/technologies/LogoHTML.svg"
import Maze from "@/assets/images/technologies/LogoMaze.svg"
import Optimal from "@/assets/images/technologies/LogoOptimal.svg"
import Photoshop from "@/assets/images/technologies/LogoPhotoshop.svg"
import Slack from "@/assets/images/technologies/LogoSlack.svg"
import AutoScroll from "embla-carousel-auto-scroll"
import useEmblaCarousel, { EmblaViewportRefType } from "embla-carousel-react"
import Image from "next/image"
import { Fragment } from "react"


import { cn } from "@/lib/utils"
import { CarruselContainer } from "../carousel/CarouselContainer"
import { CarruselItem } from "../carousel/CarouselItem"
const technologies = [
  {
    name: "Adobe",
    image: Adobe,
  },
  {
    name: "CSS",
    image: CSS,
  },
  {
    name: "Figma",
    image: Figma,
  },
  {
    name: "GitHub",
    image: GitHub,
  },
  {
    name: "Illustrator",
    image: Illustrator,
  },
  {
    name: "HTML",
    image: HTML,
  },
  {
    name: "Maze",
    image: Maze,
  },

  {
    name: "Optimal",
    image: Optimal,
  },
  {
    name: "Photoshop",
    image: Photoshop,
  },
  {
    name: "Slack",
    image: Slack,
  },
]

export const TechnologiesCarrusel = () => {
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
              {technologies.map((technology, index) => (
                <CarruselItem key={index}>
                  <Image
                    src={technology.image}
                    alt={technology.name}
                    width={100}
                    height={100}
                    className="h-[46px] w-auto object-contain opacity-40"
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
