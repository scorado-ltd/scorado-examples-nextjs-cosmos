'use client';

import { PropsWithChildren } from "react";
import styles from './header.module.scss';
import { useMainScroll } from "./mainScrollable";

export function Header({ children }: PropsWithChildren) {
    const { hasScrolledUp } = useMainScroll();
    const visibilityClass = hasScrolledUp ? '' : styles.Header___hidden;

    return (
        <div className={`${styles.Header} ${visibilityClass}`}>
            {children}
        </div>
    )
}