import { PropsWithChildren } from "react";
import styles from './mainContainer.module.scss';
import { MainScrollable } from "./mainScrollable";

export function MainContainer({ children }: PropsWithChildren) {
    return (
        <div className={styles.MainContainer__container}>
            <MainScrollable>
                <main className={styles.MainContainer__contentContainer}>
                    <div className={styles.MainContainer__content}>
                        {children}
                    </div>
                </main>
            </MainScrollable>
        </div>
    )
}