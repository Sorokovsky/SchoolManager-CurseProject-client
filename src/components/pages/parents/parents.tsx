import { Button } from "@/components/ui/button/button";
import { Table } from "@/components/ui/table/table";
import { NewParent } from "@/components/сommon/new-parent/new-parent";
import { useDeleteParent } from "@/hooks/delete-parent.hook";
import { useParents } from "@/hooks/parents.hook";
import { useUsers } from "@/hooks/users.hook";
import { convertGender } from "@/utils/gender.util";
import { useState, type FC, type JSX, type ReactNode } from "react";

export const Parents: FC = (): JSX.Element => {
    const { data: parents } = useParents();
    const { data: users } = useUsers();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { mutate: deleteParent } = useDeleteParent();
    const headers: ReactNode[] = [
        <>Логін</>,
        <>ПІБ</>,
        <>Стать</>,
        <>Номер телефону</>,
        <>День народження</>,
        <>Адреса</>,
        <>Місце роботи</>
    ];
    const data: ReactNode[][] = parents === undefined ? [] : parents.map(parent => [
        parent.login,
        `${parent.lastName} ${parent.firstName} ${parent.middleName}`,
        convertGender(parent.gender),
        parent.phoneNumber,
        parent.birthday.toString(),
        parent.address,
        parent.job,
        <Button onClick={() => deleteParent(parent.id)} type="button">Видалити</Button>
    ]);
    return (
        <>
            <h1 className="title">Батьки</h1>
            <Table headers={headers} data={data} />
            {users && users.length !== 0 && (
                <>
                    <Button type="button" onClick={() => setIsOpen(true)} >Додати</Button>
                    <NewParent close={() => setIsOpen(false)} isOpen={isOpen} />
                </>
            )
            }
        </>
    )
}