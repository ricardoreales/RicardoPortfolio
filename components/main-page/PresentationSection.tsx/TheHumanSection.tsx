import TheHumanImage from "@/assets/images/the-human.webp";
import { PrimaryLink } from "@/components/PrimaryLink";
import { SectionTitle } from "@/components/SectionTitle";
import { LinkedinIcon } from "@/components/svgs/LinkedInIcon";
import { WhatsIcon } from "@/components/svgs/WhatsappIcon";
import Image from "next/image";
import { Fragment } from "react";

const habilities = ["Produc Designer", "UX Designer", "UI Designer"];
const experiences = Array.from({ length: 4 }, (_, index) => ({
  id: index + 1,
  title: "UX/UI Designer",
  mode: "Freelance",
  Country: "Argentina",
  fromYear: 2021,
  toYear: 2022,
}));
export const TheHumanSection = () => {
  return (
    <section className="rr-section gap-10">
      <div className="flex flex-col items-center lg:items-end">
        <div className="flex flex-col gap-5">
          <Image
            src={TheHumanImage}
            alt="The Human"
            className="w-auto h-full max-h-[max(70vh,400px)] rounded-[1.25rem] object-contain"
          />
          <div className="flex flex-col gap-10">
            <div className="flex gap-x-10  items-center">
              <SocialButton
                icon={<WhatsIcon />}
                href="https://wa.me/5491126677230"
              />
              <div className="h-6 w-[1px] bg-white/30"></div>
              <SocialButton
                icon={<LinkedinIcon />}
                href="https://www.linkedin.com/in/ricardoreales"
              />
              <div className="h-6 w-[1px] bg-white/30"></div>
              <SocialButton
                icon={<WhatsIcon />}
                href="https://wa.me/5491126677230"
              />
            </div>
            <PrimaryLink href="/" variant="default">
              Let&apos;s work together
            </PrimaryLink>
          </div>
        </div>
      </div>

      <div className="flex flex-col ">
        <SectionTitle
          title="The Human Behind the Screen"
          description="I'm Ricardo Reales, a passionate UX/UI Designer based in Argentina. I craft intuitive and visually engaging digital experiences by blending research-driven design with a strong visual language."
        />
        <div className="flex justify-between border-y border-white/30 py-10 my-10 text-white/50 font-[300] text-[20px] leading-normal">
          {habilities.map((hability) => (
            <div key={hability}>
              <h4>{hability}</h4>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-y-5 text-white items-center font-[300] text-[20px] leading-normal w-full">
          {experiences.map((experience) => (
            <Fragment key={experience.id}>
              <div className="h-[60px] flex justify-start items-center">
                <h4 className="">{experience.title}</h4>
              </div>

              <div className="h-[60px] flex justify-center items-center">
                <p className="">
                  {experience.mode} - {experience.Country}
                </p>
              </div>
              <div className="h-[60px] flex justify-end items-center">
                <p className=" text-right">
                  {experience.fromYear} - {experience.toYear}
                </p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    
      {/* <div className="flex flex-col gap-4 col-span-full justify-center items-center">
        <PrimaryLink href="/" variant="default">
          Contact me
        </PrimaryLink>
      </div>  */}
    </section>
  );
};


const SocialButton = ({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="flex justify-center items-center p-2 bg-black/30 backdrop-blur-3xl rounded-full"
    >
      {icon}
    </a>
  );
};
