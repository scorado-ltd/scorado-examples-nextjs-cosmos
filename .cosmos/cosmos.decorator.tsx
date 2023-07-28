"use client"

import "../src/app/globals.css";

import { PropsWithChildren } from "react";

const LayoutFixture: React.FC<PropsWithChildren> = ({ children }) => {

    return <div>
        {children}
    </div >

}

export default LayoutFixture;