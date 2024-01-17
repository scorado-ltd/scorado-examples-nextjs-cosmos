'use client';

import { PropsWithChildren, createContext, useContext, useEffect, useRef, useState } from "react";
import { useSideMenuContext } from "../context";
import styles from './index.module.scss';

interface MenuItemPopOut {
    content: React.ReactNode;
    isVisible: boolean;
    x: number;
    y: number;
    show: (x: number, y: number, content: React.ReactNode) => void;
    hide: () => void;
}

const defaultState = {
    content: <></>,
    isVisible: false,
    x: 0,
    y: 0,
    show: () => { },
    hide: () => { },
}

const MenuItemPopOutContext = createContext<MenuItemPopOut>(defaultState);

interface MenuItemPopOutProviderProps extends PropsWithChildren {

}

export function MenuItemPopOutProvider({ children }: MenuItemPopOutProviderProps) {
    const [popOut, setPopOut] = useState<MenuItemPopOut>(defaultState);

    function show(x: number, y: number, content: React.ReactNode) {
        setPopOut(state => ({
            ...state,
            content,
            x,
            y,
            isVisible: true,
        }));
    }

    function hide() {
        setPopOut(state => ({
            ...state,
            content: <></>,
            x: 0,
            y: 0,
            isVisible: false,
        }));
    }

    return (
        <MenuItemPopOutContext.Provider value={{ ...popOut, show, hide }}>
            {children}
        </MenuItemPopOutContext.Provider>
    )
}

export function useMenuItemPopOutContext() { return useContext(MenuItemPopOutContext); }

export default function SideMenuItemPopOut() {
    const { isVisible, content, x, y } = useMenuItemPopOutContext();

    return (
        <div className={`${styles.PopOut} ${isVisible ? styles.PopOut___visible : ''}`} style={{ top: y, left: x }}>
            {content}
        </div>
    )
}

interface SideMenuItemPopOutContainer extends PropsWithChildren {
    popoutContent: React.ReactNode;
    offsetLeft?: number;
}

export function SideMenuItemPopOutContainer({ children, popoutContent, offsetLeft }: SideMenuItemPopOutContainer) {
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
            show(position.current.x + (offsetLeft ?? 0), position.current.y, popoutContent);
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
    }, [menuItem, position, popoutContent, isOpen, show, hide]);

    return (
        <div ref={menuItem}>
            {children}
        </div>
    )
}