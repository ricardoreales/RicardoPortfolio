import { cn } from "@/lib/utils";
interface CarruselItemProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "full";
}

export const CarruselItem = ({
  children,
  className,
  variant = "default",
}: CarruselItemProps) => {
  return (
    <div
      style={{
        transform: "translate3d(0, 0, 0)",
        flex: "0 0 auto",
        minWidth: variant === "default" ? "0px" : "100%",
       
      }}
      className={cn(
        {
            "pl-[max(2.5dvw,40px)]": variant === "default",
          "  py-[50px] ": variant === "default",
        },
        className
      )}
    >
      {children}
    </div>
  );
};
