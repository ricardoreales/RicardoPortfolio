"use client";
import ctaBg from "@/assets/CTASection.webp";
export const CTASection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${ctaBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
 
    >
      <div className="rr-section h-screen bg-transparent">
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl font-bold">Contact me</h2>
        </div>
      </div>
    </section>
  );
};
