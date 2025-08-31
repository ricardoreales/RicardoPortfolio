import React from "react"
import "./skill.css"
import fonts from "@/config/fonts"
import { cn } from "../../../lib/utils"
export const HeroSkills = () => {
  return (
    <div className="animation-entrance-right md relative hidden flex-col items-center justify-center max-sm:hidden md:origin-center lg:flex lg:w-[440px] lg:origin-right lg:scale-75 xl:scale-100 2xl:w-auto">
      <Skill
        className={cn("bg-white/60 text-black brightness-90", "w-[220px]")}
      >
        MVP
      </Skill>
      <Skill
        className={cn("skill-transparent", "-mt-[20px] mr-[310px] w-[212px]")}
      >
        Discovery
      </Skill>
      <Skill className={cn("skill-blur", "-mt-[71px] ml-[200px] w-[244px]")}>
        UX/UI Design
      </Skill>
      <Skill className={cn("skill-blur", "-mt-[20px] mr-[360px] w-[315px]")}>
        Web & Mobile Design
      </Skill>
      <Skill
        className={cn(
          "skill-transparent -z-10",
          "-mt-[50px] ml-[85px] w-[238px]"
        )}
      >
        UX Research
      </Skill>
    </div>
  )
}

const Skill = ({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) => {
  return (
    <h3
      className={cn(
        `font-weight-[700] line-height-[20px] flex min-h-[84px] w-fit items-center justify-center rounded-full text-center text-[20px] font-semibold text-nowrap ${fonts.skills.className}`,
        className
      )}
    >
      {children}
    </h3>
  )
}
