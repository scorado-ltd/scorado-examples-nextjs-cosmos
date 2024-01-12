'use client'

import { ChevronIcon } from "~f/framework/icon";
import { useSideMenuContext } from "./context";
import styles from './toggle.module.scss';

export function SideMenuToggle() {
    const { toggleMenu } = useSideMenuContext();

    return (
        <button onClick={toggleMenu} className={styles.Toggle}>
            <ChevronIcon className={styles.Toggle__icon} />
        </button>
    )
}