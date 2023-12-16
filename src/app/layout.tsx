import "@fontsource/open-sans"
import "@fontsource/outfit"

import type { Metadata } from 'next'
import { PropsWithChildren } from "react"
import { ClientPreRenderer } from "~f/framework/clientPreRenderer"
import '~f/framework/global.scss'
import { Header } from "~f/framework/header"
import { Heading2 } from "~f/framework/heading"
import { BottomMenu } from "~f/framework/navigation/bottomMenu"
import SideMenu from "~f/framework/navigation/sideMenu"
import styles from './layout.module.scss'

export const metadata: Metadata = {
  title: 'Next.js + React Cosmos | Scorado Examples',
  description: 'An example Next.js application combined with React Cosmos',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <ClientPreRenderer />
        <div className={styles.RootContainer}>
          <div className={styles.AppContainer}>
            <SideMenu />
            <div className={styles.Main}>
              <Header>
                <Heading2>Header</Heading2>
              </Header>
              <div className={styles.Main__container}>
                <main id="mainScrollable" className={styles.Main__scrollable}>
                  <div className={styles.Main__contentContainer}>
                    <div className={styles.Main__content}>
                      {children}
                    </div>
                  </div>
                </main>
              </div>
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
