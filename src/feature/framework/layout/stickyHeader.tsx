'use client';

import { PropsWithChildren } from "react";
import { constructClasses } from "~f/web/css";
import { useMainScrollable } from "./mainScrollable";
import { ScrollPosition } from "./scrollable";
import styles from './stickyHeader.module.scss';

export function StickyHeader({ children }: PropsWithChildren) {
    const { hasScrolledUp, position } = useMainScrollable();
    const cssClasses = constructClasses([
        styles.Header,
        position === ScrollPosition.Top ? '' : styles.Header___fixed,
        hasScrolledUp || position === ScrollPosition.Top ? '' : styles.Header___scrolled,
    ])

    return (
        <div className={cssClasses}>
            {children}
        </div>
    )
}