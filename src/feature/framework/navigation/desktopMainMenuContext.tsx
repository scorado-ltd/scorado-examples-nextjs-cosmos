'use client'

import { PropsWithChildren, createContext, useContext, useState } from "react";

interface MainMenuContextProps {
    IsOpen: boolean;
    ToggleMenu: () => void;
}

const defaultState: MainMenuContextProps = {
    IsOpen: false,
    ToggleMenu: () => { }
}

export const MainMenuContext = createContext<MainMenuContextProps>(defaultState);

export const MainMenuProvider: any = ({ children }: PropsWithChildren) => {
    const [isMainMenuOpen, setMainMenuOpen] = useState(true);

    function openMenu() {
        document.documentElement.style.setProperty('--layout-mainMenu-width', 'var(--layout-mainMenu-openWidth)');
        //document.getElementById(mainMenuId).classList.add(styles.MainMenu__primary___isOpen);
    }
    function closeMenu() {
        document.documentElement.style.setProperty('--layout-mainMenu-width', 'var(--layout-mainMenu-closedWidth)');
        //document.getElementById(mainMenuId).classList.remove(styles.MainMenu__primary___isOpen);
    }

    function toggleMenu() {
        console.log(`Toggle Main Menu: ${isMainMenuOpen}`)
        const isOpen = !isMainMenuOpen;
        window.localStorage.setItem('mainMenuOpen', JSON.stringify(isOpen))
        setMainMenuOpen(isOpen);

        isOpen ? openMenu() : closeMenu();
    }

    return (
        <MainMenuContext.Provider value={{
            IsOpen: isMainMenuOpen,
            ToggleMenu: toggleMenu
        }}>
            {children}
        </MainMenuContext.Provider>
    )
};

export function useMainMenuContext() { return useContext(MainMenuContext); }