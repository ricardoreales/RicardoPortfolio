import type { Metadata } from "next"

import "./globals.css"
import { configService } from "@/services/config.service"

export async function generateMetadata(): Promise<Metadata> {
  // Fetch data needed for metadata (e.g., from an API or local source)
  const siteConfig = configService.getConfig()

  return {
    title: siteConfig.page.pageTitle,
    description: siteConfig.page.pageDescription,
    keywords: siteConfig.page.pageKeywords,
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <html lang="en">{children}</html>
}
