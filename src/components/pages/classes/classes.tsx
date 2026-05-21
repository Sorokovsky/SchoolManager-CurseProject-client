import { Button } from "@/components/ui/button/button";
import { Table } from "@/components/ui/table/table";
import { NewClass } from "@/components/сommon/new-class/new-class";
import { useClasses } from "@/hooks/classes.hook";
import { useDeleteClass } from "@/hooks/delete-class.hook";
import { useState, type FC, type JSX, type ReactNode } from "react";

export const Classes: FC = (): JSX.Element => {
    const { data: classess } = useClasses();
    const { mutate: deleteClass } = useDeleteClass();
    const [isOpen, setIsOpen] = useState<boolean>();
    const headers: ReactNode[] = [
        <>Назва класу</>,
        <>Класний керівник</>,
        <>Кількість учнів</>,
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
            <Button type="button" onClick={() => setIsOpen(true)}>Новий клас</Button>
            <NewClass close={() => setIsOpen(false)} isOpen={isOpen} />
        </>
    );
}