"use client";

export const VideoIntro = () => {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-bg.png"
        alt=""
        className="w-auto  object-cover h-screen mx-auto"
      />

      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-l from-black/100 via-transparent to-black/100 z-10" />
      <div className="video-intro absolute top-0 left-0 right-0 bottom-0 ">
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
          className={` w-auto h-full object-cover mx-auto`}
        />
      </div>
    </>
  );
};
