import type { FC, HTMLAttributes, JSX, PropsWithChildren } from "react";
import styles from "./form.module.scss";

export const Form: FC<PropsWithChildren<HTMLAttributes<HTMLFormElement>>> = ({children, ...res}): JSX.Element => {
    return (
        <div className={styles.form}>
            <form {...res}>
                {children}
            </form>
        </div>
    );
};