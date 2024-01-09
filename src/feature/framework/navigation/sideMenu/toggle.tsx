'use client'

import { PrimaryButton } from "~f/framework/button";
import { useSideMenuContext } from "./context";

export function SideMenuToggle() {
    const { isOpen, toggleMenu } = useSideMenuContext();

    return (
        <PrimaryButton onClick={toggleMenu} style={{ width: "50px", minWidth: "50px" }}>{isOpen ? '<' : '>'}</PrimaryButton>
    )
}