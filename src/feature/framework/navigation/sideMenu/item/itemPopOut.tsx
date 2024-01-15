'use client';

import { PropsWithChildren, createContext, useContext, useState } from "react";
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
            <div className={styles.PopOut__content}>{content}</div>
        </div>
    )
}