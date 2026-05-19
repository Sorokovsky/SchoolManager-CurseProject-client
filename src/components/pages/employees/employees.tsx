import { useEmployees } from "@/hooks/employees.hook";
import type { Position } from "@/types/position.type";
import type { FC, JSX } from "react";
import styles from "./employees.module.scss";
import { Link, useNavigate } from "react-router";
import { employeesPage, newEmployee } from "@/routing/router";
import { Button } from "@/components/ui/button/button";
import { useAddPosition } from "@/hooks/add-position.hook";
import { usePositions } from "@/hooks/positions.hook";
import { useUsers } from "@/hooks/users.hook";

function calculateSalary(positions: Position[]): number {
    let result = 0;
    for (const position of positions) {
        result += position.salary;
    }
    return result;
}

export const Employees: FC = (): JSX.Element => {
    const { data } = useEmployees();
    const { data: positions } = usePositions();
    const navigate = useNavigate();
    const { mutate: addPosition } = useAddPosition();
    const { data: users } = useUsers();
    const onClick = () => {
        navigate(newEmployee.path);
    }
    const onChange = (event, employeeId) => {
        const value = event.target.value;
        if (value === "null") return;
        const id = Number(value);
        addPosition({ id: employeeId, positionId: id });
    }
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
                    {data?.map((employee => {
                        return (
                            <tr key={employee.login}>
                                <td><Link to={`${employeesPage}/${employee.id}`}>{employee.login}</Link></td>
                                <td>{`${employee.lastName} ${employee.firstName} ${employee.middleName}`}</td>
                                <td>{calculateSalary(employee.positions)} грн</td>
                                <td>
                                    <div className={styles.flex}>
                                        {employee.positions.length !== 0 ?
                                            employee.positions.map((position => <span key={position.id}>{position.name}</span>))
                                            : <select name="positionId" onChange={(event) => onChange(event, employee.id)}>
                                                <option defaultChecked value={"null"}>Не вибрано</option>
                                                {positions.map((position => {
                                                    return <option key={position.id} value={position.id}>{position.name}</option>
                                                }))}
                                            </select>
                                        }
                                    </div>
                                </td>
                            </tr>
                        );
                    }))}
                </tbody>
            </table>
            {
                (users && users.length !== 0) && <Button type="button" onClick={onClick}>Новий</Button>
            }
        </>
    );
}