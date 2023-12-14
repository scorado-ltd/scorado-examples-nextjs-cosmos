import "@fontsource/open-sans"
import "@fontsource/outfit"

import type { Metadata } from 'next'
import { PropsWithChildren } from "react"
import '~f/framework/global.scss'

export const metadata: Metadata = {
  title: 'Next.js + React Cosmos | Scorado Examples',
  description: 'An example Next.js application combined with React Cosmos',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
