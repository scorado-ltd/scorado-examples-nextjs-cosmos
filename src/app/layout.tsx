import "@fontsource/open-sans"
import "@fontsource/outfit"

import type { Metadata } from 'next'
import Link from "next/link"
import { PropsWithChildren } from "react"
import { BottomMenu } from "~f/framework/navigation/bottomMenu"
import SideMenu from "~f/framework/navigation/sideMenu"
import './global.scss'
import styles from './layout.module.scss'

export const metadata: Metadata = {
  title: {
    template: '%s | Scorado Examples',
    default: 'Next.js + React Cosmos | Scorado Examples'
  },
  description: 'An example Next.js application combined with React Cosmos',
}

interface LayoutProps extends PropsWithChildren {
  rootModal: React.ReactNode;
}

export default function RootLayout({ children, rootModal }: LayoutProps) {

  return (
    <html lang="en">
      <body>
        <div className={styles.RootContainer}>
          <div className={styles.AppContainer}>
            <SideMenu>
              <h4>Side Menu Children</h4>
              <ul>
                <li><Link href="/login" scroll={false}>Login</Link></li>
              </ul>
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
            </SideMenu>
            <div className={styles.Main}>
              {children}
              {/* <RouterLogger /> */}
              {rootModal}
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
