import { IProject, IProjectService } from "../types/project"

const projectsData: IProject[] = [
  {
    id: 1,
    title: "UX Research",
    category: "User Experience",
    company: "Emtech Institute",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=600&fit=crop",
    description: "Complete UX research project for fintech application",
    tags: ["UX", "Research", "Fintech"],
    url: "#",
  },
  {
    id: 2,
    title: "UI Design",
    category: "Interface Design",
    company: "Tech Solutions",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=600&fit=crop",
    description: "Modern interface design for mobile application",
    tags: ["UI", "Design", "Mobile"],
    url: "#",
  },
  {
    id: 3,
    title: "Brand Identity",
    category: "Visual Design",
    company: "Creative Studio",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=600&fit=crop",
    description: "Complete brand identity and visual system",
    tags: ["Branding", "Identity", "Visual"],
    url: "#",
  },
  {
    id: 4,
    title: "Web Development",
    category: "Development",
    company: "Digital Agency",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop",
    description: "Full-stack web application development",
    tags: ["Web", "Development", "Full-stack"],
    url: "#",
  },
  {
    id: 5,
    title: "Mobile App",
    category: "App Development",
    company: "Startup Inc",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop",
    description: "Native mobile application for iOS and Android",
    tags: ["Mobile", "App", "React Native"],
    url: "#",
  },
  {
    id: 6,
    title: "Data Analysis",
    category: "Analytics",
    company: "Data Corp",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop",
    description: "Advanced data analytics and visualization",
    tags: ["Data", "Analytics", "Visualization"],
    url: "#",
  },
]

export class ProjectService implements IProjectService {
  private projects: IProject[] = projectsData

  getProjects(): IProject[] {
    return this.projects
  }

  getProjectById(id: number): IProject | undefined {
    return this.projects.find(project => project.id === id)
  }

  getProjectsByCategory(category: string): IProject[] {
    return this.projects.filter(project =>
      project.category.toLowerCase().includes(category.toLowerCase())
    )
  }

  getFeaturedProjects(limit: number = 6): IProject[] {
    return this.projects.slice(0, limit)
  }
}

export const projectService = new ProjectService()
