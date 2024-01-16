'use client';

import { PropsWithChildren } from "react";
import { useMainScrollable } from "./mainScrollable";
import { ScrollPosition } from "./scrollable";
import styles from './stickyHeader.module.scss';

export function StickyHeader({ children }: PropsWithChildren) {
    const { hasScrolledUp, position } = useMainScrollable();
    const scrolledClass = hasScrolledUp || position === ScrollPosition.Top ? '' : styles.Header___scrolled;

    return (
        <div className={`${styles.Header} ${scrolledClass}`}>
            {children}
        </div>
    )
}