import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateWhatsappLink = (phone: string, message: string) => {
  return `https://api.whatsapp.com/send?phone=${phone}&text=${message}`
}
