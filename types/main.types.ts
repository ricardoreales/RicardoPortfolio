export interface IPresententioSkill {
  title: string
  keywords: string[]
  description: string
  icon: "search" | "brush" | "baggage-claim"
}
export interface IPresentationSection {
  title: string
  description: string
  skills: IPresententioSkill[]
}

export interface IFeaturedProjectsSection {
  title: string
  description: string
}
export interface IExperience {
  id: number
  title: string
  mode: string
  Country: string
  fromYear: number
  toYear: number
}
export interface IMain {
  presentationSection: IPresentationSection
  featuredProjectsSection: IFeaturedProjectsSection
  humanSection: {
    image: string
    title: string
    description: string
  }
  habilities: string[]
  experiences: IExperience[]
}
