import { type FC, type JSX, type ReactNode } from "react";
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
                    {headers.map((header, index) => (<td key={index}>{header}</td>))}
                </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => <tr key={index}>{item.map((col, j) => <td key={j}>{col}</td>)}</tr>)}
                </tbody>
        </table>
    );
}