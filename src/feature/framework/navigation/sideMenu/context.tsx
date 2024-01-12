'use client'

import { PropsWithChildren, createContext, useCallback, useContext, useEffect, useState } from "react";
import { useWindowSize } from "~f/web/windowSize";

interface SideMenuContextProps {
    elementId: string;
    isOpen: boolean | null;
    toggleMenu: () => void;
}

const defaultState: SideMenuContextProps = {
    elementId: '',
    isOpen: false,
    toggleMenu: () => { }
}

export const SideMenuContext = createContext<SideMenuContextProps>(defaultState);

interface SideMenuProviderProps extends PropsWithChildren {
    id: string;
}

export const SideMenuProvider = ({ id, children }: SideMenuProviderProps) => {
    const [isSideMenuOpen, setSideMenuOpen] = useState<boolean | null>(null);
    const { width: windowWidth } = useWindowSize();

    const getElement = useCallback(() => {
        if (typeof document === 'undefined') return null;

        return document.getElementById(id);
    }, []);

    function toggleMenu() {
        const isOpen = !isSideMenuOpen;
        window.localStorage.setItem('sideMenuOpen', JSON.stringify(isOpen))
        setSideMenuOpen(isOpen);
    }

    useEffect(() => {
        const element = getElement();
        if (element !== null) {
            console.log(element.clientWidth);
            setSideMenuOpen(() => element.clientWidth > 78);
        }
    }, [windowWidth])

    return (
        <SideMenuContext.Provider value={{
            elementId: id,
            isOpen: isSideMenuOpen,
            toggleMenu: toggleMenu
        }}>
            {children}
        </SideMenuContext.Provider>
    )
};

export function useSideMenuContext() { return useContext(SideMenuContext); }