import type { IMain } from "@/types/main.types"
import TheHumanImage from "@/assets/images/the-human.webp"

const mainData = {
  // human section
  humanSection: {
    image: TheHumanImage.src,
    title: "The Human Behind the Screen",
    description:
      "I'm Ricardo Reales, a passionate UX/UI Designer based in Argentina. I craft intuitive and visually engaging digital experiences by blending research-driven design with a strong visual language.",
  },
  // human section habilities
  habilities: ["Produc Designer", "UX Designer", "UI Designer"],
  experiences: Array.from({ length: 4 }, (_, index) => ({
    id: index + 1,
    title: "UX/UI Designer",
    mode: "Freelance",
    Country: "Argentina",
    fromYear: 2021,
    toYear: 2022,
  })),
} as const satisfies IMain

export class MainService {
  private main = mainData
  getMain(): IMain {
    return this.main
  }
}

export const mainService = new MainService()
