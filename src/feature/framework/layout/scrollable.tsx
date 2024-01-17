'use client';

import { HTMLAttributes, useEffect, useState } from "react";
import { constructClasses } from "~f/web/css";
import styles from './scrollable.module.scss';

export enum ScrollPosition {
    Top,
    Scrolled,
    Bottom
}

interface ScrollableInfo {
    elementId: string;
    x: number;
    lastX: number;
    y: number;
    lastY: number;
    isScrollable: boolean;
    position: ScrollPosition;
    hasScrolledUp: boolean;
}

export const useScrollable = (elementId: string): ScrollableInfo => {
    const [scrollable, setScrollable] = useState<ScrollableInfo>({
        elementId,
        x: 0,
        lastX: 0,
        y: 0,
        lastY: 0,
        isScrollable: false,
        position: ScrollPosition.Top,
        hasScrolledUp: false,
    });

    useEffect(() => {
        const getElement = () => {
            return document.getElementById(elementId)!;
        }

        const setState = () => {
            const element = getElement();
            const isTop = element.scrollTop <= 0;
            const isBottom = element.scrollHeight - element.scrollTop === element.clientHeight;

            setScrollable(state => ({
                ...state,
                x: element.scrollLeft,
                lastX: state.x,
                y: element.scrollTop,
                lastY: state.y,
                isScrollable: element.scrollHeight > element.clientHeight,
                position: isTop ? ScrollPosition.Top : isBottom ? ScrollPosition.Bottom : ScrollPosition.Scrolled,
                hasScrolledUp: element.scrollTop <= state.y,
            }));
        }

        const handleScroll = () => {
            setState();
        };

        const handleResize = () => {
            setState();
        }

        setState();
        const element = getElement();
        if (element !== null && window !== null) {
            element.addEventListener("scroll", handleScroll);
            window.addEventListener("resize", handleResize);
        }

        return () => {
            const element = getElement();
            if (element !== null && window !== null) {
                element.removeEventListener("scroll", handleScroll);
                window.removeEventListener("resize", handleResize);
            }
        };
    }, [elementId]);

    return scrollable;
};

interface ScrollableProps extends HTMLAttributes<Element> {
    id: string,
    scrollbar?: 'visible' | 'hidden';
}

export function Scrollable({ children, id, scrollbar, className, ...props }: ScrollableProps) {
    const classNames = constructClasses([className ?? '', styles.Scrollable, scrollbar === 'hidden' ? styles.Scrollable___scrollbarHidden : ''])

    return (
        <div id={id} {...props} className={classNames}>
            {children}
        </div>
    )
}