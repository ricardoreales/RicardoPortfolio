import { cn } from "@/lib/utils"

export const OutlineButton = ({
  children,
  Icon,
  href = ".",
  className,
  component = "button",
}: {
  children: React.ReactNode
  Icon?: React.ReactNode
  href?: string
  className?: string
  component?: "button" | "a"
}) => {
  const containerClassName = cn(
    "flex h-[60px] items-center justify-center gap-2.5 rounded-full border border-white/20 px-[30px] py-4 text-white",
    "font-bold text-[20px] tracking-wide leading-[28px]",
    className
  )
  if (component === "a") {
    return (
      <a href={href} className={containerClassName}>
        {children}
        {Icon && (
          <div className="[&>svg]:text-basic-700 flex min-h-10 min-w-10 items-center justify-center rounded-full bg-white">
            {Icon}
          </div>
        )}
      </a>
    )
  }
  return (
    <button className={containerClassName}>
      {children}
      {Icon && (
        <div className="[&>svg]:text-basic-700 flex min-h-10 min-w-10 items-center justify-center rounded-full bg-white">
          {Icon}
        </div>
      )}
    </button>
  )
}
