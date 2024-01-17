'use client'

import { usePathname } from "next/navigation";
import { PropsWithChildren, createContext, useCallback, useContext, useEffect, useState } from "react";
import { useWindowSize } from "~f/web/windowSize";

export enum SideMenuState {
    Open,
    Opening,
    Closing,
    Closed
}

interface SideMenuContextProps {
    elementId: string;
    isOpen: boolean | null;
    state: SideMenuState | null;
    toggleMenu: () => void;
}

const defaultState: SideMenuContextProps = {
    elementId: '',
    isOpen: false,
    state: null,
    toggleMenu: () => { }
}

export const SideMenuContext = createContext<SideMenuContextProps>(defaultState);

interface SideMenuProviderProps extends PropsWithChildren {
    id: string;
}

export const SideMenuProvider = ({ id, children }: SideMenuProviderProps) => {
    const pathname = usePathname();
    const [lastPathname, setLastPathname] = useState<string | null>(pathname);
    const [isSideMenuOpen, setSideMenuOpen] = useState<boolean | null>(null);
    const [sideMenuState, setSideMenuState] = useState<SideMenuState | null>(null);
    const { width: windowWidth, lastWidth: windowLastWidth } = useWindowSize();
    const localStorageKey = 'sco-sideMenu-open';

    const getElement = useCallback(() => {
        if (typeof document === 'undefined') return null;

        return document.getElementById(id);
    }, []);

    function transitionMenu(isOpen: boolean, setStateOnly?: boolean) {
        setSideMenuOpen(isOpen);
        setSideMenuState(isOpen ? SideMenuState.Opening : SideMenuState.Closing);
        window.localStorage.setItem(localStorageKey, JSON.stringify(isOpen))

        if (setStateOnly) return;

        const element = getElement();
        if (element !== null) {
            const transition = `sco-sidemenu-${isOpen ? 'opening' : 'closing'}`;
            element.setAttribute(transition, '');
            element.addEventListener('transitionend', () => {
                element.removeAttribute(transition);
                setSideMenuState(isOpen ? SideMenuState.Open : SideMenuState.Closed);
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
    }, [windowWidth, windowLastWidth])

    useEffect(() => {
        const element = getElement();

        if (element !== null && windowWidth !== undefined &&
            lastPathname &&
            pathname !== lastPathname &&
            isSideMenuOpen &&
            windowWidth < 1365 &&
            windowLastWidth === windowWidth) {

            transitionMenu(false);
            setLastPathname(pathname);
        }
    }, [pathname, lastPathname, isSideMenuOpen, windowWidth, windowLastWidth])

    return (
        <SideMenuContext.Provider value={{
            elementId: id,
            isOpen: isSideMenuOpen,
            state: sideMenuState,
            toggleMenu: toggleMenu
        }}>
            {children}
        </SideMenuContext.Provider>
    )
};

export function useSideMenuContext() { return useContext(SideMenuContext); }