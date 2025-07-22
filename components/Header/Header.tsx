import Link from "next/link";
import React from "react";
import { GlassContainer } from "../GlassContainer";

export const Header = () => {
  return (
    <header className="fixed top-10 left-0 w-full z-50 flex justify-center items-center">

      <nav className="">
      <GlassContainer className="py-20">

        <Link className="ml-20  my-2" href="/#home">Home</Link>

        <Link className="my-2" href="/#portfolio">Portfolio</Link>

        <Link className="my-2 mr-20" href="/#pricing">Pricing</Link>
        </GlassContainer>
      </nav>
    </header>
  );
};
