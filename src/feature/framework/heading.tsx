import { PropsWithChildren } from 'react';
import { constructClasses } from '~f/web/css';
import styles from './heading.module.scss';

export function Heading1({ children, isThemed }: PropsWithChildren<{ isThemed?: boolean }>) {
    return (
        <h1 className={`${constructClasses([styles.Heading1, isThemed ? styles.Heading1___hasThemedBorder : null])}`}>
            {children}
        </h1>
    )
}

export function Heading2({ children }: PropsWithChildren) {
    return (
        <h2 className={`${styles.Heading2}`}>
            {children}
        </h2>
    )
}