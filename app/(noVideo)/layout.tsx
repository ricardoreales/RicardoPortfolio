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
      <head>
        <meta name="apple-mobile-web-app-title" content="Ricardo Realés" />
      </head>
      <body
        className={`${fonstsIncludes} loaded-intro bg-background antialiased ${fonts.default.className}`}
      >
        {children}
      </body>
    </>
  )
}
