import { PropsWithChildren } from 'react';
import styles from './heading.module.scss';

export function Heading1({ children }: PropsWithChildren) {
    return (
        <h1 className={`${styles.Heading1}`}>
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

export function Heading3({ children }: PropsWithChildren) {
    return (
        <h3 className={`${styles.Heading3}`}>
            {children}
        </h3>
    )
}

export function Heading4({ children }: PropsWithChildren) {
    return (
        <h4 className={`${styles.Heading4}`}>
            {children}
        </h4>
    )
}

export function HeadingSection({ children }: PropsWithChildren) {
    return (
        <section className={`${styles.Heading_Section}`}>
            {children}
        </section>
    )
}