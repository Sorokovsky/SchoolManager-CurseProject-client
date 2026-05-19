import { useEmployees } from "@/hooks/employees.hook";
import type { Position } from "@/types/position.type";
import type { FC, JSX } from "react";
import styles from "./employees.module.scss";

function calculateSalary(positions: Position[]): number {
    let result = 0;
    for (const position of positions) {
        result += position.salary;
    }
    return result;
}

export const Employees: FC = (): JSX.Element => {
    const { data } = useEmployees();
    return (
        <>
            <h1 className="title">Працівники</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Логін</td>
                        <td>ПІБ</td>
                        <td>Оклад</td>
                        <td>Посади</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((employee => {
                        return (
                            <tr key={employee.login}>
                                <td>{employee.login}</td>
                                <td>{`${employee.lastName} ${employee.firstName} ${employee.middleName}`}</td>
                                <td>{calculateSalary(employee.positions)} грн</td>
                                <td>
                                    <div className={styles.flex}>
                                        {employee.positions.map((position => <span key={position.id}>{position.name}</span>))}
                                    </div>
                                </td>
                            </tr>
                        );
                    }))}
                </tbody>
            </table>
        </>
    );
}