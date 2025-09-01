import fonts from "@/config/fonts"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import type { IconType } from "react-icons"

interface CardProps {
  Icon: LucideIcon | IconType
  title: string
  description: string
  className?: string
}

export const Card = ({ title, description, Icon, className }: CardProps) => {
  return (
    <div
      className={cn(
        "flex h-full min-h-[400px] flex-col gap-[10px] rounded-[20px] bg-[#292929] p-8",
        className
      )}
    >
      <div className="flex-1">
        <Icon className="text-primary-500 h-[70px] w-[70px]" />
      </div>
      <h5
        className={cn(
          "text-[32px] leading-none font-semibold text-white",
          fonts.skills.className
        )}
      >
        {title}
      </h5>
      <p className="text-[18px] text-white opacity-60">{description}</p>
    </div>
  )
}
