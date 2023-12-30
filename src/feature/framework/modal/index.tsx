import { PropsWithChildren } from 'react'
import { Heading2 } from '../heading'
import styles from './index.module.scss'

interface ModalProps extends PropsWithChildren {
    heading?: string
}

export default function Modal({ children, heading }: ModalProps) {
    return (
        <div className={styles.Modal}>
            <div className={styles.Modal__container}>
                {heading &&
                    <div className={styles.Modal__header}>
                        <Heading2>Modal</Heading2>
                    </div>
                }
                <div className={styles.Modal__content}>
                    {children}
                </div>
            </div>
        </div>
    )
}