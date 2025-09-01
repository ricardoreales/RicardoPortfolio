import { generateWhatsappLink } from "@/lib/utils"
import type { IConfig } from "@/types"

const phone = "541126677230"
const message =
  "%C2%A1Hola+%2ARicardo%2A+%2AReales%2A%21+%F0%9F%91%8B%F0%9F%8E%A8%E2%9C%A8++%0ATe+contacto+desde+tu+pagina+web+%F0%9F%8C%90%F0%9F%92%BB++%0AMe+interesa+mucho+tu+trabajo+de+dise%C3%B1o+%F0%9F%96%8C%EF%B8%8F%F0%9F%96%BC%EF%B8%8F+y+quiero+m%C3%A1s+informaci%C3%B3n+%F0%9F%93%A9%F0%9F%94%8D++%0A%C2%BFPodr%C3%ADas+contarme+m%C3%A1s+detalles%3F+"

const configData = {
  contact: {
    whatsappLink: generateWhatsappLink(phone, message),
    linkedinLink: "https://www.linkedin.com/in/ricardoreales",
    behanceLink: "https://www.behance.net/ricardoreales",
  },
} as const satisfies IConfig

export class ConfigService {
  private config = configData

  getConfig(): IConfig {
    return this.config
  }
}

export const configService = new ConfigService()
