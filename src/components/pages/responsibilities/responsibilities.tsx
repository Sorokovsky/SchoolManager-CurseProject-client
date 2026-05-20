import { Button } from "@/components/ui/button/button";
import { Table } from "@/components/ui/table/table";
import { useDeleteResponsibility } from "@/hooks/delete-responsibility.hook";
import { useResponsibilities } from "@/hooks/responsibilities.hook";
import type { FC, JSX, ReactNode } from "react";

export const Responsibilities: FC = (): JSX.Element => {
    const { data: responsibilities } = useResponsibilities();
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
        </>
    )
}