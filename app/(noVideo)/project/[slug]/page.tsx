import { Header } from "@/components/Header/Header"
import { projectService } from "@/services/projectService"
import { ProjectHeader } from "./components/ProjectHeader"
import { notFound } from "next/navigation"
import { SectionLayout } from "@/components/layouts/SectionLayout"

export async function getStaticParams() {
  const projects = projectService.getProjects()

  return projects.map(project => ({
    slug: project.slug,
    withVideo: false,
  }))
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
        <ProjectHeader project={project} />
      </SectionLayout>
    </div>
  )
}
