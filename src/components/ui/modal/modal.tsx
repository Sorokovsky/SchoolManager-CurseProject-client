import type { FC, MouseEvent, PropsWithChildren } from "react";
import styles from "./modal.module.scss";
import clsx from "clsx";

export type ModelProps = {
    isOpen: boolean;
    close: () => void;
}

export const Modal: FC<PropsWithChildren<ModelProps>> = ({ children, isOpen, close }) => {
    const onClose = (event: MouseEvent) => {
        const target = event.target as HTMLDivElement;
        if (target.classList.contains(styles.overlay) || target.classList.contains(styles.close)) {
            close();
        }
    }
    return (
        <div className={clsx(styles.overlay, { [styles.open]: isOpen})} onClick={onClose}>
            <div className={styles.panel}>
               <div className={styles.header}>
                  <span className={styles.close} onClick={onClose}>X</span>
                </div>
                <div className={styles.content}>
                   {children}
                </div>
            </div>
        </div>
    );
}