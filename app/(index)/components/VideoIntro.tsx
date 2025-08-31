"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

export const VideoIntro = () => {
  return (
    <>
      <Image
        src="/images/hero-bg.webp"
        width={100}
        height={100}
        unoptimized
        alt=""
        className="mx-auto h-screen w-auto object-cover object-[46.5%_0%]"
      />

      <div
        className={cn(
          "absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full",
          "max-sm:from-black/70 max-sm:to-black/70",
          "bg-gradient-to-l from-black/100 via-transparent to-black/100",
          "xl:bg-gradient-to-l xl:from-black/100 xl:from-20% xl:via-transparent xl:to-black/100 xl:to-80%"
        )}
      />
      <div className="video-intro-out absolute top-0 right-0 bottom-0 sm:left-0">
        <video
          onEnded={() => {
            document.body.classList.add("loaded-intro")
          }}
          autoPlay
          muted
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          src={`/videos/intro.mp4`}
          className={`mx-auto h-full w-auto object-cover object-[46.5%_0%]`}
        />
      </div>
    </>
  )
}
