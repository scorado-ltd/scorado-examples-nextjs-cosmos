'use client';

import { HTMLAttributes, useEffect, useState } from "react";
import { constructClasses } from "~f/web/css";
import styles from './scrollable.module.scss';

export enum Position {
    Top,
    Scrolled,
    Bottom
}

interface ScrollPosition {
    x: number;
    lastX: number;
    y: number;
    lastY: number;
    position: Position;
    hasScrolledUp: boolean;
}

export const useScroll = (elementId: string): ScrollPosition => {
    const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
        x: 0,
        lastX: 0,
        y: 0,
        lastY: 0,
        position: Position.Top,
        hasScrolledUp: false,
    });

    useEffect(() => {
        const getElement = () => {
            return document.getElementById(elementId)!;
        }

        const handleScroll = () => {
            const element = getElement();
            const isTop = element.scrollTop <= 0;
            const isBottom = element.scrollHeight - element.scrollTop === element.clientHeight;

            setScrollPosition(state => ({
                x: element.scrollLeft,
                lastX: state.x,
                y: element.scrollTop,
                lastY: state.y,
                position: isTop ? Position.Top : isBottom ? Position.Bottom : Position.Scrolled,
                hasScrolledUp: element.scrollTop < state.y,
            }));
        };

        getElement().addEventListener("scroll", handleScroll);

        return () => {
            getElement().removeEventListener("scroll", handleScroll);
        };
    }, [elementId]);

    return scrollPosition;
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