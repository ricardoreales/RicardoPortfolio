import { NextFontWithVariable } from "next/dist/compiled/@next/font"
import { Kalnia, Poppins, Figtree, Doppio_One } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-default",
})

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-skills",
})

const kalnia = Kalnia({
  variable: "--font-title",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const sectionTitle = Doppio_One({
  variable: "--font-section-title",
  weight: ["400"],
  subsets: ["latin"],
})
const fonts = {
  title: kalnia,
  default: poppins,
  skills: figtree,
  sectionTitle,
} satisfies Record<string, NextFontWithVariable>

export default fonts
