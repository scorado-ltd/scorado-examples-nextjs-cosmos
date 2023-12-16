'use client'

import { PrimaryButton } from "~f/framework/button";
import { useSideMenuContext } from "./sideMenuContext";

export function SideMenuToggle() {
    const { IsOpen, ToggleMenu } = useSideMenuContext();

    return (
        <PrimaryButton onClick={ToggleMenu} style={{ width: "50px", minWidth: "50px" }}>{IsOpen ? '<' : '>'}</PrimaryButton>
    )
}