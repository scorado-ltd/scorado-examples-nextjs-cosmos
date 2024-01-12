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
        document.documentElement.style.setProperty('--sideMenu-width', 'var(--sideMenu-openWidth)');
        document.documentElement.style.setProperty('--sideMenu-open', '1');
    }
    function closeMenu() {
        document.documentElement.style.setProperty('--sideMenu-width', 'var(--sideMenu-closedWidth)');
        document.documentElement.style.setProperty('--sideMenu-open', '0');
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