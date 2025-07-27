import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Kalnia, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700","800","900"],
  variable: "--font-default",
});


const kalnia = Kalnia({
  variable: "--font-title",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const fonts = {
  title: kalnia,
  default: poppins,
  
} satisfies Record<string,NextFontWithVariable>

export default fonts;