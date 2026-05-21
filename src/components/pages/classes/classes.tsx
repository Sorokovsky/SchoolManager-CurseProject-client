import { Button } from "@/components/ui/button/button";
import { Table } from "@/components/ui/table/table";
import { useClasses } from "@/hooks/classes.hook";
import { useDeleteClass } from "@/hooks/delete-class.hook";
import type { FC, JSX, ReactNode } from "react";

export const Classes: FC = (): JSX.Element => {
    const { data: classess } = useClasses();
    const { mutate: deleteClass } = useDeleteClass();
    const headers: ReactNode[] = [
        <>Назва класу</>,
        <>Класний керівник</>,
        <>Кількість ученів</>,
        <>Рік створення</>
    ];
    const data: ReactNode[][] = classess === undefined ? [] : classess.map(clazz => {
        return [
            `${clazz.studyYear}-${clazz.letter}`,
            `${clazz.curator.lastName} ${clazz.curator.firstName} ${clazz.curator.middleName}`,
            clazz.pupilsCount,
            clazz.createdAtYear,
            <Button type="button" onClick={() => deleteClass(clazz.id)}>Видалити</Button>
        ]
    });
    return (
        <>
            <h1 className="title">Класи</h1>
            <Table headers={headers} data={data} />
        </>
    );
}