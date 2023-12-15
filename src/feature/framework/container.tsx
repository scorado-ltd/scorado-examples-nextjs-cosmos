import styles from './container.module.scss';

export default function FullContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.FullContainer}>
            {children}
        </div>
    )
}