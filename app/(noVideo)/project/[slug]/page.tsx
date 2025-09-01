import { Card } from "@/components/Card"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header/Header"
import { SectionLayout } from "@/components/layouts/SectionLayout"
import { projectService } from "@/services/projectService"
import type { IDesignProcessIconType } from "@/types/project"
import type { LucideIcon } from "lucide-react"
import { Palette, Puzzle, Search } from "lucide-react"
import { notFound } from "next/navigation"
import { MainProjectSection } from "./components/MainProjectSection"
import { ProjectHeader } from "./components/ProjectHeader"
import { ProjectImageCarrusel } from "./components/ProjectImageCarrusel"

export async function generateStaticParams() {
  const projects = projectService.getProjects()

  return projects.map(project => ({
    slug: project.slug,
    withVideo: false,
  }))
}
const iconsMap: Record<IDesignProcessIconType, LucideIcon> = {
  SEARCH: Search,
  PIECE: Puzzle,
  THEME_PALETTE: Palette,
}
export default async function Project({
  params,
}: {
  params: Promise<{ slug: string; withVideo: boolean }>
}) {
  const { slug } = await params
  const project = projectService.getProjectBySlug(slug)
  if (!project) {
    return notFound()
  }
  return (
    <div className="flex flex-col gap-4 pt-20 text-white">
      <Header />
      <SectionLayout>
        <ProjectHeader {...project} />
        <MainProjectSection
          mainData={project.main}
          workDescription={project.workDescription}
        />
      </SectionLayout>
      <SectionLayout>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <h4 className="col-span-full text-[60px] leading-[72px] font-medium">
            Design Process
          </h4>
          {project.designProcess.map(process => (
            <Card
              key={process.title}
              Icon={iconsMap[process.icon] || Search}
              title={process.title}
              description={
                <ul>
                  {process.solutions.map(solution => (
                    <li key={solution}>-{solution}</li>
                  ))}
                </ul>
              }
            />
          ))}
        </div>
      </SectionLayout>

      <ProjectImageCarrusel
        links={project.links}
        images={project.projectImages}
        alt={project.name}
      />
      {/* {project.projectImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={project.name}
            className="h-auto w-full rounded-3xl"
            width={800}
            height={800}
            unoptimized
          />
        ))} */}

      <Footer />
    </div>
  )
}
