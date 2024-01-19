import { PropsWithChildren } from "react";
import styles from "./backgroundContainer.module.scss";

interface BackgroundContainerProps extends PropsWithChildren {

}

export default function BackgroundContainer({ children }: BackgroundContainerProps) {

    return (
        <div className={styles.BackgroundContainer}>
            {children}
        </div>
    );
}