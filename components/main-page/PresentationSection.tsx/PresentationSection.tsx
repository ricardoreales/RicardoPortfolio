import { PrimaryLink } from "@/components/PrimaryLink";
import fonts from "@/config/fonts";
import { cn } from "@/lib/utils";
import { BaggageClaim, Brush, LucideIcon, Search } from "lucide-react";

export const PresentationSection = () => {
  return (
    <section className="rr-section">
      <div className="rr-section-text ">
        <h4 className="rr-title">What I Do</h4>
        <p className="rr-description ">
          From research to implementation, I turn ideas into digital products
          that captivate users and elevate your brand. Whether you need a strong
          identity, a seamless experience, or creative direction, I deliver
          tailor-made solutions
        </p>
      </div>
      <div className="flex flex-col "></div>
      <div className="col-span-full py-[40px]  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
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
      <div className="flex flex-col gap-4 col-span-full justify-center items-center">
        <PrimaryLink href="/" variant="default">
          Contact me
        </PrimaryLink>
      </div>
    </section>
  );
};

interface CardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const Card = ({ title, description, Icon, className }: CardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col  min-h-[400px] h-full gap-[10px] bg-[#292929] rounded-[20px] p-8",
        className
      )}
    >
      <div className="flex-1">
        <Icon className="w-[70px] h-[70px] text-primary-500" />
      </div>
      <h5
        className={cn(
          "text-white text-[32px] font-semibold leading-none ",
          fonts.skills
        )}
      >
        {title}
      </h5>
      <p className="text-white opacity-60 text-[18px]">{description}</p>
    </div>
  );
};
