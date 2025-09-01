import { ContactBtn } from "@/components/ContactBtn"
import { SectionTitle } from "@/components/SectionTitle"
import { LinkedinIcon } from "@/components/svgs/LinkedInIcon"
import { WhatsIcon } from "@/components/svgs/WhatsappIcon"
import { configService } from "@/services/config.service"
import { mainService } from "@/services/main.service"
import Image from "next/image"
import { Fragment } from "react"

export const TheHumanSection = () => {
  const main = mainService.getMain()
  const config = configService.getConfig()
  const habilities = main.habilities
  const experiences = main.experiences
  const contact = config.contact
  return (
    <section className="rr-section grid gap-10 md:grid-cols-2 xl:grid-cols-5">
      <div className="flex flex-col items-center lg:items-end xl:col-span-2">
        <div className="flex flex-col gap-5">
          <Image
            src={main.humanSection.image}
            alt="The Human"
            width={500}
            height={500}
            className="h-full w-auto rounded-[1.25rem] object-contain"
            //     max-h-[max(70vh,400px)]
          />
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-x-10 max-md:justify-center">
              <SocialButton icon={<WhatsIcon />} href={contact.whatsappLink} />
              <div className="h-6 w-[1px] bg-white/30"></div>
              <SocialButton
                icon={<LinkedinIcon />}
                href={contact.linkedinLink}
              />
              <div className="h-6 w-[1px] bg-white/30"></div>
              <SocialButton icon={<WhatsIcon />} href={contact.whatsappLink} />
            </div>
            <ContactBtn
              text="Let's work together"
              className="w-full md:w-fit"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:col-span-3">
        <SectionTitle
          title={main.humanSection.title}
          description={main.humanSection.description}
        />
        <div className="my-10 flex justify-between border-y border-white/30 py-10 text-[20px] leading-normal font-[300] text-white/50">
          {habilities.map(hability => (
            <div key={hability}>
              <h4>{hability}</h4>
            </div>
          ))}
        </div>
        <div className="grid w-full grid-cols-3 items-center gap-y-5 text-[20px] leading-normal font-[300] text-white">
          {experiences.map(experience => (
            <Fragment key={experience.id}>
              <div className="flex h-[60px] items-center justify-start">
                <h4 className="">{experience.title}</h4>
              </div>

              <div className="flex h-[60px] items-center justify-center">
                <p className="">
                  {experience.mode} - {experience.Country}
                </p>
              </div>
              <div className="flex h-[60px] items-center justify-end">
                <p className="text-right">
                  {experience.fromYear} - {experience.toYear}
                </p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

const SocialButton = ({
  icon,
  href,
}: {
  icon: React.ReactNode
  href: string
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center justify-center rounded-full bg-black/30 p-2 backdrop-blur-3xl"
    >
      {icon}
    </a>
  )
}
