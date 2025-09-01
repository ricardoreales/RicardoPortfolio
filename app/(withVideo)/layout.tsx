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
        <link
          rel="preload"
          as="video"
          href="/videos/intro.mp4"
          type="video/mp4"
        />
      </head>
      <body className={`${fonstsIncludes} antialiased`}>{children}</body>
    </>
  )
}
