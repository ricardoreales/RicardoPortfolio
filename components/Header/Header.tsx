import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="fixed  z-50 top-10 left-0 w-full flex justify-center items-center animation-entrance-top ">
  
      <nav className="nav-glass-container  h-10 flex items-center justify-center !shadow-lg !shadow-white/5 text-white gap-2">
        
          <Link className="ml-20  my-2" href="/#home">
            Home
          </Link>

          <Link className="my-2" href="/#portfolio">
            Portfolio
          </Link>

          <Link className="my-2 mr-20" href="/#pricing">
            Pricing
          </Link>

      </nav>
    </header>
  );
};
