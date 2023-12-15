import styles from './sideNav.module.scss';

export default function SideNav() {
    return (
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
    )
  }