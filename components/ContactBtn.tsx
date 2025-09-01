import { cn, generateWhatsappLink } from "@/lib/utils"
import { ArrowRightIcon } from "lucide-react"

const phone = "541126677230"
const message =
  "%C2%A1Hola+%2ARicardo%2A+%2AReales%2A%21+%F0%9F%91%8B%F0%9F%8E%A8%E2%9C%A8++%0ATe+contacto+desde+tu+pagina+web+%F0%9F%8C%90%F0%9F%92%BB++%0AMe+interesa+mucho+tu+trabajo+de+dise%C3%B1o+%F0%9F%96%8C%EF%B8%8F%F0%9F%96%BC%EF%B8%8F+y+quiero+m%C3%A1s+informaci%C3%B3n+%F0%9F%93%A9%F0%9F%94%8D++%0A%C2%BFPodr%C3%ADas+contarme+m%C3%A1s+detalles%3F+"
const link = generateWhatsappLink(phone, message)
export const ContactBtn = ({
  text = "Contact me",
  className,
}: {
  text?: string
  className?: string
}) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
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
