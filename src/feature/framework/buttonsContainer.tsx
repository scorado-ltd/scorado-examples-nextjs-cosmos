import { PropsWithChildren } from "react";
import styles from './buttonsContainer.module.scss';

interface ButtonsContainerProps extends PropsWithChildren {
    
}
export function ButtonsContainer({ children }: ButtonsContainerProps) {
    return (
        <div className={`${styles.ButtonsContainer}`}>
            {children}
        </div>
    )
}
export function ButtonsLeftContainer({ children } : PropsWithChildren) {
    return (
        <div className={`${styles.ButtonsContainer} ${styles.ButtonsContainer___left}`}>
            {children}
        </div>
    )
}
export function ButtonsRightContainer({ children } : PropsWithChildren) {
    return (
        <div className={`${styles.ButtonsContainer} ${styles.ButtonsContainer___right}`}>
            {children}
        </div>
    )
}