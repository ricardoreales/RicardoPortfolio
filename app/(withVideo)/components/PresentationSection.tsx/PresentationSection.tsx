import { Card } from "@/components/Card"
import { ContactBtn } from "@/components/ContactBtn"
import type { IPresentationSection, IPresententioSkill } from "@/types"
import { BaggageClaim, Brush, type LucideIcon, Search } from "lucide-react"

const icons: Record<IPresententioSkill["icon"], LucideIcon> = {
  search: Search,
  brush: Brush,
  "baggage-claim": BaggageClaim,
}
export const PresentationSection = (
  presentationSection: IPresentationSection
) => {
  return (
    <section className="rr-section">
      <div className="rr-section-text">
        <h4 className="rr-title">{presentationSection.title}</h4>
        <p className="rr-description">{presentationSection.description}</p>
      </div>
      <div className="flex flex-col"></div>
      <div className="col-span-full grid grid-cols-1 gap-5 py-[40px] md:grid-cols-2 xl:grid-cols-3">
        {presentationSection.skills.map(skill => (
          <Card
            key={skill.title}
            Icon={icons[skill.icon]}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
      <div className="col-span-full flex flex-col items-center justify-center gap-4">
        <ContactBtn />
      </div>
    </section>
  )
}
