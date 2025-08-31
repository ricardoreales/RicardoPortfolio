import React from "react"
import FooterRicardoImg from "@/assets/images/FooterRicardo.png"
import Image from "next/image"
import { LogoR } from "../svgs/LogoR"
import { cn } from "@/lib/utils"
import fonts from "@/config/fonts"
import Link from "next/link"
import { WhatsIcon } from "../svgs/WhatsappIcon"
import { LinkedinIcon } from "../svgs/LinkedInIcon"
import { BehanceIcon } from "../svgs/BehanceIcon"

export const Footer = () => {
  return (
    <div className="rr-section gap-y-[100px]">
      <div className="col-span-2 grid grid-cols-2 gap-y-[100px] lg:grid-cols-[1fr_auto_auto] lg:gap-[100px]">
        <div className="max-w-fullsm:max-w-[400px] flex flex-col gap-[20px] max-lg:col-span-2">
          <div className="flex items-center justify-center gap-2 text-white lg:justify-start">
            <LogoR />
            <p
              className={cn(
                "text-2xl text-[40px] leading-[48px] font-normal text-white",
                fonts.title.className
              )}
            >
              Ricardo
            </p>
          </div>
          <p
            className={cn(
              "text-center text-[24px] leading-normal font-bold text-white lg:text-left"
            )}
          >
            UI/UX product Designer based in Argentina
          </p>
          <span className="text-center text-sm text-white opacity-[0.6] lg:text-left">
            © 2025 Copyright
          </span>
        </div>
        <MenuItems
          options={[
            {
              name: "Home",
              href: "/",
            },
            {
              name: "Services",
              href: "/services",
            },
            {
              name: "About",
              href: "/about",
            },
            {
              name: "Portfolio",
              href: "/portfolio",
            },
          ]}
          title="Menu"
        />
        <MenuItems
          options={[
            {
              name: "Whatsapp",
              href: "https://wa.me/5491126677230",
              icon: <WhatsIcon />,
            },
            {
              name: "Behance",
              href: "/behance",
              icon: <BehanceIcon />,
            },
            {
              name: "Linkedin",
              href: "/linkedin",
              icon: <LinkedinIcon />,
            },
          ]}
          title="Social"
        />
      </div>
      <div className="col-span-2 flex justify-center">
        <Image
          src={FooterRicardoImg}
          alt="FooterRicardo"
          width={100}
          height={100}
          className="max-h-64 w-auto object-contain"
          unoptimized
        />
      </div>
    </div>
  )
}

const MenuItems = ({
  options,
  title,
}: {
  options: { name: string; href: string; icon?: React.ReactNode }[]
  title: string
}) => {
  return (
    <ul className="flex flex-col items-center gap-y-[20px] text-center sm:min-w-[200px] lg:items-start lg:text-left">
      <li className="text-[24px] leading-normal font-bold text-white">
        {title}
      </li>
      {options.map(option => (
        <li
          key={option.name}
          className="text-sm text-[20px] leading-normal font-light text-white opacity-[0.6]"
        >
          <Link href={option.href} className="flex items-center gap-2">
            {option.icon}
            {option.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
