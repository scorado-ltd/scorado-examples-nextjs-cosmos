import Image from 'next/image';
import Link from 'next/link';
import scoradoLogoIcon from '~p/images/logos/icon.svg';
import { SideMenuProvider } from './context';
import styles from './index.module.scss';
import SideMenuPreRenderer from './preRenderer';
import { SideMenuToggle } from './toggle';

export default function SideMenu() {
    return (
        <div className={styles.SideMenu}>
            <SideMenuPreRenderer />
            <div className={styles.SideMenu__layout}>
                <aside className={styles.SideMenu__container}>
                    <div className={styles.SideMenu__top}>
                        <Image src={scoradoLogoIcon} alt="Scorado Logo" width={29} /><br />
                    </div>
                    <div className={styles.SideMenu__main}>
                        <ul>
                            <li>List Item Top</li>
                            <li><Link href="/login" scroll={false}>Login</Link></li>
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
                    <div className={styles.SideMenu__bottom}>
                        <SideMenuProvider>
                            <SideMenuToggle />
                        </SideMenuProvider>
                    </div>
                </aside>
            </div>
        </div>
    )
}