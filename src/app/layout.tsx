import "@fontsource/open-sans"
import "@fontsource/outfit"

import type { Metadata } from 'next'
import { PropsWithChildren } from "react"
import '~f/framework/global.scss'
import styles from './layout.module.scss'

export const metadata: Metadata = {
  title: 'Next.js + React Cosmos | Scorado Examples',
  description: 'An example Next.js application combined with React Cosmos',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <div className={styles.Root}>
          <div className={styles.ContainerL1}>
            <div className={styles.ContainerL2}>
              <div className={styles.SideNav}>
                <div className={styles.SideNav__layout}>
                  <aside className={styles.SideNav__container}>
                    <div className={styles.SideNav__top}>Side Nav - Top</div>
                    <div className={styles.SideNav__main}>
                      <ul>
                        <li>List Item Top</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item Bottom</li>
                      </ul>
                    </div>
                    <div className={styles.SideNav__bottom}>Side Nav - Bottom</div>
                  </aside>
                </div>
              </div>
              <div className={styles.MainContainer}>
                <div className={styles.Header}>
                  <h1>Header</h1>
                </div>
                <div className={styles.Content}>
                  <div className={styles.MainView}>
                    <div className={styles.MainViewContainer}>
                      <div className={styles.InnerContent}>
                        {children}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
