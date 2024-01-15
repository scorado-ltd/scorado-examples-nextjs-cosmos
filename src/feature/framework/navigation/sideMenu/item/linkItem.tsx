import Link, { LinkProps } from "next/link";
import styles from "./index.module.scss";
import SideMenuItem, { SideMenuItemProps } from "./item";

interface SideMenuLinkItemProps extends LinkProps, SideMenuItemProps {

}

export default function SideMenuLinkItem({ icon, label, ...props }: SideMenuLinkItemProps) {
    return (
        <Link {...props} className={styles.LinkItem}>
            <SideMenuItem icon={icon} label={label} />
        </Link>
    )
}