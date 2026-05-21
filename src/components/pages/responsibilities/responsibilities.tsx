import { Button } from "@/components/ui/button/button";
import { Table } from "@/components/ui/table/table";
import { NewResponsibility } from "@/components/сommon/new-responsibility/new-responsibility";
import { useDeleteResponsibility } from "@/hooks/delete-responsibility.hook";
import { useResponsibilities } from "@/hooks/responsibilities.hook";
import { useState, type FC, type JSX, type ReactNode } from "react";

export const Responsibilities: FC = (): JSX.Element => {
    const { data: responsibilities } = useResponsibilities();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { mutate: deleteResponsibility } = useDeleteResponsibility();
    const headers: ReactNode[] = [
        <>Назва</>,
        <>Опис</>
    ];

    const data: ReactNode[][] = responsibilities === undefined ? [] : responsibilities.map((responsibility) => {
        return [
            responsibility.name,
            responsibility.description,
            <Button type="button" onClick={() => deleteResponsibility(responsibility.id)}>Видалити</Button>
        ]
    })
    return (
        <>
            <h1 className="title">Відповідальності</h1>
            <Table
                headers={headers}
                data={data}
            />
            <NewResponsibility isOpen={isOpen} close={() => setIsOpen(false)} />
            <Button type='button' onClick={() => setIsOpen(true)}>Нова відповідальність</Button>
        </>
    )
}