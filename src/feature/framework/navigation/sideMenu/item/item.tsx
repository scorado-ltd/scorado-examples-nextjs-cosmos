import { PropsWithChildren } from 'react';
import styles from './index.module.scss';
import { SideMenuItemPopOutContainer } from "./itemPopOut";

export interface SideMenuItemProps {
    icon: JSX.Element;
    label: string;
}

export function PopOutContent({ children }: PropsWithChildren) {
    return (
        <div className={styles.Item__popOut}>{children}</div>
    )
}

export default function SideMenuItem({ icon, label }: SideMenuItemProps) {


    return (
        <SideMenuItemPopOutContainer popoutContent={<PopOutContent>{label}</PopOutContent>} offsetLeft={66}>
            <div className={styles.Item}>
                <div className={styles.Item__icon}>{icon}</div>
                <div className={styles.Item__label}>{label}</div>
            </div>
        </SideMenuItemPopOutContainer>
    )
}