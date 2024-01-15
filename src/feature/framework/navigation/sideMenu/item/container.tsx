import { PropsWithChildren } from 'react';
import styles from './index.module.scss';

export default function SideMenuItemsContainer({ children }: PropsWithChildren) {
    return (
        <div className={styles.ItemsContainer}>
            {children}
        </div>
    )
}