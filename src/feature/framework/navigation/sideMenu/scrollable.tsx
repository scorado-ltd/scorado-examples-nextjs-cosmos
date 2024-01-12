'use client';

import { PropsWithChildren } from "react";
import { ScrollPosition, Scrollable, useScrollable } from '~f/framework/layout/scrollable';
import styles from './index.module.scss';

const scrollableId = "sideMenuScrollable";

export const useSideMenuScrollable = () => useScrollable(scrollableId);

interface SideMenuScrollableProps extends PropsWithChildren {

}

export function SideMenuScrollable({ children }: SideMenuScrollableProps) {
    const { position, isScrollable } = useSideMenuScrollable();

    return (
        <Scrollable id={scrollableId} scrollbar="hidden" className={styles.SideMenu__scrollable}>
            <div className={styles.SideMenu__mainGradientTop} style={{ opacity: isScrollable && position !== ScrollPosition.Top ? 1 : 0 }}></div>
            {children}
            <div className={styles.SideMenu__mainGradientBottom} style={{ opacity: isScrollable && position !== ScrollPosition.Bottom ? 1 : 0 }}></div>
        </Scrollable>
    )
}