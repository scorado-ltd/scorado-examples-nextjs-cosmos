'use client'

import "@fontsource/open-sans"
import "@fontsource/outfit"
import "./styles/global.css";
import "../styles/global.css";

import { PropsWithChildren } from "react";

const LayoutFixture: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            {children}
        </div >
    )
}

export default LayoutFixture;