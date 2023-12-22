import "@fontsource/open-sans"
import "@fontsource/outfit"

import type { Metadata } from 'next'
import { PropsWithChildren } from "react"
import '~f/framework/global.scss'
import { BottomMenu } from "~f/framework/navigation/bottomMenu"
import SideMenu from "~f/framework/navigation/sideMenu"
import styles from './layout.module.scss'

export const metadata: Metadata = {
  title: {
    template: '%s | Scorado Examples',
    default: 'Next.js + React Cosmos | Scorado Examples'
  },
  description: 'An example Next.js application combined with React Cosmos',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <div className={styles.RootContainer}>
          <div className={styles.AppContainer}>
            <SideMenu />
            <div className={styles.Main}>
              {children}
              <footer className={styles.Main__footer}>
                <BottomMenu />
              </footer>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
