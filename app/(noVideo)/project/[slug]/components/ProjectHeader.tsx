import fonts from "@/config/fonts"
import { cn } from "@/lib/utils"
import { IProject } from "@/types/project"
import Image from "next/image"

interface ProjectHeaderProps {
  roles: IProject["roles"]
  logo: IProject["logo"]
  name: IProject["name"]
}
export const ProjectHeader = ({ roles, logo, name }: ProjectHeaderProps) => {
  return (
    <div className="flex w-full flex-col items-start">
      <Image
        src={logo}
        alt={name}
        className="h-[50px] w-auto object-contain"
        width={1000}
        height={1000}
      />
      {roles.length > 0 && (
        <div
          className={cn(
            "py-10 text-[20px] leading-normal font-bold text-white/20 uppercase md:text-[32px]",
            fonts.figtree.className
          )}
        >
          <h3>{`${roles.length === 1 ? "Rol:" : "Roles:"}`}</h3>
          {roles.length === 1 ? (
            <p>{roles[0]}</p>
          ) : (
            <ul className="">
              {roles.map(role => (
                <li key={role}>-{role}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
