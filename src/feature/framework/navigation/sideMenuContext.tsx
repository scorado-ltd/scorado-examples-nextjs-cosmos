'use client'

import { PropsWithChildren, createContext, useContext, useState } from "react";

interface SideMenuContextProps {
    IsOpen: boolean;
    ToggleMenu: () => void;
}

const defaultState: SideMenuContextProps = {
    IsOpen: false,
    ToggleMenu: () => { }
}

export const SideMenuContext = createContext<SideMenuContextProps>(defaultState);

export const SideMenuProvider: any = ({ children }: PropsWithChildren) => {
    const [isSideMenuOpen, setSideMenuOpen] = useState(true);

    function openMenu() {
        document.documentElement.style.setProperty('--layout-mainMenu-width', 'var(--layout-mainMenu-openWidth)');
        //document.getElementById(mainMenuId).classList.add(styles.SideMenu__primary___isOpen);
    }
    function closeMenu() {
        document.documentElement.style.setProperty('--layout-mainMenu-width', 'var(--layout-mainMenu-closedWidth)');
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
            IsOpen: isSideMenuOpen,
            ToggleMenu: toggleMenu
        }}>
            {children}
        </SideMenuContext.Provider>
    )
};

export function useSideMenuContext() { return useContext(SideMenuContext); }