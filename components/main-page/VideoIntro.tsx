"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export const VideoIntro = () => {
  return (
    <>
      <Image
        src="/images/hero-bg.png"
        width={100}
        height={100}
        unoptimized
        alt=""
        className="w-auto  object-cover object-[46.5%_0%] h-screen mx-auto"
      />

      <div
        className={cn(
          "absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10",
          " max-sm:from-black/70 max-sm:to-black/70",
          "bg-gradient-to-l from-black/100 via-transparent to-black/100",
          "xl:bg-gradient-to-l xl:from-black/100 xl:from-20% xl:via-transparent xl:to-black/100 xl:to-80%"
        )}
      />
      <div className="video-intro-out absolute top-0 sm:left-0 right-0 bottom-0 ">
        <video
          onEnded={() => {
            document.body.classList.add("loaded-intro");
          }}
          autoPlay
          muted
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          src={`/videos/intro.mp4`}
          className={` w-auto h-full object-cover object-[46.5%_0%]   mx-auto`}
        />
      </div>
    </>
  );
};
