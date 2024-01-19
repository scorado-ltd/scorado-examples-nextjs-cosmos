import { PropsWithChildren } from "react";
import BackgroundContainer from "./backgroundContainer";
import styles from './mainContainer.module.scss';
import { MainScrollable } from "./mainScrollable";

interface MainContainerProps extends PropsWithChildren {
    background?: React.ReactNode;
}

export function MainContainer({ children, background }: MainContainerProps) {
    return (
        <div className={styles.MainContainer}>
            {background && <BackgroundContainer>{background}</BackgroundContainer>}
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