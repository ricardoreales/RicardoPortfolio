import fonts from "@/config/fonts"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const fonstsIncludes = Object.values(fonts)
    .map(font => font.variable)
    .join(" ")
  return (
    <>
      <body
        className={`${fonstsIncludes} loaded-intro bg-background antialiased ${fonts.default.className}`}
      >
        {children}
      </body>
    </>
  )
}
