import { PresentationText } from "./PresentationText";
import { VideoIntro } from "../VideoIntro";
import { HeroSkills } from "./HeroSkills";

export function Hero() {
  return (
    <main className="hero-container flex justify-between min-h-screen relative  ">
      <VideoIntro />
      <div className="hero-content absolute top-0 left-0 right-0 bottom-0 min-h-screen w-full items-center justify-between flex z-20  ">
        <div className="container flex-col flex lg:flex-row md:max-lg:gap-y-8  w-full items-center md:justify-between mx-auto">
        <div className=" animation-entrance-left">
          <PresentationText />
          <div className="h-20"></div>
        </div>
        <div className=" ">
          <HeroSkills />
        </div>
        </div>
       
      </div>
    </main>
  );
}
