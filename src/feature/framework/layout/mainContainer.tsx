import { PropsWithChildren } from "react";
import styles from './mainContainer.module.scss';
import { MainScrollable } from "./mainScrollable";

export function MainContainer({ children }: PropsWithChildren) {
    return (
        <div className={styles.MainContainer}>
            <MainScrollable>
                <div className={styles.MainContainer__outer}>
                    <div className={styles.MainContainer__inner}>
                        {children}
                    </div>
                </div>
            </MainScrollable>
        </div>
    )
}