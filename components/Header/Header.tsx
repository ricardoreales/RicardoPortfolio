import { Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="fixed  z-50 top-10 left-0 w-full flex justify-center items-center animation-entrance-top ">
      <nav className=" relative container  min-h-10 flex items-center justify-between text-white py-3 px-3 mx-2 sm:mx-4 lg:mx-auto">
        <div className="nav-glass-background w-full h-full absolute top-0 left-0 -z-10" />
        <span className="ml-10">Ricardo</span>
        <div className="font-bold text-sm gap-x-4 flex items-center [&>a]:hover:text-primary-500 [&>a]:hover:scale-105 [&>a]:hover:underline transition-all duration-300">
          <Link className="  my-2" href="/#home">
            Home
          </Link>

          <Link className="my-2" href="/#portfolio">
            Portfolio
          </Link>

          <Link className="my-2" href="/#pricing">
            Pricing
          </Link>
          <button className="bg-primary-500 text-white p-0 w-9 h-9 rounded-full flex items-center justify-center hover:bg-primary-600 transition-all duration-300">
           <Phone  className="w-4 h-4 fill-white" />
          </button>
        </div>
      </nav>
    </header>
  );
};
