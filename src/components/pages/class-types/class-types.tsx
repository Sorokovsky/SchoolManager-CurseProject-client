import { Button } from "@/components/ui/button/button";
import { Table } from "@/components/ui/table/table";
import { useClassTypes } from "@/hooks/class-types.hook";
import { useDeleteClassType } from "@/hooks/delete-class-type.hook";
import type { FC, JSX, ReactNode } from "react";

export const ClassTypes: FC = (): JSX.Element => {
    const { data: classTypes } = useClassTypes();
    const { mutate: deleteClassType } = useDeleteClassType();
    const header: ReactNode[] = [<>Назва типу класу</>, <>Опис типу класу</>];
    const data: ReactNode[][] = classTypes === undefined ? [] : classTypes.map(classType => {
        return [
            classType.name,
            classType.description,
            <Button onClick={() => deleteClassType(classType.id)} type="button">Видалити</Button>
        ];
    });
    return (
        <>
            <h1 className="title">Типи класів</h1>
            <Table headers={header} data={data} />
        </>
    );
}