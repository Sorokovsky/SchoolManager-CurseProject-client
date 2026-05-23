import type { Position } from "@/types/position.type";
import { useEffect, useState, type FC, type JSX, type ReactNode } from "react";
import { useNavigate } from "react-router";
import { newEmployee } from "@/routing/router";
import { Button } from "@/components/ui/button/button";
import { useUsers } from "@/hooks/users.hook";
import { convertGender } from "@/utils/gender.util";
import { Table } from "@/components/ui/table/table";
import { EmployeePositions } from "@/components/сommon/employee-positions/employee-positions";
import styles from "./employees.module.scss";
import { NewPassport } from "@/components/сommon/new-passport/new-passport";
import { useAddPassport } from "@/hooks/add-passport.hook";
import { useRemovePassport } from "@/hooks/remove-passport.hook";
import { useDeleteEmployee } from "@/hooks/delete-employee.hook";
import { usePositions } from "@/hooks/positions.hook";
import { useEmployeesByPosition } from "@/hooks/employees-by-position.hook";

function calculateSalary(positions: Position[]): number {
    let result = 0;
    for (const position of positions) {
        result += position.salary;
    }
    return result;
}

export const Employees: FC = (): JSX.Element => {
    const { data: positions } = usePositions();
    const [positionId, setPositionId] = useState<number | null>(null);
    const { mutate: createPassport } = useAddPassport();
    const { mutate: removePassport } = useRemovePassport();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [employeeId, setEmployeeId] = useState<number | null>(null);
    const { mutate: deleteEmployee } = useDeleteEmployee();
    const { data: employees, refetch } = useEmployeesByPosition(positionId);
    const navigate = useNavigate();
    const { data: users } = useUsers();
    const onClick = () => {
        navigate(newEmployee.path);
    }

    const openNewPassport = (employeeId: number) => {
        setEmployeeId(employeeId);
        setIsModalOpen(true);
    }

    const addPassport = (passport: NewPassport) => {
        closeModal();
        if (employeeId === null) return;
        createPassport({ ...passport, employeeId });
    }
    
    const closeModal = () => setIsModalOpen(false);
    
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
        employee.login,
        `${employee.lastName} ${employee.firstName} ${employee.middleName}`,
        <>{calculateSalary(employee.positions)} грн</>,
        <EmployeePositions positions={employee.positions} employeeId={employee.id} />,
        convertGender(employee.gender),
        employee.phoneNumber,
        employee.birthday.toString(),
        employee.address,
        <div className={styles.flex}>{employee.passports.map((passport) =>
            <span title={passport.data} key={passport.id}>{passport.name}
                <span onClick={() => removePassport({ employeeId: employee.id, passportId: passport.id })} className={styles.remove}>-</span></span>)}
            <span onClick={() => openNewPassport(employee.id)} className={styles.add}>+</span></div>,
        <Button type="button" onClick={() => deleteEmployee(employee.id)}>Видалити</Button>
    ]);

    useEffect(() => {
        refetch();
    }, [positionId, refetch])
    return (
        <>
            <h1 className="title">Працівники</h1>
            <label>
                <span>За посадою</span>
                <select onChange={event => {
                    const value = event.target.value;
                    setPositionId(value === "null" ? null : +value);
                    
                }}>
                    <option value={"null"}>Всі посади</option>
                    {positions?.map(position => {
                        return (
                            <option key={position.id} value={position.id}>
                                {position.name}
                            </option>
                        )
                    })}
                </select>
            </label>
            <Table headers={headers} data={data} />
            {
                (users && users.length !== 0) && (
                    <>
                        <Button type="button" onClick={onClick}>Новий</Button>
                        <NewPassport close={closeModal} isOpen={isModalOpen} send={addPassport} />
                    </>
                )
            }
        </>
    );
}