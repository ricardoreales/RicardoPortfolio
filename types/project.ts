export interface IProject {
  id: number
  title: string
  category: string
  company: string
  image: string
  description: string
  tags?: string[]
  url?: string
  github?: string
}

export interface IProjectService {
  getProjects(): IProject[]
  getProjectById(id: number): IProject | undefined
  getProjectsByCategory(category: string): IProject[]
}
