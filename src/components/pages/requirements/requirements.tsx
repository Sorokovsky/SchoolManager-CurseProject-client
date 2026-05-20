import { Button } from "@/components/ui/button/button";
import { Table } from "@/components/ui/table/table";
import { useDeleteRequirement } from "@/hooks/delete-requirement.hook";
import { useRequirements } from "@/hooks/requirements.hook";
import type { FC, ReactNode } from "react";

export const Requirements: FC = () => {
    const { data: requirements } = useRequirements();
    const { mutate: deleteRequirement } = useDeleteRequirement();
    const headers: ReactNode[] = [
        <>Назва</>,
        <>Опис</>
    ];
    const data: ReactNode[][] = requirements === undefined ? [] : requirements.map(requirement => {
        return (
            [
                requirement.name,
                requirement.description,
                <Button type="button" onClick={() => deleteRequirement(requirement.id)}>Видалити</Button>
            ]
        );
    });
    return (
        <>
            <h1 className="title">Вимоги</h1>
            <Table
                headers={headers}
                data={data}
            />
        </>
    );
}