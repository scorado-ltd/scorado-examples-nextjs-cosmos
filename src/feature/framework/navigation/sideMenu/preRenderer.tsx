'use client'

import { ClientPreRenderer } from "../../clientPreRenderer";

export default function SideMenuPreRenderer() {
    function setColor() {
        const root = document.documentElement;
        // Example of changing a CSS variable before the page has rendered
        //root.style.setProperty('--layout-sideMenu-color', 'var(--layout-sideMenu-colorAlt)');
    }

    return (
        <ClientPreRenderer f={setColor} />
    )
}