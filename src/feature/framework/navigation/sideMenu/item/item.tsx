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
        function handleEnter() {
            show(position.current.x + 42, position.current.y, label);
        }

        function handleLeave() {
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
            element.addEventListener('pointerenter', handleEnter);
            element.addEventListener('pointerleave', handleLeave);
        }

        return () => {
            if (element) {
                element.removeEventListener('pointerenter', handleEnter);
                element.removeEventListener('pointerleave', handleLeave);
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