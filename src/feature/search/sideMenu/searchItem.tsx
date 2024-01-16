import { MagnifyingGlassIcon } from "~f/framework/icon";
import styles from "./searchItem.module.scss";

export default function SideMenuSearchItem() {
    return (
        <div className={styles.SearchItem}>
            <form action="/search" method="GET" className={styles.SearchItem__form}>
                <div className={styles.SearchItem__box}>
                    <input className={styles.SearchItem__input} type="text" placeholder="Search" name="q" />
                    <button className={styles.SearchItem__button} type="submit">
                        <MagnifyingGlassIcon />
                    </button>
                </div>
            </form>
        </div>
    )
}