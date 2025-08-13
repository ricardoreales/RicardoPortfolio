import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link, { LinkProps } from "next/link";
import React from "react";

interface PrimarybuttonProps extends LinkProps {
  children: React.ReactNode;
  variant: "header" | "default";
  className?: string;
}

export const PrimaryLink = ({
  children,
  variant = "default",
  href,
  className,
  ...props
}: PrimarybuttonProps) => {
  return (
    <Link
      href={href}
      {...props}
      className={cn(
        "bg-primary-500 text-white  font-extrabold tracking-wide gap-4  flex items-center justify-center   rounded-full",
        {
          "min-h-12   gap-4 text-base  2xl:text-xl  p-3 pl-8 pr-4 ":
            variant === "header",
          "min-h-10   gap-4 text-base  2xl:text-xl  p-3 pl-8 pr-4 w-fit ":
            variant === "default",
        },
        className
      )}
    >
      {children}
      <div
        className={cn(
          " bg-white rounded-full flex items-center justify-center",
          {
            "w-8 h-8 2xl:w-10 2xl:h-10 p-1": variant === "header",
          }
        )}
      >
        <ArrowRightIcon className=" text-primary-500" />
      </div>
    </Link>
  );
};
