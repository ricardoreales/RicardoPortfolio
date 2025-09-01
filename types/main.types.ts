export interface IExperience {
  id: number
  title: string
  mode: string
  Country: string
  fromYear: number
  toYear: number
}
export interface IMain {
  humanSection: {
    image: string
    title: string
    description: string
  }
  habilities: string[]
  experiences: IExperience[]
}
