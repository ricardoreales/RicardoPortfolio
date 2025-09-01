import { IProject, IProjectService } from "../types/project"
import Mobilifarma from "@/assets/images/Mobilifarma-sin-bordes.svg"

const slugify = (name: string) => {
  return name.toLowerCase().replaceAll(/ /g, "-")
}
const projectsData: IProject[] = [
  {
    slug: slugify("mobilifarma"),
    name: "mobilifarma",
    logo: Mobilifarma.src,
    roles: ["UX/UI Design", "SME in Web Development"],
    main: {
      video:
        "https://drive.google.com/file/d/1xCHo-wppGEF1sMpkMZin6crvOhZEit7p/preview",
      title: "Mobilifarma - Argentina",
      description:
        "Mobilifarma is a company specializing in equipment and solutions for pharmacies.",
    },
    workDescription: {
      challenge:
        "The old website had multiple issues: it was visually outdated, navigation was unclear, and there were no call-to-action buttons to drive users toward contact or sales. The image gallery was weak and failed to highlight Mobilifarma’s expertise and products. There was no integration with social media and no clear explanation of the company’s services or workflow. These issues led to a very low conversion rate and a weak digital brand identity.",
      solution:
        "The proposed redesign aimed to create a modern, accessible, and responsive website focused on user experience and business goals. The new interface includes strategic call-to-action buttons, a clear narrative about the work process, and a strong visual portfolio. Social media links were added, and the content was completely restructured for clarity and ease of navigation. The redesign communicates Mobilifarma’s value clearly and encourages engagement from users.",
    },
    projectImages: [
      "https://drive.google.com/file/d/1e6ufzTSpEtn9b2VrsraK_0XdxFp_4nT9/view?usp=sharing",
      "https://drive.google.com/file/d/1V72Kb6e6wFEUoSGJBQ9Zoy8KXsY4md9b/view?usp=drive_link",
    ],
    links: {
      behance: "https://www.behance.net/gallery/1234567890/mobilifarma",
      project: "https://www.mobilifarma.com",
    },
    designProcess: [
      {
        title: "DISCOVERY",
        solutions: [
          "UX audit of the old website.",
          "Competitor benchmarking.",
          "Client interviews to define goals.",
        ],
        icon: "SEARCH",
      },
      {
        title: "DESIGN",
        solutions: [
          "Wireframes and mock-ups.",
          "High-fidelity prototypes.",
          "Visual identity design.",
        ],
        icon: "PIECE",
      },
      {
        title: "DEVELOPMENT",
        solutions: [
          "Website development.",
          "Integration with CMS.",
          "Testing and optimization.",
        ],
        icon: "THEME_PALETTE",
      },
    ],
  },
]

export class ProjectService implements IProjectService {
  private projects: IProject[] = projectsData

  getProjects(): IProject[] {
    return this.projects
  }

  getProjectBySlug(slug: string): IProject | undefined {
    return this.projects.find(project => project.slug === slug)
  }

  // getProjectsByCategory(category: string): IProject[] {
  //   return this.projects.filter(project =>
  //     project.category.toLowerCase().includes(category.toLowerCase())
  //   )
  // }

  getFeaturedProjects(limit: number = 6): IProject[] {
    return this.projects.slice(0, limit)
  }
}

export const projectService = new ProjectService()
