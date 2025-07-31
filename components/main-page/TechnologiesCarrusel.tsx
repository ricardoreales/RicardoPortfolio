"use client";
import Adobe from "@/assets/images/technologies/LogoAdobe.svg";
import CSS from "@/assets/images/technologies/LogoCSS.svg";
import Figma from "@/assets/images/technologies/LogoFigma.svg";
import GitHub from "@/assets/images/technologies/LogoGitHub.svg";
import Illustrator from "@/assets/images/technologies/LogoIllustrator.svg";
import HTML from "@/assets/images/technologies/LogoHTML.svg";
import Maze from "@/assets/images/technologies/LogoMaze.svg";
import Optimal from "@/assets/images/technologies/LogoOptimal.svg";
import Photoshop from "@/assets/images/technologies/LogoPhotoshop.svg";
import Slack from "@/assets/images/technologies/LogoSlack.svg";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel, { EmblaViewportRefType } from "embla-carousel-react";
import Image from "next/image";
import { Fragment } from "react";

import { cn } from "@/lib/utils";
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
  ];

export const TechnologiesCarrusel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({
      active: true,
      stopOnInteraction: false,
      startDelay: 0,
      stopOnMouseEnter: true,
    }),
  ]);

  return (
    <div className="max-w-[96rem] mx-auto  flex justify-center items-center hidden-without-video">
      <div
        className={cn(
          "relative w-full mx-auto bg-basic-700",
          "max-w-[96rem] mx-auto cursor-grab"
        )}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0  pointer-events-none z-10 bg-radial to-basic-700 to-65% lg:to-60%  from-transparent  w-full " />

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
                      className=" h-[40px] w-auto opacity-40   object-contain"
                      unoptimized
                    />
                  </CarruselItem>
                ))}
              </Fragment>
            ))}
          </CarruselContainer>
        </div>
      </div>
    
  );
};
const CarruselContainer = ({
  ref,
  children,
}: {
  ref: EmblaViewportRefType;
  children: React.ReactNode;
}) => {
  return (
    <div ref={ref} className="overflow-hidden">
      <div
        className="flex touch-pan-y pinch-zoom "
        style={{
          marginLeft: "calc(max(2.5dvw, 40px) * -1)",
        }}
      >
        {children}
      </div>
    </div>
  );
};
const CarruselItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        transform: "translate3d(0, 0, 0)",
        flex: "0 0 auto",
        minWidth: "0px",
        paddingLeft: "max(2.5dvw, 40px)",
      }}
      className="  py-[50px] "
    >
      {children}
    </div>
  );
};
