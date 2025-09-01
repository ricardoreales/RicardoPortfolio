import type { IMain } from "@/types/main.types"
import TheHumanImage from "@/assets/images/the-human.webp"

const mainData = {
  // presentation section
  presentationSection: {
    title: "What I Do",
    description:
      "From research to implementation, I turn ideas into digital products that captivate users and elevate your brand. Whether you need a strong identity, a seamless experience, or creative direction, I deliver tailor-made solutions",
    skills: [
      {
        title: "Discover & Research",
        description:
          "User needs, market trends, and business goals are analyzed to establish a solid foundation.",
        icon: "search",
      },
      {
        title: "Design & Prototype",
        description:
          "Intuitive interfaces and visual identities are shaped through wireframes, mock-ups, and high-fidelity prototypes.",
        icon: "brush",
      },
      {
        title: "Refine & Deliver",
        description:
          "Rigorous testing, iteration, and polishing ensure coherent, scalable experiences ready for launch.",
        icon: "baggage-claim",
      },
    ],
  },
  featuredProjectsSection: {
    title: "Featured Projects",
    description:
      "Take a look at my latest web design projects and see how we can bring your vision to life.",
  },
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
