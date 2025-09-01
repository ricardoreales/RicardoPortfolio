import { cn } from "@/lib/utils"
import React from "react"

export const SectionLayout = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "bg-basic-700 mx-auto w-full max-w-[96rem] px-[16px] py-[50px] md:px-[32px] md:py-[100px] lg:grid-cols-2 lg:px-[80px] lg:py-[100px]",
        className
      )}
    >
      {children}
    </div>
  )
}
