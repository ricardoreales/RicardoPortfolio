import { EmblaViewportRefType } from "embla-carousel-react";

export const CarruselContainer = ({
  ref,
  children,
}: {
  ref: EmblaViewportRefType;
  children: React.ReactNode;
}) => {
  return (
    <div ref={ref} className="overflow-hidden">
      <div
        className="flex touch-pan-y pinch-zoom "
        style={{
          marginLeft: "calc(max(2.5dvw, 40px) * -1)",
        }}
      >
        {children}
      </div>
    </div>
  );
};
export const CarruselItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        transform: "translate3d(0, 0, 0)",
        flex: "0 0 auto",
        minWidth: "0px",
        paddingLeft: "max(2.5dvw, 40px)",
      }}
      className="  py-[50px] "
    >
      {children}
    </div>
  );
};
