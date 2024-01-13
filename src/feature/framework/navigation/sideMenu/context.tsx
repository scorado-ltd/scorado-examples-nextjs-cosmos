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
    const { width: windowWidth, lastWidth: windowLastWidth } = useWindowSize();
    const localStorageKey = 'sco-sideMenu-open';

    const getElement = useCallback(() => {
        if (typeof document === 'undefined') return null;

        return document.getElementById(id);
    }, []);

    function transitionMenu(isOpen: boolean, setStateOnly?: boolean) {
        setSideMenuOpen(isOpen);
        window.localStorage.setItem(localStorageKey, JSON.stringify(isOpen))

        if (setStateOnly !== undefined || setStateOnly) return;

        const element = getElement();
        if (element !== null) {
            const transition = `sco-sidemenu-${isOpen ? 'opening' : 'closing'}`;
            element.setAttribute(transition, '');
            element.addEventListener('transitionend', () => {
                element.removeAttribute(transition);
            }, { once: true });
        }
    }

    function toggleMenu() {
        transitionMenu(!isSideMenuOpen);
    }

    useEffect(() => {
        const element = getElement();
        if (element !== null && windowWidth !== undefined) {
            const windowWidthSame = windowLastWidth === windowWidth;
            transitionMenu(windowWidth > 1365, windowWidthSame);
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