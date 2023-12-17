'use client';

import { PropsWithChildren, useEffect, useRef, useState } from "react";
import styles from './header.module.scss';
import { useMainScroll } from "./mainScrollable";

export function Header({ children }: PropsWithChildren) {
    let lastScrollY = useRef(0);
    const { y: scrollY } = useMainScroll();
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        setIsVisible(!(scrollY > lastScrollY.current));

        lastScrollY.current = scrollY <= 0 ? 0 : scrollY;
    }, [scrollY])

    const visibilityClass = isVisible ? '' : styles.Header___hidden;

    return (
        <div className={`${styles.Header} ${visibilityClass}`}>
            {children}
        </div>
    )
}