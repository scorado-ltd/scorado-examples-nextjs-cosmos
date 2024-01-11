import Image from 'next/image';
import { PropsWithChildren } from 'react';
import scoradoLogoFull from '~p/images/logos/full-light.svg';
import scoradoLogoIcon from '~p/images/logos/icon.svg';
import { SideMenuProvider } from './context';
import styles from './index.module.scss';
import SideMenuPreRenderer from './preRenderer';
import { SideMenuToggle } from './toggle';

interface SideMenuProps extends PropsWithChildren {

}

export default function SideMenu({ children }: SideMenuProps) {

    const isOpen = true;

    return (
        <SideMenuProvider>
            <div className={styles.SideMenu}>
                <SideMenuPreRenderer />
                <div className={styles.SideMenu__layout}>
                    <div className={styles.SideMenu__container}>
                        <div className={styles.SideMenu__top}>
                            <Image src={scoradoLogoFull} alt="Scorado Logo" height={29} className={styles.SideMenu__logoFull} />
                            <Image src={scoradoLogoIcon} alt="Scorado Logo" height={29} className={styles.SideMenu__logoIcon} />
                        </div>
                        <div className={styles.SideMenu__main}>
                            <div className={styles.SideMenu__mainGradientTop}></div>
                            {children}
                            <div className={styles.SideMenu__mainGradientBottom}></div>
                        </div>
                        <div className={styles.SideMenu__bottom}>
                            <div className={styles.SideMenu__bottomContent}>
                                <SideMenuToggle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SideMenuProvider>
    )
}