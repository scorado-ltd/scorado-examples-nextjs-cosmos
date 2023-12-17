'use client';

import { PropsWithChildren, useEffect, useState } from "react";
import styles from './scrollable.module.scss';

interface ScrollPosition {
    x: number;
    y: number;
}

export const useScroll = (elementId: string): ScrollPosition => {
    const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
        x: 0,
        y: 0,
    });

    const getElement = () => {
        return document.getElementById(elementId)!;
    }

    const handleScroll = () => {
        const element = getElement();

        setScrollPosition({
            x: element.scrollLeft,
            y: element.scrollTop,
        });
    };

    useEffect(() => {
        getElement().addEventListener("scroll", handleScroll);

        return () => {
            getElement().removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrollPosition;
};

export function Scrollable({ children, id }: PropsWithChildren<{ id: string }>) {
    return (
        <div id={id} className={styles.Scrollable}>
            {children}
        </div>
    )
}