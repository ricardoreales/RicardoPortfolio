import fonts from "@/config/fonts"
import { cn } from "@/lib/utils"
import type { IMainProjectSection, IWorkDescription } from "@/types/project"
import { FiCheckCircle } from "react-icons/fi"
import { GoLightBulb } from "react-icons/go"
import { MdWorkOutline } from "react-icons/md"

interface MainProjectSectionProps {
  mainData: IMainProjectSection
  workDescription: IWorkDescription
}

export const MainProjectSection = ({
  mainData,
  workDescription,
}: MainProjectSectionProps) => {
  const isDriveVideo = mainData.video.includes("drive.google.com")
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <CardContainer>
        {isDriveVideo ? (
          <iframe
            className="aspect-square w-full"
            src={mainData.video}
            width="100%"
            height="100%"
            allow="autoplay"
          ></iframe>
        ) : (
          <video
            className="aspect-square w-full"
            src={mainData.video}
            autoPlay
            muted
            loop
          ></video>
        )}
      </CardContainer>
      <InfoCard
        title={mainData.title}
        description={mainData.description}
        Icon={<MdWorkOutline className="h-[70px] w-[70px]" />}
      />
      <InfoCard
        bold
        title={"THE CHALLENGE"}
        description={workDescription.challenge}
        Icon={<GoLightBulb className="text-primary-500 h-[70px] w-[70px]" />}
      />
      <InfoCard
        bold
        title={"THE SOLUTION"}
        description={workDescription.solution}
        Icon={<FiCheckCircle className="text-success-500 h-[70px] w-[70px]" />}
      />
    </div>
  )
}

const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-basic-500 flex flex-col gap-5 overflow-hidden rounded-[20px]">
      {children}
    </div>
  )
}
const InfoCard = ({
  title,
  description,
  Icon,
  bold,
}: {
  title: string
  description: string
  bold?: boolean
  Icon: React.ReactNode
}) => {
  return (
    <CardContainer>
      <div className="bg-basic-500 flex h-full w-full flex-col gap-5 overflow-hidden rounded-[20px] p-[30px]">
        <div className="">{Icon}</div>
        <div className="min-h-[100px] flex-1"></div>
        <div className="flex flex-col gap-[20px]">
          <h3
            className={cn(
              fonts.figtree.className,
              "text-[32px] leading-normal font-medium text-white uppercase",
              bold && "font-bold"
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              fonts.figtree.className,
              "text-[18px] font-light text-white"
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </CardContainer>
  )
}
