'use client';

import { PropsWithChildren } from "react";
import { Position, Scrollable, useScroll } from '~f/framework/layout/scrollable';
import styles from './index.module.scss';

const scrollableId = "sideMenucrollable";

export const useSideMenuScroll = () => useScroll(scrollableId);

interface SideMenuScrollableProps extends PropsWithChildren {

}

export function SideMenuScrollable({ children }: SideMenuScrollableProps) {
    const { position } = useSideMenuScroll();

    return (
        <Scrollable id={scrollableId} scrollbar="hidden" className={styles.SideMenu__scrollable}>
            <div className={styles.SideMenu__mainGradientTop} style={{ opacity: position === Position.Top ? 0 : 1 }}></div>
            {children}
            <div className={styles.SideMenu__mainGradientBottom} style={{ opacity: position === Position.Bottom ? 0 : 1 }}></div>
        </Scrollable>
    )
}