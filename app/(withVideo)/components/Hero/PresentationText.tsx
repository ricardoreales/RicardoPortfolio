import { PrimaryLink } from "../../../../components/PrimaryLink"

export const PresentationText = () => {
  return (
    <section className="flex w-min flex-col items-center max-lg:gap-4 lg:items-start">
      <h1 className="flex flex-col items-center lg:items-start">
        <span className="mb-2 text-3xl text-nowrap italic md:pl-1 xl:mb-8 xl:text-5xl">
          Hey. I&apos;m Ricardo,{" "}
        </span>
        <span className="font-title text-9xl font-semibold tracking-wide uppercase xl:text-[150px]">
          UX/UI
        </span>
        <span className="font-title mb-4 self-center text-center text-3xl font-semibold uppercase xl:text-4xl 2xl:mb-8">
          Product Designer
        </span>
      </h1>

      <p className="mb-8 text-center text-xl tracking-wider text-wrap md:pl-2 lg:text-left xl:mb-8 xl:text-2xl">
        AI-powered design, guided by human intuition.
      </p>

      <PrimaryLink
        variant="header"
        className="w-fit"
        href="/#portfolio"
        aria-label="View portfolio and start working together"
      >
        Let&apos;s work together
      </PrimaryLink>
    </section>
  )
}
