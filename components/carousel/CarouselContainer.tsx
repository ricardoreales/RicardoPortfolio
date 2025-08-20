import { EmblaViewportRefType } from "embla-carousel-react";
import { cn } from "@/lib/utils";

export const CarruselContainer = ({
  ref,
  children,
  className,
  variant = "default",
}: {
  ref: EmblaViewportRefType;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "full";
}) => {
  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <div
        className="flex touch-pan-y pinch-zoom "
        style={{
          marginLeft: variant === "default" ? "calc(max(2.5dvw, 40px) * -1)" : "0",
        }}
      >
        {children}
      </div>
    </div>
  );
};
