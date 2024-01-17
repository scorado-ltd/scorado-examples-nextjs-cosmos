import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";
import styles from "./index.module.scss";
import SideMenuItem, { SideMenuItemProps } from "./item";

interface SideMenuLinkItemContainerProps extends LinkProps, PropsWithChildren {

}

export function SideMenuLinkItemContainer({ children, ...props }: SideMenuLinkItemContainerProps) {
    return (
        <Link {...props} className={styles.LinkItem}>
            {children}
        </Link>
    )
}

interface SideMenuLinkItemProps extends LinkProps, SideMenuItemProps {

}

export default function SideMenuLinkItem({ icon, label, ...props }: SideMenuLinkItemProps) {
    return (
        <SideMenuLinkItemContainer {...props}>
            <SideMenuItem icon={icon} label={label} />
        </SideMenuLinkItemContainer>
    )
}