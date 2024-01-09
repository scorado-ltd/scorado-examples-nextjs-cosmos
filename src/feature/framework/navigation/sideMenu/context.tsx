'use client'

import { PropsWithChildren, createContext, useContext, useState } from "react";

interface SideMenuContextProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const defaultState: SideMenuContextProps = {
    isOpen: false,
    toggleMenu: () => { }
}

export const SideMenuContext = createContext<SideMenuContextProps>(defaultState);

export const SideMenuProvider: any = ({ children }: PropsWithChildren) => {
    const [isSideMenuOpen, setSideMenuOpen] = useState(true);

    function openMenu() {
        document.documentElement.style.setProperty('--layout-sideMenu-width', 'var(--layout-sideMenu-openWidth)');
        //document.getElementById(mainMenuId).classList.add(styles.SideMenu__primary___isOpen);
    }
    function closeMenu() {
        document.documentElement.style.setProperty('--layout-sideMenu-width', 'var(--layout-sideMenu-closedWidth)');
        //document.getElementById(mainMenuId).classList.remove(styles.SideMenu__primary___isOpen);
    }

    function toggleMenu() {
        const isOpen = !isSideMenuOpen;
        window.localStorage.setItem('sideMenuOpen', JSON.stringify(isOpen))
        setSideMenuOpen(isOpen);

        isOpen ? openMenu() : closeMenu();
    }

    return (
        <SideMenuContext.Provider value={{
            isOpen: isSideMenuOpen,
            toggleMenu: toggleMenu
        }}>
            {children}
        </SideMenuContext.Provider>
    )
};

export function useSideMenuContext() { return useContext(SideMenuContext); }