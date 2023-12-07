import { Metadata } from "next/types"

export const metadata: Metadata = {
  icons: ["/favicon.svg"],
  title: "Scorado",
  description: "Scorado Style Guide",
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
       {children}
      </body>
    </html>
  )
}
