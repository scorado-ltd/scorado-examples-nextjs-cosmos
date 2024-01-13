'use client'

import { HTMLAttributes } from "react";
import { useSideMenuContext } from "./context";

interface SideMenuOverlayProps extends HTMLAttributes<Element> {

}

export default function SideMenuOverlay({ children, ...props }: SideMenuOverlayProps) {
    const { toggleMenu } = useSideMenuContext();

    return (
        <div {...props} onClick={toggleMenu}>
            {children}
        </div>
    )
}