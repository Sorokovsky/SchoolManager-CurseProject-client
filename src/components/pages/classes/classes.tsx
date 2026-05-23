import { Button } from "@/components/ui/button/button";
import { Table } from "@/components/ui/table/table";
import { NewClass } from "@/components/сommon/new-class/new-class";
import { useClassTypes } from "@/hooks/class-types.hook";
import { useClasses } from "@/hooks/classes.hook";
import { useDeleteClass } from "@/hooks/delete-class.hook";
import { useEffect, useState, type FC, type JSX, type ReactNode } from "react";

export const Classes: FC = (): JSX.Element => {
    const [classTypeId, setClassType] = useState<number | null>(null);
    const { data: classess, refetch } = useClasses(classTypeId);
    const { mutate: deleteClass } = useDeleteClass();
    const [isOpen, setIsOpen] = useState<boolean>();
    const { data: classTypes } = useClassTypes();
    const headers: ReactNode[] = [
        <>Назва класу</>,
        <>Класний керівник</>,
        <>Кількість учнів</>,
        <>Типи класів</>,
        <>Рік створення</>
    ];
    const data: ReactNode[][] = classess === undefined ? [] : classess.map(clazz => {
        return [
            `${clazz.studyYear}-${clazz.letter}`,
            `${clazz.curator.lastName} ${clazz.curator.firstName} ${clazz.curator.middleName}`,
            clazz.pupilsCount,
            <span title={clazz.classType.description}>{clazz.classType.name}</span>,
            clazz.createdAtYear,
            <Button type="button" onClick={() => deleteClass(clazz.id)}>Видалити</Button>
        ]
    });

    useEffect(() => {
        refetch();
    }, [classTypeId, refetch])
    return (
        <>
            <h1 className="title">Класи</h1>
            <label>
                <span>Типи класу</span>
                <select onChange={(event) => {
                    const value = event.target.value;
                    setClassType(value === "null" ? null : +value);
                }}>
                    <option value={"null"}>Всі</option>
                    {classTypes?.map(classType => (
                        <option value={classType.id} key={classType.id}>
                            {classType.name}
                        </option>
                    ))}
                </select>
            </label>
            <Table headers={headers} data={data} />
            <Button type="button" onClick={() => setIsOpen(true)}>Новий клас</Button>
            <NewClass close={() => setIsOpen(false)} isOpen={isOpen} />
        </>
    );
}