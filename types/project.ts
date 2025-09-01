export interface IWorkDescription {
  challenge: string
  solution: string
}

export interface IDesignProcess {
  title: string
  icon: "SEARCH" | "PIECE" | "THEME_PALETTE"
  solutions: string[]
}

export interface IProject {
  id: number
  name: string

  rol: string
  logo: string // url
  main: {
    video: string // url
    title: string
    description: string
  }
  workDescription: IWorkDescription
  designProcess: IDesignProcess[]
  projectImages: string[] // urls
  links: {
    behance?: string // url
    project?: string // url
  }
}

export interface IProjectService {
  getProjects(): IProject[]
  getProjectById(id: number): IProject | undefined
  // getProjectsByCategory(category: string): IProject[]
}
