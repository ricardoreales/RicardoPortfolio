import { PresentationText } from "./PresentationText";
import { VideoIntro } from "../VideoIntro";
import { HeroSkills } from "./HeroSkills";

export function Hero() {
  return (
    <main className="hero-container flex justify-between min-h-screen relative  ">
      <VideoIntro />
      <div className="hero-content absolute top-0 left-0 right-0 bottom-0 min-h-screen w-full items-center justify-between flex z-20  ">
        <div className="container flex-col flex md:flex-row  w-full items-center md:justify-between mx-auto">
        <div className=" animation-entrance-left">
          <PresentationText />
        </div>
        <div className="hero-right">
          <HeroSkills />
        </div>
        </div>
       
      </div>
    </main>
  );
}
