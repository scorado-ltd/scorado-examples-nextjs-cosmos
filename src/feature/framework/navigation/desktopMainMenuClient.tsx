'use client'

import { PrimaryButton } from "~f/framework/button";
import { useMainMenuContext } from "./desktopMainMenuContext";

export function MainMenuToggle() {
    const { IsOpen, ToggleMenu } = useMainMenuContext();

    return (
        <PrimaryButton onClick={ToggleMenu} style={{ width: "50px", minWidth: "50px" }}>{IsOpen ? '<' : '>'}</PrimaryButton>
    )
}