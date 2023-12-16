import styles from './sideMenu.module.scss';
import { SideMenuToggle } from './sideMenuClient';
import { SideMenuProvider } from './sideMenuContext';

export default function SideMenu() {
    return (
        <div className={styles.SideMenu}>
            <div className={styles.SideMenu__layout}>
                <aside className={styles.SideMenu__container}>
                    <div className={styles.SideMenu__top}>Side Nav - Top</div>
                    <div className={styles.SideMenu__main}>
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