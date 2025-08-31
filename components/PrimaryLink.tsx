import { cn } from "@/lib/utils"
import { ArrowRightIcon } from "lucide-react"
import Link, { LinkProps } from "next/link"
import React from "react"

interface PrimarybuttonProps extends LinkProps {
  children: React.ReactNode
  variant: "header" | "default"
  className?: string
}

export const PrimaryLink = ({
  children,
  variant = "default",
  href,
  className,
  ...props
}: PrimarybuttonProps) => {
  return (
    <Link
      href={href}
      {...props}
      className={cn(
        "bg-primary-500 flex items-center justify-center gap-4 rounded-full font-extrabold tracking-wide text-white",
        {
          "min-h-12 gap-4 p-3 pr-4 pl-8 text-base 2xl:text-xl":
            variant === "header",
          "min-h-10 w-fit gap-4 p-3 pr-4 pl-8 text-base 2xl:text-xl":
            variant === "default",
        },
        className
      )}
    >
      {children}
      <div
        className={cn(
          "flex items-center justify-center rounded-full bg-white",
          {
            "h-8 w-8 p-1 2xl:h-10 2xl:w-10": variant === "header",
          }
        )}
      >
        <ArrowRightIcon className="text-primary-500" />
      </div>
    </Link>
  )
}
