import { Button } from "@/components/ui/button/button";
import { Table } from "@/components/ui/table/table";
import { NewClassType } from "@/components/сommon/new-class-type/new-class-type";
import { useClassTypes } from "@/hooks/class-types.hook";
import { useDeleteClassType } from "@/hooks/delete-class-type.hook";
import { useState, type FC, type JSX, type ReactNode } from "react";

export const ClassTypes: FC = (): JSX.Element => {
    const { data: classTypes } = useClassTypes();
    const { mutate: deleteClassType } = useDeleteClassType();
    const [isOpen, setIsOpen] = useState<boolean>(false)
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
            <Button onClick={() => setIsOpen(true)} type="button">Новий тип класу</Button>
            <NewClassType isOpen={isOpen} close={() => setIsOpen(false)} />
        </>
    );
}