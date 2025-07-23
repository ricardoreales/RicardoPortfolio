import Link from "next/link";
import React from "react";
import { GlassContainer } from "../GlassContainer";

export const Header = () => {
  return (
    <header className="fixed z-50 top-10 left-0 w-full flex justify-center items-center">
  
      <nav className="">
        <GlassContainer className="py-5 brightness-200">
          <Link className="ml-20  my-2" href="/#home">
            Home
          </Link>

          <Link className="my-2" href="/#portfolio">
            Portfolio
          </Link>

          <Link className="my-2 mr-20" href="/#pricing">
            Pricing
          </Link>
        </GlassContainer>
      </nav>
    </header>
  );
};
