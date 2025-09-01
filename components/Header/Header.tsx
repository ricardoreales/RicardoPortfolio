import { Phone } from "lucide-react"
import Link from "next/link"
import React from "react"
import { LogoR } from "../svgs/LogoR"
import { configService } from "@/services/config.service"
import { SectionLayout } from "../layouts/SectionLayout"

export const Header = () => {
  const config = configService.getConfig()
  return (
    <header className="fade-in animation-entrance-top fixed top-4 left-0 z-50 flex w-full items-center justify-center">
      <SectionLayout className="!py-0">
        <nav className="relative flex min-h-10 items-center justify-between px-3 py-3 text-white">
          <div className="nav-glass-background absolute top-0 left-0 -z-10 h-full w-full" />
          <Link href="/" className="flex items-center gap-x-2">
            <LogoR className="size-10" />
            <span className="hidden md:block">Ricardo</span>
          </Link>
          <div className="[&>a]:hover:text-primary-500 flex items-center gap-x-4 text-sm font-bold transition-all duration-300 [&>a]:hover:scale-105 [&>a]:hover:underline">
            <Link className="my-2" href="/#home">
              Home
            </Link>

            <Link className="my-2" href="/#portfolio">
              Portfolio
            </Link>

            <Link className="my-2" href="/#pricing">
              Pricing
            </Link>
            <a
              href={config.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-500 hover:bg-primary-600 flex h-9 w-9 items-center justify-center rounded-full p-0 text-white transition-all duration-300"
            >
              <Phone className="h-4 w-4 fill-white" />
            </a>
          </div>
        </nav>
      </SectionLayout>
    </header>
  )
}
