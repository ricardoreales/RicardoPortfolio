"use client";
import Cima from "@/assets/images/Cima.svg";
import EZ from "@/assets/images/EZ.svg";
import Gema from "@/assets/images/Gema.svg";
import HR from "@/assets/images/HR.svg";
import Impulsa from "@/assets/images/Impulsa.svg";
import Mobilifarma from "@/assets/images/Mobilifarma.svg";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Fragment } from "react";
import "./carrusel.css";
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
];

export const CollaboratorsCarrusel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [AutoScroll({active: true,stopOnInteraction: false})]);

  return (
    <div className="max-w-screen-7xl mx-auto flex justify-center items-center">
      <div className="embla bg-basic-700">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {Array.from({ length: 2 }).map((_, index1) => (
              <Fragment key={index1}>
                {collaborators.map((collaborator, index) => (
                  <div className="embla__slide py-4 pt-8" key={index}>
                    <Image
                      src={collaborator.image}
                      alt={collaborator.name}
                      width={100}
                      height={100}
                      className=" h-[80px] w-auto   object-contain"
                      unoptimized
                    />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
