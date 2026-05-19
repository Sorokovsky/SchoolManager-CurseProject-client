import type { FC, JSX, ReactNode } from "react";
import styles from "./table.module.scss";

export type TableProps = {
    headers: ReactNode[];
    data: ReactNode[][];
};

export const Table: FC<TableProps> = ({headers, data}): JSX.Element => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {headers.map((header) => (<td>{header}</td>))}
                </tr>
                </thead>
                <tbody>
                    {data.map(item => <tr>{item.map(col => <td>{col}</td>)}</tr>)}
                </tbody>
        </table>
    );
}