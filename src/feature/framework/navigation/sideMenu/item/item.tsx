import styles from './index.module.scss';
import { SideMenuItemPopOutContainer } from "./itemPopOut";

export interface SideMenuItemProps {
    icon: JSX.Element;
    label: string;
}

export default function SideMenuItem({ icon, label }: SideMenuItemProps) {
    function PopOut() {
        return (
            <div className={styles.Item__popOut}>{label}</div>
        )
    }

    return (
        <SideMenuItemPopOutContainer popoutContent={<PopOut />} offsetLeft={66}>
            <div className={styles.Item}>
                <div className={styles.Item__icon}>{icon}</div>
                <div className={styles.Item__label}>{label}</div>
            </div>
        </SideMenuItemPopOutContainer>
    )
}