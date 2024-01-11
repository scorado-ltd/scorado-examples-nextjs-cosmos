'use client'

import { ChevronIcon } from "~f/framework/icon";
import { useSideMenuContext } from "./context";
import styles from './toggle.module.scss';

export function SideMenuToggle() {
    const { isOpen, toggleMenu } = useSideMenuContext();

    return (
        <button onClick={toggleMenu} className={styles.Toggle}>
            <ChevronIcon style={{ rotate: isOpen ? '180deg' : '0deg' }} />
        </button>
    )
}