import type { ButtonHTMLAttributes, FC, JSX } from "react";

import styles from "./button.module.scss";

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...rest}): JSX.Element => {
    return (
        <button {...rest} className={styles.button}>{children}</button>
    );
}