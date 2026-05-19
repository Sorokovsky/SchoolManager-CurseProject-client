import type { FC, HTMLAttributes, JSX } from "react";
import styles from "./gender.module.scss";

export interface GenderProps extends HTMLAttributes<HTMLInputElement> {
    name: string;
}

export const Gender: FC<GenderProps> = ({...rest}): JSX.Element => {
    return (
        <div className={styles.gender}>
            <span className={styles.title}>Стать</span>
            <label className={styles.label}>
                <span>Чоловік</span>
                <input type="radio" {...rest} value={"false"} />
            </label>
            <label className={styles.label}>
                <span>Жіна</span>
                <input type="radio" {...rest} value={"true"} />
            </label>
        </div>
    );
};