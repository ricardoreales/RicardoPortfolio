import React from "react";
import "./skill.css";
import fonts from "@/config/fonts";
import { cn } from "../../../lib/utils";
export const HeroSkills = () => {
  return (
    <div className="relative lg:scale-75 lg:w-[440px] 2xl:w-auto xl:scale-100 md:origin-center lg:origin-right hidden lg:flex flex-col justify-center items-center animation-entrance-right  max-sm:hidden md ">
      <Skill
        className={cn("  bg-white/60 text-black brightness-90", "w-[220px] ",
           
        )}
      >
        MVP
      </Skill>
      <Skill
        className={cn(" skill-transparent", "w-[212px] -mt-[20px] mr-[310px]")}
      >
        Discovery
      </Skill>
      <Skill className={cn("skill-blur", "w-[244px] -mt-[71px] ml-[200px]")}>
        UX/UI Design
      </Skill>
      <Skill className={cn("skill-blur", "w-[315px] -mt-[20px] mr-[360px]")}>
        Web & Mobile Design
      </Skill>
      <Skill
        className={cn("skill-transparent -z-10" , "w-[238px] -mt-[50px] ml-[85px]")}
      >
        UX Research
      </Skill>
    </div>
  );
};

const Skill = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <h3
      className={cn(
        `
        text-nowrap
    flex justify-center items-center
    rounded-full
    w-fit
    text-center
    text-[20px]
    font-semibold
    min-h-[84px]
    font-weight-[700]
    line-height-[20px]
   
    ${fonts.skills.className}`,
        className
      )}
    >
      {children}
    </h3>
  );
};
