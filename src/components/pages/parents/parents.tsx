import { Table } from "@/components/ui/table/table";
import { useParents } from "@/hooks/parents.hook";
import { convertGender } from "@/utils/gender.util";
import type { FC, JSX, ReactNode } from "react";

export const Parents: FC = (): JSX.Element => {
    const { data: parents } = useParents();
    const headers: ReactNode[] = [
        <>Логін</>,
        <>ПІБ</>,
        <>Стать</>,
        <>Номер телефону</>,
        <>День народження</>,
        <>Адреса</>,
        <>Місце роботи</>
    ];
    const data: ReactNode[][] = parents.map(parent => [
        parent.login,
        `${parent.lastName} ${parent.firstName} ${parent.middleName}`,
        convertGender(parent.gender),
        parent.phoneNumber,
        parent.birthday.toString(),
        parent.address,
        parent.job
    ]);
    return (
        <>
            <h1 className="title">Батьки</h1>
            <Table headers={headers} data={data} />
        </>
    )
}