'use client'

import "@fontsource/open-sans";
import "@fontsource/outfit";
import "~webapp/feature/framework/global.scss";
import "./styles/global.css";

import { PropsWithChildren } from "react";

const LayoutFixture: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default LayoutFixture;