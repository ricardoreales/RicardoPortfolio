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
        // base
        "relative inline-flex h-10 w-[140px] items-center justify-between rounded-lg px-4 font-extrabold tracking-wide text-white no-underline",
        // fondo oscuro del botón
        "bg-[#141414] transition duration-200",
        // pseudo-elemento: borde con gradiente animado
        // before = capa nítida del borde
        "before:absolute before:-inset-[2px] before:rounded-[10px] before:content-['']",
        "before:bg-[linear-gradient(45deg,#141414,#1b1b1b,#2e2e2e,#e1e1e1,#2e2e2e,#1b1b1b,#141414,#141414)]",
        "before:z-[-1] before:[animation:steam_20s_linear_infinite] before:bg-[length:400%_400%]",
        // after = halo difuminado del borde
        "after:absolute after:-inset-[2px] after:rounded-[10px] after:content-['']",
        "after:bg-[linear-gradient(45deg,#141414,#1b1b1b,#2e2e2e,#e1e1e1,#2e2e2e,#1b1b1b,#141414,#141414)]",
        "after:z-[-1] after:[animation:steam_20s_linear_infinite] after:bg-[length:400%_400%] after:blur-[50px]",
        className
      )}
    >
      <span className="truncate">{text}</span>

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white [&>svg]:text-[#141414]">
        <ArrowRightIcon className="size-5" />
      </div>
    </a>
  )
}
