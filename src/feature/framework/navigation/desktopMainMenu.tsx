import styles from './desktopMainMenu.module.scss';

export default function DesktopMainMenu() {
    return (
        <div className={styles.MainMenu}>
            <div className={styles.MainMenu__layout}>
                <aside className={styles.MainMenu__container}>
                    <div className={styles.MainMenu__top}>Side Nav - Top</div>
                    <div className={styles.MainMenu__main}>
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
                    <div className={styles.MainMenu__bottom}>Side Nav - Bottom</div>
                </aside>
            </div>
        </div>
    )
}