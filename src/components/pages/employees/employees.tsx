import { useEmployees } from "@/hooks/employees.hook";
import type { Position } from "@/types/position.type";
import type { FC, JSX, ReactNode } from "react";
import { Link, useNavigate } from "react-router";
import { employeesPage, newEmployee } from "@/routing/router";
import { Button } from "@/components/ui/button/button";
import { useUsers } from "@/hooks/users.hook";
import { convertGender } from "@/utils/gender.util";
import { Table } from "@/components/ui/table/table";
import { EmployeePositions } from "@/components/сommon/employee-positions/employee-positions";
import styles from "./employees.module.scss";

function calculateSalary(positions: Position[]): number {
    let result = 0;
    for (const position of positions) {
        result += position.salary;
    }
    return result;
}

export const Employees: FC = (): JSX.Element => {
    const { data: employees } = useEmployees();
    const navigate = useNavigate();
    const { data: users } = useUsers();
    const onClick = () => {
        navigate(newEmployee.path);
    }
    
    const headers: ReactNode[] = [
        <>Логін</>,
        <>ПІБ</>,
        <>Оклад</>,
        <>Посади</>,
        <>Стать</>,
        <>Номер телефону</>,
        <>День народження</>,
        <>Адреса</>,
        <>Паспорти</>
    ]

    const data: ReactNode[][] = employees === undefined ? [] : employees.map(employee => [
        <Link to={`${employeesPage.path}/${employee.id}`}>{employee.login}</Link>,
        `${employee.lastName} ${employee.firstName} ${employee.middleName}`,
        <>{calculateSalary(employee.positions)} грн</>,
        <EmployeePositions positions={employee.positions} employeeId={employee.id} />,
        convertGender(employee.gender),
        employee.phoneNumber,
        employee.birthday.toString(),
        employee.address,
        <div className={styles.flex}>{employee.passports.map((passport) => <span key={passport.id}>{passport.name}</span>)}</div>
    ])
    return (
        <>
            <h1 className="title">Працівники</h1>
            <Table headers={headers} data={data} />
            {
                (users && users.length !== 0) && <Button type="button" onClick={onClick}>Новий</Button>
            }
        </>
    );
}