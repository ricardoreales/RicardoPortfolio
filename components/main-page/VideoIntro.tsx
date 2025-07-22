"use client";

export const VideoIntro = () => {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/hero-bg.png" alt="" className="w-full object-cover" />

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
        className={`video-intro absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover`}
      /> 
    </>
  );
};
