import "@fontsource/open-sans"
import "@fontsource/outfit"

import type { Metadata } from 'next'
import { PropsWithChildren } from "react"
import { AccountIcon, CreateIcon, DiscoverIcon } from "~f/framework/icon"
import { BottomMenu } from "~f/framework/navigation/bottomMenu"
import SideMenu from "~f/framework/navigation/sideMenu"
import SideMenuItemsContainer from "~f/framework/navigation/sideMenu/item/container"
import SideMenuDividerItem from "~f/framework/navigation/sideMenu/item/divider"
import SideMenuLinkItem from "~f/framework/navigation/sideMenu/item/linkItem"
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
              <SideMenuItemsContainer>
                <SideMenuLinkItem href={'/login'} icon={<AccountIcon />} label='Login' />
                <SideMenuDividerItem />
                <SideMenuLinkItem href={'/'} icon={<DiscoverIcon />} label='Discover' />
                <SideMenuLinkItem href={'/'} icon={<CreateIcon />} label='Create' />
              </SideMenuItemsContainer>
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
