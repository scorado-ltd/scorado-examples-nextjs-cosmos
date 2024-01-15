import Link, { LinkProps } from "next/link";
import styles from "./index.module.scss";
import SideMenuItem, { SideMenuItemProps } from "./menuItem";

interface SideMenuLinkItemProps extends LinkProps, SideMenuItemProps {

}

export default function SideMenuLinkItem({ ...props }: SideMenuLinkItemProps) {
    return (
        <Link {...props} className={styles.SideMenu__linkItem}>
            <SideMenuItem {...props} />
        </Link>
    )
}