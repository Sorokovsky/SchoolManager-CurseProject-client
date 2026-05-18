import type { FC, InputHTMLAttributes, JSX } from "react";
import styles from "./field.module.scss";

export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    required: boolean;
}

export const Field: FC<FieldProps> = ({label, ...rest}): JSX.Element => {
    return (
        <label className={styles.field}>
                    <span>{label}</span>
                    <input
                        {...rest}
                    />
                </label>
    );
}