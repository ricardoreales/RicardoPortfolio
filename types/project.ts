export interface IMainProjectSection {
  video: string // url
  title: string
  description: string
}
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
  slug: string // slug of the project slugify(name)
  name: string

  roles: string[]
  logo: string // url
  main: IMainProjectSection
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
  getProjectBySlug(slug: string): IProject | undefined
  // getProjectsByCategory(category: string): IProject[]
}
