'use client'

import { PrimaryButton } from "~f/framework/button";
import { ClientPreRenderer } from "../clientPreRenderer";
import { useSideMenuContext } from "./sideMenuContext";

export function SideMenuPreRender() {
    function setColor() {
        const root = document.documentElement;
        // Example of changing a CSS variable before the page has rendered
        //root.style.setProperty('--layout-sideMenu-color', 'var(--layout-sideMenu-colorAlt)');
    }

    return (
        <ClientPreRenderer f={setColor} />
    )
}

export function SideMenuToggle() {
    const { IsOpen, ToggleMenu } = useSideMenuContext();

    return (
        <PrimaryButton onClick={ToggleMenu} style={{ width: "50px", minWidth: "50px" }}>{IsOpen ? '<' : '>'}</PrimaryButton>
    )
}