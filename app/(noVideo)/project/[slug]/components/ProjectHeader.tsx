import { SectionLayout } from "@/components/layouts/SectionLayout"
import { IProject } from "@/types/project"
import Image from "next/image"
import React from "react"

export const ProjectHeader = ({ project }: { project: IProject }) => {
  return (
    <SectionLayout>
      <Image
        src={project.logo}
        alt="Project Header"
        width={1000}
        height={1000}
      />
    </SectionLayout>
  )
}
