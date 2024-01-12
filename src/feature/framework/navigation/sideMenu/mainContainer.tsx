'use client'

import { HTMLAttributes } from "react";
import { constructClasses } from "~f/web/css";
import { useSideMenuContext } from "./context";

interface SideMenuMainContainerProps extends HTMLAttributes<Element> {
    closedClassName: string;
    openClassName: string;
}

export default function SideMenuMainContainer({ children, closedClassName, openClassName, ...props }: SideMenuMainContainerProps) {
    const { isOpen } = useSideMenuContext();
    const className = constructClasses([
        props.className ?? '',
        isOpen === null ? '' : isOpen ? openClassName : closedClassName,
    ]);

    return (
        <div {...props} className={className}>
            {children}
        </div>
    )
}