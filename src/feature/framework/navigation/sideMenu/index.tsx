import Image from 'next/image';
import { PropsWithChildren } from 'react';
import { CreateIcon, DiscoverIcon } from '~f/framework/icon';
import scoradoLogoFull from '~p/images/logos/full-light.svg';
import scoradoLogoIcon from '~p/images/logos/icon.svg';
import { SideMenuProvider } from './context';
import styles from './index.module.scss';
import SideMenuMainContainer from './mainContainer';
import SideMenuOverlay from './overlay';
import SideMenuPreRenderer from './preRenderer';
import { SideMenuScrollable } from './scrollable';
import { SideMenuToggle } from './toggle';

interface SideMenuProps extends PropsWithChildren {

}

export default function SideMenu({ children }: SideMenuProps) {
    const sideMenuId = 'sideMenu';

    return (
        <SideMenuProvider id={sideMenuId}>
            <SideMenuMainContainer
                id={sideMenuId}
                className={styles.SideMenu}
                closedClassName={styles.SideMenu___closed}
                openClassName={styles.SideMenu___open}
            >
                <SideMenuPreRenderer />
                <div className={styles.SideMenu__layout}>
                    <div className={styles.SideMenu__container}>
                        <div className={styles.SideMenu__top}>
                            <Image src={scoradoLogoFull} alt="Scorado Logo" height={29} className={styles.SideMenu__logoFull} />
                            <Image src={scoradoLogoIcon} alt="Scorado Logo" height={29} className={styles.SideMenu__logoIcon} />
                        </div>
                        <SideMenuScrollable>
                            <div className={styles.SideMenu__main}>
                                <div className={styles.SideMenu__items}>
                                    <div className={styles.SideMenu__item}>
                                        <div className={styles.SideMenu__itemIcon}><DiscoverIcon /></div>
                                        <div className={styles.SideMenu__itemLabel}>Discover</div>
                                    </div>
                                    <hr className={styles.SideMenu__itemsDivider} />
                                    <div className={styles.SideMenu__item}>
                                        <div className={styles.SideMenu__itemIcon}><CreateIcon /></div>
                                        <div className={styles.SideMenu__itemLabel}>Create</div>
                                    </div>
                                    <div className={styles.SideMenu__item}>
                                        <div className={styles.SideMenu__itemIcon}><DiscoverIcon /></div>
                                        <div className={styles.SideMenu__itemLabel}>Discover</div>
                                    </div>
                                    <div className={styles.SideMenu__item}>
                                        <div className={styles.SideMenu__itemIcon}><CreateIcon /></div>
                                        <div className={styles.SideMenu__itemLabel}>Create</div>
                                    </div>
                                </div>
                            </div>
                            {children}
                        </SideMenuScrollable>
                        <div className={styles.SideMenu__bottom}>
                            <div className={styles.SideMenu__bottomContent}>
                                <SideMenuToggle />
                            </div>
                        </div>
                    </div>
                </div>
                <SideMenuOverlay className={styles.SideMenu__overlay} />
            </SideMenuMainContainer>
        </SideMenuProvider>
    )
}