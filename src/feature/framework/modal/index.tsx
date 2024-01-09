'use client'

import { useRouter } from "next/navigation";
import React, { MouseEventHandler, PropsWithChildren, useCallback, useEffect, useRef } from 'react';
import { PrimaryButton } from "../button";
import { Heading2 } from '../heading';
import styles from './index.module.scss';

interface ModalProps extends PropsWithChildren {
    header?: string | React.ReactNode
    footer?: React.ReactNode
    onClose?: () => void
}

export default function Modal({ children, header, footer, onClose }: ModalProps) {
    const overlay = useRef(null);

    const handleClose = useCallback(() => {
        if (onClose) onClose();
    }, [onClose]);

    const handleClick: MouseEventHandler = useCallback((e) => {
        if (onClose && e.target === overlay.current) {
            onClose();
        }
    }, [onClose]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (onClose && e.key === "Escape") onClose();
    }, [onClose]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    return (
        <div ref={overlay} className={styles.Modal} onClick={handleClick}>
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
                    <div className={styles.Modal__headerClose}>
                        <PrimaryButton onClick={handleClose} style={{ width: 30, height: 30, minWidth: 'auto' }}>X</PrimaryButton>
                    </div>
                </div>
                <div className={styles.Modal__content}>
                    {children}
                </div>
                {footer &&
                    <div className={styles.Modal__footer}>
                        <div className={styles.Modal__footerContent}>
                            {footer}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export function RouterModal(props: ModalProps) {
    const { onClose } = props;
    const router = useRouter();
    const handleClose = useCallback(() => {
        if (onClose) {
            onClose();
        }

        router.back();
    }, [router, onClose]);

    return <Modal {...props} onClose={handleClose} />
}