import "@fontsource/open-sans"
import "@fontsource/outfit"

import type { Metadata } from 'next'
import { PropsWithChildren } from "react"
import '~f/framework/global.scss'
import SideNav from "~f/framework/sideNav"
import styles from './layout.module.scss'

export const metadata: Metadata = {
  title: 'Next.js + React Cosmos | Scorado Examples',
  description: 'An example Next.js application combined with React Cosmos',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <div className={styles.RootContainer}>
          <div className={styles.AppContainer}>
            <SideNav />
            <div className={styles.Main}>
              <div className={styles.Main__header}>
                <h1>Header</h1>
              </div>
              <div className={styles.Main__container}>
                <main className={styles.Main__scrollable}>
                  <div className={styles.Main__contentContainer}>
                    <div className={styles.Main__content}>
                      {children}
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
