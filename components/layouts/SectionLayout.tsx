import React from "react"

export const SectionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-basic-700 mx-auto w-full max-w-[96rem] px-[16px] py-[50px] md:px-[32px] md:py-[100px] lg:grid-cols-2 lg:px-[80px] lg:py-[100px]">
      {children}
    </div>
  )
}
