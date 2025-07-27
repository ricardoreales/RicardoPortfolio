import { PrimaryLink } from "../../PrimaryLink";

export const PresentationText = () => {
  return (
    <section className="w-min flex flex-col max-md:gap-4 items-center md:items-start">
      <h1 className=" flex flex-col items-center md:items-start  ">
        <span className="text-3xl md:pl-1 xl:text-5xl italic  text-nowrap mb-2 xl:mb-8">Hey. I&apos;m Ricardo, </span> 
        <span className=" text-9xl  md:text-8xl xl:text-[150px] tracking-wide font-title font-semibold  uppercase">UX/UI</span> 
        <span className=" text-3xl md:text-2xl xl:text-4xl self-center  font-title font-semibold uppercase text-center  mb-4 2xl:mb-8   ">Product Designer</span>
      </h1>
      
      <p className=" md:pl-2 text-center md:text-left tracking-wider text-xl md:text-lg xl:text-2xl text-wrap  mb-8 xl:mb-8">
      AI-powered design, guided by human intuition.
      </p>
   
      <PrimaryLink
        variant="header"
        className="w-fit "
        href="/#portfolio"
        aria-label="View portfolio and start working together"
      >
        Let&apos;s work together
      </PrimaryLink>
    </section>
  );
};
