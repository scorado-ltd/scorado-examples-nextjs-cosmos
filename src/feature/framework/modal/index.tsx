import { PropsWithChildren } from 'react'
import { Heading2 } from '../heading'
import styles from './index.module.scss'

interface ModalProps extends PropsWithChildren {
    header?: string | React.ReactNode
}

export default function Modal({ children, header }: ModalProps) {
    return (
        <div className={styles.Modal}>
            <div className={styles.Modal__container}>
                <div className={styles.Modal__header}>
                    {header &&
                        <div className={styles.Modal__headerContent}>
                            {typeof header === 'string' ?
                                <Heading2>{header}</Heading2> :
                                header
                            }
                        </div>
                    }
                </div>
                <div className={styles.Modal__content}>
                    {children}
                </div>
            </div>
        </div>
    )
}