import { cn } from "@/lib/utils"
import { ArrowRightIcon } from "lucide-react"

export const ContactBtn = () => {
  return (
    <a
      href={"/whatsapp"}
      className={cn(
        "bg-primary-500 flex items-center justify-center gap-5 rounded-full py-[10px] pr-[10px] pl-[30px] font-extrabold tracking-wide text-white"
      )}
    >
      Contact me
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
