'use client';

import { useEffect, useRef } from "react";
import { useSideMenuContext } from "../context";
import styles from './index.module.scss';
import { useMenuItemPopOutContext } from "./itemPopOut";

export interface SideMenuItemProps {
    icon: JSX.Element;
    label: string;
}

export default function SideMenuItem({ icon, label }: SideMenuItemProps) {
    const { isOpen } = useSideMenuContext();
    const { show, hide } = useMenuItemPopOutContext();
    const menuItem = useRef<HTMLDivElement>(null);
    const position = useRef({ x: 0, y: 0 });

    if (menuItem.current !== null) {
        const element = menuItem.current;
        const bounding = element.getBoundingClientRect();
        position.current = {
            x: bounding.x,
            y: bounding.y
        };
    }

    useEffect(() => {
        function handleHoverOn() {
            show(position.current.x + 42, position.current.y, label);
        }

        function handleHoverOff() {
            hide();
        }

        const element = menuItem.current;
        if (element !== null) {
            const bounding = element.getBoundingClientRect();
            position.current = {
                x: bounding.x,
                y: bounding.y
            };
        }

        if (element && !isOpen) {
            element.addEventListener('mouseenter', handleHoverOn);
            element.addEventListener('mouseleave', handleHoverOff);
        }

        return () => {
            if (element) {
                element.removeEventListener('mouseenter', handleHoverOn);
                element.removeEventListener('mouseleave', handleHoverOff);
            }
        }
    }, [menuItem, position, label, isOpen, show, hide]);

    return (
        <div className={styles.Item} ref={menuItem}>
            <div className={styles.Item__icon}>{icon}</div>
            <div className={styles.Item__label}>{label}</div>
        </div>
    )
}