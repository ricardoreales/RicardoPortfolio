import React from "react";
import FooterRicardoImg from "@/assets/images/FooterRicardo.png";
import Image from "next/image";
import { LogoR } from "../svgs/LogoR";
import { cn } from "@/lib/utils";
import fonts from "@/config/fonts";
import Link from "next/link";
import { WhatsIcon } from "../svgs/WhatsappIcon";
import { LinkedinIcon } from "../svgs/LinkedInIcon";
import { BehanceIcon } from "../svgs/BehanceIcon";

export const Footer = () => {
  return (
    <div className="rr-section gap-y-[100px]">
      <div className=" flex justify-center gap-[100px]  col-span-2">
        <div className=" max-w-[400px] flex flex-col gap-[20px]">
          <div className="flex items-center gap-2 text-white ">
            <LogoR />
            <p
              className={cn(
                "text-2xl font-normal text-[40px] leading-[48px]   text-white ",
                fonts.title.className
              )}
            >
              Ricardo
            </p>
          </div>
          <p
            className={cn(
              " font-bold text-[24px] leading-normal  text-white  "
            )}
          >
            UI/UX product Designer based in Argentina
          </p>
          <span className="text-white text-sm opacity-[0.6]">
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
            }
          ]}
          title="Social"
        />
      </div>
      <div className=" flex justify-center col-span-2 ">
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
  );
};

const MenuItems = ({
  options,
  title,
}: {
  options: { name: string; href: string; icon?: React.ReactNode }[];
  title: string;
}) => {
  return (
    <ul className=" min-w-[200px] gap-y-[20px] flex flex-col">
      <li className="text-white text-[24px] leading-normal  font-bold ">
        {title}
      </li>
      {options.map((option) => (
        <li
          key={option.name}
          className="text-white text-sm opacity-[0.6] text-[20px] leading-normal font-light"
        >
          <Link 
          target="_blank"
          href={option.href} className="flex items-center gap-2">
            {option.icon}
          {option.name}</Link>
        </li>
      ))}
    </ul>
  );
};
