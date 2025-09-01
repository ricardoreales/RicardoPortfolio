import { cn } from "@/lib/utils"
import { configService } from "@/services/config.service"
import { ArrowRightIcon } from "lucide-react"

export const ContactBtn = ({
  text = "Contact me",
  className,
}: {
  text?: string
  className?: string
}) => {
  const config = configService.getConfig()
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={config.contact.whatsappLink}
      className={cn(
        "bg-primary-500 flex items-center justify-center gap-5 rounded-full py-[10px] pr-[10px] pl-[30px] font-extrabold tracking-wide text-white",
        className
      )}
    >
      {text}
      <div
        className={cn(
          "[&>svg]:text-primary-500 flex h-10 w-10 items-center justify-center rounded-full bg-white"
        )}
      >
        <ArrowRightIcon className="size-5" />
      </div>
    </a>
  )
}
