import "@fontsource/open-sans"
import "@fontsource/outfit"

import type { Metadata } from 'next'
import { PropsWithChildren } from "react"
import { ClientPreRenderer } from "~f/framework/clientPreRenderer"
import '~f/framework/global.scss'
import { Heading2 } from "~f/framework/heading"
import { Header } from "~f/framework/layout/header"
import { MainScrollable } from "~f/framework/layout/mainScrollable"
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
                <MainScrollable>
                  <main className={styles.Main__contentContainer}>
                    <div className={styles.Main__content}>
                      {children}
                    </div>
                  </main>
                </MainScrollable>
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
