import { Card } from "@/components/Card"
import { ContactBtn } from "@/components/ContactBtn"
import { BaggageClaim, Brush, Search } from "lucide-react"

export const PresentationSection = () => {
  return (
    <section className="rr-section">
      <div className="rr-section-text">
        <h4 className="rr-title">What I Do</h4>
        <p className="rr-description">
          From research to implementation, I turn ideas into digital products
          that captivate users and elevate your brand. Whether you need a strong
          identity, a seamless experience, or creative direction, I deliver
          tailor-made solutions
        </p>
      </div>
      <div className="flex flex-col"></div>
      <div className="col-span-full grid grid-cols-1 gap-5 py-[40px] md:grid-cols-2 xl:grid-cols-3">
        <Card
          Icon={Search}
          title="Discover & Research"
          description="User needs, market trends, and business goals are analyzed to establish a solid foundation."
        />
        <Card
          Icon={Brush}
          title="Desing & Prototype"
          description="Intuitive interfaces and visual identities are shaped through wireframes, mock-ups, and high-fidelity prototypes."
        />
        <Card
          className="col-span-full xl:col-span-1"
          Icon={BaggageClaim}
          title="Refine & Deliver"
          description="Rigorous testing, iteration, and polishing ensure coherent, scalable experiences ready for launch."
        />
      </div>
      <div className="col-span-full flex flex-col items-center justify-center gap-4">
        <ContactBtn />
      </div>
    </section>
  )
}
