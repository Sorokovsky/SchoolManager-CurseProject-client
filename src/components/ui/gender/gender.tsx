import type { FC, JSX } from "react";
import styles from "./gender.module.scss";

export type GenderProps = {
    name: string;
}

export const Gender: FC<GenderProps> = ({name}): JSX.Element => {
    return (
        <div className={styles.gender}>
                <span className={styles.title}>Стать</span>
            <label className={styles.label}>
                    <span>Чоловік</span>
                    <input type="radio" name={name} value={0} />
                </label>
                <label className={styles.label}>
                    <span>Жіна</span>
                <input type="radio" name={name} value={1} />
                </label>
            </div>
    );
};